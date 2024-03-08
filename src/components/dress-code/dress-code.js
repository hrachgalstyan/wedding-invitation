import Image from 'next/image'
import Girl_1 from '@/assets/images/girls/girl_1.JPG'
import Girl_2 from '@/assets/images/girls/girl_2.JPG'
import Girl_3 from '@/assets/images/girls/girl_3.JPG'
import Girl_4 from '@/assets/images/girls/girl_4.JPG'
import Girl_5 from '@/assets/images/girls/girl_5.JPG'
import Girl_6 from '@/assets/images/girls/girl_6.JPG'
import Boy_1 from '@/assets/images/boys/boy_1.JPG'
import Boy_2 from '@/assets/images/boys/boy_2.JPG'
import Boy_3 from '@/assets/images/boys/boy_3.JPG'
import Boy_4 from '@/assets/images/boys/boy_4.JPG'
import Boy_5 from '@/assets/images/boys/boy_5.JPG'
import Boy_6 from '@/assets/images/boys/boy_6.JPG'
import Boy_7 from '@/assets/images/boys/boy_7.JPG'
import Boy_8 from '@/assets/images/boys/boy_8.JPG'

export default function DressCodeSection() {
  return (
    <section>
      <div className="dress_code">
        <p data-aos="zoom-in-up" className="wien title">«Դրես կոդ»</p>
        <div className="regular subtitles">
          <p data-aos="zoom-out-up">
            Ստորև ներկայացված են հագուստի տարբերակներ, որոնք կարող են ձեզ օգնել ` հագուստի ընտրության հարցում:
          </p>
        </div>
        {/* <!-- girls --> */}
        <div className="dress_code_item">
          <ul className="colors">
            <li data-aos="zoom-in" data-aos-delay="200" className="color color_girl_1"></li>
            <li data-aos="zoom-in" data-aos-delay="400" className="color color_girl_2"></li>
            <li data-aos="zoom-in" data-aos-delay="600" className="color color_girl_3"></li>
          </ul>
          <div className="images">
            <p className="wien gender">Աղջիկներ</p>
            <div className="images_col">
              <Image
                data-aos="zoom-in"
                data-aos-delay="200"
                className="image"
                height={265}
                width={247}
                alt="image"
                src={Girl_1}
              />
              <Image
                data-aos="zoom-in"
                data-aos-delay="300"
                className="image"
                height={325}
                width={247}
                alt="image"
                src={Girl_2}
              />
            </div>
            <div className="images_col">
              <Image
                data-aos="zoom-in"
                data-aos-delay="400"
                className="image"
                height={325}
                width={247}
                alt="image"
                src={Girl_3}
              />
              <Image
                data-aos="zoom-in"
                data-aos-delay="500"
                className="image"
                height={265}
                width={247}
                alt="image"
                src={Girl_4}
              />
            </div>
            <div className="images_col">
              <Image
                data-aos="zoom-in"
                data-aos-delay="600"
                className="image"
                height={265}
                width={247}
                alt="image"
                src={Girl_5}
              />
              <Image
                data-aos="zoom-in"
                data-aos-delay="700"
                className="image"
                height={325}
                width={247}
                alt="image"
                src={Girl_6}
              />
            </div>
          </div>
        </div>
        {/* <!-- guys --> */}
        <div className="dress_code_item">
          <ul className="colors">
            <li data-aos="zoom-in" data-aos-delay="200" className="color color_guy_1"></li>
            <li data-aos="zoom-in" data-aos-delay="400" className="color color_guy_2"></li>
          </ul>
          <div className="images">
            <p className="wien gender">Տղաներ</p>
            <div className="images_col">
              <Image
                data-aos="zoom-in"
                data-aos-delay="200"
                className="image"
                height={265}
                width={247}
                alt="image"
                src={Boy_7}
              />
              <Image
                data-aos="zoom-in"
                data-aos-delay="300"
                className="image"
                height={325}
                width={247}
                alt="image"
                src={Boy_8}
              />
            </div>
            <div className="images_col">
              <Image
                data-aos="zoom-in"
                data-aos-delay="400"
                className="image"
                height={325}
                width={247}
                alt="image"
                src={Boy_3}
              />
              <Image
                data-aos="zoom-in"
                data-aos-delay="500"
                className="image"
                height={265}
                width={247}
                alt="image"
                src={Boy_4}
              />
            </div>
            <div className="images_col">
              <Image
                data-aos="zoom-in"
                data-aos-delay="600"
                className="image"
                height={265}
                width={247}
                alt="image"
                src={Boy_5}
              />
              <Image
                data-aos="zoom-in"
                data-aos-delay="700"
                className="image"
                height={325}
                width={247}
                alt="image"
                src={Boy_6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}