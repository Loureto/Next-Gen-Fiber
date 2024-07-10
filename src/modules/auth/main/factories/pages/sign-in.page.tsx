'use client'

import { SignUpPage } from '@/modules/auth/presentation'
import { makeSignIn } from '../usecases'

export const makeSignInPage = () => {
  return <SignUpPage authentication={makeSignIn()} />
}
