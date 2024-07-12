'use client'
import React,{ useContext } from 'react';
import FormContext from '../FormContext';

export default function ThirdForm() {

    const {step, setStep, studentData, setStudentData, submitForm} = useContext(FormContext);
    // handle college email and password on backend


    const handelBackClick = (e) => {
        e.preventDefault();
        setStep(step-1);
    }

    return (
        <form className="w-auto flex flex-col gap-2 text-sm">
             <label className="text-zinc-500">Department:</label>
            <input
                type="text"
                name="department"
                autoComplete="off"
                value={studentData['department'] || ''}
                onChange={e=>setStudentData({...studentData, department: e.target.value})}
                className="border border-lime-600 rounded-lg py-1 px-5 outline-none bg-transparent"
            />
            <label className="text-zinc-500 mt-2">branch:</label>
            <input
                type="text"
                name="branch"
                autoComplete="off"
                value={studentData['branch'] || ''}
                onChange={e=>setStudentData({...studentData, branch: e.target.value})}
                className="border border-lime-600 rounded-lg py-1 px-5 outline-none bg-transparent"
            />
            <label className="text-zinc-500 mt-2">Enrollment Semester:</label>
            <input
                type="number"
                name="semester"
                autoComplete="off"
                value={studentData['semester'] || 1}
                onChange={e=>setStudentData({...studentData, semester: e.target.value})}
                className="border border-lime-600 rounded-lg py-1 px-5 outline-none bg-transparent"
            />
            <div className="flex items-center justify-center mt-10 cursor-pointer gap-5">
                <button onClick={handelBackClick} className="rounded-lg py-1 px-5 bg-blue-500 text-white outline-none cursor-pointer">Back</button>
                <button
                    onClick={submitForm}
                    className="rounded-lg py-1 px-5 bg-lime-600 text-white outline-none cursor-pointer"
                >Submit</button>
            </div>
        </form>
    );
}
