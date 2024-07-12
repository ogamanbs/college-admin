import React from 'react'

export default function Welcome() {
  return (
    <div className="w-auto h-auto text-3xl font-bold text-zinc-300">
        <div className="flex gap-2">
            <h1 className="">Hi!</h1>
            <h1 className="text-lime-500 capitalize">Admin,</h1>
        </div>
        <div className="flex gap-2 items-end">
            <h1 className="">welcome to</h1>
            <h1 className="text-lime-500 uppercase">College</h1>
        </div>
    </div>
  )
}
