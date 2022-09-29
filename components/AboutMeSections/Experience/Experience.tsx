import { AnimatePageLayout } from 'layouts/AnimatePageLayout'
import styles from '../sectionStyles.module.scss'

const Experience = () => {
  return (
    <AnimatePageLayout>
      <section className={styles.section}>
        <article>
          <header className={styles.header}>
            <h2>Ingeniust 🚀</h2>
            <h3>Full-Stack web developer</h3>
          </header>

          <p>
            Implementing modules in charge of managing resources and personnel
            for an application business, encompassing the completeness of the
            process, modeling the entities of the base of data, exposing
            services through the REST API and consuming said data for
            visualization from the web client
          </p>
        </article>

        <article>
          <header className={styles.header}>
            <h2>ClassGap 👨‍🏫</h2>
            <h3>Web development online tutor</h3>
          </header>

          <p>
            I teach classes and tutorials to multiple people around the world,
            in order to share my knowledge and support developers with
            difficulties in their implementation of web applications.
          </p>
        </article>
      </section>
    </AnimatePageLayout>
  )
}
export default Experience
