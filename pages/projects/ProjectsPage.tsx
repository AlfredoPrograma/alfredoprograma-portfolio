import { ProjectCard } from 'components/ProjectCard'
import { AnimatePageLayout } from 'layouts/AnimatePageLayout'
import { projectsData } from './projectsData'
import styles from './ProjectsPage.module.scss'

const ProjectsPage = () => {
  return (
    <AnimatePageLayout>
      <div className={styles.page}>
        <section className={styles.projectsSection}>
          <div className={styles.projectsList}>
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </div>
    </AnimatePageLayout>
  )
}
export { ProjectsPage }
