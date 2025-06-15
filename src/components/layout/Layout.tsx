
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <div className="fixed top-4 left-4 z-50 md:left-[calc(var(--sidebar-width)+1rem)] transition-all duration-200 ease-linear group-data-[collapsible=offcanvas]/sidebar-wrapper:left-4">
            <SidebarTrigger className="glass-menu-button hover-scale" />
          </div>
          <main className="flex-1 pb-8">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
