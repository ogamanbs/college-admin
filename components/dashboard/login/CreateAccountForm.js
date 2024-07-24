import React from 'react'

export default function CreateAccountForm() {
    return (
        <form className="h-auto w-full flex flex-col justify-center gap-2 text-sm text-lime-700">
            <input
                type="text"
                name="name"
                placeholder="name"
                className="w-full border border-lime-600 rounded-full py-2 px-5 outline-none bg-transparent"
            />
            <input
                type="date"
                name="dob"
                placeholder="date of birth"
                className="w-full border border-lime-600 rounded-full py-2 px-5 outline-none bg-transparent"
            />
            <input
                type="text"
                name="phone"
                placeholder="phone"
                className="w-full border border-lime-600 rounded-full py-2 px-5 outline-none bg-transparent"
            />
            <input
                type="email"
                name="email"
                placeholder="email"
                className="w-full border border-lime-600 rounded-full py-2 px-5 outline-none bg-transparent"
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                className="w-full border border-lime-600 rounded-full py-2 px-5 outline-none bg-transparent"
            />
            <div className="mt-3">
                <input
                    type="submit"
                    value="create"
                    className="border border-lime-700 rounded-full py-2 px-5 outline-none bg-lime-600 text-white cursor-pointer"
                />
            </div>
        </form>
    )
}
