import { ProjectInfo } from 'types/ProjectInfo'

const PROJECTS_ENTRIES: ProjectInfo[] = [
  {
    title: 'To-Do: Challenge frontend',
    description:
      'Standard ToDo web application oriented to task managment in a pleasant way. Allows to create, read, update and delete task locally (only on frontend).',
    imageCover: '/assets/todoApp.png',
    tags: ['react', 'typescript'],
    repoUrl: 'https://github.com/AlfredoPrograma/todo-challenge-frontend',
    url: 'https://todoapp-challenge-frontend.vercel.app/',
  },

  {
    title: 'Pics-Finder',
    description:
      'Minimalistic web application intended to works as an images bank. Allows to find images by keyword, and provides infinite scroll feature; improving user experience.',
    imageCover: '/assets/todoApp.png',
    tags: ['react', 'tailwind', 'typescript'],
    repoUrl: 'https://github.com/AlfredoPrograma/Pics-Finder',
    url: '',
  },
]

export { PROJECTS_ENTRIES }
