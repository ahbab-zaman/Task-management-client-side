import { ScaleLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-32">
        <ScaleLoader color="#4e97fd" loading={true} size={50} />
      </div>
    </div>
  );
};

export default Loading;
