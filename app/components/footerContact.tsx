export const FooterContact = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-center font-bold">Kontakt</h3>
      <div className="text-center">
        Gerne nehmen wir Ihren Anruf zur Terminvereinbarung entgegen
      </div>
      <div className="text-center">
        Arnsberg:{" "}
        <a href="tel:+492931787738" className="text-blue-500 hover:underline">
          02931 / 787738
        </a>
      </div>
      <div className="text-center">
        Neheim:{" "}
        <a href="tel:+492932898061" className="text-blue-500 hover:underline">
          02932 / 898061
        </a>
      </div>
    </div>
  );
};
