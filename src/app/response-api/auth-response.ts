import { User } from "../user"

export interface ILoginresponse {
  authorisation: {
    token: string,
    type: string
  }
  status: string
  user: User
}
