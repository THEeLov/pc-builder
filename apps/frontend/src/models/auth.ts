export type User = {
  id: string,
  username: string,
  email: string
  role: string,
} 

export type RegisterUser = {
  username: string,
  email: string,
  password: string,
}

export type LoginUser = {
  username: string,
  password: string,
}
