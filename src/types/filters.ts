export interface FilterState {
  vehicleTypes: string[];
  priceRange: {
    min: number;
    max: number;
  };
  transmissions: string[];
  fuelTypes: string[];
}
