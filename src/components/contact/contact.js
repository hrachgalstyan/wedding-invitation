import Link from "next/link";
import Image from "next/image";
import Whatsapp from "../../assets/images/whatsapp.png";

export default function ContactSection() {
  return (
    <section>
      <div className="contacts">
        <p data-aos="zoom-in-up" className="wien title">Կապ</p>
        <div className="regular subtitles">
          <div data-aos="zoom-out-up" className="phone">
            <Link href="tel:+(374)44 15 14 15">
              Հրաչ
              <br/>
              +374 44 15 14 15
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=37444151415">
              <Image src={Whatsapp} alt="whatsapp" width={36}/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}