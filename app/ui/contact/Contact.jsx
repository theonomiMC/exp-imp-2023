import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section} id="info">
        <h3>Contact</h3>
        <ul className={styles.sectionList}>
          <li>
            <a
              href="https://github.com/theonomiMC"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.kaggle.com/nataliabk/code?scroll=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaggle
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.section} id="materials">
        <h3>Used Materials</h3>
        <p>
          The data in this dataset originates from publicly accessible files
          provided by the Ministry of Finance of Georgia.
        </p>
        <small>SOURCES:</small>(
        <a
          href="https://www.mof.ge/export_importis_informacia"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.materials}
        >
          https://www.mof.ge/export_importis_informacia
        </a>
        )
      </section>

      <section className={styles.section} id="kaggle-code">
        <h3>Code on Kaggle</h3>
        <ol className={styles.sectionList}>
          <li>
            <a
              href="https://www.kaggle.com/code/nataliabk/g-trade-2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              Georgia Trade 2023
            </a>
          </li>
          <li>
            <a
              href="https://www.kaggle.com/code/nataliabk/g-trade-2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              Georgia Trade 2022
            </a>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Contact;
