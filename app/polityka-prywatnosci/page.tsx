import type { Metadata } from "next";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import SubpageShell from "@/components/SubpageShell";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Informacje o ochronie danych osobowych, prywatności i bezpieczeństwie danych w serwisie Summer Holiday.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPage() {
  return (
    <SubpageShell>
      <section className="subpage-hero subpage-hero--compact legal-hero">
        <div className="shell subpage-hero__content">
          <span className="eyebrow eyebrow--blue">Prywatność i bezpieczeństwo</span>
          <h1>
            Polityka ochrony
            <br />
            <em>danych osobowych.</em>
          </h1>
          <p>
            Wyjaśniamy, jakie dane mogą być przetwarzane podczas kontaktu i rezerwacji oraz jakie prawa
            przysługują użytkownikowi.
          </p>
        </div>
      </section>

      <section className="subpage-section legal-page">
        <div className="shell legal-layout">
          <aside>
            <ShieldCheck aria-hidden="true" />
            <strong>Summer Holiday S.C.</strong>
            <p>Administratorem danych przekazanych bezpośrednio do biura przed rezerwacją jest Summer Holiday.</p>
            <div className="legal-contact">
              <span>
                <MapPin aria-hidden="true" />
                <span>Traugutta 51<br />44-370 Pszów</span>
              </span>
              <a href="tel:+48572219872">
                <Phone aria-hidden="true" /> 572 219 872
              </a>
              <a href="mailto:summerholiday@onet.pl">
                <Mail aria-hidden="true" /> summerholiday@onet.pl
              </a>
            </div>
          </aside>

          <article className="legal-content">
            <span className="eyebrow eyebrow--gold">Klauzula informacyjna</span>
            <h2>Twoja prywatność jest dla nas ważna.</h2>
            <p>
              Dbamy o bezpieczeństwo danych osobowych oraz informacji zapisywanych w plikach cookies i podobnych
              technologiach. Podczas wyszukiwania i porównywania ofert przetwarzane mogą być wybrane kryteria
              podróży oraz dane techniczne niezbędne do wyświetlenia aktualnych wyników.
            </p>
            <p>
              Dane identyfikujące podróżnego, takie jak imię, nazwisko, dane kontaktowe, data urodzenia lub adres,
              mogą zostać przekazane dopiero podczas kontaktu z biurem albo rozpoczęcia procesu rezerwacji.
            </p>

            <div className="legal-note">
              <strong>Formularz kontaktowy na tej stronie</strong>
              <p>
                Formularz przygotowuje wiadomość w programie pocztowym użytkownika. Dane nie są zapisywane ani
                wysyłane przez serwer tej strony.
              </p>
            </div>

            <h3>Wyszukiwarka ofert i system rezerwacyjny</h3>
            <p>
              Wyszukiwarka dostępna na stronie może przekazywać do zintegrowanego systemu rezerwacyjnego kryteria
              wybrane przez użytkownika, takie jak kierunek, termin, miejsce wylotu oraz liczba i wiek podróżnych.
              Informacje te służą do przedstawienia aktualnych ofert, cen i dostępności.
            </p>
            <p>
              Moduł wyszukiwania lub kolejne kroki rezerwacji mogą być technicznie obsługiwane przez dostawcę
              systemu rezerwacyjnego. Dostawca może przetwarzać niezbędne dane techniczne i pliki cookies na
              zasadach przedstawionych użytkownikowi w tym module. Dane identyfikujące uczestników wyjazdu są
              wymagane dopiero na etapie kontaktu lub rezerwacji, a właściwy administrator i zakres przetwarzania
              są wskazywane w dokumentach oraz komunikatach procesu rezerwacyjnego.
            </p>
            <p>
              Wyniki wyszukiwania odzwierciedlają dane systemu w chwili zapytania. Ostateczna cena, dostępność i
              zakres usług dodatkowych są potwierdzane przed zawarciem umowy.
            </p>

            <h3>Administrator danych osobowych</h3>
            <p>
              Na etapie poszukiwania wyjazdu i kontaktu z biurem administratorem przekazanych bezpośrednio danych
              jest Summer Holiday S.C. Po dokonaniu rezerwacji odrębnym administratorem danych może zostać
              organizator turystyki, ubezpieczyciel lub inny podmiot wskazany w dokumentach rezerwacyjnych.
            </p>

            <h3>Kontakt w sprawie danych</h3>
            <p>
              Przed rezerwacją pytania dotyczące przetwarzania danych można kierować do Summer Holiday
              telefonicznie pod numerem <a href="tel:+48572219872">572 219 872</a> albo na adres{" "}
              <a href="mailto:summerholiday@onet.pl">summerholiday@onet.pl</a>. Po dokonaniu rezerwacji w sprawach
              pozostających po stronie organizatora turystyki należy korzystać z danych wskazanych w dokumentach
              rezerwacji.
            </p>

            <h3>Cele i podstawy przetwarzania</h3>
            <p>Dane osobowe mogą być przetwarzane w zakresie niezbędnym do:</p>
            <ul>
              <li>udzielenia odpowiedzi na pytanie i przygotowania propozycji wyjazdu,</li>
              <li>zawarcia i realizacji umowy o udział w imprezie turystycznej lub umowy ubezpieczenia,</li>
              <li>obsługi kontaktu związanego z rezerwacją,</li>
              <li>realizacji obowiązków podatkowych, rachunkowych i prawnych,</li>
              <li>ustalenia, dochodzenia albo obrony roszczeń,</li>
              <li>promocji usług — wyłącznie w zakresie wynikającym z przepisów i udzielonych zgód.</li>
            </ul>
            <p>
              Podstawą przetwarzania może być wykonanie umowy lub działania przed jej zawarciem, obowiązek prawny,
              prawnie uzasadniony interes administratora albo zgoda — zależnie od konkretnej czynności.
            </p>

            <h3>Odbiorcy danych</h3>
            <p>
              Dostęp do danych mogą otrzymać wyłącznie podmioty, którym jest to potrzebne do realizacji wskazanego
              celu, w szczególności:
            </p>
            <ul>
              <li>upoważnieni pracownicy i współpracownicy biura,</li>
              <li>organizatorzy turystyki, ubezpieczyciele i instytucje płatnicze,</li>
              <li>dostawcy usług technicznych, księgowych, prawnych, pocztowych lub kurierskich,</li>
              <li>podmioty uprawnione do otrzymania danych na podstawie przepisów prawa.</li>
            </ul>

            <h3>Przekazywanie danych poza EOG</h3>
            <p>
              Jeżeli realizacja usługi wymaga przekazania danych poza Europejski Obszar Gospodarczy, odbywa się to
              wyłącznie z zastosowaniem odpowiednich podstaw i zabezpieczeń prawnych, takich jak standardowe
              klauzule umowne zatwierdzone przez Komisję Europejską.
            </p>

            <h3>Czas przechowywania danych</h3>
            <p>
              Dane są przechowywane wyłącznie przez okres niezbędny do realizacji celu, dla którego zostały
              zebrane. Okres ten może wynikać z czasu realizacji umowy, terminów przedawnienia roszczeń oraz
              obowiązków rachunkowych lub podatkowych. Dane przetwarzane na podstawie zgody są przetwarzane do
              czasu jej wycofania, o ile nie istnieje inna podstawa prawna.
            </p>

            <h3>Twoje prawa</h3>
            <p>W granicach wynikających z RODO przysługuje Ci prawo do:</p>
            <ul>
              <li>dostępu do swoich danych i otrzymania ich kopii,</li>
              <li>sprostowania lub uzupełnienia danych,</li>
              <li>usunięcia danych albo ograniczenia ich przetwarzania,</li>
              <li>wniesienia sprzeciwu wobec przetwarzania, w tym marketingu bezpośredniego,</li>
              <li>przenoszenia danych,</li>
              <li>wycofania zgody bez wpływu na zgodność wcześniejszego przetwarzania z prawem.</li>
            </ul>
            <p>
              W celu ochrony danych możemy poprosić o informacje pozwalające potwierdzić tożsamość osoby
              składającej wniosek.
            </p>

            <h3>Prawo do skargi</h3>
            <p>
              Jeżeli uważasz, że dane są przetwarzane niezgodnie z przepisami, możesz wnieść skargę do Prezesa
              Urzędu Ochrony Danych Osobowych. Informacje są dostępne na stronie{" "}
              <a href="https://uodo.gov.pl/" target="_blank" rel="noreferrer">
                uodo.gov.pl
              </a>
              .
            </p>

            <h3>Dobrowolność podania danych</h3>
            <p>
              Podanie danych jest dobrowolne, ale może być niezbędne do otrzymania odpowiedzi, przygotowania oferty
              albo zawarcia i realizacji umowy dotyczącej wyjazdu.
            </p>

            <h3>Pliki cookies</h3>
            <p>
              Serwis może wykorzystywać pliki cookies niezbędne do prawidłowego działania oraz zapewnienia
              bezpieczeństwa. Zintegrowana wyszukiwarka, system rezerwacyjny i osadzona mapa Google mogą stosować
              własne pliki cookies oraz zasady dotyczące prywatności. Szczegółowe informacje powinny być dostępne
              w komunikatach prezentowanych przez te usługi.
            </p>

            <h3>Zmiany polityki prywatności</h3>
            <p>
              Polityka jest weryfikowana i może być aktualizowana w przypadku zmian prawa, sposobu działania
              serwisu lub zakresu świadczonych usług. Aktualna wersja jest zawsze dostępna pod tym adresem.
            </p>

            <p className="legal-source-note">
              Treść przygotowano na podstawie dotychczasowej polityki prywatności Summer Holiday oraz aktualnego
              sposobu działania nowej strony. Zalecana jest okresowa weryfikacja dokumentu przez osobę
              odpowiedzialną za zgodność prawną.
            </p>
          </article>
        </div>
      </section>
    </SubpageShell>
  );
}
