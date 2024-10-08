import { infoCardProps } from "../../types";

const InfoCard = ({ Icon, header, text }: infoCardProps) => {
  return (
    <div className=" my-5 flex justify-center  h-full">
      <div className="flex flex-col text-center px-5 justify-center items-center w-[200px]">
        <div className="bg-blue-100 p-8 rounded-lg text-5xl text-blue-600">{Icon}</div>
        <h2>{header}</h2>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
};
export default InfoCard;
