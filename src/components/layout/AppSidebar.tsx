
import { Home, User, Code, FolderOpen, Mail } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

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

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Skills", url: "/skills", icon: Code },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavClass = (isActiveRoute: boolean) =>
    isActiveRoute 
      ? "bg-white/30 text-slate-900 font-medium border-white/40" 
      : "text-slate-700 hover:bg-white/20 hover:text-slate-900";

  return (
    <Sidebar className="glass-nav border-r border-white/20">
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-xl font-bold glass-logo">
            {collapsed ? "GS" : "Gama Sibusiso"}
          </h1>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className="glass-text">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${getNavClass(isActive(item.url))}`}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
