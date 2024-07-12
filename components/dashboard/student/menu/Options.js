import React from 'react';
import {
    RiUserAddLine,
} from '@remixicon/react';
import Link from 'next/link';

export default function Options() {
    return (
        <div className="w-full h-full flex flex-row justify-around lg:flex-col lg:px-5 lg:gap-2">
            <div className="flex items-center gap-2 cursor-pointer">
                <Link href="/student/admission"><RiUserAddLine
                    size={25}
                    className="peer text-[70px] lg:text-sm text-lime-600"
                /></Link>
                <Link href="/student/admission"><h1 className="hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-white hover:bg-white">Admit Student</h1></Link>
            </div>
        </div>
    )
}
