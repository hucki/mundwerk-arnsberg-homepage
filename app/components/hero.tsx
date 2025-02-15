interface HeroProps {
  title: string;
  description: string;
}

export const Hero = ({ title, description }: HeroProps) => {
  return (
    <div className="w-full h-64 bg-cover bg-center bg-[url(https://picsum.photos/1200/600)]">
      <div className="w-full h-full flex flex-col items-center justify-center bg-white/80 dark:bg-black/40 backdrop-opacity-10">
        <h1 className="isolate text-3xl md:text-4xl font-bold text-primary">
          {title}
        </h1>
        <p className="dark:text-white text-center w-3/4 text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};
