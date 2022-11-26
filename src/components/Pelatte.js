import React from "react";
import pellateImage from "../assets/icons8-iran-48 1.png";
import toArabicNumber from "../utilites/toFarsiDigit";

const Pelatte = ({ number }) => {
  const splitedNumber = number.split("");
  console.log(splitedNumber);

  return (
    <div className="w-64 flex   rounded-md">
      <div className="grid grid-cols-4 border-black border-t-2 rounded-r-lg border-b-2 border-r-2 flex-1">
        <div className="flex flex-col justify-center border-black border-l items-center">
          <span className="text-xs">ایران</span>
          <span className="text-xs">{` ${toArabicNumber(splitedNumber[6])}${toArabicNumber(splitedNumber[7])}`}</span>
        </div>

        <p className="text-lg flex-row-reverse  font-medium  flex items-center justify-start tracking-widest   ">
          {`${toArabicNumber(splitedNumber[3])}${toArabicNumber(splitedNumber[4])}${toArabicNumber(splitedNumber[5])}`}
        </p>
        <p className="text-lg  mb-1 font-medium flex items-center justify-center tracking-widest    ">
          {`${splitedNumber[2]}`}
        </p>
        <p className="text-lg flex font-medium items-center align-middle tracking-widest">
          {` ${toArabicNumber(splitedNumber[1])} ${toArabicNumber(splitedNumber[0])}`}
        </p>
      </div>
      <div className="bg-blue-700  flex flex-col px-1 rounded-l-md border-blue-700 border-r-2 items-center justify-center">
        <img width="20px" src={pellateImage} alt="iran" className=" mt-1" />

        <p className="font-light text-vsm text-white    ">.I.R</p>
        <p className="font-light text-vsm text-white    ">IRAN</p>
      </div>
    </div>
  );
};

export default Pelatte;
