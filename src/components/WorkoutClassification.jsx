import { workoutModalities } from "../../data/prdContent.jsx";
import { BadgeCheck, BookmarkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function WorkoutClassification() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 items-start">
      {workoutModalities.map((item) => {
        return (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow-sm items-start h-full"
          >
            <div className="pb-2 mb-0.5">
              <div className="flex gap-2 mb-4">
                {" "}
                {/* icon and name div */}
                <div>
                  {" "}
                  {/* icon div */}
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                </div>
              </div>
              <p className="mb-3">{item.description}</p>
            </div>
            <div className="pb-2 mb-0.5">
              <p className="mb-2 font-semibold">Core Metrics Tracked:</p>
              <div className="flex flex-wrap gap-2">
                {item.inputs.map((metric,index) => {
                  return (
                    <div key={index} className=" block">
                      <Badge
                        variant="secondary"
                        className="rounded-full flex items-center gap-1 max-w-full whitespace-normal text-left h-auto py-1"
                      >
                        <BadgeCheck className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                        <span className="truncate leading-snug">{metric}</span>
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
