import React from 'react';
import Link from 'next/link';

export default function ReturnToDasboardBtn() {
    return (
        <div className="relative text-sm">
            <div className="absolute w-72 h-10 bg-lime-300 -translate-x-20 blur-[70px] -z-10"></div>
            <Link href="/"><button className="bg-lime-600 text-white px-5 py-2 rounded-full cursor-pointer">dashboard</button></Link>
        </div>
    )
}
