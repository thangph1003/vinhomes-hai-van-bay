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
    <section className="bg-[#F5F1E6] pt-10 pb-[54px]">
       <div className="max-w-[1179px] px-[14px] mx-auto flex flex-col gap-6">
        <div className="flex gap-6">
            <div className="w-[32.5%]">
                <h2 className="text-[44px] leading-[57px] font-bold font-crimson-text text-[#162B75]">CẬP NHẬT DỰ ÁN
                MỚI NHẤT</h2>
            </div>
            <div className="w-[67.5%]">
                <p className="text-base leading-6 font-normal font-montserrat text-black">Với kinh nghiệm triển khai các dự án lớn như Vinhomes Riverside, Vinhomes Ocean Park, Vinhomes Global Gate... Vingroup cam kết đảm bảo tiến độ thi công đúng kế hoạch, đồng thời duy trì chất lượng xây dựng ở mức cao nhất.</p>
                <p className="text-base leading-6 font-normal font-montserrat text-black">Vinhomes Làng Vân hiện đang trong giai đoạn chuẩn bị, với kế hoạch khởi công dự kiến vào tháng 3/2025. </p>
            </div>
            </div>
            <div className="w-full relative">
            <div className="relative">
                <div className="absolute -inset-2 pointer-events-none">
                    <div className="absolute top-[-5px] right-[-5px] w-[163px] h-[163px] bg-[#DCA447]" />
                    <div className="absolute bottom-[-5px] left-[-5px] w-[163px] h-[163px] bg-[#DCA447]" />
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
                        <div className="h-[647px] flex items-center justify-center text-gray-500">No video URL provided</div>
                    )}
                </div>
            </div>
        </div>
       </div>
    </section>
  )
}