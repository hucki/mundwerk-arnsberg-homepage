interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}
export const Card = ({ title, description, imgAlt, imgSrc }: CardProps) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-950 dark:text-gray-200 shadow-xl dark:shadow-gray-500 rounded-lg">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <button className="mt-6 bg-primary text-white px-4 py-2 rounded-lg hover:bg-lightorange transition">
        Mehr erfahren
      </button>
    </div>
  );
};
