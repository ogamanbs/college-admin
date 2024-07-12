import React from 'react';
import {
    RiGraduationCapLine,
    RiUser2Line,
    RiBook2Line,
    RiBriefcase2Line,
    RiNewsLine,
    RiCalendarEventLine
} from '@remixicon/react';
import Link from 'next/link';

export default function Options() {
  return (
    <div className="w-full h-full flex flex-row justify-around lg:flex-col lg:px-5 lg:gap-2">
        <div className="flex items-center gap-2 cursor-pointer">
            <Link href="/student"><RiGraduationCapLine
                size={25}
                className="peer text-[70px] lg:text-sm text-lime-600"
            /></Link>
            <Link href="/student"><h1 className="hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-lime-100 hover:bg-lime-100">Student</h1></Link>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
        <Link href="/"><RiUser2Line
                size={25}
                className="peer text-xl lg:text-sm text-lime-600"
            /></Link>
            <Link href="/"><h1 className="hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-lime-100 hover:bg-lime-100">Faculty</h1></Link>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
        <Link href="/"><RiBook2Line
                size={25}
                className="peer text-xl lg:text-sm text-lime-600"
            /></Link>
            <Link href="/"><h1 className=" hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-lime-100 hover:bg-lime-100">Library</h1></Link>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
        <Link href="/"><RiBriefcase2Line
                size={25}
                className="peer text-xl lg:text-sm text-lime-600"
            /></Link>
            <Link href="/"><h1 className="hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-lime-100 hover:bg-lime-100">Employee</h1></Link>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
        <Link href="/"><RiNewsLine
                size={25}
                className="peer text-xl lg:text-sm text-lime-600"
            /></Link>
            <Link href="/"><h1 className="hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-lime-100 hover:bg-lime-100">News</h1></Link>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
        <Link href="/"><RiCalendarEventLine
                size={25}
                className="peer text-xl lg:text-sm text-lime-600"
            /></Link>
            <Link href="/"><h1 className="hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-lime-100 hover:bg-lime-100">Events</h1></Link>
        </div>
    </div>
  )
}
