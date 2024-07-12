'use client'
import React,{ useContext } from 'react';
import FormContext from '../FormContext';

export default function SecondForm() {
    const {step, setStep, studentData, setStudentData} = useContext(FormContext);

    const handelBackClick = (e) => {
        e.preventDefault();
        setStep(step-1);
    }
    const handelNextClick = (e) => {
        e.preventDefault();
        setStep(step+1);
    }

    return (
        <form className="w-auto flex flex-col gap-2 text-sm">
            <label className="text-zinc-500">Admission Number:</label>
            <input
                type="text"
                name="name"
                autoComplete="off"
                value={studentData['admissionNumber'] || ''}
                onChange={e=>setStudentData({...studentData, admissionNumber: e.target.value})}
                className="border border-lime-600 rounded-lg py-1 px-5 outline-none bg-transparent"
            />
            <label className="text-zinc-500 mt-2">Registration Form Number:</label>
            <input
                type="text"
                name="name"
                autoComplete="off"
                value={studentData['regFormNumber'] || ''}
                onChange={e=>setStudentData({...studentData, regFormNumber: e.target.value})}
                className="border border-lime-600 rounded-lg py-1 px-5 outline-none bg-transparent"
            />
            <label className="text-zinc-500 mt-2">Enrollment Number:</label>
            <input
                type="text"
                name="name"
                autoComplete="off"
                value={studentData['enrollmentNumber'] || ''}
                onChange={e=>setStudentData({...studentData, enrollmentNumber: e.target.value})}
                className="border border-lime-600 rounded-lg py-1 px-5 outline-none bg-transparent"
            />
            <label className="text-zinc-500 mt-2">Roll Number:</label>
            <input
                type="text"
                name="name"
                autoComplete="off"
                value={studentData['rollNumber'] || ''}
                onChange={e=>setStudentData({...studentData, rollNumber: e.target.value})}
                className="border border-lime-600 rounded-lg py-1 px-5 outline-none bg-transparent"
            />
            <label className="text-zinc-500 mt-2">Quota:</label>
            <select
                value={studentData['quota'] || ''}
                onChange={e=>setStudentData({...studentData, quota: e.target.value})}
                className="outline-none bg-transparent border border-lime-600 px-2 py-1 cursor-pointer rounded-lg"
            >
                <option>Please select the quota</option>
                <option value="EWS">EWS (Economically Weaker Section)</option>
                <option value="General">General</option>
                <option value="OBC">OBC (Other Backward Classes)</option>
                <option value="Management">Management</option>
                <option value="SC">SC (Schedule Casts)</option>
                <option value="ST">ST (Schedule Tribes)</option>
                <option value="Others">Others</option>
            </select>
            <div className="flex items-center justify-center mt-10 cursor-pointer gap-5">
                <button onClick={handelBackClick} className="rounded-lg py-1 px-5 bg-blue-500 text-white outline-none cursor-pointer">Back</button>
                <button
                    onClick={handelNextClick}
                    className="rounded-lg py-1 px-5 bg-lime-600 text-white outline-none cursor-pointer"
                >Next</button>
            </div>
        </form>
    );
}
