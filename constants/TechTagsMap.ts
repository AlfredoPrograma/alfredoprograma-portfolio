import { TechTag, Techs } from 'types/TechTag'
import {
  SiReact as ReactIcon,
  SiRedux as ReduxIcon,
  SiTailwindcss as TailwindIcon,
  SiTypescript as TypescriptIcon,
  SiLaravel as LaravelIcon,
  SiPostgresql as PostgresIcon,
  SiMongodb as MongoIcon,
} from 'react-icons/si'

type TechTagsMapRecord = Record<Techs, TechTag>

const TECHS_MAP: TechTagsMapRecord = {
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

  laravel: {
    text: 'Laravel',
    color: '#ff2d20',
    icon: LaravelIcon,
  },

  postgres: {
    text: 'PostgreSQL',
    color: '#336791',
    icon: PostgresIcon,
  },

  mongo: {
    text: 'MongoDB',
    color: '#4db33d',
    icon: MongoIcon,
  },
}

export { TECHS_MAP }
