import { Navbar } from "../../Components";

import styles from './about.module.css';
import randomImg from '../../Assets/Images/About/random.jpg'
import teamImg from '../../Assets/Images/About/team.jpg'
import aboutCoverImg from '../../Assets/Images/About/cover.jpg'
import Upper_Footer from "../../Components/Upper_Footer/Upper_Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.heading} style={{ backgroundImage: `url(${aboutCoverImg})` }}> ABOUT US </div>

        <div className={styles.about_Service}>
          <div className={styles.about_text_content}>
            <span className={styles.aboutHead}> Who Is Best1 Bond Clean Group </span>

            <span className={styles.aboutDesc}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              deleniti sequi eos dolores. Eveniet saepe aliquid quia veniam
              ullam in exercitationem perspiciatis corrupti aperiam.

              <br/>
              <br/>

              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              deleniti sequi eos dolores. Eveniet saepe aliquid quia veniam
              ullam in exercitationem perspiciatis corrupti aperiam odit
              asperiores, tempore nostrum, magnam vel incidunt inventore.

              <br/>
              <br/>

              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              deleniti sequi eos dolores. Eveniet saepe aliquid quia veniam.
            </span>
          </div>

          <img src={randomImg} className={styles.aboutImg} alt="" />
        </div>

        <div className={styles.ourStoryWrapper}>
          <div className={styles.ourStoryText}>
            <span className={styles.ourStoryHead}> Our Story </span>

            <span className={styles.ourStoryDesc}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              deleniti sequi eos dolores. Eveniet saepe aliquid quia veniam
              ullam in exercitationem perspiciatis corrupti aperiam.

              <br/>
              <br/>

              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              deleniti sequi eos dolores. Eveniet saepe aliquid quia veniam.

              <br/>
              <br/>

              Lorem ipsum dolor sit, amet consectetur adipisicing elit.

              <br/>
              <br/>

              <b> Our Values: </b>
              <p> 1. Caring to serve.</p>
              <p> 2. Willingness to exceed expectation and walk the extra mile for client</p>
              <p> 3. Willingness to learn, in every day and stay with beginners'mind</p>
              <p>4. Thinking "win-win-win"</p>
              <p>5. Honesty and integrit</p>
              <p>6. Caring to receive and offer help and feedback</p>
              <p>7. We understand we need to change all time in order to stay great</p>
              <p>8. Proactiveness</p>
              <p>9. Treat everyone with great respect</p>

            </span>
          </div>

          <img src={teamImg} className={styles.ourStoryImg} alt="" />
        </div>
        <Upper_Footer/>
      </div>
    </>
  )
}

export default About;