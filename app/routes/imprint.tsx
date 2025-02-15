import { TextLogo } from "~/components/logo";

export default function Imprint() {
  return (
    <div className=" mx-auto py-8 px-4">
      <h1 className=" text-3xl text-bold py-4 ">Impressum</h1>
      <p className="py-4">
        <address>
          <TextLogo hasSubline={false} textSize="text-xl" />
          Logopädische Praxis Anja Wette, Logopädin & Sabine Huckschlag,
          Logopädin (Partnerschaft)
          <br />
          Neumarkt 7<br />
          59821 Arnsberg
          <br />
          <a href="mailto:info@mundwerk-arnsberg.de">
            info@mundwerk-arnsberg.de
          </a>
          <br />
          Tel.: <a href="tel:+492931787738">02931-787738</a>
          <br />
          Fax: 02931-787737
        </address>
      </p>
      <p className={"py-4 italic"}>
        Aus organisatorischen Gründen können wir Terminabsprachen nur
        telefonisch entgegennehmen. Wir bitten um Ihr Verständnis!
      </p>
      <p className="py-4">
        Registergericht: <b>Amtsgericht Essen</b>
        <br />
        Registernummer: <b>PR 1005</b> <br />
        Berufsbezeichnung: <b>staatlich anerkannte Logopädin</b> (
        <a
          href="http://www.gesetze-im-internet.de/logopg/index.html"
          className="underline"
        >
          Gesetz über den Beruf des Logopäden
        </a>
        )
        <br />
        Aufsichtsbehörde: <b>Gesundheitsamt Hochsauerlandkreis</b>
        <br />
        <p className="py-4">
          <b>Haftungshinweis:</b>
          <br /> Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
          Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten
          Seiten sind ausschließlich deren Betreiber verantwortlich. Das
          Copyright der Fotos auf diesen Seiten liegt, soweit nicht anders
          angegeben, beim o.g. Betreiber dieser Seite. Die Fotos dürfen nicht
          ohne ausdrückliche Erlaubnis verwendet werden.
        </p>
      </p>
    </div>
  );
}
