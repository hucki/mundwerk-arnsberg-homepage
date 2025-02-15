import { Hero } from "~/components/hero";
import { Stage } from "~/components/stage";

export function HydrateFallback() {
  return (
    <div id="loading-splash">
      <div id="loading-splash-spinner" />
      <p>Loading, please wait...</p>
    </div>
  );
}

export function Welcome() {
  return (
    <>
      <Hero
        title="Herzlich Willkommen"
        description="Wir freuen uns, Sie auf unserer Seite begrüßen zu dürfen. Hier finden
          Sie alle Informationen zu unserer Praxis, unseren Therapieangeboten
          und vielem mehr."
      />
      <Stage
        title="Unser Team"
        description="Teamarbeit schreiben wir „GROß“, denn ein gutes Team kann
          auch gute Arbeit leisten. So finden bei uns regelmäßig Teamsitzungen
          statt, in denen wir uns über auftretende Fragestellungen, ... Mehr
          dazu » "
        imgAlt="Ein Bild eines Teams von zwei Personen"
        imgSrc="./images/team-of-two-270x250.jpg"
        linkTo="/team"
      />
      <Stage
        title="Unsere Arbeit"
        description="Freude an der Arbeit überträgt sich von Therapeuten auf die
          Unsere Arbeit Freude an der Arbeit überträgt sich von Therapeuten auf
          die Patienten. Wir arbeiten mit Herzblut für Sie, so dass der Funke
          auf die Therapie überspringen kann. Unsere Praxis betreut sämtliche
          Störungsbilder, ... Mehr dazu »"
        imgAlt="Ein Bild eines Mädchens bei der Therapie"
        imgSrc="./images/therapy-of-one-270x250.jpg"
        imgStaging="right"
        linkTo="/arbeit"
      />
      <Stage
        title="Unsere Praxen"
        description="Unsere Praxen sind hell und freundlich, auf Ihre speziellen
          Therapiebedürfnisse eingerichtet und barrierefrei erreichbar. Sie
          finden uns in Arnsberg: im Gesundheitszentrum am Neumarkt Neumarkt 7,
          ... Mehr dazu »"
        imgAlt="Ein Bild beider Standorte, links Arnsberg, rechts Neheim"
        imgSrc="./images/standorte-270x250.jpg"
        linkTo="/standorte"
      />
      <div className="w-full px-4 flex flex-col gap-4">
        <div className="dark:bg-darkBackground rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center italic">
            Sprache macht glücklich. Lachen - allein dabei werden fast 100
            Muskeln im ganzen Körper aktiviert, von denen viele für das Sprechen
            wichtig sind. Wir haben Spaß an unserer Arbeit und möchten diesen
            gerne weitergeben.
          </p>
        </div>
      </div>
    </>
  );
}
