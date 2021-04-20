export type AuthenticationModel = {
  email: string
  password: string
}

export interface Authentication {
  auth: (auth: AuthenticationModel) => Promise<string>
}
