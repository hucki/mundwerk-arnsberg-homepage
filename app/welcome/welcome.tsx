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
    <main className="flex items-center justify-center pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="w-full h-64 bg-cover bg-center bg-[url(https://picsum.photos/1200/600)]">
          <div className="w-full h-full flex flex-col items-center justify-center bg-black/30 backdrop-opacity-10">
            <h1 className="isolate text-4xl font-bold text-primary ">
              Herzlich Willkommen
            </h1>
            <p className="text-white text-center w-3/4 ">
              Wir freuen uns, Sie auf unserer Seite begrüßen zu dürfen. Hier
              finden Sie alle Informationen zu unserer Praxis, unseren
              Therapieangeboten und vielem mehr.
            </p>
          </div>
        </div>
        <Stage
          title="Unser Team"
          description="Teamarbeit schreiben wir „GROß“, denn ein gutes Team kann
          auch gute Arbeit leisten. So finden bei uns regelmäßig Teamsitzungen
          statt, in denen wir uns über auftretende Fragestellungen, ... Mehr
          dazu » "
          imgAlt="Ein Bild eines Teams von zwei Personen"
          imgSrc="./images/team-of-two-270x250.jpg"
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
        />
        <Stage
          title="Unsere Praxen"
          description="Unsere Praxen sind hell und freundlich, auf Ihre speziellen
          Therapiebedürfnisse eingerichtet und barrierefrei erreichbar. Sie
          finden uns in Arnsberg: im Gesundheitszentrum am Neumarkt Neumarkt 7,
          ... Mehr dazu »"
          imgAlt="Ein Bild beider Standorte, links Arnsberg, rechts Neheim"
          imgSrc="./images/standorte-270x250.jpg"
        />
        <div className="w-full px-4 flex flex-col gap-4">
          <div className="dark:bg-darkBackground rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center italic">
              Sprache macht glücklich. Lachen - allein dabei werden fast 100
              Muskeln im ganzen Körper aktiviert, von denen viele für das
              Sprechen wichtig sind. Wir haben Spaß an unserer Arbeit und
              möchten diesen gerne weitergeben.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
