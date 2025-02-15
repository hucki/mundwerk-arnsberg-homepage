import type { Route } from "./+types/locations";
import { Stage } from "~/components/stage";
import { Hero } from "~/components/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mundwerk Arnsberg - Standorte" },
    {
      name: "description",
      content: "Unsere Standorte - Hier behandeln wir Sie gerne",
    },
  ];
}

export default function Locations() {
  return (
    <>
      <Hero
        title="Hier finden Sie uns"
        description="Unsere Praxen sind hell und freundlich, auf Ihre
        speziellen Therapiebedürfnisse eingerichtet und barrierefrei erreichbar."
      />
      <Stage
        title="Arnsberg"
        description={
          <>
            <p>
              im Gesundheitszentrum am Neumarkt finden Sie unsere
              Hauptniederlassung mit Parkmöglichkeiten in der Tiefgarage am
              Neumarkt sowie in der Königsstraße (beides kostenpflichtig),
              Parkmöglichkeiten für Patienten mit Gehbehinderung gibt es im
              Innenhof.
            </p>
            <address>Neumarkt 7, 59821 Arnsberg</address>
          </>
        }
        imgSrc="./images/arnsberg-150x150.jpg"
        imgAlt="Ein Bild des Standorts in Arnsberg"
      />
      <Stage
        title="Neheim"
        description={
          <>
            <p>
              gegenüber der Caritas Neheim (ehemals Elektrofachmarkt Berlet)
              finden Sie unsere Zweigstelle in Neheim. Parkmöglichkeiten sind
              hinter dem Haus, ein barrierefreier Zugang zur Praxis ist von der
              Stembergstraße aus möglich.
            </p>
            <address>Stembergstr. 38-40, 59755 Arnsberg</address>
          </>
        }
        imgSrc="./images/Mundwerk2-150x150.jpg"
        imgAlt="Ein Bild des Standorts in Neheim"
        imgStaging="right"
      />
    </>
  );
}
