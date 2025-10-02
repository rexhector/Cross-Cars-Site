import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import CarCard from "../components/CarCard";
import BookingModal from "../components/BookingModal";

export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [customerId, setCustomerId] = useState(null); // get from auth

  // Fetch available cars from Supabase
  useEffect(() => {
    async function fetchCars() {
      const { data, error } = await supabase
        .from("cars")
        .select("*")
        .eq("available", true);

      if (error) setError(error.message);
      else setCars(data);
      setLoading(false);
    }

    fetchCars();
  }, []);

  if (loading) return <div>Loading cars...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Available Cars</h1>
      <div className="cars-grid">
        {cars.map(car => (
          <CarCard key={car.id} car={car} onBook={setSelectedCar} />
        ))}
      </div>

      {selectedCar && (
        <BookingModal
          car={selectedCar}
          customerId={customerId}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
}