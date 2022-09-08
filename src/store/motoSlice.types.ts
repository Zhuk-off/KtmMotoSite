interface IMoto {
  background: string
  buy: boolean
  category: string
  counter: number
  descriptionMoto: string
  id: string
  name: string
  photolink: string
  price: string
  titleCard: string
}

interface IPage {
  background: string
  categoryTitle: string
  description: string
  id: string
  path: string
}

interface IState {
  moto: IMoto[]
  page: IPage[]
}

interface IMotoState extends IState {
  loading: boolean
  error: any
}
