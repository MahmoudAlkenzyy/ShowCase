export const FooterList = ({ list, header }: { list: string[]; header: string }) => {
  return (
    <div className="text-white px-3">
      <h2 className="text-base pb-4">{header}</h2>
      <ul className="">
        {list.map((lis, idx) => (
          <li className="text-sm pb-1" key={idx}>
            {lis}
          </li>
        ))}
      </ul>
    </div>
  );
};
