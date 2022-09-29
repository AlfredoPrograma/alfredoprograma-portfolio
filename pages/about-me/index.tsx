import classNames from 'classnames'
import { Biography, Experience, Skills } from 'components/AboutMeSections'
import { AnimatePageLayout } from 'layouts/AnimatePageLayout'
import { useState } from 'react'
import styles from './AboutMePage.module.scss'

type SectionsNames = 'biography' | 'skills' | 'experience'

const SECTIONS_ELEMENTS: Record<SectionsNames, JSX.Element> = {
  biography: <Biography />,
  experience: <Experience />,
  skills: <Skills />,
}

const AboutMePage = () => {
  const [selectedSection, setSelectedSection] =
    useState<SectionsNames>('biography')

  return (
    <AnimatePageLayout>
      <div className={styles.page}>
        <nav className={styles.timeline}>
          <div className={styles.timelineRect} />

          {Object.keys(SECTIONS_ELEMENTS).map((sectionName) => (
            <div
              key={sectionName}
              className={classNames(styles.timelineButton, {
                [styles.timelineButtonActive]: selectedSection === sectionName,
              })}
              onClick={() => setSelectedSection(sectionName as SectionsNames)}
            >
              <span className={styles.label}>{sectionName}</span>
            </div>
          ))}
        </nav>

        <div className={styles.sectionContainer}>
          {SECTIONS_ELEMENTS[selectedSection]}
        </div>
      </div>
    </AnimatePageLayout>
  )
}

export default AboutMePage
