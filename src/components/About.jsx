import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.AboutWrapper}>
      <div className={style.ParagraphContainer}>
        <h2>Welcome to the Todo List App</h2>
        <p>
          An efficient application crafted to simplify the way you manage tasks.
          Our intuitive and responsive design enables effortless creation and
          management of your tasks.
        </p>
      </div>

      <div className={style.ParagraphContainer}>
        <h3>Features</h3>
        <p>
          One of the standout features of the Todo List App is its integration
          with the Airtable API. This powerful API allows you to manage your
          data efficiently and flexibly. 
        </p>
      </div>

      <div className={style.ParagraphContainer}>
        <h3>Cross-Platform Accessibility</h3>
        <p>
          The Todo List App is accessible on any device, whether you&apos;re
          using a phone, tablet, or computer. Our responsive design guarantees a
          seamless experience across platforms, allowing you to sync your tasks
          effortlessly  wherever you are.
        </p>
      </div>
      <div className={style.ParagraphContainer}>
        <h3>Thank You</h3>
        <p>
          Thank you for choosing the Todo List App. We are confident that our
          app will enhance your productivity and help you stay organized.
        </p>
      </div>
    </div>
  );
};

export default About;
