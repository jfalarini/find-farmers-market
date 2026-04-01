export type Feira = {
  codigo_de_registro: string
  dia_da_semana: string
  categoria: string
  quantidade_de_feirantes: number
  lat: number
  lng: number
}

export const feiras: Feira[] = [
  {
    codigo_de_registro: "10286",
    dia_da_semana: "Domingo",
    categoria: "Tradicional",
    quantidade_de_feirantes: 10,
    lat: -23.6189,
    lng: -46.6365,
  },
  {
    codigo_de_registro: "11029",
    dia_da_semana: "Domingo",
    categoria: "Tradicional",
    quantidade_de_feirantes: 20,
    lat: -23.4872,
    lng: -46.4178,
  },
  {
    codigo_de_registro: "70025",
    dia_da_semana: "Sábado",
    categoria: "Tradicional",
    quantidade_de_feirantes: 15,
    lat: -23.5748,
    lng: -46.6283,
  },
  {
    codigo_de_registro: "50059",
    dia_da_semana: "Quinta Feira",
    categoria: "Tradicional",
    quantidade_de_feirantes: 30,
    lat: -23.5615,
    lng: -46.6621,
  },
  {
    codigo_de_registro: "71064",
    dia_da_semana: "Sábado",
    categoria: "Tradicional",
    quantidade_de_feirantes: 10,
    lat: -23.5457,
    lng: -46.4561,
  },
  {
    codigo_de_registro: "50032",
    dia_da_semana: "Quinta Feira",
    categoria: "Tradicional",
    quantidade_de_feirantes: 10,
    lat: -23.5263,
    lng: -46.6417,
  },
  {
    codigo_de_registro: "10146",
    dia_da_semana: "Domingo",
    categoria: "Tradicional",
    quantidade_de_feirantes: 20,
    lat: -23.4785,
    lng: -46.6572,
  },
  {
    codigo_de_registro: "60062",
    dia_da_semana: "Sexta Feira",
    categoria: "Tradicional",
    quantidade_de_feirantes: 30,
    lat: -23.5702,
    lng: -46.6518,
  },
  {
    codigo_de_registro: "10847",
    dia_da_semana: "Domingo",
    categoria: "Tradicional",
    quantidade_de_feirantes: 40,
    lat: -23.6764,
    lng: -46.6479,
  },
]
