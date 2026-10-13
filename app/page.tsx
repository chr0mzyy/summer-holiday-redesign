import SummerHolidayHome from "@/components/SummerHolidayHome";

export default function Home() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Summer Holiday",
    url: "https://biurosummerholiday.pl/",
    telephone: ["+48572219872", "+48605425620"],
    email: "summerholiday@onet.pl",
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
