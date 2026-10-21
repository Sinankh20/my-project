import { useState, useEffect, useRef } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Sun, MoonStar, Menu } from "lucide-react";
import { useReactToPrint } from "react-to-print";

export default function Navbar({ contentRef }) {
  const [isHidden, SetisHidden] = useState(true);
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: "report",
    pageStyle: `
    @page {
      size: A4;
      margin: 4mm;            /* removes the browser's header/footer (date, title, about:srcdoc, page number) */
    }
    @media print {
      body {
        margin: 5mm;
        padding: 10mm;      /* your own margin instead */
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }
  `,
  });

  const [isOn, setIsOn] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) {
      return savedTheme === "dark";
    }
    return false;
  });
  useEffect(() => {
    if (isOn) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isOn]);
  return (
    // Desktop NavBar
    <div>
      <header className="sticky top-0 z-10 flex h-14 w-full items-center justify-between border-b bg-background px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="cursor-pointer" />
        </div>
        <Menu
          className="sm:hidden block cursor-pointer"
          onClick={() => SetisHidden(!isHidden)}
        />

        <div className="hidden sm:flex items-center sm:gap-4 ">
          <div className="inline-flex items-center gap-2">
            <label
              htmlFor="switch-component-on"
              className="cursor-pointer text-sm text-slate-600"
            >
              <Sun className="w-5 h-5" />
            </label>
            <div className="relative inline-block h-5 w-11">
              <input
                id="switch-component-on"
                type="checkbox"
                checked={isOn}
                onChange={(e) => setIsOn(e.target.checked)}
                className="peer h-5 w-11 cursor-pointer appearance-none rounded-full bg-slate-100 transition-colors duration-300 checked:bg-slate-800"
              />
              <label
                htmlFor="switch-component-on"
                className="absolute left-0 top-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800"
              />
            </div>
            <label
              htmlFor="switch-component-on"
              className="cursor-pointer text-sm text-slate-600"
            >
              <MoonStar className="w-5 h-5" />
            </label>
          </div>
          <button
            className="cursor-pointer rounded border-2 px-3 py-1"
            onClick={reactToPrintFn}
          >
            Download PDF
          </button>
        </div>
      </header>
      {/* Mobile Nav */}
      <div
        className={`grid transition-all duration-300 ease-in-out sm:hidden ${
          isHidden ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
        }`}
      >
        <div className="overflow-hidden bg-sidebar">
          <div className="flex flex-col items-center gap-2 border-b-1 border-oklch(0.922 0 0) pb-2 transition-all ease-in-out duration-250">
            <button
              className="cursor-pointer rounded border-2 px-3 py-1 mt-2 "
              onClick={reactToPrintFn}
            >
              Download PDF
            </button>
            {/* <div className="border-b-1 border-oklch(0.922 0 0) min-w-screen"></div> */}
            <div className="inline-flex items-center gap-2 pt-2">
              <label
                htmlFor="switch-component-on"
                className="cursor-pointer text-sm text-slate-600"
              >
                <Sun className="w-5 h-5" />
              </label>
              <div className="relative inline-block h-5 w-11">
                <input
                  id="switch-component-on"
                  type="checkbox"
                  checked={isOn}
                  onChange={(e) => setIsOn(e.target.checked)}
                  className="peer h-5 w-11 cursor-pointer appearance-none rounded-full bg-slate-100 transition-colors duration-300 checked:bg-slate-800"
                />
                <label
                  htmlFor="switch-component-on"
                  className="absolute left-0 top-0 h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800"
                />
              </div>
              <label
                htmlFor="switch-component-on"
                className="cursor-pointer text-sm text-slate-600"
              >
                <MoonStar className="w-5 h-5" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
