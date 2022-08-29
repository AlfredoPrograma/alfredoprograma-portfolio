import { IconType } from 'react-icons/lib'
import styles from './Tag.module.scss'

interface TagProps {
  color: string
  text: string
  icon: IconType
}

const Tag = ({ color, text, icon }: TagProps) => {
  return (
    <div
      style={{ backgroundColor: `${color}0f`, color, borderColor: color }}
      className={styles.tag}
    >
      {icon({ className: styles.icon, style: { color } })}
      {text}
    </div>
  )
}
export default Tag
