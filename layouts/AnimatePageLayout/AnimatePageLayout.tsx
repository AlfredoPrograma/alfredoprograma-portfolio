import { motion } from 'framer-motion'
import styles from './AnimatePageLayout.module.scss'

interface AnimatePageLayoutProps {
  children: JSX.Element | JSX.Element[]
}

const AnimatePageLayout = ({ children }: AnimatePageLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.wrapper}
    >
      {children}
    </motion.div>
  )
}

export default AnimatePageLayout
