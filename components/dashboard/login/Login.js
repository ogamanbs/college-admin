import React from 'react'
import LoginForm from './LoginForm'

export default function Login() {
    return (
        <div className="w-full md:w-1/3 border border-lime-600 rounded-[30px] h-full flex flex-col justify-center p-7 md:p-10 gap-5">
            <div className="">
                <h1 className="font-bold text-lime-500 text-xl">Login to Admin account</h1>
                <h1 className="text-sm text-zinc-500">Hi, you are Welcome to the admin&#39;s corner</h1>
            </div>
            <LoginForm />
        </div>
    )
}
