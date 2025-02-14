import { ContactInfo } from "./contactInfo";
import { ComboLogo } from "./logo";

export const Header = () => {
  return (
    <header className="bg-background dark:bg-darkBackground p-4 grid grid-cols-[1fr_auto] items-center">
      <ComboLogo />
      <ContactInfo />
    </header>
  );
};
