'use client'
import React,{useContext} from 'react';
import FormContext from '../FormContext';

export default function FirstForm() {
    const {step, setStep, studentData, setStudentData} = useContext(FormContext);
    // handle college email and passord on backend
    // change onChange

    const handleClick = async (e) => {
        e.preventDefault();
        setStep(step+1);
    }

    return (
        <form className="w-auto flex flex-col gap-2 text-sm">
            <label className="text-zinc-500">First Name:</label>
            <input
                type="text"
                name="firstname"
                autoComplete="off"
                value={studentData['firstname'] || ''}
                onChange={e=>setStudentData({...studentData, firstname: e.target.value})}
                className="border border-lime-600 rounded-lg py-1 px-5 outline-none bg-transparent"
            />
            <label className="text-zinc-500 mt-2">Email:</label>
            <input
                type="email"
                name="email"
                autoComplete="off"
                value={studentData['email'] || ''}
                onChange={e=>setStudentData({...studentData, email: e.target.value})}
                className="border border-lime-600 rounded-lg py-1 px-5 outline-none bg-transparent"
            />
            <label className="text-zinc-500 mt-2">Contact:</label>
            <input
                type="number"
                name="contact"
                autoComplete="off"
                value={studentData['contact'] || ''}
                onChange={e=>setStudentData({...studentData, contact: e.target.value})}
                className="border border-lime-600 rounded-lg py-1 px-5 outline-none bg-transparent"
            />
            <div className="flex items-center justify-center mt-10 cursor-pointer">
                <button
                    onClick={handleClick}
                    className="rounded-lg py-1 px-5 bg-lime-600 text-white outline-none cursor-pointer"
                >Next</button>
            </div>
        </form>
    );
}
