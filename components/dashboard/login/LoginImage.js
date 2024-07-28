import React from 'react';
import Image from 'next/image';

export default function LoginImage() {
    return (
        <div className="w-full lg:w-[70%] h-[35vh] lg:h-[70vh] border border-lime-700 rounded-[30px] overflow-hidden">
            <Image width={1440} height={1440} className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1661757054641-6c81e8931a03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWRtaW58ZW58MHx8MHx8fDA%3D" alt="admin" />
        </div>
    )
}
