import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "@/sections/Header";
import { Vehicle, BookingFormData } from "@/types/vehicle";

interface LocationState {
  vehicle: Vehicle;
  formData: BookingFormData;
  total: number;
}

export const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [processing, setProcessing] = useState(false);

  const state = location.state as LocationState;

  useEffect(() => {
    if (!state?.vehicle) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state?.vehicle) {
    return null;
  }

  const { vehicle, formData, total } = state;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    navigate("/success", {
      state: { vehicle, formData, total },
    });
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || cleaned;
    return formatted.slice(0, 19);
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  return (
    <div className="min-h-screen bg-[hsl(220,40%,8%)]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium mb-8">Complete Your Booking</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-[hsl(220,35%,12%)] rounded-lg p-6 border border-[hsl(220,30%,20%)] mb-6">
              <h2 className="text-xl font-medium mb-4">Booking Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[hsl(215,20%,65%)]">Vehicle</span>
                  <span>{vehicle.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[hsl(215,20%,65%)]">Customer</span>
                  <span>
                    {formData.firstName} {formData.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[hsl(215,20%,65%)]">Email</span>
                  <span>{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[hsl(215,20%,65%)]">Phone</span>
                  <span>{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[hsl(215,20%,65%)]">Pick-up</span>
                  <span>{formData.pickupDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[hsl(215,20%,65%)]">Return</span>
                  <span>{formData.returnDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[hsl(215,20%,65%)]">Location</span>
                  <span className="capitalize">
                    {formData.pickupLocation.replace("-", " ")}
                  </span>
                </div>
              </div>
            </div>

            <form
              onSubmit={handlePayment}
              className="bg-[hsl(220,35%,12%)] rounded-lg p-6 border border-[hsl(220,30%,20%)]"
            >
              <h2 className="text-xl font-medium mb-6">Payment Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        paymentMethod === "card"
                          ? "border-[hsl(210,100%,50%)] bg-[hsl(210,100%,50%)]/10"
                          : "border-[hsl(220,30%,20%)] bg-[hsl(220,30%,18%)]"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">💳</div>
                        <div className="text-sm font-medium">Credit Card</div>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("paypal")}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        paymentMethod === "paypal"
                          ? "border-[hsl(210,100%,50%)] bg-[hsl(210,100%,50%)]/10"
                          : "border-[hsl(220,30%,20%)] bg-[hsl(220,30%,18%)]"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">🅿️</div>
                        <div className="text-sm font-medium">PayPal</div>
                      </div>
                    </button>
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={cardNumber}
                        onChange={(e) =>
                          setCardNumber(formatCardNumber(e.target.value))
                        }
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-3 py-2 bg-[hsl(220,30%,18%)] border border-[hsl(220,30%,20%)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,50%)]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          required
                          value={expiryDate}
                          onChange={(e) =>
                            setExpiryDate(formatExpiryDate(e.target.value))
                          }
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-3 py-2 bg-[hsl(220,30%,18%)] border border-[hsl(220,30%,20%)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,50%)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          required
                          value={cvv}
                          onChange={(e) =>
                            setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
                          }
                          placeholder="123"
                          maxLength={3}
                          className="w-full px-3 py-2 bg-[hsl(220,30%,18%)] border border-[hsl(220,30%,20%)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,50%)]"
                        />
                      </div>
                    </div>
                  </>
                )}

                {paymentMethod === "paypal" && (
                  <div className="p-6 bg-[hsl(220,30%,18%)] rounded-lg text-center">
                    <p className="text-[hsl(215,20%,65%)] mb-4">
                      You will be redirected to PayPal to complete your payment
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={processing}
                  className="w-full bg-[hsl(210,100%,50%)] hover:bg-[hsl(210,100%,45%)] disabled:bg-[hsl(220,30%,20%)] disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors"
                >
                  {processing ? "Processing..." : `Pay $${total}`}
                </button>
              </div>
            </form>
          </div>

          <div>
            <div className="bg-[hsl(220,35%,12%)] rounded-lg p-6 border border-[hsl(220,30%,20%)] sticky top-24">
              <h3 className="font-medium mb-4">Price Breakdown</h3>
              <div className="space-y-3 text-sm mb-4 pb-4 border-b border-[hsl(220,30%,20%)]">
                <div className="flex justify-between">
                  <span className="text-[hsl(215,20%,65%)]">
                    Vehicle rental
                  </span>
                  <span>${vehicle.price}/day</span>
                </div>
                {formData.insurance && (
                  <div className="flex justify-between">
                    <span className="text-[hsl(215,20%,65%)]">Insurance</span>
                    <span>$15/day</span>
                  </div>
                )}
                {formData.gps && (
                  <div className="flex justify-between">
                    <span className="text-[hsl(215,20%,65%)]">GPS</span>
                    <span>$10/day</span>
                  </div>
                )}
                {formData.childSeat && (
                  <div className="flex justify-between">
                    <span className="text-[hsl(215,20%,65%)]">Child Seat</span>
                    <span>$8/day</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Total</span>
                <span className="text-2xl font-bold text-[hsl(210,100%,50%)]">
                  ${total}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
