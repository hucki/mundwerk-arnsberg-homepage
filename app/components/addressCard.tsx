import { RiPhoneFill, RiPrinterLine } from "@remixicon/react";

interface AddressCardProps {
  name: string;
  street: string;
  city: string;
  telephone: string;
  telefax?: string;
}

export const AddressCard = ({
  name,
  street,
  city,
  telephone,
  telefax,
}: AddressCardProps) => {
  return (
    <address className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>{street}</p>
      <p>{city}</p>
      <a
        href={`tel:+49${telephone}`}
        className="hover:underline flex flex-row items-center "
      >
        <RiPhoneFill className="h-8 w-8 px-1" /> <span>{telephone}</span>
      </a>
      {telefax && (
        <p className="flex flex-row items-center">
          <RiPrinterLine className="h-8 w-8 px-1" /> {telefax}
        </p>
      )}
    </address>
  );
};
