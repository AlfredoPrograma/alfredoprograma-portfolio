import { Tag } from 'components/shared/Tag'
import { techTagsMap } from 'constants/TechTagsMap'
import Link from 'next/link'
import { FaLaptopCode as CodeIcon, FaLink as VisitIcon } from 'react-icons/fa'
import { Techs } from 'types/TechTag'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
  title: string
  description: string
  imageCover: string
  tags: Techs[]
  repoUrl: string
  url: string
}

const ProjectCard = ({
  title,
  description,
  tags,
  repoUrl,
  url,
}: ProjectCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </header>

        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{description}</p>
        </div>

        <footer className={styles.footer}>
          <div className={styles.linksWrapper}>
            <Link href={repoUrl}>
              <a>
                Code <CodeIcon />
              </a>
            </Link>

            <Link href={url}>
              <a>
                Visit <VisitIcon />
              </a>
            </Link>
          </div>
          <div className={styles.tagsWrapper}>
            {tags.map((tag, index) => (
              <Tag key={index} {...techTagsMap[tag]} />
            ))}
          </div>
        </footer>
      </div>
    </article>
  )
}
export default ProjectCard
