import Pelatte from "../components/Pelatte";
import { toArabicDigits } from "./toFarsiDigit";

export const generatedElements = (item) => {
  switch (item.label) {
    case "pellate": {
      return (
        <div className="text-sm flex grid-cols-2 sm:col-span-3 lg:col-span-4 xl:col-span-7">
          <Pelatte number={item.value} />
        </div>
      );
    }
    case "name": {
      return (
        <div className=" flex items-center justify-start col-span-2 sm:col-span-1 lg:col-span-1">
          <p className=" text-xl">{item.value}</p>
        </div>
      );
    }

    case "وضعیت": {
      return;
    }

    default:
      return (
        <div className={`text-sm   flex col-span-2`}>
          <>
            <span>{item.label}:</span>
            <span className="mr-1">{toArabicDigits(item.value)}</span>
          </>
        </div>
      );
  }
};
