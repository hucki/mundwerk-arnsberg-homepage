import { RiPhoneFill } from "@remixicon/react";

export const ContactInfo = () => {
  return (
    <div className="md:justify-items-end">
      <a
        href="tel:+492931787738"
        className="text-white hover:underline flex flex-row items-center bg-primary px-4 py-1 rounded-lg shadow-md "
      >
        <RiPhoneFill className="h-8 w-8 px-1" />{" "}
        <span className="hidden md:block">02931 / 787738</span>
      </a>
    </div>
  );
};
