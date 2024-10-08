const SectionHead = ({ head }: { head: string }) => {
  return (
    <div className="flex justify-center">
      <p className="bg-blue-50 px-6 py-1 text-lg rounded border border-blue-200 text-blue-500 !capitalize">{head}</p>
    </div>
  );
};

export default SectionHead;
