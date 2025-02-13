export const Footer = () => {
  return (
    <footer className="bg-orange-200 dark:bg-orange-950 p-4 grid grid-cols-3">
      <div className="text-center">
        Arnsberg:{" "}
        <a href="tel:+492931787738" className="text-blue-500 hover:underline">
          02931 / 787738
        </a>
      </div>
      <div className="text-center">
        Gerne nehmen wir Ihren Anruf zur Terminvereinbarung entgegen
      </div>
      <div className="text-center">
        Neheim:{" "}
        <a href="tel:+492932898061" className="text-blue-500 hover:underline">
          02932 / 898061
        </a>
      </div>
    </footer>
  );
};
