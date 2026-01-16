type VideoProjectProps = {
  videoUrl?: string
}

function getYouTubeEmbedUrl(url?: string) {
  if (!url) return ''
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/)
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}?rel=0`

  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/)
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}?rel=0`

  try {
    const u = new URL(url)
    const v = u.searchParams.get('v')
    if (v) return `https://www.youtube.com/embed/${v}?rel=0`
  } catch {
    return ''
  }

  return url
}   

export default function VideoProject() {
  const embedUrl = getYouTubeEmbedUrl("https://www.youtube.com/watch?v=VK5rUo-j3z8")

  return (
    <section className="bg-[#F5F1E6] md:pt-10 md:pb-[54px] px-[32.5px] md:py-[24px] pt-10 pb-[53px]">
       <div className="max-w-[1179px] px-[14px] mx-auto flex flex-col gap-6">
        <div className="flex md:flex-row flex-col gap-6">
            <div className="md:w-[32.5%] w-full">
                <h2 className="md:text-[44px] md:leading-[57px] text-[32px] leading-[42px] font-bold font-crimson-text text-[#162B75]">CẬP NHẬT DỰ ÁN
                MỚI NHẤT</h2>
            </div>
            <div className="md:w-[67.5%] w-full">
                <p className="text-base leading-6 font-normal font-montserrat text-black">Với kinh nghiệm triển khai các dự án lớn như Vinhomes Riverside, Vinhomes Ocean Park, Vinhomes Global Gate... Vingroup cam kết đảm bảo tiến độ thi công đúng kế hoạch, đồng thời duy trì chất lượng xây dựng ở mức cao nhất.</p>
                <p className="text-base leading-6 font-normal font-montserrat text-black">Vinhomes Làng Vân hiện đang trong giai đoạn chuẩn bị, với kế hoạch khởi công dự kiến vào tháng 3/2025. </p>
            </div>
            </div>
            <div className="w-full relative">
            <div className="relative">
                <div className="absolute -inset-2 pointer-events-none">
                    <div className="absolute md:top-[-5px] top-0 md:right-[-5px] right-0 md:w-[163px] md:h-[163px] w-[70px] h-[70px] bg-[#DCA447]" />
                    <div className="absolute md:bottom-[-5px] bottom-0 md:left-[-5px] left-0 md:w-[163px] md:h-[163px] w-[70px] h-[70px] bg-[#DCA447]" />
                </div>

                <div className="relative z-10">
                    {embedUrl ? (
                        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                            <iframe
                                src={embedUrl}
                                title="Project video"
                                className="absolute inset-0 w-full h-full"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <div className="md:h-[647px] h-[185px] flex items-center justify-center text-gray-500">No video URL provided</div>
                    )}
                </div>
            </div>
        </div>
       </div>
    </section>
  )
}