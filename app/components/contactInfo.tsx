import { RiPhoneFill } from "@remixicon/react";

export const ContactInfo = () => {
  return (
    <div className="md:justify-items-end ">
      Terminvereinbarung:
      <a
        href="tel:+492931787738"
        className="text-orange-500 hover:underline flex flex-row items-center"
      >
        <RiPhoneFill className="text-orange-500 px-1" /> 02931 / 787738
      </a>
    </div>
  );
};
