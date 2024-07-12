'use client'
import React,{useState} from 'react';
import Form from '@/components/dashboard/student/create/Form';
import FormContext from '@/components/dashboard/student/create/FormContext';
import {
    RiArrowLeftLine
} from '@remixicon/react';
import Link from 'next/link';

export default function CreateStudent() {
    const [step, setStep] = useState(1);
    const [studentData, setStudentData] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        console.log(studentData);
        setStudentData('');
        setStep(1);
    }

    return (
        <div className="relative w-full h-screen">
            <Link href="/student"><div className="absolute m-10 p-2 rounded-full hover:bg-lime-100/50 cursor-pointer"><RiArrowLeftLine /></div></Link>
            <FormContext.Provider value={{step, setStep, studentData, setStudentData, submitForm}}>
                <Form />
            </FormContext.Provider>
        </div>
    );
}
