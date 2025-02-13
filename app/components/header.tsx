import { RiMenu2Fill } from "@remixicon/react";
import { ContactInfo } from "./contactInfo";
import { ComboLogo } from "./logo";

export const Header = () => {
  return (
    <header className="bg-orange-50 dark:bg-orange-950 p-4 grid grid-cols-[1fr_auto] md:grid-cols-[42px_auto_200px] items-center">
      <RiMenu2Fill className="text-orange-500 dark:text-orange-500" />
      <ComboLogo />
      <ContactInfo />
    </header>
  );
};
