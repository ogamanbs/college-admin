import Menu from '@/components/dashboard/student/Menu';
import React from 'react'

export default function Dashboard() {
  return (
    <div className="relative h-screen w-full flex flex-col lg:flex-row">
      <div className="absolute w-64 h-96 bg-lime-300 rounded-full blur-[120px]"></div>
      <div className="fixed lg:static bottom-5 h-auto lg:h-screen w-full lg:w-[18%] lg:border-r border-zinc-200">
        <Menu />
      </div>
      <div className="h-screen lg:h-full w-full lg:w-[82%] p-10">
        
      </div>
    </div>
  )
}


{/* <div className="">
  <Link href="/student/admission"><button className="px-5 py-2 rounded-full bg-lime-600 text-white text-sm">admit student</button></Link>
</div> */}