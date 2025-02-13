import { Outlet } from "react-router";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Navigation } from "~/components/navigation";

export default function HomeLayout() {
  const prefersColorSchemeDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );
  const darkMode = prefersColorSchemeDark.matches;
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row flex-grow">
        <aside className="w-64 p-4 bg-gray-200 hidden sm:block ">
          <Navigation />
        </aside>
        <main className="flex-grow p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
