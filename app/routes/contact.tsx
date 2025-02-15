import { AddressCard } from "~/components/addressCard";
import { Hero } from "~/components/hero";

export default function Contact() {
  return (
    <>
      <Hero
        title="Kontakt"
        description="Hier finden Sie uns und so erreichen Sie uns!"
      />
      <AddressCard
        name="Mundwerk Logopädische Praxis Arnsberg"
        street="Neumarkt 7"
        city="59821 Arnsberg"
        telephone="02931 787738"
        telefax="02931 787737"
      />
      <AddressCard
        name="Mundwerk Logopädische Praxis Neheim"
        street="Stembergstr. 38-40"
        city="59755 Arnsberg"
        telephone="02932 898061"
      />
    </>
  );
}
