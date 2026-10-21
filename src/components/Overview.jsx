import { problemAndGoals } from "../../data/prdContent.jsx";
export default function Overview() {
  return (
    <div className="pt-2.5">
      <div className="p-4 mb-8 rounded-xl pl-6 border border-rose-500/30 ring-1 shadow-sm shadow-black/20">
        <div className="border-l-3 border-black ">
          <div className="pl-5">
            <h1 className="font-bold text-xl pb-2">Problem Statement</h1>
            <p className="font-light">{problemAndGoals.problemStatement}</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 mb-8 rounded-xl pl-6 border border-rose-500/30 ring-1 shadow-sm shadow-black/20">
        <div className="border-l-3 border-black ">
          <div className="pl-5">
            <h1 className="font-bold text-xl pb-2">Solution Overview</h1>
            <p className="font-light">{problemAndGoals.solutionOverview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <div>
        <div className="border-l-3 border-black">
          <div className="pl-5">
            <h1 className="font-bold text-xl pb-2">Solution Overview</h1>
            <p className="">{problemAndGoals.solutionOverview}</p>
          </div>
        </div> */}