import Button from 'components/shared/Button/Button'
import styles from './HomePage.module.scss'
import { AnimatePageLayout } from 'layouts/AnimatePageLayout'
import Image from 'next/image'
import { useRouter } from 'next/router'

const HomePage = () => {
  const { push } = useRouter()

  return (
    <AnimatePageLayout>
      <div className={styles.page}>
        <section className={styles.meetMeSection}>
          <div className={styles.meetMeText}>
            <h2 className={styles.description}>
              👋 Hey there! My name is Alfredo Arvelaez and I&apos;m
            </h2>
            <h1 className={styles.title}>Full-Stack Developer</h1>
          </div>

          <div>
            <Button
              onClick={() => push('/about-me')}
              variant="primary"
              extraStyles={styles.meetMeButton}
            >
              Come and meet me!
            </Button>
          </div>
        </section>

        <section className={styles.imageSection}>
          <Image
            src={'/assets/developer.svg'}
            layout="fill"
            alt="main developer image"
          />
        </section>
      </div>
    </AnimatePageLayout>
  )
}

export { HomePage }
