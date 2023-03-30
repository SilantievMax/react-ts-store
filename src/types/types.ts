export interface ISpecifications {
  brand: string
  weight: string
  manufacturer: string
  size: string
  type: string[]
}

export interface IProduc {
  id: number
  title: string
  url_img: string
  description: string
  barcode: string
  price: number
  specifications: ISpecifications
}
