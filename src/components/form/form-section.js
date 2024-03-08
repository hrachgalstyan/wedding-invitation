import Image from "next/image";
import DoubleArrow from "../../assets/images/double_arrow.png";
import Form from "./form";

export default function FormSection() {
  return (
    <section>
      <div className="background_img_4"></div>
      <div className="form">
        <p data-aos="zoom-in-up" className="wien title">Ձեր տվյալները</p>
        <p data-aos="zoom-out-up" className="regular subtitles">
          Խնդրում ենք պատասխանել հետևյալ հարցերին.
        </p>
        <Image
          src={DoubleArrow}
          alt="double_arrow"
          className="double_arrow"
        />

        <Form />
      </div>
    </section>
  )
}
