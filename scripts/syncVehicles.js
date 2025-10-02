// syncVehicles.js
const { createClient } = require("@supabase/supabase-js");
const csv = require("csvtojson");
const fs = require("fs");

// Environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY; // service role key
const supabase = createClient(supabaseUrl, supabaseKey);

async function syncVehicles() {
  try {
    // Load CSV exported from HQ Rentals
    const vehicles = await csv().fromFile("./vehicles.csv"); // replace with your CSV path

    // Map and format the data
    const formattedVehicles = vehicles.map(v => ({
      id: v["Vehicle Key"],
      vin: v.Vin,
      license_plate: v["License Plate"],
      status: v.Status,
      type: v["Vehicle Type"],
      current_renter: v["Current Renter"] || "",
      available_date: v["Available Date"] || null,
      make: v.Make,
      model: v["Vehicle Model"],
      vehicle_class: v["Vehicle Class"] || "",
      current_location: v["Current Location"] || "",
      odometer: parseInt(v.Odometer) || 0,
      fuel_level: parseFloat(v["Fuel Level"]) || null,
      available: v["Available?"] === "Yes" || v["Available?"] === true,
      last_location_update: v["Last Location Update"] || null,
      telematics_connected: v["Telematics Connected"] === "Yes" || false,
      toll_tag: v["Toll Tag"] || "",
      image_url: v.image_url || ""
    }));

    // Upsert each vehicle into Supabase
    for (let vehicle of formattedVehicles) {
      const { error } = await supabase
        .from("vehicles")
        .upsert(vehicle, { onConflict: ["id"] });

      if (error) console.error("Error syncing vehicle:", vehicle.id, error.message);
    }

    console.log(`Synced ${formattedVehicles.length} vehicles successfully.`);
  } catch (err) {
    console.error("Sync failed:", err.message);
  }
}

// Run the sync
syncVehicles();
