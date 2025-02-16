import { Hero } from "~/components/hero";
import { Stage } from "~/components/stage";
import type { Route } from "./+types/work";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mundwerk Logopädische Praxis - Unsere Arbeit" },
    {
      name: "description",
      content:
        "Auf dieser Seite finden Sie Informationen zu den von uns angewandten Behandlungsmethoden und unserer Arbeitsphilosophie.",
    },
  ];
}

export default function Work() {
  return (
    <>
      <Hero
        title="Unsere Arbeit"
        description="Hier stellen wir Ihnen unser Leisteungsspektrum dar"
      />
      <Stage
        imgAlt="Ein Dummy Bild"
        imgSrc="https://picsum.photos/500/500"
        title="Unsere Philosphie"
        description={
          <>
            <p className="mb-4">
              Freude an der Arbeit überträgt sich von Therapeuten auf die
              Patienten. Wir arbeiten mit Herzblut für Sie, so dass der Funke
              auf die Therapie überspringen kann.
            </p>
            <p className="mb-4">
              Unsere Praxis betreut sämtliche Störungsbilder, die mit Sprach-,
              Sprech-, Stimm-, Schluck- und Atemstörungen einhergehen,
              Hausbesuche sind möglich.
            </p>
            <p className="mb-4">
              Der Therapieplan wird je nach ärztlicher Diagnose und
              individuellen Anliegen des Patienten gemeinsam erstellt.
            </p>
          </>
        }
      />
      <Stage
        imgAlt="Ein Dummy Bild"
        imgStaging="right"
        imgSrc="https://picsum.photos/501/501"
        title="Wir bilden uns für Sie weiter"
        description={
          <>
            <p className="mb-4">
              Durch stetige Fortbildungen bleiben wir für Sie auf dem aktuellen
              Stand der therapeutischen Möglichkeiten.
            </p>
            <p className="mb-4">
              Gleichzeitig haben wir in den letzten Jahren große
              Weiterbildungsmaßnahmen unterstützt und durch Engagement und
              Motivation des Teams folgende Zusatzqualifikationen erlangt, die
              wir Ihnen in unserer Praxis anbieten können:
            </p>
            <ul className="list-disc list-inside">
              <li>Castillo-Morales-Therapeut</li>
              <li>SI- Therapeut</li>
              <li>Fachtherapeut für Dyslexie und Dysgraphie</li>
              <li>Fachtherapeut für Neurologie</li>
              <li>Fachtherapeut für Dysphagie</li>
              <li>Fachtherapeut für kognitives Training</li>
              <li>Fachtherapeut für funktionales Stimmtraining</li>
            </ul>
          </>
        }
      />
    </>
  );
}
