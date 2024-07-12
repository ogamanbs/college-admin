import React, { useContext } from 'react';
import FirstForm from './forms/FirstForm';
import SecondForm from './forms/SecondForm';
import {
    RiArrowLeftLine,
    RiArrowRightLine
} from '@remixicon/react';
import FormContext from './FormContext';
import ThirdForm from './forms/ThirdForm';

export default function Form() {

    const {step} = useContext(FormContext);

    const showForm = (step) => {
        switch(step){
            case 1: return <FirstForm />
            case 2: return <SecondForm />
            case 3: return <ThirdForm />
        }
    }
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-lime-500 to-amber-100 p-3 md:p-0">
            <div className="flex w-full md:w-2/3 h-auto gap-4 p-4 rounded-[40px]">
                <div className="w-full md:w-2/5 h-auto flex flex-col rounded-[40px] p-7 md:p-10 bg-white shadow-2xl">
                    <div className="w-full h-full flex flex-col gap-5">
                        <h1 className="text-xl text-center text-lime-700">Create Student</h1>
                        <div className="h-full w-full mt-5">
                            {showForm(step)}
                        </div>
                    </div>
                </div>
                <div className="hidden w-3/5 h-auto md:flex items-center justify-center">
                    <div className="">
                        <h1 className="text-3xl">GL BAJAJ</h1>
                        <h1 className="">Institute of Technology and Mangement</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
