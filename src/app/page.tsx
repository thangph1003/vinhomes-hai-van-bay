import Banner from "@/components/Banner";
import DownloadSection from "@/components/DownloadPdf"
import FormPrice from "@/components/FormPrice";
import Gallery from "@/components/Gallery";
import ProjectZoning from "@/components/ProjectZoning";
import TravelCards from "@/components/TravelCard";
import VideoProject from "@/components/VideoProject";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <DownloadSection/>
      <VideoProject />
      <FormPrice />
      <TravelCards />
      <ProjectZoning />
      <FormPrice />
      <Gallery />
    </div>
  );
}
