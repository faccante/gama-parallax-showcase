
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 relative">
          <div className="fixed top-4 left-4 z-50">
            <SidebarTrigger className="glass-menu-button hover-scale" />
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
