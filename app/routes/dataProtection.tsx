import type { Route } from "./+types/dataProtection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mundwerk Logopädische Praxis - Datenschutzerklärung" },
    {
      name: "description",
      content: "Auf dieser Seite finden Sie Datenschutzerklärung.",
    },
  ];
}

export default function DataProtection() {
  return (
    <>
      <h1 className="text-4xl font-bold">Data Protection</h1>
      <p className="text-lg">This is the data protection page.</p>
    </>
  );
}
