'use client'

import { clientComponent } from '@/shared/components'

const SignInPage = clientComponent(
  import('@/modules/auth').then((module) => module.makeSignInPage)
)

export default SignInPage
