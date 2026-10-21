import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Dumbbell,
  ListChecks,
  TriangleAlert,
} from "lucide-react";

const items = [
  { title: "Overview", id: "overview", icon: LayoutDashboard },
  {
    title: "Workout Classification",
    id: "workout-classification",
    icon: Dumbbell,
  },
  { title: "Features", id: "features", icon: ListChecks },
  { title: "Risks", id: "risks", icon: TriangleAlert },
];

export function AppSidebar() {
  const [activeId, setActiveId] = React.useState("overview");
  const { isMobile, setOpenMobile } = useSidebar();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();

    if (isMobile) {
      setOpenMobile(false);
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(targetId);
    }
  };

  return (
    <Sidebar variant="sidebar" collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <SidebarMenuItem
                    className="mt-3 mb-3 sm:mb-1"
                    key={item.title}
                  >
                    <SidebarMenuButton asChild isActive={isActive}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleScroll(e, item.id)}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}