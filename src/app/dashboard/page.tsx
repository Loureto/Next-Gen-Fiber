'use client'

import dynamic from 'next/dynamic'

const Dashboad = dynamic(
  () => import('@/modules/orders').then((m) => m.OrdersPage),
  {
    ssr: false
  }
)

export default Dashboad
