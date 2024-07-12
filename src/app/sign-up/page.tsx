'use client'

import { clientComponent } from '@/shared/components'

const SignUpPage = clientComponent(
  import('@/modules/auth').then((module) => module.makeSignUpPage)
)

export default SignUpPage
