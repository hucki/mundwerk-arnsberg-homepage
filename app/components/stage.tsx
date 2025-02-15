import type { JSX } from "react";
import { NavLink } from "react-router";

interface StageProps {
  title: string;
  description: JSX.Element | string;
  imgSrc: string;
  imgAlt: string;
  imgStaging?: "left" | "right";
  linkTo?: string;
}
export const Stage = ({
  title,
  description,
  imgAlt,
  imgSrc,
  imgStaging = "left",
  linkTo,
}: StageProps) => {
  return (
    <div className="w-full shadow-xl grid grid-cols-1 md:grid-cols-2">
      <img
        src={imgSrc}
        alt={imgAlt}
        className={`w-full h-full object-cover col-span-1 ${
          imgStaging === "right" ? "md:order-2" : ""
        }`}
      />
      <div className="p-10 bg-white dark:bg-darkBackground dark:text-gray-200">
        <h2 className="text-3xl font-bold pb-4">{title}</h2>
        <section className="text-justify pb-4">{description}</section>
        {linkTo && (
          <NavLink
            to={linkTo}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-lightorange transition"
          >
            Mehr erfahren
          </NavLink>
        )}
      </div>
    </div>
  );
};
