import type { Route } from "./+types/team";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mundwerk Arnsberg - Team" },
    { name: "description", content: "Hier stellen wir uns vor" },
  ];
}

export default function Team() {
  return (
    <div>
      Teamarbeit schreiben wir „GROß“, denn ein gutes Team kann auch gute Arbeit
      leisten. So finden bei uns regelmäßig Teamsitzungen statt, in denen wir
      uns über auftretende Fragestellungen, aktuelle Therapieverfahren und
      interdisziplinäre Möglichkeiten austauschen können. Auf diese Weise können
      wir unsere Kompetenzen stetig erweitern und unsere therapeutische
      Tätigkeit weiterentwickeln. Unser junges Team besteht aus 10 Logopädinnen,
      die in Vollzeit oder Teilzeit in den Praxen in Arnsberg und Neheim bei uns
      tätig sind. Da sich die Kolleginnen z.T. auf bestimmte Teilbereiche der
      Logopädie spezialisiert haben, können wir Sie je nach Anliegen bestmöglich
      betreuen.
    </div>
  );
}
