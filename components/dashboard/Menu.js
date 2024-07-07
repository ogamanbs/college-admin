import React from 'react';
import Options from './menu/Options';
import Logout from '../Logout';
import AdminImage from '../AdminImage';

export default function Menu() {
  return (
    <div className="lg:relative h-auto lg:h-screen w-full flex lg:flex-col items-center gap-5 lg:gap-10 text-[1.7vh] px-4 py-2 lg:py-5 rounded-full lg:rounded-[0px]">
        <div className="flex flex-col items-center gap-2">
            <div className="h-[50px] w-[50px] lg:h-[7vh] lg:w-[7vh] bg-lime-500 rounded-full cursor-pointer overflow-hidden">
                <AdminImage />
            </div>
            <div className="hidden lg:flex flex-col items-center text-[1.5vh]">
                <h1 className="">Aman sharma</h1>
                <h1 className="">aman@aman.com</h1>
            </div>
        </div>
        <div className="w-full">
            <Options />
        </div>
        <div className="static lg:absolute bottom-10">
            <Logout />
        </div>
    </div>
  )
}
