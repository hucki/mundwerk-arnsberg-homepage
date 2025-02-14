import { TextLogo } from "./logo";

export const Footer = () => {
  return (
    <footer className="bg-background dark:bg-darkNavBackground mt-16 p-4 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="text-center">
          Gerne nehmen wir Ihren Anruf zur Terminvereinbarung entgegen
        </div>
        <div className="text-center">
          Arnsberg:{" "}
          <a href="tel:+492931787738" className="text-blue-500 hover:underline">
            02931 / 787738
          </a>
        </div>
        <div className="text-center">
          Neheim:{" "}
          <a href="tel:+492932898061" className="text-blue-500 hover:underline">
            02932 / 898061
          </a>
        </div>
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
