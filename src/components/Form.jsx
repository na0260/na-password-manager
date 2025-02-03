import {React, useRef, useState} from 'react';

const Form = () => {
    const ref = useRef();
    const [form, setForm] = useState({site:"", username:"", password:""});
    const [passwordArray, setPasswordArray] = useState([])
    const showPassword = () => {
        const password = document.getElementById('password');
        if (password.type === 'password') {
            ref.current.src = './hide.png';
            password.type = 'text';
        } else {
            ref.current.src = './view.png';
            password.type = 'password';
        }
    };

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const saveForm = () => {
        setPasswordArray([...passwordArray, form]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
        setForm({site:"", username:"", password:""});
    }
    return (
        <div className="container mx-auto w-1/2 my-10 backdrop-blur-sm bg-transparent">
            <form className=" rounded-xl shadow-md px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input
                        value={form.site} onChange={handleChange}
                        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                        name="site" type="text" placeholder="Enter Website name" autoComplete={0}/>
                </div>
                <div className="mb-6 flex flex-row gap-4">
                    <div className="w-full">
                        <input
                            value={form.username} onChange={handleChange}
                            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-100  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            name="username" type="text" placeholder="Enter Username/mail" autoComplete={0}/>
                    </div>

                    <div className="relative w-full">
                        <input
                            value={form.password} onChange={handleChange}
                            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-100  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" name="password" type="password" placeholder="Enter Password" autoComplete={0}/>
                        <span className="absolute right-2 top-2 text-white cursor-pointer" onClick={showPassword}>
                            <img ref={ref} width={20} src="./view.png" alt="view"/>
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        onClick={saveForm}
                        className="flex justify-center items-center gap-2 rounded-full bg-indigo-900 hover:bg-indigo-800 text-white py-2 px-4 border focus:outline-none focus:shadow-outline"
                        type="button">
                        <lord-icon
                            src="https://cdn.lordicon.com/sbnjyzil.json"
                            trigger="loop"
                            delay="1000"
                            colors="primary:#ffffff,secondary:#ffffff">
                        </lord-icon>
                        ADD PASSWORD
                    </button>

                </div>
            </form>
        </div>
    );
};

export default Form;