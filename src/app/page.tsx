import Banner from "@/components/Banner";
import DownloadSection from "@/components/DownloadPdf"
import ProjectZoning from "@/components/ProjectZoning";
import TravelCards from "@/components/TravelCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <DownloadSection/>
      <TravelCards />
      <ProjectZoning />
    </div>
  );
}
