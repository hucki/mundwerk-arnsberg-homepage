import {
  RiBuilding2Line,
  RiContactsBook2Line,
  RiEmotion2Line,
  RiHomeSmile2Fill,
  RiTeamFill,
} from "@remixicon/react";
import { StyledNavLink } from "./navigation";

interface HeaderNavigationProps {
  className?: string;
}

export const HeaderNavigation = ({ className }: HeaderNavigationProps) => {
  return (
    <nav
      className={`bg-navBackground dark:bg-darkNavBackground col-span-2 grid grid-rows gap-4 md:flex md:gap-0 justify-center ${className}`}
    >
      <ul className="flex gap-2">
        <li>
          <StyledNavLink
            to="/"
            label={
              <span className="flex flex-row gap-1">
                <RiHomeSmile2Fill />
                <span className="hidden md:inline">Home</span>
              </span>
            }
            type="header"
          />
        </li>
        <li>
          <StyledNavLink
            to="/team"
            label={
              <span className="flex flex-row gap-1">
                <RiTeamFill />
                <span className="hidden md:inline">Team</span>
              </span>
            }
            type="header"
          />
        </li>
        <li>
          <StyledNavLink
            to="/arbeit"
            label={
              <span className="flex flex-row gap-1">
                <RiEmotion2Line />
                <span className="hidden md:inline">Arbeit</span>
              </span>
            }
            type="header"
          />
        </li>
        <li>
          <StyledNavLink
            to="/standorte"
            label={
              <span className="flex flex-row gap-1">
                <RiBuilding2Line />
                <span className="hidden md:inline">Standorte</span>
              </span>
            }
            type="header"
          />
        </li>
        <li>
          <StyledNavLink
            to="/kontakt"
            label={
              <span className="flex flex-row gap-1">
                <RiContactsBook2Line />
                <span className="hidden md:inline">Kontakt</span>
              </span>
            }
            type="header"
          />
        </li>
      </ul>
    </nav>
  );
};
