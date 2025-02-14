import { Outlet } from "react-router";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { HeaderNavigation } from "~/components/headerNavigation";

export default function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-darkgray text-secondary dark:text-white">
      {/* Header */}
      <Header />
      <HeaderNavigation />

      {/* Main Content */}
      <div className="flex flex-1">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
