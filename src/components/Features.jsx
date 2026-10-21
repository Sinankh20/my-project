import { featureSpecifications } from "../../data/prdContent.jsx";
import { Check,Timer,CheckCircle2, } from "lucide-react";

export default function Features() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight dark:">Features</h2>
      {Object.values(featureSpecifications).map((feature, index) => {
        return (
          <div className= "pl-3 pt-4 pb-2" key={index}>
            <h3 className="font-bold">{feature.title}</h3>
            <div className="pl-1.5 pt-2">
              <ul>
                {feature.requirements.map((req, reqIndex) => (
                  <li key={reqIndex} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

//  import { featureSpecifications } from "../../data/prdContent.jsx";
//  import { CheckCircle2, Sparkles } from "lucide-react";

//  export default function Features() {
//    return (
//      <section className="py-12 px-4 max-w-7xl mx-auto">
//        {/* Header Section */}
//        <div className="text-center mb-10">
//          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
//            <Sparkles className="w-3.5 h-3.5" />
//            Web Core Specifications
//          </div>
//          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
//            Platform Feature Breakdown
//          </h2>
//          <p className="mt-2 text-base text-slate-600 max-w-2xl mx-auto">
//            Technical deliverables optimized for desktop, tablet, and web workout logging experiences.
//          </p>
//        </div>

//        {/* Feature Cards Grid */}
//        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//          {Object.entries(featureSpecifications).map(([key, feature]) => (
//            <div
//              key={key}
//              className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
//            >
//              {/* Card Header */}
//              <div className="p-6 border-b border-slate-100 bg-slate-50/50">
//                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1 block">
//                  {key.replace(/([A-Z])/g, " $1")}
//                </span>
//                <h3 className="text-xl font-bold text-slate-900 leading-snug">
//                  {feature.title}
//                </h3>
//              </div>

//              {/* Requirements List */}
//              <div className="p-6 flex-1 bg-white">
//                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
//                  Core Requirements
//                </h4>
//                <ul className="space-y-3.5">
//                  {feature.requirements.map((req, reqIndex) => (
//                    <li key={reqIndex} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
//                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
//                      <span>{req}</span>
//                    </li>
//                  ))}
//                </ul>
//              </div>
//            </div>
//          ))}
//        </div>
//      </section>
//    );
//  }
