import { supabase } from "./supabaseClient";

/**
 * Creates a booking for a car using the Supabase RPC function `create_booking`.
 * @param {string} customerId - Supabase Auth user ID of the customer
 * @param {string} carId - ID of the car to book
 * @param {string} startDate - Booking start date (YYYY-MM-DD)
 * @param {string} endDate - Booking end date (YYYY-MM-DD)
 * @returns {string} bookingId - ID of the newly created booking
 * @throws {Error} if booking fails
 */
export async function bookCar(customerId, carId, startDate, endDate) {
  const { data, error } = await supabase.rpc("create_booking", {
    p_customer_id: customerId,
    p_car_id: carId,
    p_start_date: startDate,
    p_end_date: endDate,
  });

  if (error) throw error; // Will be caught by frontend component
  return data; // booking ID returned from RPC
}
