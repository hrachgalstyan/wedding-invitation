import Image from "next/image";
import DoubleRing from "../../assets/images/double_rings.png";
import Divider from "../../assets/images/timeline_divider.png";
import DoubleCup from "../../assets/images/double_cup.png";
import Plate from "../../assets/images/plate.png";

export default function TimingSection() {
  return (
    <section>
      <div className="background_img_3"></div>
      <div className="timing">
        <p data-aos="zoom-in-down" className="wien title">Ժամանակացույց</p>
        <div className="timelines">
          <div className="timeline_item">
            <p data-aos="fade-right" className="wien timeline_time">14:30</p>
            <Image
              data-aos="zoom-out"
              src={DoubleRing}
              alt="double_ring"
              width={74}
              height={74}
              className="timeline_img"
            />
            <div data-aos="fade-left" className="timeline_texts">
              <p className="regular timeline_title">
                Պսակադրություն
              </p>
              <p className="regular timeline_desc">
                Եկեղեցական արարողություն
                <br />
                Սբ Խաչ եկեղեցում:
              </p>
            </div>
          </div>
          <Image data-aos="fade-up" src={Divider} alt="divider" className="timeline_didiver"/>
          <div className="timeline_item">
            <p data-aos="fade-right" className="wien timeline_time">17:00</p>
            <Image
              data-aos="zoom-out"
              alt="double_cup"
              src={DoubleCup}
              width={74}
              height={74}
              className="timeline_img"
            />
            <div data-aos="fade-left" className="timeline_texts">
              <p className="regular timeline_title">
                Ռեստորան
              </p>
              <p className="regular timeline_desc">
                Ձեզ հետ վերցրեք
                <br/>
                ձեր ժպիտներն ու
                <br />
                բարձր տրամադրությունը
              </p>
            </div>
          </div>
          <Image data-aos="fade-up" src={Divider} alt="divider" className="timeline_didiver"/>
          <div className="timeline_item">
            <p data-aos="fade-right" className="wien timeline_time">23:00</p>
            <Image
              data-aos="zoom-out"
              src={Plate}
              alt="plate"
              width={74}
              height={74}
              className="timeline_img"
            />
            <div data-aos="fade-left" className="timeline_texts">
              <p className="regular timeline_title">
                Ավարտ
              </p>
              <p className="regular timeline_desc">
                Խնջույքի ավարտը
                <br/>
                մեր ուրախության
                <br />
                ավարտը չէ:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}