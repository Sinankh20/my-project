import { prdMetadata } from "../../data/prdContent.jsx";
import { Badge } from "@/components/ui/badge"

export default function Header() {
  return (
    <div className="pb-4 border-b-2 flex flex-row mt-3 gap-13">
      <div>
        <div className="flex items-baseline gap-2">
          <h1 className="text-2xl font-bold">{prdMetadata.title}
          <span className="ml-5 text-sm font-normal italic text-slate-500">{prdMetadata.version}</span></h1>
        </div>
        <p className="font-sm text-slate-500 ml-1 mt-2">Log any workout, time every exercise, and compare lifts with friends.</p>
        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 ml-1 mt-3">
        {prdMetadata.status}
      </Badge>
        <p></p>
      </div>
      <div className="flex flex-col">
        <p>{prdMetadata.author}:</p>
        {prdMetadata.stakeholders.map((person, index) => {
          return (
            <div key={index} className="border rounded-md shadow-sm m-2 px-3.5 py-1.5">
              <p>
                {person.name} - {person.role}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
