import classes from "./About.module.scss";
import Timeline from "./Timeline";

function AboutPage() {
  return (
    <div className={classes.aboutContainer}>
      <section className={classes.intro}>
        <h1>Hey there!</h1>
        <p>
          I'm <strong>Marlene</strong> — a curious, creative, and slightly
          caffeine-fueled frontend developer based in beautiful Porto, Portugal.
        </p>
        <p>
          I started out in science, but soon fell in love with the world of web
          development. There’s something magical about bringing ideas to life on
          screen — so I made the jump, and I haven’t looked back since!
        </p>
        <p>
          These days, I work as <strong>Frontend Developer</strong>, and I build
          beautiful, responsive e-commerce platforms with technologies like
          React.js and Magento 2. I’m all about clean code, thoughtful design,
          and websites that feel just right.
        </p>
      </section>

      <section className={classes.timelineSection}>
        <Timeline />
      </section>

      <section className={classes.skills}>
        <h2>What I Work With</h2>
        <ul>
          <li>
            <strong>Languages & Frameworks:</strong> JavaScript (ES6+), React.js
            (Redux, Hooks),Next.js, Knockout.js, PHP
          </li>
          <li>
            <strong>Styling:</strong> CSS3, LESS, Bootstrap, Tailwind CSS
          </li>
          <li>
            <strong>E-commerce Power:</strong> Magento 2 (themes + modules!)
          </li>
          <li>
            <strong>Databases:</strong> MySQL, MongoDB
          </li>
          <li>
            <strong>Tools I love:</strong> Git, Adobe Commerce, and working in
            Agile squads
          </li>
        </ul>
      </section>

      <section className={classes.certifications}>
        <h2>Officially Certified</h2>
        <ul>
          <li>React Complete Guide - Udemy</li>
          <li>Adobe Certified Expert - Adobe Commerce Front End Developer</li>
          <li>Adobe Certified Professional - Adobe Commerce Developer</li>
          <li>The Complete 2022 Web Development Bootcamp – Udemy</li>
          <li>OLX Women Workshops – OLX Group</li>
        </ul>
      </section>

      <section className={classes.contact}>
        <h2>Let’s Connect </h2>
      </section>
    </div>
  );
}

export default AboutPage;
