import SummerHolidayHome from "@/components/SummerHolidayHome";

export default function Home() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Summer Holiday",
    url: "https://biurosummerholiday.pl/",
    telephone: "+48572219872",
    email: "summerholiday@onet.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Traugutta 51",
      postalCode: "44-370",
      addressLocality: "Pszów",
      addressCountry: "PL",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
      />
      <SummerHolidayHome />
    </>
  );
}
