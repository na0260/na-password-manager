import './App.css'
import Form from "./components/Form.jsx";
import Table from "./components/Table.jsx";
import {passwordArrayContext} from "./context/passwordArray.js";
import {useEffect, useState} from "react";
import { ToastContainer } from 'react-toastify';

function App() {
    const [passwordArray, setPasswordArray] = useState(() => {
            const savedPasswords = localStorage.getItem("passwords");
            return savedPasswords ? JSON.parse(savedPasswords) : [];
        }
    )

    useEffect(() => {
        localStorage.setItem("passwords", JSON.stringify(passwordArray));
    }, [passwordArray]);
    return (
        <>
            <passwordArrayContext.Provider value={{passwordArray, setPasswordArray}}>
                <div className="container mx-auto sm:w-full md:w-1/2 my-10 px-4">
                    <Form/>
                    <Table/>
                </div>
                <ToastContainer/>
            </passwordArrayContext.Provider>
        </>
    )
}

export default App
