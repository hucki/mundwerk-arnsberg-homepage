import type { JSX } from "react";
import { NavLink, useLocation } from "react-router";

const navLinkStyles = `px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors duration-300`;

interface NavLinkProps {
  type?: "header" | "sidebar";
  label: JSX.Element | string;
  to: string;
  className?: string;
}

const styles = {
  header: {
    active: `bg-primary text-white border-b-4 border-secondary dark:border-darkPrimary font-bold`,
    inactive: ``,
  },
  sidebar: {
    active: `rounded bg-primary text-white`,
    inactive: `rounded bg-orange-200`,
  },
};
export const StyledNavLink = ({
  type,
  label,
  className = navLinkStyles,
  to,
}: NavLinkProps) => {
  const currentLocation = useLocation().pathname;
  const isActive = currentLocation === to;

  return (
    <NavLink
      className={`flex flex-col ${className} ${
        styles[type || "sidebar"][isActive ? "active" : "inactive"]
      }`}
      to={to}
      end
    >
      {label}
    </NavLink>
  );
};

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="grid grid-rows gap-4">
      <StyledNavLink to="/" className={navLinkStyles} label="Home" />

      <StyledNavLink to="/team" className={navLinkStyles} label="Team" />
      <StyledNavLink to="/work" className={navLinkStyles} label="Arbeit" />
      <StyledNavLink to="/venues" className={navLinkStyles} label="Standorte" />
      <StyledNavLink to="/contact" className={navLinkStyles} label="Kontakt" />
    </nav>
  );
}
