//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional
// Copy data to clipboard
import copy from "copy-to-clipboard";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBBtn, MDBAlert, MDBIcon, MDBTooltip } from "mdbreact";

class MessagePage extends React.Component {
  state = {};

  render() {
    return (
      <MDBContainer id="message" className="py-5 my-5 text-center">
        {this.props.location.pathname === "/about" && (
          <div className="text-left mt-5">
            <h2>Impressum</h2>
            <p className="lead mb-0 font-weight-bold">
              Werbeagentur Christian Aichner
            </p>
            <p>
              <strong>Christian Aichner</strong>
              <br />
              Tel: +43 681 205 027 54
              <br />
              Emailwerkstraße 29
              <br />
              9523 Villach-Landskron
              <br />
              <MDBBtn
                color="agency-red"
                size="md"
                href={`mailto:info@aichner-christian.com`}
              >
                <MDBIcon far icon="envelope" />
                Kontakt
              </MDBBtn>
              <p className="lead mt-5 mb-3">Firmeninformationen</p>
              <p className="mt-2 mb-1">
                <strong>UID-Nummer:</strong> ATU72504738
                <MDBTooltip placement="bottom" domElement tag="span">
                  <span>
                    <MDBIcon
                      far
                      icon="check-circle"
                      className="pl-2 green-text"
                    />
                  </span>
                  <span>Echtheit garantiert</span>
                </MDBTooltip>
              </p>
              {!this.state.copy_uid ? (
                <MDBBtn
                  color="blue"
                  onClick={() =>
                    this.setState({ copy_uid: true }, () => copy("ATU72504738"))
                  }
                >
                  <MDBIcon far icon="copy" />
                  UID Nummer kopieren
                </MDBBtn>
              ) : (
                <MDBBtn
                  color="success"
                  onClick={() => this.setState({ copy_uid: false })}
                >
                  <MDBIcon far icon="check-circle" />
                  UID Nummer kopiert
                </MDBBtn>
              )}
            </p>
            <p className="mt-2 mb-1">
              <strong>GISA-Zahl:</strong> 31375511
            </p>
            <p className="mt-2 mb-1">
              <strong>Behörde gem. ECG (E-Commerce Gesetz):</strong> Magistrat
              der Stadt Villach
            </p>
            <p className="lead mt-5 mb-2">Haftungsausschluss</p>
            <p>
              Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
              betrachten, von dem aus auf diese Webseite verwiesen wurde. Sofern
              Teile oder einzelne Formulierungen dieses Textes der geltenden
              Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen
              sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt
              und ihrer Gültigkeit davon unberührt.
            </p>
            <p className="lead mb-2">Haftung für Inhalte dieser Webseite</p>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            <p className="lead mb-2">Haftung für Links auf Webseiten Dritter</p>
            <p>
              Unser Angebot enthält Links zu externen Websites. Auf den Inhalt
              dieser externen Webseiten haben wir keinerlei Einfluss. Deshalb
              können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
              Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
              konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
            <p className="lead mb-2">Urheberrecht</p>
            <p>
              Die Betreiber dieser Webseite sind bemüht, stets die Urheberrechte
              anderer zu beachten bzw. auf selbst erstellte sowie lizenzfreie
              Werke zurückzugreifen. Die durch die Seitenbetreiber erstellten
              Inhalte und Werke auf dieser Webseite unterliegen dem
              Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
          </div>
        )}
        {this.props.location.pathname === "/privacy" && (
          <div className="text-left mt-5">
            <h2>Datenschutzerklärung</h2>
            <p className="lead mb-0 font-weight-bold">
              Werbeagentur Christian Aichner
            </p>
            <p>
              <strong>Christian Aichner</strong>
              <br />
              Tel: +43 681 205 027 54
              <br />
              Emailwerkstraße 29
              <br />
              9523 Villach-Landskron
              <br />
              <MDBBtn
                color="agency-red"
                size="md"
                href={`mailto:info@aichner-christian.com`}
              >
                <MDBIcon far icon="envelope" />
                Kontakt
              </MDBBtn>
            </p>
            <p>
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und
              Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend
              kurz „Daten“) innerhalb unseres Onlineangebotes und der mit ihm
              verbundenen Webseiten, Funktionen und Inhalte sowie externen
              Onlinepräsenzen, wie z.B. unser Social Media Profile auf
              (nachfolgend gemeinsam bezeichnet als „Onlineangebot“). Im
              Hinblick auf die verwendeten Begrifflichkeiten, wie z.B.
              „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die
              Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
            </p>

            <h2>Datenschutzbeauftragter</h2>
            <p>
              Christian Aichner
              <br />
              9500 Villach
              <br />
            </p>
            <p>
              Kontakt:{" "}
              <a href="mailto:legal@aichner-christian.com">
                legal@aichner-christian.com
              </a>
            </p>

            <h2>Arten der verarbeiteten Daten</h2>
            <ul>
              <li>Bestandsdaten (z.B., Namen, Adressen)</li>
              <li>Kontaktdaten (z.B., E-Mail, Telefonnummern)</li>
              <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos)</li>
              <li>
                Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten,
                Zugriffszeiten)
              </li>
              <li>
                Meta-/Kommunikationsdaten (z.B., Geräte-Informationen,
                IP-Adressen)
              </li>
            </ul>

            <h2>Kategorien betroffener Personen</h2>
            <p>
              Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen
              wir die betroffenen Personen zusammenfassend auch als „Nutzer“).
            </p>

            <h2>Zweck der Verarbeitung</h2>
            <ul>
              <li>
                Zurverfügungstellung des Onlineangebotes, seiner Funktionen und
                Inhalte
              </li>
              <li>
                Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern
              </li>
              <li>Sicherheitsmaßnahmen</li>
              <li>Reichweitenmessung/Marketing</li>
            </ul>

            <h2>Verwendete Begrifflichkeiten</h2>
            <p>
              „Personenbezogene Daten“ sind alle Informationen, die sich auf
              eine identifizierte oder identifizierbare natürliche Person (im
              Folgenden „betroffene Person“) beziehen; als identifizierbar wird
              eine natürliche Person angesehen, die direkt oder indirekt,
              insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
              zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
              (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen
              identifiziert werden kann, die Ausdruck der physischen,
              physiologischen, genetischen, psychischen, wirtschaftlichen,
              kulturellen oder sozialen Identität dieser natürlichen Person
              sind.
            </p>
            <p>
              „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter
              Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im
              Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit
              und umfasst praktisch jeden Umgang mit Daten.
            </p>
            <p>
              „Pseudonymisierung“ die Verarbeitung personenbezogener Daten in
              einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung
              zusätzlicher Informationen nicht mehr einer spezifischen
              betroffenen Person zugeordnet werden können, sofern diese
              zusätzlichen Informationen gesondert aufbewahrt werden und
              technischen und organisatorischen Maßnahmen unterliegen, die
              gewährleisten, dass die personenbezogenen Daten nicht einer
              identifizierten oder identifizierbaren natürlichen Person
              zugewiesen werden.
            </p>
            <p>
              „Profiling“ jede Art der automatisierten Verarbeitung
              personenbezogener Daten, die darin besteht, dass diese
              personenbezogenen Daten verwendet werden, um bestimmte persönliche
              Aspekte, die sich auf eine natürliche Person beziehen, zu
              bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung,
              wirtschaftliche Lage, Gesundheit, persönliche Vorlieben,
              Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder
              Ortswechsel dieser natürlichen Person zu analysieren oder
              vorherzusagen.
            </p>
            <p>
              Als „Verantwortlicher“ wird die natürliche oder juristische
              Person, Behörde, Einrichtung oder andere Stelle, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
              von personenbezogenen Daten entscheidet, bezeichnet.
            </p>
            <p>
              „Auftragsverarbeiter“ eine natürliche oder juristische Person,
              Behörde, Einrichtung oder andere Stelle, die personenbezogene
              Daten im Auftrag des Verantwortlichen verarbeitet.
            </p>

            <h2>Sicherheitsmaßnahmen</h2>
            <p>
              Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung
              des Stands der Technik, der Implementierungskosten und der Art,
              des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie
              der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des
              Risikos für die Rechte und Freiheiten natürlicher Personen,
              geeignete technische und organisatorische Maßnahmen, um ein dem
              Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
            <p>
              Zu den Maßnahmen gehören insbesondere die Sicherung der
              Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
              Kontrolle des physischen Zugangs zu den Daten, als auch des sie
              betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der
              Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren
              eingerichtet, die eine Wahrnehmung von Betroffenenrechten,
              Löschung von Daten und Reaktion auf Gefährdung der Daten
              gewährleisten. Ferner berücksichtigen wir den Schutz
              personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl
              von Hardware, Software sowie Verfahren, entsprechend dem Prinzip
              des Datenschutzes durch Technikgestaltung und durch
              datenschutzfreundliche Voreinstellungen (Art. 25 DSGVO).
            </p>

            <h2>Zusammenarbeit mit Auftragsverarbeitern und Dritten</h2>
            <p>
              Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen
              Personen und Unternehmen (Auftragsverarbeitern oder Dritten)
              offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf
              die Daten gewähren, erfolgt dies nur auf Grundlage einer
              gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an
              Dritte, wie an Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b
              DSGVO zur Vertragserfüllung erforderlich ist), Sie eingewilligt
              haben, eine rechtliche Verpflichtung dies vorsieht oder auf
              Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von
              Beauftragten, Webhostern, etc.).
            </p>
            <p>
              Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage
              eines sog. „Auftragsverarbeitungsvertrages“ beauftragen, geschieht
              dies auf Grundlage des Art. 28 DSGVO.
            </p>

            <h2>Übermittlungen in Drittländer</h2>
            <p>
              Sofern wir Daten in einem Drittland (d.h. außerhalb der
              Europäischen Union (EU) oder des Europäischen Wirtschaftsraums
              (EWR)) verarbeiten oder dies im Rahmen der Inanspruchnahme von
              Diensten Dritter oder Offenlegung, bzw. Übermittlung von Daten an
              Dritte geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer
              (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung,
              aufgrund einer rechtlichen Verpflichtung oder auf Grundlage
              unserer berechtigten Interessen geschieht. Vorbehaltlich
              gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder
              lassen wir die Daten in einem Drittland nur beim Vorliegen der
              besonderen Voraussetzungen der Art. 44 ff. DSGVO verarbeiten. D.h.
              die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien,
              wie der offiziell anerkannten Feststellung eines der EU
              entsprechenden Datenschutzniveaus (z.B. für die USA durch das
              „Privacy Shield“) oder Beachtung offiziell anerkannter spezieller
              vertraglicher Verpflichtungen (so genannte
              „Standardvertragsklauseln“).
            </p>

            <h2>Rechte der betroffenen Personen</h2>
            <p>
              Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
              betreffende Daten verarbeitet werden und auf Auskunft über diese
              Daten sowie auf weitere Informationen und Kopie der Daten
              entsprechend Art. 15 DSGVO.
            </p>
            <p>
              Sie haben entsprechend. Art. 16 DSGVO das Recht, die
              Vervollständigung der Sie betreffenden Daten oder die Berichtigung
              der Sie betreffenden unrichtigen Daten zu verlangen.
            </p>
            <p>
              Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu verlangen,
              dass betreffende Daten unverzüglich gelöscht werden, bzw.
              alternativ nach Maßgabe des Art. 18 DSGVO eine Einschränkung der
              Verarbeitung der Daten zu verlangen.
            </p>
            <p>
              Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten,
              die Sie uns bereitgestellt haben nach Maßgabe des Art. 20 DSGVO zu
              erhalten und deren Übermittlung an andere Verantwortliche zu
              fordern.
            </p>
            <p>
              Sie haben ferner gem. Art. 77 DSGVO das Recht, eine Beschwerde bei
              der zuständigen Aufsichtsbehörde einzureichen.
            </p>

            <h2>Widerrufsrecht</h2>
            <p>
              Sie haben das Recht, erteilte Einwilligungen gem. Art. 7 Abs. 3
              DSGVO mit Wirkung für die Zukunft zu widerrufen.
            </p>

            <h2>Widerspruchsrecht</h2>
            <p>
              Sie können der künftigen Verarbeitung der Sie betreffenden Daten
              nach Maßgabe des Art. 21 DSGVO jederzeit widersprechen. Der
              Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke
              der Direktwerbung erfolgen.
            </p>

            <h2>Cookies und Widerspruchsrecht bei Direktwerbung</h2>
            <p>
              Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern
              der Nutzer gespeichert werden. Innerhalb der Cookies können
              unterschiedliche Angaben gespeichert werden. Ein Cookie dient
              primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf dem
              das Cookie gespeichert ist) während oder auch nach seinem Besuch
              innerhalb eines Onlineangebotes zu speichern. Als temporäre
              Cookies, bzw. „Session-Cookies“ oder „transiente Cookies“, werden
              Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer ein
              Onlineangebot verlässt und seinen Browser schließt. In einem
              solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem
              Onlineshop oder ein Login-Status gespeichert werden. Als
              „permanent“ oder „persistent“ werden Cookies bezeichnet, die auch
              nach dem Schließen des Browsers gespeichert bleiben. So kann z.B.
              der Login-Status gespeichert werden, wenn die Nutzer diese nach
              mehreren Tagen aufsuchen. Ebenso können in einem solchen Cookie
              die Interessen der Nutzer gespeichert werden, die für
              Reichweitenmessung oder Marketingzwecke verwendet werden. Als
              „Third-Party-Cookie“ werden Cookies bezeichnet, die von anderen
              Anbietern als dem Verantwortlichen, der das Onlineangebot
              betreibt, angeboten werden (andernfalls, wenn es nur dessen
              Cookies sind spricht man von „First-Party Cookies“).
            </p>
            <p>
              Wir können temporäre und permanente Cookies einsetzen und klären
              hierüber im Rahmen unserer Datenschutzerklärung auf.
            </p>
            <p>
              Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner
              gespeichert werden, werden sie gebeten die entsprechende Option in
              den Systemeinstellungen ihres Browsers zu deaktivieren.
              Gespeicherte Cookies können in den Systemeinstellungen des
              Browsers gelöscht werden. Der Ausschluss von Cookies kann zu
              Funktionseinschränkungen dieses Onlineangebotes führen.
            </p>
            <p>
              Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des
              Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der
              Dienste, vor allem im Fall des Trackings, über die S-amerikanische
              Seite http://www.aboutads.info/choices/ oder die EU-Seite
              http://www.youronlinechoices.com/ erklärt werden. Des Weiteren
              kann die Speicherung von Cookies mittels deren Abschaltung in den
              Einstellungen des Browsers erreicht werden. Bitte beachten Sie,
              dass dann gegebenenfalls nicht alle Funktionen dieses
              Onlineangebotes genutzt werden können.
            </p>

            <h2>Löschung von Daten</h2>
            <p>
              Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17
              und 18 DSGVO gelöscht oder in ihrer Verarbeitung eingeschränkt.
              Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich
              angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald
              sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der
              Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              Sofern die Daten nicht gelöscht werden, weil sie für andere und
              gesetzlich zulässige Zwecke erforderlich sind, wird deren
              Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und
              nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die
              aus handels- oder steuerrechtlichen Gründen aufbewahrt werden
              müssen.
            </p>
            <p>
              Nach gesetzlichen Vorgaben in Österreich erfolgt die Aufbewahrung
              insbesondere für 7 J gemäß § 132 Abs. 1 BAO
              (Buchhaltungsunterlagen, Belege/Rechnungen, Konten, Belege,
              Geschäftspapiere, Aufstellung der Einnahmen und Ausgaben, etc.),
              für 22 Jahre im Zusammenhang mit Grundstücken und für 10 Jahre bei
              Unterlagen im Zusammenhang mit elektronisch erbrachten Leistungen,
              Telekommunikations-, Rundfunk- und Fernsehleistungen, die an
              Nichtunternehmer in EU-Mitgliedstaaten erbracht werden und für die
              der Mini-One-Stop-Shop (MOSS) in Anspruch genommen wird.
            </p>

            <h2>Registrierfunktion</h2>
            <p>
              Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung
              werden die erforderlichen Pflichtangaben den Nutzern mitgeteilt
              und auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO zu Zwecken der
              Bereitstellung des Nutzerkontos verarbeitet. Zu den verarbeiteten
              Daten gehören insbesondere die Login-Informationen (Name, Passwort
              sowie eine E-Mailadresse). Die im Rahmen der Registrierung
              eingegebenen Daten werden für die Zwecke der Nutzung des
              Nutzerkontos und dessen Zwecks verwendet.
            </p>
            <p>
              Die Nutzer können über Informationen, die für deren Nutzerkonto
              relevant sind, wie z.B. technische Änderungen, per E-Mail
              informiert werden. Wenn Nutzer ihr Nutzerkonto gekündigt haben,
              werden deren Daten im Hinblick auf das Nutzerkonto, vorbehaltlich
              einer gesetzlichen Aufbewahrungspflicht, gelöscht. Es obliegt den
              Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende
              zu sichern. Wir sind berechtigt, sämtliche während der
              Vertragsdauer gespeicherten Daten des Nutzers unwiederbringlich zu
              löschen.
            </p>
            <p>
              Im Rahmen der Inanspruchnahme unserer Registrierungs- und
              Anmeldefunktionen sowie der Nutzung des Nutzerkontos, speichern
              wir die IP-Adresse und den Zeitpunkt der jeweiligen
              Nutzerhandlung. Die Speicherung erfolgt auf Grundlage unserer
              berechtigten Interessen, als auch der Nutzer an Schutz vor
              Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe
              dieser Daten an Dritte erfolgt grundsätzlich nicht, außer sie ist
              zur Verfolgung unserer Ansprüche erforderlich oder es besteht
              hierzu besteht eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1
              lit. c. DSGVO. Die IP-Adressen werden spätestens nach 7 Tagen
              anonymisiert oder gelöscht.
            </p>

            <h2>Kommentare und Beiträge</h2>
            <p>
              Wenn Nutzer Kommentare oder sonstige Beiträge hinterlassen, können
              ihre IP-Adressen auf Grundlage unserer berechtigten Interessen im
              Sinne des Art. 6 Abs. 1 lit. f. DSGVO für 7 Tage gespeichert
              werden. Das erfolgt zu unserer Sicherheit, falls jemand in
              Kommentaren und Beiträgen widerrechtliche Inhalte hinterlässt
              (Beleidigungen, verbotene politische Propaganda, etc.). In diesem
              Fall können wir selbst für den Kommentar oder Beitrag belangt
              werden und sind daher an der Identität des Verfassers
              interessiert.
            </p>
            <p>
              Des Weiteren behalten wir uns vor, auf Grundlage unserer
              berechtigten Interessen gem. Art. 6 Abs. 1 lit. f. DSGVO, die
              Angaben der Nutzer zwecks Spamerkennung zu verarbeiten. Auf
              derselben Rechtsgrundlage behalten wir uns vor, im Fall von
              Umfragen die IP-Adressen der Nutzer für deren Dauer zu speichern
              und Cookies zu verwenden, um Mehrfachabstimmungen zu vermeiden.
              Die im Rahmen der Kommentare und Beiträge angegebenen Daten,
              werden von uns bis zum Widerspruch der Nutzer dauerhaft
              gespeichert.
            </p>

            <h2>Kontaktaufnahme</h2>
            <p>
              Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail,
              Telefon oder via sozialer Medien) werden die Angaben des Nutzers
              zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art.
              6 Abs. 1 lit. b. (im Rahmen vertraglicher-/vorvertraglicher
              Beziehungen), Art. 6 Abs. 1 lit. f. (andere Anfragen) DSGVO
              verarbeitet.. Die Angaben der Nutzer können in einem
              Customer-Relationship-Management System ("CRM System") oder
              vergleichbarer Anfragenorganisation gespeichert werden. Wir
              löschen die Anfragen, sofern diese nicht mehr erforderlich sind.
              Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten
              die gesetzlichen Archivierungspflichten.
            </p>

            <h2>Newsletter</h2>
            <p>
              Mit den nachfolgenden Hinweisen informieren wir Sie über die
              Inhalte unseres Newsletters sowie das Anmelde-, Versand- und das
              statistische Auswertungsverfahren sowie Ihre Widerspruchsrechte
              auf. Indem Sie unseren Newsletter abonnieren, erklären Sie sich
              mit dem Empfang und den beschriebenen Verfahren einverstanden.
            </p>
            <p>
              Inhalt des Newsletters: Wir versenden Newsletter, E-Mails und
              weitere elektronische Benachrichtigungen mit werblichen
              Informationen (nachfolgend „Newsletter“) nur mit der Einwilligung
              der Empfänger oder einer gesetzlichen Erlaubnis. Sofern im Rahmen
              einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben
              werden, sind sie für die Einwilligung der Nutzer maßgeblich. Im
              Übrigen enthalten unsere Newsletter Informationen zu unseren
              Produkten und sie begleitenden Informationen (z.B.
              Sicherheitshinweise), Angeboten, Aktionen und unser Unternehmen.
            </p>
            <p>
              Double-Opt-In und Protokollierung: Die Anmeldung zu unserem
              Newsletter erfolgt in einem sog. Double-Opt-In-Verfahren. D.h. Sie
              erhalten nach der Anmeldung eine E-Mail, in der Sie um die
              Bestätigung Ihrer Anmeldung gebeten werden. Diese Bestätigung ist
              notwendig, damit sich niemand mit fremden E-Mailadressen anmelden
              kann. Die Anmeldungen zum Newsletter werden protokolliert, um den
              Anmeldeprozess entsprechend den rechtlichen Anforderungen
              nachweisen zu können. Hierzu gehört die Speicherung des Anmelde-
              und des Bestätigungszeitpunkts, als auch der IP-Adresse. Ebenso
              werden die Änderungen Ihrer bei dem Versanddienstleister
              gespeicherten Daten protokolliert.
            </p>
            <p>
              Anmeldedaten: Um sich für den Newsletter anzumelden, reicht es
              aus, wenn Sie Ihre E-Mailadresse angeben. Optional bitten wir Sie
              einen Namen, zwecks persönlicher Ansprache im Newsletters
              anzugeben.
            </p>
            <p>
              Der Versand des Newsletters und die mit ihm verbundene
              Erfolgsmessung erfolgen auf Grundlage einer Einwilligung der
              Empfänger gem. Art. 6 Abs. 1 lit. a, Art. 7 DSGVO i.V.m § 107 Abs.
              2 TKG oder falls eine Einwilligung nicht erforderlich ist, auf
              Grundlage unserer berechtigten Interessen am Direktmarketing gem.
              Art. 6 Abs. 1 lt. f. DSGVO i.V.m. § 107 Abs. 2 u. 3 TKG.
            </p>
            <p>
              Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage
              unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO.
              Unser Interesse richtet sich auf den Einsatz eines
              nutzerfreundlichen sowie sicheren Newslettersystems, das sowohl
              unseren geschäftlichen Interessen dient, als auch den Erwartungen
              der Nutzer entspricht und uns ferner den Nachweis von
              Einwilligungen erlaubt.
            </p>
            <p>
              Kündigung/Widerruf - Sie können den Empfang unseres Newsletters
              jederzeit kündigen, d.h. Ihre Einwilligungen widerrufen. Einen
              Link zur Kündigung des Newsletters finden Sie am Ende eines jeden
              Newsletters. Wir können die ausgetragenen E-Mailadressen bis zu
              drei Jahren auf Grundlage unserer berechtigten Interessen
              speichern bevor wir sie löschen, um eine ehemals gegebene
              Einwilligung nachweisen zu können. Die Verarbeitung dieser Daten
              wird auf den Zweck einer möglichen Abwehr von Ansprüchen
              beschränkt. Ein individueller Löschungsantrag ist jederzeit
              möglich, sofern zugleich das ehemalige Bestehen einer Einwilligung
              bestätigt wird.
            </p>

            <h2>Erhebung von Zugriffsdaten und Logfiles</h2>
            <p>
              Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer
              berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO
              Daten über jeden Zugriff auf den Server, auf dem sich dieser
              Dienst befindet (sogenannte Serverlogfiles). Zu den Zugriffsdaten
              gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit
              des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen
              Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers,
              Referrer URL (die zuvor besuchte Seite), IP-Adresse und der
              anfragende Provider.
            </p>
            <p>
              Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur
              Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer
              von maximal 7 Tagen gespeichert und danach gelöscht. Daten, deren
              weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis
              zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung
              ausgenommen.
            </p>

            <h2>Onlinepräsenzen in sozialen Medien</h2>
            <p>
              Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und
              Plattformen, um mit den dort aktiven Kunden, Interessenten und
              Nutzern kommunizieren und sie dort über unsere Leistungen
              informieren zu können.
            </p>
            <p>
              Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des
              Raumes der Europäischen Union verarbeitet werden können. Hierdurch
              können sich für die Nutzer Risiken ergeben, weil so z.B. die
              Durchsetzung der Rechte der Nutzer erschwert werden könnte. Im
              Hinblick auf US-Anbieter die unter dem Privacy-Shield zertifiziert
              sind, weisen wir darauf hin, dass sie sich damit verpflichten, die
              Datenschutzstandards der EU einzuhalten.
            </p>
            <p>
              Ferner werden die Daten der Nutzer im Regelfall für
              Marktforschungs- und Werbezwecke verarbeitet. So können z.B. aus
              dem Nutzungsverhalten und sich daraus ergebenden Interessen der
              Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können
              wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und
              außerhalb der Plattformen zu schalten, die mutmaßlich den
              Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im
              Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in
              denen das Nutzungsverhalten und die Interessen der Nutzer
              gespeichert werden. Ferner können in den Nutzungsprofilen auch
              Daten unabhängig der von den Nutzern verwendeten Geräte
              gespeichert werden (insbesondere wenn die Nutzer Mitglieder der
              jeweiligen Plattformen sind und bei diesen eingeloggt sind). Die
              Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf
              Grundlage unserer berechtigten Interessen an einer effektiven
              Information der Nutzer und Kommunikation mit den Nutzern gem. Art.
              6 Abs. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen
              Anbietern um eine Einwilligung in die Datenverarbeitung gebeten
              werden (d.h. ihr Einverständnis z.B. über das Anhaken eines
              Kontrollkästchens oder Bestätigung einer Schaltfläche erklären)
              ist die Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 lit. a.,
              Art. 7 DSGVO. Für eine detaillierte Darstellung der jeweiligen
              Verarbeitungen und der Widerspruchsmöglichkeiten (Opt-Out),
              verweisen wir auf die nachfolgend verlinkten Angaben der Anbieter.
              Auch im Fall von Auskunftsanfragen und der Geltendmachung von
              Nutzerrechten, weisen wir darauf hin, dass diese am effektivsten
              bei den Anbietern geltend gemacht werden können. Nur die Anbieter
              haben jeweils Zugriff auf die Daten der Nutzer und können direkt
              entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie
              dennoch Hilfe benötigen, dann können Sie sich an uns wenden.
            </p>
            <h4>Facebook</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/about/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/settings?tab=ads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Opt-Out (Facebook)
                </a>
              </li>
              <li>
                <a
                  href="http://www.youronlinechoices.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Opt-Out (Your online choices)
                </a>
              </li>
              <li>
                <a
                  href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Shield
                </a>
              </li>
            </ul>
            <h4>Google / YouTube</h4>
            <ul>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a
                  href="https://adssettings.google.com/authenticated"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Opt-Out
                </a>
              </li>
              <li>
                <a
                  href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Shield
                </a>
              </li>
            </ul>
            <h4>Instagram</h4>
            <ul>
              <li>
                <a
                  href="http://instagram.com/about/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datenschutzerklärung / Opt-Out
                </a>
              </li>
            </ul>
            <h4>Twitter</h4>
            <ul>
              <li>
                <a
                  href="https://twitter.com/de/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/personalization"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Opt-Out
                </a>
              </li>
              <li>
                <a
                  href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Shield
                </a>
              </li>
            </ul>

            <h2>Einbindung von Diensten und Inhalten Dritter</h2>
            <p>
              Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer
              berechtigten Interessen (d.h. Interesse an der Analyse,
              Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes
              im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder
              Serviceangebote von Drittanbietern ein, um deren Inhalte und
              Services, wie z.B. Videos oder Schriftarten einzubinden
              (nachfolgend einheitlich bezeichnet als “Inhalte”).
            </p>
            <p>
              Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte,
              die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse
              die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse
              ist damit für die Darstellung dieser Inhalte erforderlich. Wir
              bemühen uns nur solche Inhalte zu verwenden, deren jeweilige
              Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte
              verwenden. Drittanbieter können ferner so genannte Pixel-Tags
              (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für
              statistische oder Marketingzwecke verwenden. Durch die
              "Pixel-Tags" können Informationen, wie der Besucherverkehr auf den
              Seiten dieser Website ausgewertet werden. Die pseudonymen
              Informationen können ferner in Cookies auf dem Gerät der Nutzer
              gespeichert werden und unter anderem technische Informationen zum
              Browser und Betriebssystem, verweisende Webseiten, Besuchszeit
              sowie weitere Angaben zur Nutzung unseres Onlineangebotes
              enthalten, als auch mit solchen Informationen aus anderen Quellen
              verbunden werden.
            </p>

            <h2>YouTube</h2>
            <p>
              Wir binden die Videos der Plattform “YouTube” des Anbieters Google
              LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein.
            </p>

            <h2>Verwendung von Facebook Social Plugins</h2>
            <p>
              Wir nutzen auf Grundlage unserer berechtigten Interessen (d.h.
              Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb
              unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO)
              Social Plugins ("Plugins") des sozialen Netzwerkes facebook.com,
              welches von der Facebook Ireland Ltd., 4 Grand Canal Square, Grand
              Canal Harbour, Dublin 2, Irland betrieben wird ("Facebook").
              Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und
              Schaltflächen gehören, mit denen Nutzer Inhalte dieses
              Onlineangebotes innerhalb von Facebook teilen können. Die Liste
              und das Aussehen der Facebook Social Plugins kann
              <a
                href="https://developers.facebook.com/docs/plugins/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                hier{" "}
              </a>
              eingesehen werden.
            </p>
            <p>
              Facebook ist unter dem Privacy-Shield-Abkommen zertifiziert und
              bietet hierdurch eine Garantie, das europäische Datenschutzrecht
              einzuhalten.
            </p>
            <p>
              Wenn ein Nutzer eine Funktion dieses Onlineangebotes aufruft, die
              ein solches Plugin enthält, baut sein Gerät eine direkte
              Verbindung mit den Servern von Facebook auf. Der Inhalt des
              Plugins wird von Facebook direkt an das Gerät des Nutzers
              übermittelt und von diesem in das Onlineangebot eingebunden. Dabei
              können aus den verarbeiteten Daten Nutzungsprofile der Nutzer
              erstellt werden. Wir haben daher keinen Einfluss auf den Umfang
              der Daten, die Facebook mit Hilfe dieses Plugins erhebt und
              informiert die Nutzer daher entsprechend unserem Kenntnisstand.
              Durch die Einbindung der Plugins erhält Facebook die Information,
              dass ein Nutzer die entsprechende Seite des Onlineangebotes
              aufgerufen hat. Ist der Nutzer bei Facebook eingeloggt, kann
              Facebook den Besuch seinem Facebook-Konto zuordnen. Wenn Nutzer
              mit den Plugins interagieren, zum Beispiel den Like Button
              betätigen oder einen Kommentar abgeben, wird die entsprechende
              Information von Ihrem Gerät direkt an Facebook übermittelt und
              dort gespeichert. Falls ein Nutzer kein Mitglied von Facebook ist,
              besteht trotzdem die Möglichkeit, dass Facebook seine IP-Adresse
              in Erfahrung bringt und speichert. Laut Facebook wird in
              Deutschland nur eine anonymisierte IP-Adresse gespeichert.
            </p>
            <p>
              Zweck und Umfang der Datenerhebung und die weitere Verarbeitung
              und Nutzung der Daten durch Facebook sowie die diesbezüglichen
              Rechte und Einstellungsmöglichkeiten zum Schutz der Privatsphäre
              der Nutzer, können diese den Datenschutzhinweisen von Facebook
              entnehmen
            </p>
            <p>
              Wenn ein Nutzer Facebookmitglied ist und nicht möchte, dass
              Facebook über dieses Onlineangebot Daten über ihn sammelt und mit
              seinen bei Facebook gespeicherten Mitgliedsdaten verknüpft, muss
              er sich vor der Nutzung unseres Onlineangebotes bei Facebook
              ausloggen und seine Cookies löschen. Weitere Einstellungen und
              Widersprüche zur Nutzung von Daten für Werbezwecke, sind innerhalb
              der Facebook-Profileinstellungen möglich:
              https://www.facebook.com/settings?tab=ads oder über die
              US-amerikanische Seite http://www.aboutads.info/choices/ oder die
              EU-Seite http://www.youronlinechoices.com/. Die Einstellungen
              erfolgen plattformunabhängig, d.h. sie werden für alle Geräte, wie
              Desktopcomputer oder mobile Geräte übernommen.
            </p>

            <h2>Instagram</h2>
            <p>
              Innerhalb unseres Onlineangebotes können Funktionen und Inhalte
              des Dienstes LinkedIn, angeboten durch die LinkedIn Ireland
              Unlimited Company Wilton Place, Dublin 2, Irland, eingebunden
              werden. Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte
              und Schaltflächen gehören, mit denen Nutzer Inhalte dieses
              Onlineangebotes innerhalb von LinkedIn teilen können. Sofern die
              Nutzer Mitglieder der Plattform LinkedIn sind, kann LinkedIn den
              Aufruf der o.g. Inhalte und Funktionen den dortigen Profilen der
              Nutzer zuordnen. Datenschutzerklärung von LinkedIn:
              https://www.linkedin.com/legal/privacy-policy.. LinkedIn ist unter
              dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine
              Garantie, das europäische Datenschutzrecht einzuhalten.
            </p>

            <h2>Google Analytics</h2>
            <p>
              Wir verwenden auf dieser Website Google Analytics der Firma Google
              LLC (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) um
              Besucherdaten statistisch auszuwerten. Dabei verwendet Google
              Analytics zielorientierte Cookies.
            </p>
            <h3>Pseudonymisierung</h3>
            <p>
              Unser Anliegen im Sinne der DSGVO ist die Verbesserung unseres
              Angebotes und unseres Webauftritts. Da uns die Privatsphäre
              unserer Nutzer wichtig ist, werden die Nutzerdaten
              pseudonymisiert. Die Datenverarbeitung erfolgt auf Basis der
              gesetzlichen Bestimmungen des § 96 Abs 3 TKG sowie des Art 6
              EU-DSGVO Abs 1 lit a (Einwilligung) und/oder f (berechtigtes
              Interesse) der DSGVO.
            </p>
            <p>
              Mithilfe des Browser-Add-ons zur Deaktivierung von Google
              Analytics-JavaScript (ga.js, analytics.js, dc.js) können
              Website-Besucher verhindern, dass Google Analytics ihre Daten
              verwendet. Sie können die Erfassung der durch das Cookie erzeugten
              und auf Ihre Nutzung der Website bezogenen Daten an Google sowie
              die Verarbeitung dieser Daten durch Google verhindern, indem Sie
              das unter dem folgenden Link verfügbare Browser-Plugin
              herunterladen und installieren:
              https://tools.google.com/dlpage/gaoptout?hl=de
            </p>
            <h3>Google Analytics IP-Anonymisierung</h3>
            <p>
              Wir haben auf dieser Webseite die IP-Adressen-Anonymisierung von
              Google Analytics implementiert. Diese Funktion wurde von Google
              entwickelt, damit diese Webseite die geltenden
              Datenschutzbestimmungen und Empfehlungen der lokalen
              Datenschutzbehörden einhalten kann, wenn diese eine Speicherung
              der vollständigen IP-Adresse untersagen. Die Anonymisierung bzw.
              Maskierung der IP findet statt, sobald die IP-Adressen im Google
              Analytics-Datenerfassungsnetzwerk eintreffen und bevor eine
              Speicherung oder Verarbeitung der Daten stattfindet.
            </p>

            <h2>Cloudflare</h2>
            <p>
              Wir verwenden auf dieser Webseite Cloudflare der Firma Cloudflare,
              Inc. (101 Townsend St., San Francisco, CA 94107, USA), um unsere
              Webseite schneller und sicherer zu machen. Dabei verwendet
              Cloudflare Cookies und verarbeitet User-Daten. Cloudflare, Inc.
              ist eine amerikanische Firma, die ein Content Delivery Network und
              diverse Sicherheitsdienste anbietet. Diese Dienste befinden sich
              zwischen dem User und unserem Hosting-Anbieter. Was das alles
              genau bedeutet, versuchen wir im Folgenden genauer zu erläutern.
            </p>
            <h4>Was ist Cloudflare?</h4>
            <p>
              Ein Content Delivery Network (CDN), wie es die Firma Cloudflare
              bereitstellt, ist nichts anderes als ein Netzwerk aus verbundenen
              Servern. Cloudflare hat auf der ganzen Welt solche Server
              verteilt, um Webseiten schneller auf Ihren Bildschirm zu bringen.
              Ganz einfach gesagt, legt Cloudflare Kopien unserer Webseite an
              und platziert sie auf ihren eigenen Servern. Wenn Sie jetzt unsere
              Webseite besuchen, stellt ein System der Lastenverteilung sicher,
              dass die größten Teile unsere Webseite von jenem Server
              ausgeliefert werden, der Ihnen unsere Webseite am schnellsten
              anzeigen kann. Die Strecke der Datenübertragung zu Ihrem Browser
              wird durch ein CDN deutlich verkürzt. Somit wird Ihnen der Content
              unserer Webseite durch Cloudflare nicht nur von unserem
              Hosting-Server geliefert, sondern von Servern aus der ganzen Welt.
              Besonders hilfreich wird der Einsatz von Cloudflare für User aus
              dem Ausland, da hier die Seite von einem Server in der Nähe
              ausgeliefert werden kann. Neben dem schnellen Ausliefern von
              Webseiten bietet Cloudflare auch diverse Sicherheitsdienste, wie
              den DDoS-Schutz oder die Web Application Firewall an.
            </p>
            <h4>Warum wir Cloudflare auf unserer Webseite verwenden?</h4>
            <p>
              Natürlich wollen wir Ihnen mit unserer Webseite das bestmögliche
              Service bieten. Cloudflare hilft uns dabei, unsere Webseite
              schneller und sicherer zu machen. Cloudflare bietet uns sowohl
              Web-Optimierungen als auch Sicherheitsdienste, wie DDoS-Schutz und
              Web-Firewall, an. Dazu gehören auch ein Reverse-Proxy und das
              Content-Verteilungsnetzwerk (CDN). Cloudflare blockiert
              Bedrohungen und begrenzt missbräuchliche Bots und Crawler, die
              unsere Bandbreite und Serverressourcen verschwenden. Durch das
              Speichern unserer Webseite auf lokalen Datenzentren und das
              Blockieren von Spam-Software ermöglicht Cloudflare, unsere
              Bandbreitnutzung etwa um 60% zu reduzieren. Das Bereitstellen von
              Inhalten über ein Datenzentrum in Ihrer Nähe und einiger dort
              durchgeführten Web-Optimierungen reduziert die durchschnittliche
              Ladezeit einer Webseite etwa um die Hälfte. Durch die Einstellung
              „I´m Under Attack Mode“ („Ich werde angegriffen“-Modus) können
              laut Cloudflare weitere Angriffe abgeschwächt werden, indem eine
              JavaScript-Rechenaufgabe angezeigt wird, die man lösen muss, bevor
              ein User auf eine Webseite zugreifen kann. Insgesamt wird dadurch
              unsere Webseite deutlich leistungsstärker und weniger anfällig auf
              Spam oder andere Angriffe.
            </p>
            <h4>Welche Daten werden von Cloudflare gespeichert?</h4>
            <p>
              Cloudflare leitet im Allgemeinen nur jene Daten weiter, die von
              Webseitenbetreibern gesteuert werden. Die Inhalte werden also
              nicht von Cloudflare bestimmt, sondern immer vom
              Webseitenbetreiber selbst. Zudem erfasst Cloudflare unter
              Umständen bestimmte Informationen zur Nutzung unserer Webseite und
              verarbeitet Daten, die von uns versendet werden oder für die
              Cloudflare entsprechende Anweisungen erhalten hat. In den meisten
              Fällen erhält Cloudflare Daten wie IP-Adresse, Kontakt- und
              Protokollinfos, Sicherheitsfingerabdrücke und Leistungsdaten für
              Webseiten. Protokolldaten helfen Cloudflare beispielsweise dabei,
              neue Bedrohungen zu erkennen. So kann Cloudflare einen hohen
              Sicherheitsschutz für unsere Webseite gewährleisten. Cloudflare
              verarbeitet diese Daten im Rahmen der Services unter Einhaltung
              der geltenden Gesetze. Dazu zählt natürlich auch die
              Datenschutzgrundverordnung (DSGVO). Aus Sicherheitsgründen
              verwendet Cloudflare auch ein Cookie. Das Cookie (__cfduid) wird
              eingesetzt, um einzelne User hinter einer gemeinsam genutzten
              IP-Adresse zu identifizieren und Sicherheitseinstellungen für
              jeden einzelnen User anzuwenden. Sehr nützlich wird dieses Cookie
              beispielsweise, wenn Sie unsere Webseite aus einem Lokal benutzen,
              in dem sich eine Reihe infizierter Computer befinden. Wenn aber
              Ihr Computer vertrauenswürdig ist, können wir dies anhand des
              Cookies erkennen. So können Sie, trotz infizierter PCs in Ihrem
              Umfeld, ungehindert und sorgenfrei durch unsere Webseite surfen.
              Wichtig zu wissen ist auch noch, dass dieses Cookie keine
              personenbezogenen Daten speichert. Dieses Cookie ist für die
              Cloudflare-Sicherheitsfunktionen unbedingt erforderlich und kann
              nicht deaktiviert werden.
            </p>
            <h4>
              Wie kann ich meine Daten löschen bzw. die Datenspeicherung
              verhindern?
            </h4>
            <p>
              Cloudflare bewahrt Daten-Protokolle nur solange wie nötig auf und
              diese Daten werden auch in den meisten Fällen innerhalb von 24
              Stunden wieder gelöscht. Cloudflare speichert auch keine
              personenbezogenen Daten, wie beispielsweise Ihre IP-Adresse. Es
              gibt allerdings Informationen, die Cloudflare als Teil seiner
              permanenten Protokolle auf unbestimmte Zeit speichert, um so die
              Gesamtleistung von Cloudflare Resolver zu verbessern und etwaige
              Sicherheitsrisiken zu erkennen. Alle Daten, die Cloudflare sammelt
              (temporär oder permanent), werden von allen personenbezogenen
              Daten bereinigt. Alle permanenten Protokolle werden zudem von
              Cloudflare anonymisiert. Cloudflare geht in Ihrer
              Datenschutzerklärung darauf ein, dass sie für die Inhalte, die sie
              erhalten nicht verantwortlich sind. Wenn Sie beispielsweise bei
              Cloudflare anfragen, ob sie Ihre Inhalte aktualisieren oder
              löschen können, verweist Cloudflare grundsätzlich auf uns als
              Webseitenbetreiber. Sie können auch die gesamte Erfassung und
              Verarbeitung Ihrer Daten durch Cloudflare komplett unterbinden,
              indem Sie die Ausführung von Script-Code in Ihrem Browser
              deaktivieren oder einen Script-Blocker in Ihren Browser einbinden.
              Cloudflare ist aktiver Teilnehmer beim EU-U.S. Privacy Shield
              Framework, wodurch der korrekte und sichere Datentransfer
              persönlicher Daten geregelt wird.
            </p>
          </div>
        )}
      </MDBContainer>
    );
  }
}

export default MessagePage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
