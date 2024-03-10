import Link from "next/link";
import Image from "next/image";
import ArrowRight from "../../assets/images/arrow_right.png";

export default function PlaceSection() {
  return (
    <section>
      <div className="place">
        <p data-aos="fade-right" className="wien title">Հանդիպման վայրը</p>
        <p data-aos="fade-left" className="regular place_text">
          «Վիլլա ՌԵՍՏՈՐԱՆ» <br/>
          Կոտայքի մարզ, Ջրվեժ համայնք,
          <br/>
          15-րդ փողոց, 10/2 շենք
        </p>
        <Link
          data-aos="zoom-in"
          className="map_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://yandex.by/maps/10262/yerevan/?ll=44.603851%2C40.186179&mode=routes&rtext=40.186360%2C44.603565~40.186360%2C44.603565&rtt=auto&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D120480234040~ymapsbm1%3A%2F%2Forg%3Foid%3D120480234040&z=19.12"
        >
          <p className="regular map_link_text">Տեսնել քարտեզի վրա</p>
          <Image alt={"arrow"} src={ArrowRight}/>
        </Link>
      </div>
    </section>
  )
}