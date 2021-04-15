export declare type AppUser = {
  id: string
  name: string
  email: string
}
export declare type UserState = Readonly<AppUser> & { readonly token?: string }
export declare type AppState = {
  user: UserState
}
