import {workoutModalities} from  "../../data/prdContent.jsx"
export default function WorkoutClassification(){
    return (
        workoutModalities.map((item)=>{
            return (
                <div key={item.id}>
                    <div>
                        
                        <div> {/* icon and name div */}
                            <div> {/* icon div */}
                              {item.icon}
                            </div>
                            <div>
                                <h3 className="font-bold">{item.name}</h3>
                            </div>
                        </div>
                        <p>{item.description}</p>
                    </div>

                    <div>
                        <p>Core Metrics Tracked:</p>
                        <div>
                            <span>{item.inputs.map((metric)=>metric)}</span>
                        </div>
                    </div>
                </div>
            )
        })
    )
}