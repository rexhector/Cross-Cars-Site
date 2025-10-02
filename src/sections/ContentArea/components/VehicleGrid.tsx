import { useNavigate } from "react-router-dom";
import { Vehicle } from "@/types/vehicle";

interface VehicleGridProps {
  vehicles: Vehicle[];
}

export const VehicleGrid = ({ vehicles }: VehicleGridProps) => {
  const navigate = useNavigate();

  if (vehicles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[hsl(215,20%,65%)] text-lg">No vehicles match your filters</p>
        <p className="text-[hsl(215,20%,65%)] text-sm mt-2">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent gap-x-6 grid grid-cols-none outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="bg-[hsl(220,35%,12%)] box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 border overflow-hidden rounded-[14px] border-solid border-[hsl(220,30%,20%)]">
          <div className="relative aspect-[4_/_3] bg-gray-200 box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="box-border caret-transparent h-full max-w-full object-cover outline-[oklab(0.708_0_0_/_0.5)] w-full"
            />
            <span className="absolute text-xs font-medium items-center bg-[hsl(210,100%,50%)] text-white box-border caret-transparent gap-x-1 flex shrink-0 justify-center leading-4 outline-[oklab(0.708_0_0_/_0.5)] gap-y-1 text-nowrap w-fit border overflow-hidden px-2 py-0.5 rounded-lg border-solid border-transparent right-3 top-3">
              {vehicle.category}
            </span>
          </div>
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] p-6">
            <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-4">
              <h3 className="text-lg font-medium box-border caret-transparent leading-[27px] outline-[oklab(0.708_0_0_/_0.5)] mb-1">
                {vehicle.name}
              </h3>
              <div className="items-baseline box-border caret-transparent gap-x-2 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-2">
                <span className="text-[hsl(210,40%,98%)] box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)]">
                  ${vehicle.price}
                </span>
                <span className="text-[hsl(215,20%,65%)] box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)]">
                  /day
                </span>
              </div>
            </div>
            <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(3,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-3 mb-4 pb-4 border-b border-solid border-[hsl(220,30%,20%)]">
              <div className="text-[hsl(215,20%,65%)] items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-2">
                <img
                  src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-6.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 outline-[oklab(0.708_0_0_/_0.5)] w-4"
                />
                <span className="box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)]">
                  {vehicle.seats}
                </span>
              </div>
              <div className="text-[hsl(215,20%,65%)] items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-2">
                <img
                  src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-7.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 outline-[oklab(0.708_0_0_/_0.5)] w-4"
                />
                <span className="text-sm box-border caret-transparent block leading-5 outline-[oklab(0.708_0_0_/_0.5)] capitalize">
                  {vehicle.transmission}
                </span>
              </div>
              <div className="text-[hsl(215,20%,65%)] items-center box-border caret-transparent gap-x-2 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-2">
                <img
                  src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-8.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 outline-[oklab(0.708_0_0_/_0.5)] w-4"
                />
                <span className="text-sm box-border caret-transparent block leading-5 outline-[oklab(0.708_0_0_/_0.5)] capitalize">
                  {vehicle.fuelType}
                </span>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-4">
              {vehicle.features.map((feature, index) => (
                <div key={index} className="text-[hsl(215,20%,65%)] text-sm items-center box-border caret-transparent gap-x-2 flex leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 mb-1">
                  <img
                    src="https://c.animaapp.com/mg8rd39osLokmz/assets/icon-9.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-3 outline-[oklab(0.708_0_0_/_0.5)] w-3"
                  />
                  <span className="box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => navigate(`/booking/${vehicle.id}`)}
              className="text-white text-sm font-medium items-center bg-[hsl(210,100%,50%)] hover:bg-[hsl(210,100%,45%)] caret-transparent gap-x-2 inline-flex shrink-0 h-9 justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-nowrap w-full px-4 py-2 rounded-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
