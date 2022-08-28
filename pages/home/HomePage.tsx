import Button from 'components/shared/Button/Button'
import styles from './HomePage.module.scss'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { AnimatePageLayout } from 'layouts/AnimatePageLayout'
import Image from 'next/image'

const HomePage = () => {
  return (
    <AnimatePageLayout>
      <div className={styles.page}>
        <section className={styles.meetMeSection}>
          <div className={styles.meetMeText}>
            <h2 className={styles.description}>Hey there! My name is</h2>
            <h1 className={styles.title}>Alfredo Arvelaez</h1>
            <h2 className={styles.description}>
              I&apos;m modern Full-Stack web developer
            </h2>
          </div>

          <div>
            <Button
              rightIcon={<ArrowLongRightIcon width={28} />}
              onClick={() => console.log('hello world')}
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
