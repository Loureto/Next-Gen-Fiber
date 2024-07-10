'use client'

import { useForm } from 'react-hook-form'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/shared/components'
import { zodResolver } from '@hookform/resolvers/zod'
import Cookies from 'js-cookie'
import { z } from 'zod'

import { ISignIn } from '../../domain'
import { accountAdapter } from '../../main'

const formSchema = z.object({
  username: z.string().min(1, { message: 'Username required' }),
  password: z.string().min(1, { message: 'Password required' })
})

type FormData = z.infer<typeof formSchema>

interface LoginProps {
  authentication: ISignIn
}

export const SignUpPage = ({ authentication }: LoginProps) => {
  const router = useRouter()
  const form = useForm<FormData>({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: zodResolver(formSchema)
  })

  async function onSubmit(data: ISignIn.Params) {
    const { accessToken } = accountAdapter(await authentication.signIn(data))
    if (accessToken) {
      Cookies.set('token', accessToken, { expires: 24 * 60 * 60, secure: true })
      router.replace('/dashboard')
    }
  }

  return (
    <div className="absolute bg-white px-6 py-12 shadow sm:w-full sm:max-w-[480px] sm:rounded-lg sm:px-12">
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <h1 className="mb-12 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h1>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit">
            Sign in
          </Button>

          <div className="text-center">
            <Link className="text-sm" href="/sign-up">
              Don't have an account?
              <span className="font-semibold underline">Sign up</span>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  )
}
