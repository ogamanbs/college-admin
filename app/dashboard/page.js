import Menu from '@/components/dashboard/Menu';
import Welcome from '@/components/dashboard/Welcome'
import React from 'react'

export default function page() {
  return (
    <div className="relative h-screen w-full flex flex-col lg:flex-row">
      <div className="fixed lg:static bottom-5 h-auto lg:h-screen w-full lg:w-[18%] lg:border-r border-zinc-200">
        <Menu />
      </div>
      <div className="h-screen lg:h-full w-full lg:w-[82%] p-10">
        <Welcome />
      </div>
    </div>
  )
}
