import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Backdrop from "./components/Backdrop.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Backdrop/>
        <Navbar/>
        <App/>
        <Footer/>
    </StrictMode>,
)
