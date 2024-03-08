import Image from "next/image";
import Arrow from "@/assets/images/arrow_1.png";
import Petur from "@/assets/images/petur_top.png";

export default function TopSection() {
  return (
    <>
      <section className="top_section">
        <div className="background_img_1"></div>
        <div className="top">
          <Image data-aos="zoom-in" data-aos-duration="2000" alt="petur" src={Petur} height={135} width={135}/>
          <div className="names">
            <p data-aos="fade-right" data-aos-duration="2000" className="regular">ՀՐԱՉ</p>
            <br/>
            <p data-aos="flip-up" data-aos-duration="2000" className="wien">ԵՎ</p>
            <br/>
            <p data-aos="fade-left" data-aos-duration="2000" className="regular">ՌՈՒԶԱՆՆԱ</p>
          </div>
          <span className="divider"></span>
          <div className="reason">
            <p data-aos="fade-left" data-aos-duration="2000" className="wien we_are_marry">
              մենք ամուսնանում ենք
            </p>
            <p data-aos="fade-right" data-aos-duration="2000" className="regular date_1">14 | 04 | 2024</p>
          </div>
          <Image
            className="arrow"
            alt="arrow"
            width={37}
            height={37}
            src={Arrow}
          />
        </div>
      </section>
    </>
  )
}