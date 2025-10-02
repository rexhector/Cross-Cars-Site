import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { vehicles } from "@/data/vehicles";
import { Vehicle, BookingFormData } from "@/types/vehicle";
import { Header } from "@/sections/Header";

export const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    insurance: false,
    gps: false,
    childSeat: false,
  });

  useEffect(() => {
    const foundVehicle = vehicles.find((v) => v.id === id);
    if (foundVehicle) {
      setVehicle(foundVehicle);
    }
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const calculateTotal = () => {
    if (!vehicle || !formData.pickupDate || !formData.returnDate) return 0;

    const pickup = new Date(formData.pickupDate);
    const returnDate = new Date(formData.returnDate);
    const days = Math.ceil(
      (returnDate.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24)
    );

    let total = vehicle.price * days;
    if (formData.insurance) total += 15 * days;
    if (formData.gps) total += 10 * days;
    if (formData.childSeat) total += 8 * days;

    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const total = calculateTotal();
    navigate("/confirmation", {
      state: { vehicle, formData, total },
    });
  };

  const handleBackToFleet = () => {
    navigate("/fleet");
  };

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-[hsl(220,40%,8%)]">
        <Header />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <p className="text-xl">Vehicle not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(220,40%,8%)]">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={handleBackToFleet}
          className="text-[hsl(210,100%,50%)] hover:text-[hsl(210,100%,45%)] mb-6 flex items-center gap-2"
        >
          ← Back to Fleet
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-[hsl(220,35%,12%)] rounded-lg overflow-hidden border border-[hsl(220,30%,20%)]">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-2xl font-medium mb-2">{vehicle.name}</h1>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-[hsl(210,100%,50%)]">
                    ${vehicle.price}
                  </span>
                  <span className="text-[hsl(215,20%,65%)]">/day</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-[hsl(220,30%,20%)]">
                  <div className="flex items-center gap-2 text-[hsl(215,20%,65%)]">
                    <img
                      src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-6.svg"
                      alt="Seats"
                      className="w-4 h-4"
                    />
                    <span>{vehicle.seats}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[hsl(215,20%,65%)]">
                    <img
                      src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-7.svg"
                      alt="Transmission"
                      className="w-4 h-4"
                    />
                    <span className="text-sm capitalize">
                      {vehicle.transmission}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[hsl(215,20%,65%)]">
                    <img
                      src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-8.svg"
                      alt="Fuel"
                      className="w-4 h-4"
                    />
                    <span className="text-sm capitalize">
                      {vehicle.fuelType}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Features</h3>
                  <div className="space-y-2">
                    {vehicle.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-[hsl(215,20%,65%)]"
                      >
                        <img
                          src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-9.svg"
                          alt="Check"
                          className="w-3 h-3"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-[hsl(220,35%,12%)] rounded-lg p-6 border border-[hsl(220,30%,20%)]"
            >
              <h2 className="text-xl font-medium mb-6">Booking Details</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[hsl(220,30%,18%)] border border-[hsl(220,30%,20%)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,50%)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-[hsl(220,30%,18%)] border border-[hsl(220,30%,20%)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,50%)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[hsl(220,30%,18%)] border border-[hsl(220,30%,20%)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,50%)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[hsl(220,30%,18%)] border border-[hsl(220,30%,20%)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,50%)]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Pick-up Date *
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      required
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-3 py-2 bg-[hsl(220,30%,18%)] border border-[hsl(220,30%,20%)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,50%)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Return Date *
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      required
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      min={formData.pickupDate || new Date().toISOString().split("T")[0]}
                      className="w-full px-3 py-2 bg-[hsl(220,30%,18%)] border border-[hsl(220,30%,20%)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,50%)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Pick-up Location *
                  </label>
                  <select
                    name="pickupLocation"
                    required
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[hsl(220,30%,18%)] border border-[hsl(220,30%,20%)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,50%)]"
                  >
                    <option value="">Select location</option>
                    <option value="downtown">Downtown Office</option>
                    <option value="airport">Airport Terminal</option>
                    <option value="north">North Branch</option>
                    <option value="south">South Branch</option>
                  </select>
                </div>

                <div className="border-t border-[hsl(220,30%,20%)] pt-4 mt-4">
                  <h3 className="font-medium mb-3">Add-ons</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="insurance"
                        checked={formData.insurance}
                        onChange={handleInputChange}
                        className="w-4 h-4 rounded border-[hsl(220,30%,20%)] bg-[hsl(220,30%,18%)] text-[hsl(210,100%,50%)] focus:ring-[hsl(210,100%,50%)]"
                      />
                      <span className="flex-1">Insurance Coverage</span>
                      <span className="text-[hsl(215,20%,65%)]">$15/day</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="gps"
                        checked={formData.gps}
                        onChange={handleInputChange}
                        className="w-4 h-4 rounded border-[hsl(220,30%,20%)] bg-[hsl(220,30%,18%)] text-[hsl(210,100%,50%)] focus:ring-[hsl(210,100%,50%)]"
                      />
                      <span className="flex-1">GPS Navigation</span>
                      <span className="text-[hsl(215,20%,65%)]">$10/day</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="childSeat"
                        checked={formData.childSeat}
                        onChange={handleInputChange}
                        className="w-4 h-4 rounded border-[hsl(220,30%,20%)] bg-[hsl(220,30%,18%)] text-[hsl(210,100%,50%)] focus:ring-[hsl(210,100%,50%)]"
                      />
                      <span className="flex-1">Child Seat</span>
                      <span className="text-[hsl(215,20%,65%)]">$8/day</span>
                    </label>
                  </div>
                </div>

                <div className="border-t border-[hsl(220,30%,20%)] pt-4 mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-2xl font-bold text-[hsl(210,100%,50%)]">
                      ${calculateTotal()}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[hsl(210,100%,50%)] hover:bg-[hsl(210,100%,45%)] text-white font-medium py-3 rounded-lg transition-colors"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
