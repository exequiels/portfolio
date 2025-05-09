export type Proyecto = {
  id: string
  titulo: string
  descripcion: string
  lista: string[]
  seguimiento: string
  actualidad: string
  links: string | Array<{ url: string; texto: string }> | ''
  imagen?: string
}
