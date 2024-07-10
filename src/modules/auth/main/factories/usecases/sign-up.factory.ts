import { SignUpRepositoryImpl } from '@/modules/auth/data/repositories/sign-up.repository'
import { ISignUp } from '@/modules/auth/domain'
import { makeApiUrl, makeAxiosHttpClient } from '@/shared/main'

export const makeSignUp = (): ISignUp =>
  new SignUpRepositoryImpl(makeApiUrl('/auth/signup'), makeAxiosHttpClient())
