import { NavLink, useLocation } from "react-router";

const navLinkStyles = `px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700`;

interface NavLinkProps {
  label: string;
  to: string;
  className?: string;
}

const StyledNavLink = ({
  label,
  className = navLinkStyles,
  to,
}: NavLinkProps) => {
  const currentLocation = useLocation().pathname;
  const isActive = currentLocation === to;

  return (
    <NavLink
      className={`${className} ${
        isActive
          ? "inset-shadow-sm inset-shadow-gray-500"
          : "shadow-md shadow-orange-800"
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
