import { Footer } from 'components/Footer'
import { NavBar } from 'components/NavBar'
import { AnimatePresence } from 'framer-motion'
import styles from './MainLayout.module.scss'

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[]
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layoutWrapper}>
      <NavBar />

      <AnimatePresence>
        <main className={styles.main}>{children}</main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}
export default MainLayout
