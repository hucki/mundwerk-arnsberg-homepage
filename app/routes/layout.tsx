import { Outlet } from "react-router";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { HeaderNavigation } from "~/components/headerNavigation";

export default function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-darkgray text-secondary dark:text-white">
      <a
        className="skip-link screen-reader sr-only focus:not-sr-only "
        href="#content"
      >
        {" "}
        Skip to main content{" "}
      </a>
      {/* Header */}
      <Header />
      <HeaderNavigation />

      {/* Main Content */}
      <main
        className="flex flex-1 items-center justify-center pb-4 w-full flex-col gap-16 min-h-0"
        id="content"
      >
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
