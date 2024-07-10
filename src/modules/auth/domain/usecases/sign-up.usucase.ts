import { CreateAccountEntity } from '../entities'
import { CreateAccountModel } from '../models'

export interface ISignUp {
  signUp(data: ISignUp.Params): Promise<ISignUp.Model>
}

export namespace ISignUp {
  export type Params = CreateAccountEntity
  export type Model = CreateAccountModel | undefined
}
