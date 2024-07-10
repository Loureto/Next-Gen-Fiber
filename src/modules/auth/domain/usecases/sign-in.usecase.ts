import { UserParamsEntity } from '../entities'
import { AccountModel } from '../models'

export interface ISignIn {
  signIn(data: ISignIn.Params): Promise<ISignIn.Model>
}

export namespace ISignIn {
  export type Params = UserParamsEntity
  export type Model = AccountModel | undefined
}
