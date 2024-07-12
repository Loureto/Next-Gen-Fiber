'use client'

import { useForm } from 'react-hook-form'

import Link from 'next/link'

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
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(1, { message: 'Username required' }),
  password: z.string().min(1, { message: 'Password required' })
})

type FormData = z.infer<typeof formSchema>

export const SignUpPage = () => {
  const form = useForm<FormData>({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: zodResolver(formSchema)
  })

  async function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <div className="absolute bg-white px-6 py-12 shadow sm:w-full sm:max-w-[480px] sm:rounded-lg sm:px-12">
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <h1 className="mb-12 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up
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
            Sign up
          </Button>

          <div className="text-center">
            <Link className="text-sm" href="/">
              Return to
              <span className="pl-1 font-semibold underline">Sign in</span>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  )
}
