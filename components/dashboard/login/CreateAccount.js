import React from 'react'
import CreateAccountForm from './CreateAccountForm'

export default function CreateAccount() {
    return (
        <div className="w-full md:w-1/3 border border-lime-600 rounded-[30px] h-full flex flex-col justify-center p-10 gap-5">
            <div className="">
                <h1 className="font-bold text-lime-500 text-xl">Create an Admin account</h1>
                <h1 className="hidden md:block text-sm text-zinc-500">Hi, you are Welcome to the admin&#39;s corner</h1>
            </div>
            <CreateAccountForm />
        </div>
    )
}
