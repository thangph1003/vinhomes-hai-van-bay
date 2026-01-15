'use client'

import { Images } from '@/contants/image';
import Image from 'next/image';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function DownloadSection() {
    const documents = [
      { title: "MẶT BẰNG CHI TIẾT", sub: "UPDATE", src: "mat_bang_chi_tiet.pdf" },
      { title: "THIẾT KẾ CĂN HỘ", sub: "UPDATE", src: "thiet_ke_can_ho.pdf" },
      { title: "BẢNG GIÁ CHI TIẾT", sub: "UPDATE", src: "bang_gia_chi_tiet.pdf" },
      { title: "CHÍNH SÁCH BÁN HÀNG", sub: "UPDATE", src: "chinh_sach_ban_hang.pdf" },
    ];

    const handleDownloadZip = async () => {
        const zip = new JSZip();
        const folder = zip.folder("tai_lieu_vinhomes"); // Tạo folder bên trong file ZIP
    
        // Tạo danh sách các promise để tải file đồng thời
        const downloadPromises = documents.map(async (doc) => {
          try {
            const response = await fetch(`/pdfFiles/${doc.src}`);
            if (!response.ok) throw new Error("File not found");
            const blob = await response.blob();
            folder?.file(doc.src, blob);
          } catch (error) {
            console.error(`Lỗi tải file ${doc.src}:`, error);
          }
        });
    
        await Promise.all(downloadPromises);
    
        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, "bo_tai_lieu_vinhomes_hai_van_bay.zip");
      };

  return (

    <section 
      className="w-full px-[145px] py-[65px] mx-auto flex flex-col justify-center items-center bg-[#F5F1E6]"
    >

      <div className=" flex flex-col items-center gap-[40px]">
        

        <h2 className={`font-crimson-text max-w-[808px] text-[22px] font-semibold leading-[100%] text-center text-[#162B75]`}>
          Vinhomes Hải Vân Bay là một trong những dự án bất động sản nghỉ dưỡng nổi bật nhất
          tại Đà Nẵng, được phát triển bởi Tập đoàn Vingroup - thương hiệu hàng đầu trong lĩnh
          vực bất động sản Việt nam
        </h2>


        <div className="max-w-[1150px] bg-white px-[39px] py-[30px] flex items-center justify-between">
            
      
        <div className="flex items-center max-w-[1072px] gap-[15px]">
              {documents.map((doc, index) => (
                <a href={`/pdfFiles/${doc.src}`} download={doc.src} key={index} className="flex items-center gap-[5px] pr-[14px] border-r-2 border-[#162B75] last:border-none min-w-0">
                   <div className="flex items-center justify-center w-[40px] h-[40px] ">
        <div           className=" w-[30px] h-[40px]"> 
             <Image    src={Images.pdfIcon}
                   alt="pdfIcon"
                    height={40}
                    width={30}
          className='w-[30px] h-[40px]'
                    /></div> 
                   </div>
                   <div className="flex flex-col min-w-0 gap-[2px] justify-center font-montserrat">
                      <span className="text-[14px] leading-[20px] not-italic text-[#000000] font-normal tracking-normal">{doc.sub}</span>
                      <div className=" text-[#162B75] font-bold text-[14px] leading-[20px]">
                        {doc.title}
                      </div>
                   </div>
                </a>
              ))}
            </div>

     
            <button onClick={handleDownloadZip} className="h-[46px] w-[192px] bg-[#162B75] flex items-center justify-center hover:bg-[#DCA447] transition-colors">
             <div className=' max-w-[106px] text-[16px] leading-[24px] font-montserrat text-white font-normal ' > Tải bộ tài liệu</div>
            </button>
        </div>

      
        <p className={`font-montserrat max-w-[808px] text-[16px] leading-[24px] text-center font-normal text-black`}>
          Vinhomes sẽ không ngừng nỗ lực để kiến tạo nên những Khu đô thị đáng sống và đẳng cấp bậc
          nhất Việt Nam với khát khao mang đến 1 cuộc sống tốt đẹp hơn cho tất cả mọi người.    
        </p>

      </div>
    </section>
  );
}