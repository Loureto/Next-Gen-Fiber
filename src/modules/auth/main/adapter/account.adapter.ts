import { ISignIn } from '@/modules/auth/domain'

export const accountAdapter = (account: ISignIn.Model) => {
  return {
    accessToken: account?.access_token
  }
}
