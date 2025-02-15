import { NavLink } from "react-router";

export const LegalLinks = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-center font-bold">Rechtliches</h3>
      <NavLink
        to="/impressum"
        className="text-primary dark:text-primary-light hover:underline"
      >
        Impressum
      </NavLink>
      <NavLink
        to="/datenschutz"
        className="text-primary dark:text-primary-light hover:underline"
      >
        Datenschutzerklärung
      </NavLink>
    </div>
  );
};
