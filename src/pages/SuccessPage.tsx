import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/sections/Header";
import { Vehicle, BookingFormData } from "@/types/vehicle";

interface LocationState {
  vehicle: Vehicle;
  formData: BookingFormData;
  total: number;
}

export const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
  const bookingId = `CR${Date.now().toString().slice(-8)}`;

  return (
    <div className="min-h-screen bg-[hsl(220,40%,8%)]">
      <Header />
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-medium mb-2">Booking Confirmed!</h1>
          <p className="text-[hsl(215,20%,65%)]">
            Your reservation has been successfully processed
          </p>
        </div>

        <div className="bg-[hsl(220,35%,12%)] rounded-lg p-6 border border-[hsl(220,30%,20%)] mb-6">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-[hsl(220,30%,20%)]">
            <div>
              <p className="text-sm text-[hsl(215,20%,65%)] mb-1">
                Booking ID
              </p>
              <p className="text-xl font-mono font-medium">{bookingId}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-[hsl(215,20%,65%)] mb-1">Total Paid</p>
              <p className="text-2xl font-bold text-[hsl(210,100%,50%)]">
                ${total}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-3">Vehicle Details</h3>
              <div className="flex gap-4">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-32 h-24 object-cover rounded-lg"
                />
                <div>
                  <p className="font-medium mb-1">{vehicle.name}</p>
                  <p className="text-sm text-[hsl(215,20%,65%)]">
                    {vehicle.category}
                  </p>
                  <p className="text-sm text-[hsl(215,20%,65%)]">
                    ${vehicle.price}/day
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[hsl(220,30%,20%)] pt-4">
              <h3 className="font-medium mb-3">Rental Information</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-[hsl(215,20%,65%)] mb-1">Pick-up Date</p>
                  <p>{formData.pickupDate}</p>
                </div>
                <div>
                  <p className="text-[hsl(215,20%,65%)] mb-1">Return Date</p>
                  <p>{formData.returnDate}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[hsl(215,20%,65%)] mb-1">Location</p>
                  <p className="capitalize">
                    {formData.pickupLocation.replace("-", " ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[hsl(220,30%,20%)] pt-4">
              <h3 className="font-medium mb-3">Customer Information</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-[hsl(215,20%,65%)]">Name: </span>
                  {formData.firstName} {formData.lastName}
                </p>
                <p>
                  <span className="text-[hsl(215,20%,65%)]">Email: </span>
                  {formData.email}
                </p>
                <p>
                  <span className="text-[hsl(215,20%,65%)]">Phone: </span>
                  {formData.phone}
                </p>
              </div>
            </div>

            {(formData.insurance || formData.gps || formData.childSeat) && (
              <div className="border-t border-[hsl(220,30%,20%)] pt-4">
                <h3 className="font-medium mb-3">Add-ons</h3>
                <div className="space-y-2 text-sm">
                  {formData.insurance && (
                    <p className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Insurance Coverage
                    </p>
                  )}
                  {formData.gps && (
                    <p className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      GPS Navigation
                    </p>
                  )}
                  {formData.childSeat && (
                    <p className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Child Seat
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-[hsl(220,35%,12%)] rounded-lg p-6 border border-[hsl(220,30%,20%)] mb-6">
          <h3 className="font-medium mb-3">What's Next?</h3>
          <div className="space-y-3 text-sm text-[hsl(215,20%,65%)]">
            <p className="flex items-start gap-2">
              <span className="text-[hsl(210,100%,50%)] mt-1">1.</span>
              <span>
                A confirmation email has been sent to {formData.email}
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[hsl(210,100%,50%)] mt-1">2.</span>
              <span>
                Please bring a valid driver's license and credit card on pick-up
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-[hsl(210,100%,50%)] mt-1">3.</span>
              <span>
                Arrive 15 minutes early to complete the paperwork
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => window.print()}
            className="flex-1 bg-[hsl(220,30%,18%)] hover:bg-[hsl(220,30%,20%)] text-white font-medium py-3 rounded-lg transition-colors border border-[hsl(220,30%,20%)]"
          >
            Print Confirmation
          </button>
          <button
            onClick={() => navigate("/fleet")}
            className="flex-1 bg-[hsl(210,100%,50%)] hover:bg-[hsl(210,100%,45%)] text-white font-medium py-3 rounded-lg transition-colors"
          >
            Back to Fleet
          </button>
        </div>
      </div>
    </div>
  );
};
