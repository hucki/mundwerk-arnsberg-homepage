import { FooterContact } from "./footerContact";
import { LegalLinks } from "./legalLinks";
import { TextLogo } from "./logo";

export const Footer = () => {
  return (
    <footer className="bg-background dark:bg-darkNavBackground mt-16 p-4 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <LegalLinks />
        <FooterContact />
      </div>
      <p className="col-span-3 text-center text-sm italic pt-2">
        <span className="whitespace-nowrap">
          &copy; {new Date().getFullYear().toString()}{" "}
          <TextLogo
            textSize="text-xs"
            hasSubline={false}
            className="non-italic"
          />{" "}
          Logopädie. Alle Rechte vorbehalten.
        </span>
      </p>
    </footer>
  );
};
