export interface Vehicle {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  seats: number;
  transmission: string;
  fuelType: string;
  features: string[];
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  insurance: boolean;
  gps: boolean;
  childSeat: boolean;
}
