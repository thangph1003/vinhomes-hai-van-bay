import Banner from "@/components/Banner";
import DownloadSection from "@/components/DownloadPdf"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <p>Layout</p>
      <DownloadSection/>
    </div>
  );
}
