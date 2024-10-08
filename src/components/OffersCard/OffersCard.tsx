import { infoCardProps } from "../../types";

const OffersCard = ({ Icon, header, text }: infoCardProps) => {
  return (
    <div className="flex text-xl  gap-3 items-center">
      <div className="text-blue-500 bg-blue-100 p-5 rounded-2xl">{Icon}</div>
      <div className="">
        <h2 className="text- font-semibold text-[1.1rem]">{header}</h2>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default OffersCard;
