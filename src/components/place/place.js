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
          href="https://www.google.com/maps/dir//Villa+Restaurant+Complex+10%2F2,+15+Yerevan+0089/@40.1866321,44.6026052,357m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x406aa4a1140b4019:0xf0bcc60528784d89!2m2!1d44.6034511!2d40.1864396?entry=ttu"
        >
          <p className="regular map_link_text">Տեսնել քարտեզի վրա</p>
          <Image alt={"arrow"} src={ArrowRight}/>
        </Link>
      </div>
    </section>
  )
}