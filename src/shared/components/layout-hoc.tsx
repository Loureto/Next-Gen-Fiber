'use client'

import Cookies from 'js-cookie'
import { ReactNode, useEffect, useState } from 'react'

import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import { cn } from '../utils'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false }
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false }
]

export const LayoutHOC = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const path = usePathname()
  const token = Cookies.get('token')
  const router = '/dashboard'

  useEffect(() => {
    if (token) {
      return setIsAuthenticated(!!token)
    }
  }, [token])

  if (!isAuthenticated && path !== router) {
    return (
      <div className="flex-csol relative flex h-screen flex-1 items-center justify-center">
        <div className="fixed top-0 h-80 w-full bg-neutral-950" />
        {children}
      </div>
    )
  }

  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </div>

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={cn(
                          item.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <button className="-mx-6 mt-auto text-white">Sair</button>
            </ul>
          </nav>
        </div>
      </div>

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  )
}
