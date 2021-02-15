export interface AuthenticationModel {
  email: string
  password: string
}

export interface Authentication {
  auth: (auth: AuthenticationModel) => Promise<string>
}
