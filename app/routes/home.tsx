import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mundwerk Logopädische Praxis - Home" },
    {
      name: "description",
      content:
        "Willkommen bei der Logopädsichen Praxis Mundwerk in Arnsberg und Neheim",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
