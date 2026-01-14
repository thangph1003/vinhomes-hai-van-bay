import Banner from "@/components/Banner";
import DownloadSection from "@/components/DownloadPdf"
import ProjectZoning from "@/components/ProjectZoning";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <DownloadSection/>
      <ProjectZoning />
    </div>
  );
}
