export const getMenuList = (t: (key: string) => string) => [
  { id: 1, label: t('menu.inicio'), link: 'inicio' },
  { id: 2, label: t('menu.historia'), link: 'historia' },
  { id: 3, label: t('menu.proyectos'), link: 'proyectos' },
  { id: 4, label: t('menu.cursos'), link: 'cursos' },
  { id: 5, label: t('menu.contacto'), link: 'contacto' },
]
