import { AnimatePageLayout } from 'layouts/AnimatePageLayout'
import styles from '../sectionStyles.module.scss'

const Biography = () => {
  return (
    <AnimatePageLayout>
      <section className={styles.section}>
        <article>
          <header className={styles.header}>
            <h2>Well... It&apos;s me 😀</h2>
          </header>

          <div className={styles.content}>
            <p>
              With 21 years old, I work as a Full Stack web developer from my
              native country, Venezuela.
            </p>

            <p>
              I perceive myself as a committed, organized and resilient person;
              with great passion for the implementation of custom applications
              to solve existing problems in companies and businesses, as well as
              optimize their processes to ensure better performance at all
              stages.
            </p>

            <p>
              I enjoy meeting new people, enjoying nature and playing
              competitive video games like Valorant and League of Legends.
            </p>
          </div>
        </article>
      </section>
    </AnimatePageLayout>
  )
}
export default Biography
