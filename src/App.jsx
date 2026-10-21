import "./App.css";
import { useEffect, useState, useRef } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import Header from "./components/Header";
import Overview from "./components/Overview";
import WorkoutClassification from "./components/WorkoutClassification";
import Features from "./components/Features";
import Risks from "./components/Risks";
import Navbar from "./components/Navbar";

export default function App() {
  const contentRef = useRef(null);
  return (
    <div className="m-5">
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <SidebarInset>
          <Navbar contentRef={contentRef} />
          <main ref={contentRef} className="space-y-8 p-4">
            <Header />
            <section id="overview">
              <Overview />
            </section>
            <section id="workout-classification">
              <WorkoutClassification />
            </section>
            <section id="features">
              <Features />
            </section>
            <section id="risks">
              <Risks />
            </section>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
