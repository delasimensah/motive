import { FC } from "react";
import Image from "next/image";
import recommend from "@assets/dashboard/recommend.svg";
import icon1 from "@assets/dashboard/icon1.svg";
import icon2 from "@assets/dashboard/icon2.svg";
import icon3 from "@assets/dashboard/icon3.svg";

type CarCardProps = {
  details: {
    bgColor: string;
    image: string;
    name: string;
    width: number;
    number: number;
    hourly: number;
    recommended: string;
  };
};

const CarCard: FC<CarCardProps> = ({ details }) => {
  const { bgColor, image, name, width, number, hourly, recommended } = details;
  return (
    <div
      className={`${bgColor} rounded-lg py-[15px] px-[27px] flex flex-col space-y-2`}
    >
      <div className="flex items-center space-x-2">
        <Image src={recommend} alt="" height={20} width={20} />

        <p className="font-bold text-dark1">{recommended} Recommended</p>
      </div>

      <Image src={image} alt="" height={106} width={width} />

      <p className="font-bold text-[20px] text-dark1">{name}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <Image src={icon1} alt="" height={20} width={20} />
          <p className="text-[15px] font-medium text-dark3">{number}K</p>
          <Image src={icon2} alt="" height={17} width={17} />
          <Image src={icon3} alt="" height={17} width={14} />
        </div>

        <p className="text-[15px] font-medium text-dark3">${hourly}/h</p>
      </div>
    </div>
  );
};

export default CarCard;
