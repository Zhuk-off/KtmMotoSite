interface moto {
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

interface page {
  background: string
  categoryTitle: string
  description: string
  id: string
  path: string
}

interface state {
  moto: moto[]
  page: page[]
}

type motoState = {
  loading: boolean
  error: any
  moto: moto[]
  page: page[]
}
