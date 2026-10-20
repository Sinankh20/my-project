import {problemAndGoals} from  "../../data/prdContent.jsx"
export default function Overview(){
    return (
        <div className="pt-2.5">
            <h1 className="font-bold text-xl">Problem Statement</h1>
            <p className="">{problemAndGoals.problemStatement}</p>
            <h1 className="font-bold text-xl pt-2.5" >Solution Overview</h1>
            <p className="">{problemAndGoals.solutionOverview}</p>
            
        </div>
    )
}