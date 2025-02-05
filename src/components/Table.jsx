import {React, useContext} from 'react';
import {passwordArrayContext} from "../context/passwordArray.js";
import { toast } from 'react-toastify';

const Table = () => {
    const {passwordArray, setPasswordArray} = useContext(passwordArrayContext);
    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this password?");
        if (!confirm) return;
        const updatedPasswords = passwordArray.filter(item => item.id !== id);
        localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
        setPasswordArray(updatedPasswords);
        toast.success('Password Deleted Successfully', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
    }
    return (
        <table className="table-auto text-gray-200 w-full rounded-lg overflow-hidden">
            <thead className="bg-indigo-900">
            <tr>
                <th>Website Name</th>
                <th>Username / Email</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody className="bg-indigo-300 text-gray-900">
            {
                passwordArray.length === 0 ?
                    <tr>
                        <td colSpan={4} className="text-center">No Data Saved</td>
                    </tr>
                    :
                    passwordArray.map((item, index) => (
                        <tr key={index}>
                            <td className="w-[35%] text-center border border-gray-400">
                                <div className="w-full flex gap-1 justify-center items-center">
                                    <a href={item.site} target="_blank"> {item.site} </a>
                                    <lord-icon
                                        onClick={
                                            () => {
                                                navigator.clipboard.writeText(item.site);
                                                toast.success('Website Name Copied to Clipboard', {
                                                    position: "bottom-left",
                                                    autoClose: 2000,
                                                    hideProgressBar: false,
                                                    closeOnClick: false,
                                                    pauseOnHover: false,
                                                    draggable: false,
                                                    progress: undefined,
                                                    theme: "dark",
                                                });
                                            }
                                        }
                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                        trigger="hover"
                                        style={{"cursor": "pointer", "width": "25px"}}>
                                    </lord-icon>
                                </div>

                            </td>
                            <td className="w-[25%] text-center border border-gray-400">
                                <div className="w-full flex gap-1 justify-center items-center">
                                    {item.username}
                                    <lord-icon
                                        onClick={
                                            () => {
                                                navigator.clipboard.writeText(item.username);
                                                toast.success('Username / Email Copied to Clipboard', {
                                                    position: "bottom-left",
                                                    autoClose: 2000,
                                                    hideProgressBar: false,
                                                    closeOnClick: false,
                                                    pauseOnHover: false,
                                                    draggable: false,
                                                    progress: undefined,
                                                    theme: "dark",
                                                });
                                            }
                                        }
                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                        trigger="hover"
                                        style={{"cursor": "pointer", "width": "25px"}}>
                                    </lord-icon>
                                </div>
                            </td>
                            <td className="w-[25%] text-center border border-gray-400">
                                <div className="w-full flex gap-1 justify-center items-center">
                                    {"*".repeat(item.password.length)}
                                    <lord-icon
                                        onClick={
                                            () => {
                                                navigator.clipboard.writeText(item.password);
                                                toast.success('Password Copied to Clipboard', {
                                                    position: "bottom-left",
                                                    autoClose: 2000,
                                                    hideProgressBar: false,
                                                    closeOnClick: false,
                                                    pauseOnHover: false,
                                                    draggable: false,
                                                    progress: undefined,
                                                    theme: "dark",
                                                });
                                            }
                                        }
                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                        trigger="hover"
                                        style={{"cursor": "pointer", "width": "25px"}}>
                                    </lord-icon>
                                </div>
                            </td>
                            <td className="w-[25%] text-center border border-gray-400">
                                <div className="w-full flex gap-2 justify-center items-center">
                                    {/*<lord-icon
                                        src="https://cdn.lordicon.com/gwlusjdu.json"
                                        trigger="hover"
                                        style={{"cursor": "pointer", "width": "25px"}}>
                                    </lord-icon>*/}
                                    <lord-icon
                                        onClick={()=>handleDelete(item.id)}
                                        src="https://cdn.lordicon.com/skkahier.json"
                                        trigger="hover"
                                        style={{"cursor": "pointer", "width": "25px"}}>
                                    </lord-icon>
                                </div>
                            </td>
                        </tr>
                    ))
            }
            </tbody>
        </table>
    )
        ;
};

export default Table;