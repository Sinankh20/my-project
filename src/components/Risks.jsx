import { Badge } from "@/components/ui/badge";
import { scopeAndRisks } from "../../data/prdContent.jsx";
export default function Risks() {
  const { technicalRisks } = scopeAndRisks;
  return (
    <div className="mx-auto py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Technical Risks & Mitigations</h2>
        <p className="text-sm text-slate-500 mt-1 dark:text-slate-400">Potential web platform failure points and corresponding engineering solutions.</p>
      </div>
      <div className="space-y-4 grid grid-cols-2 gap-3 items-stretch">
        {technicalRisks.map((risk, index) => {
          return (
            <div key={index} className="border shadow-md p-4 rounded-md h-full">
              <div>
                <div className="font-bold">{risk.risk}</div>
                <div className="pl-2">
                  <Badge 
                  variant={`${risk.impact.toLowerCase()=="high" ? "destructive" : "secondary"}`}
                  className={risk.impact.toLowerCase()== "medium" ? "bg-orange-50 text-orange-700  dark:bg-orange-950/40 dark:text-orange-300 " : ""}
                  >{risk.impact}
                  </Badge>
                  
                  </div>
                <div className="mt-4 font-light">{risk.mitigation}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//  import { scopeAndRisks } from "../../data/prdContent.jsx";
//  import { AlertTriangle, ShieldCheck } from "lucide-react";

//  export default function Risks() {
//    const { technicalRisks } = scopeAndRisks;

//    return (
//      <div className="max-w-4xl mx-auto py-8 px-4">
//        {/* Header */}
//        <div className="mb-6">
//          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
//            Technical Risks & Mitigations
//          </h2>
//          <p className="text-sm text-slate-500 mt-1">
//            Potential web platform failure points and corresponding engineering solutions.
//          </p>
//        </div>

//        {/* Risk Cards */}
//        <div className="space-y-4">
//          {technicalRisks.map((risk, index) => {
//            const isHighImpact = risk.impact.toLowerCase() === "high";

//            return (
//              <div
//                key={index}
//                className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow duration-200"
//              >
//                {/* Header Row: Title & Impact Badge */}
//                <div className="flex items-center justify-between gap-4 mb-3">
//                  <div className="flex items-center gap-2.5">
//                    <AlertTriangle
//                      className={`w-5 h-5 shrink-0 ${
//                        isHighImpact ? "text-amber-500" : "text-sky-500"
//                      }`}
//                    />
//                    <h3 className="font-bold text-slate-900 text-base leading-snug">
//                      {risk.risk}
//                    </h3>
//                  </div>

//                  <span
//                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase ${
//                      isHighImpact
//                        ? "bg-red-50 text-red-700 border border-red-200"
//                        : "bg-amber-50 text-amber-700 border border-amber-200"
//                    }`}
//                  >
//                    {risk.impact} Impact
//                  </span>
//                </div>

//                {/* Mitigation Callout Box */}
//                <div className="flex items-start gap-2.5 p-3.5 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-600">
//                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
//                  <div>
//                    <strong className="text-slate-800 font-semibold mr-1">
//                      Mitigation Strategy:
//                    </strong>
//                    {risk.mitigation}
//                  </div>
//                </div>
//              </div>
//            );
//          })}
//        </div>
//      </div>
//    );
//  }
