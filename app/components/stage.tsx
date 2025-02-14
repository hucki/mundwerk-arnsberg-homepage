interface StageProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  imgStaging?: "left" | "right";
}
export const Stage = ({
  title,
  description,
  imgAlt,
  imgSrc,
  imgStaging = "left",
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
      <div className="p-4 bg-white dark:bg-gray-950 dark:text-gray-200 rounded-lg">
        <h2 className="text-3xl font-bold pb-4">{title}</h2>
        <p className="text-justify">{description}</p>
        <button className="mt-6 bg-primary text-white px-4 py-2 rounded-lg hover:bg-lightorange transition">
          Mehr erfahren
        </button>
      </div>
    </div>
  );
};
