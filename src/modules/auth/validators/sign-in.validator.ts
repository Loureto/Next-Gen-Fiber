import { z } from 'zod'

export const SignInSchema = z.object({
  username: z.string().min(1, { message: 'Username required' }),
  password: z.string().min(1, { message: 'Password required' })
})

export type SignInData = z.infer<typeof SignInSchema>
