'use client'

import { SignInPage } from '@/modules/auth/presentation'

import { makeSignIn } from '../usecases'

export const makeSignInPage = () => {
  return <SignInPage authentication={makeSignIn()} />
}
