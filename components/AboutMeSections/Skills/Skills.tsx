import { AnimatePageLayout } from 'layouts/AnimatePageLayout'
import styles from '../sectionStyles.module.scss'
import { TECHS_MAP } from 'constants/TechTagsMap'
import { Techs } from 'types/TechTag'

const TECHS: Techs[] = [
  'typescript',
  'react',
  'redux',
  'tailwind',
  'laravel',
  'postgres',
  'mongo',
]

const Skills = () => {
  return (
    <AnimatePageLayout>
      <section className={styles.section}>
        <article>
          <header className={styles.header}>
            <h2>Soft skills and main technologies 🫂 🧠</h2>
          </header>

          <div className={styles.content}>
            <p>
              I am a collaborative, communicative and resilient person. I like
              to share my knowledge with my coworkers, as well as to learn
              constantly from my environment. I also enjoy participating and
              contributing ideas on problem solving and system implementation.
            </p>

            <ul className={styles.iconList}>
              {TECHS.map((tech) => (
                <li
                  className={styles.listItem}
                  key={tech}
                  style={{ color: TECHS_MAP[tech].color }}
                >
                  {TECHS_MAP[tech].icon({
                    className: styles.icon,
                    style: { color: TECHS_MAP[tech].color },
                  })}

                  {TECHS_MAP[tech].text}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </AnimatePageLayout>
  )
}
export default Skills
