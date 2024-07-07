import React from 'react';
import { RiGraduationCapLine, RiUser2Line, RiBook2Line, RiBriefcase2Line, RiNewsLine, RiCalendarEventLine} from '@remixicon/react';

export default function Options() {
  return (
    <div className="w-full h-full flex flex-row justify-around lg:flex-col lg:px-5 lg:gap-2">
        <div className="flex items-center gap-2 cursor-pointer">
            <RiGraduationCapLine
                size={30}
                className="peer text-[70px] lg:text-sm text-lime-600"
            />
            <h1 className="hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-lime-100 hover:bg-lime-100">Student</h1>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
            <RiUser2Line
                size={30}
                className="peer text-xl lg:text-sm text-lime-600"
            />
            <h1 className="hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-lime-100 hover:bg-lime-100">Faculty</h1>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
            <RiBook2Line
                size={30}
                className="peer text-xl lg:text-sm text-lime-600"
            />
            <h1 className=" hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-lime-100 hover:bg-lime-100">Library</h1>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
            <RiBriefcase2Line
                size={30}
                className="peer text-xl lg:text-sm text-lime-600"
            />
            <h1 className="hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-lime-100 hover:bg-lime-100">Employee</h1>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
            <RiNewsLine
                size={30}
                className="peer text-xl lg:text-sm text-lime-600"
            />
            <h1 className="hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-lime-100 hover:bg-lime-100">News</h1>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
            <RiCalendarEventLine
                size={30}
                className="peer text-xl lg:text-sm text-lime-600"
            />
            <h1 className="hidden lg:block px-3 py-1 rounded-lg peer-hover:bg-lime-100 hover:bg-lime-100">Events</h1>
        </div>
    </div>
  )
}
