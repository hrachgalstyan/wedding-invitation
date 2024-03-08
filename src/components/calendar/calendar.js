import Image from "next/image";
import Ring from "@/assets/images/ring.png";

export default function CalendarSection() {
  return (
    <section>
      <div className="background_img_2"></div>
      <div className="info">
        <p data-aos="zoom-in" className="wien title animation_b_to_t">Հարգելի հյուրեր,</p>
        <p data-aos="zoom-in" className="regular desc">
          Մեր կյանքում սպասվում են երջանիկ փոփոխություններ:
          <br/>
          Մենք ցանկանում ենք, որ այս կարևոր օրը մեզ հետ լինեն մեր ամենամոտ և ամենահարազատ մարդիկ: Ուրախ կլինենք ձեզ հետ
          կիսել մեր հարսանյաց արարողությունը:
        </p>
        <p data-aos="zoom-in" className="wien sub animation_small_to_n">Ապրիլ 2024</p>

        <table data-aos="zoom-in">
          <tbody>
          <tr>
            <th>Եկ</th>
            <th>Եք</th>
            <th>Չո</th>
            <th>Հի</th>
            <th>Ու</th>
            <th>Շա</th>
            <th>Կի</th>
          </tr>
          <tr className="first_row">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>
              14
              <Image
                className="ring"
                alt="ring"
                width={64}
                height={64}
                src={Ring}
              />
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
          </tr>
          <tr>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
          </tr>
          <tr>
            <td>29</td>
            <td>30</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}