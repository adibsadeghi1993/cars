import React from "react";
import { useGetAllCars } from "../useHook";
import SingleCar from "./SingleCar";

const Cars = () => {
  const [cars, loading, error] = useGetAllCars();
  console.log(cars);
  return (
    <section>
      <article className="flex border-2 rounded-t-md cursor-pointer ">
        <div className="bg-slate-100 flex-1 text-center py-3">
          <p>خودروهای ملکی</p>
        </div>
        <div className=" flex-1 text-center py-3">
          <p>خودرو های استیجاری</p>
        </div>
      </article>

      {cars.map((item, index) => (
        <SingleCar key={index} data={item} />
      ))}
    </section>
  );
};

export default Cars;
