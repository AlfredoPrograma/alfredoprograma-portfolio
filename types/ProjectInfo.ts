import { Techs } from './TechTag'

interface ProjectInfo {
  title: string
  description: string
  imageCover: string
  tags: Techs[]
  repoUrl: string
  url: string
}

export type { ProjectInfo }
