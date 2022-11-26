import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import "./styles.css";
import { generatedElements } from "../utilites";

const SingleCar = ({ data }) => {
  const [open, setOpen] = useState(false);

  const filterdStatus=data.find(item=>item.label==="وضعیت")

 console.log(filterdStatus)

  return (
    <section className="flex mt-4">
      <div style={{backgroundColor:`${filterdStatus.value==="فعال"?"#11DA00":"#F4B000"}`,width:"42px"}} className=" rounded-r-lg flex items-center justify-center">
        <p className="origin-center rotate-90 text-white">{filterdStatus.value}</p>
      </div>
      <section className=" border-2 z-0 py-2 rounded-l-lg relative border-cyan-100 grid flex-1 pr-2 grid-col-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        <span
          onClick={() => setOpen(!open)}
          className="absolute z-30 top-3 left-3"
        >
          <HiDotsVertical cursor="pointer" fontSize="35px" color="#A0A0A0" />
        </span>
        {open && (
          <div className="absolute dialog   bg-white w- z-20 bg-s py-3 px-1 border rounded-bl-md  rounded-r-md border-cyan-100">
            <p className="text-md border-b text-lg font-medium text-center border-cyan-100 pb-2">
              مشاهده جزئیات
            </p>
            <p className=" pt-2 text-lg font-medium text-center">
              تاریخچه پلاک
            </p>
          </div>
        )}

        {data.map((item) => generatedElements(item))}
      </section>
    </section>
  );
};

export default SingleCar;
