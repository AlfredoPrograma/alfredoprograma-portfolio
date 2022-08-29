import { IconType } from 'react-icons'

type Techs = 'react' | 'redux' | 'tailwind' | 'typescript'

interface TechTag {
  text: string
  color: string
  icon: IconType
}

export type { TechTag, Techs }
