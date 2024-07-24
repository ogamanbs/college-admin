import React,{useState} from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [res, setRes] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const admin = {
            email: email,
            password: password,
        };
        console.log(admin);
    }

    return (
        <form onSubmit={handleSubmit} className="h-auto w-full flex flex-col justify-center gap-2 text-sm text-lime-700">
            <input
                type="email"
                name="email"
                placeholder="email"
                onChange={e=>setEmail(e.target.value)}
                className="w-full border border-lime-600 rounded-full py-2 px-5 outline-none bg-transparent"
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                onChange={e=>setPassword(e.target.value)}
                className="w-full border border-lime-600 rounded-full py-2 px-5 outline-none bg-transparent"
            />
            <div className="mt-3">
                <input
                    type="submit"
                    value="login"
                    className="border border-lime-700 rounded-full py-2 px-5 outline-none bg-lime-600 text-white cursor-pointer"
                />
            </div>
        </form>
    )
}
