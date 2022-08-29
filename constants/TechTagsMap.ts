import { TechTag, Techs } from 'types/TechTag'
import {
  SiReact as ReactIcon,
  SiRedux as ReduxIcon,
  SiTailwindcss as TailwindIcon,
  SiTypescript as TypescriptIcon,
} from 'react-icons/si'

type TechTagsMap = Record<Techs, TechTag>

const techTagsMap: TechTagsMap = {
  react: {
    text: 'React',
    color: '#00bcc9',
    icon: ReactIcon,
  },

  redux: {
    text: 'Redux',
    color: '#a100e0',
    icon: ReduxIcon,
  },

  tailwind: {
    text: 'Tailwind',
    color: '#02c984',
    icon: TailwindIcon,
  },

  typescript: {
    text: 'Typescript',
    color: '#3262a8',
    icon: TypescriptIcon,
  },
}

export { techTagsMap }
