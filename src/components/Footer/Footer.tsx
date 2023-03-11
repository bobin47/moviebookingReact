import React from "react";

export default function Footer() {
  return (
    <div className=" bg-[#EDF2F9]">
       <div className="w-[80%] m-auto flex justify-between items-start gap-5 py-3">
        <div>
          <img
            src="https://moveek.com/bundles/ornweb/img/favicon-large.png"
            alt=""
            className="w-[60px] h-[60px]"
          />
        </div>
        <div>
          <div className="text-[#95AAC9] mb-1">CÔNG TY TNHH MONET</div>
          <div className="text-[#95AAC9] text-sm">
            Số ĐKKD: 0315367026 · Nơi cấp: Sở kế hoạch và đầu tư Tp. Hồ Chí Minh
            · Đăng ký lần đầu ngày 01/11/2018
          </div>
          <div className="text-[#95AAC9] text-sm">
            Địa chỉ: 33 Nguyễn Trung Trực, P.5, Q. Bình Thạnh, Tp. Hồ Chí Minh
          </div>
          <div className="text-[#95AAC9] text-sm">
            Về chúng tôi · Chính sách & Thỏa thuận · Hỗ trợ · Liên hệ · v8.1
          </div>
        </div>
        <div>
          <div className="text-[#95AAC9] text-sm mb-1">ĐỐI TÁC</div>
          <div className="flex">
            <img
              src="	https://moveek.com/bundles/ornweb/partners/beta-cineplex-v2.jpg"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <img
              src="https://moveek.com/bundles/ornweb/partners/mega-gs-cinemas.png"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <img
              src="https://moveek.com/bundles/ornweb/partners/cinestar.png"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <img
              src="	https://moveek.com/bundles/ornweb/partners/dcine.png"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <img
              src="	https://moveek.com/bundles/ornweb/partners/cinemax.png"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <img
              src="https://moveek.com/bundles/ornweb/partners/momo.png"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
