import { NavBar } from 'components/NavBar'
import styles from './MainLayout.module.scss'

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[]
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layoutWrapper}>
      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  )
}
export default MainLayout
