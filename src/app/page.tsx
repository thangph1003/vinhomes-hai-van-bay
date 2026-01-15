import Banner from "@/components/Banner";
import DownloadSection from "@/components/DownloadPdf"
import FormPrice from "@/components/FormPrice";
import Gallery from "@/components/Gallery";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectZoning from "@/components/ProjectZoning";
import TravelCards from "@/components/TravelCard";
import VideoProject from "@/components/VideoProject";
import VinhomesProject from "@/components/VinhomesProject";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <DownloadSection/>
      <VinhomesProject/>
      <VideoProject />
      <ProjectOverview />
      <FormPrice />
      <TravelCards />
      <ProjectZoning />
      <FormPrice />
      <Gallery />
    </div>
  );
}
