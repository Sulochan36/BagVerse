import { hamburger } from "../assets/icons";
import { logoTrans } from "../assets/images";
import { navLinks } from "../constants";
import Button from './Button';
import { useNavigate } from "react-router-dom";


const Nav = ({setShowLogin}) => {
    const navigate = useNavigate();
    const handleLogin=()=>{
        setShowLogin(true);
    }

    


    return (
        <header className='bg-black fixed top-0 left-0 w-full z-10 h-[120px] py-5'>
            <nav className='flex justify-between items-center max-container h-full'>
                <a href='/'>
                    <img
                        src={logoTrans}
                        alt='logo'
                        width={129}
                        height={29}
                        className=' m-0 w-[129px] h-[60px]'
                    />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className='font-montserrat leading-normal text-lg text-white hover:text-blue-600 transform '
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <i onClick={() => navigate("/cart")} className="fa-solid fa-cart-shopping fa-2x cursor-pointer mr-6" style={{color: '#74C0FC'}} ></i>
                <div className='flex gap-2 text-blue-500 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 '>
                    <Button onClick={handleLogin} label='Sign in' />
                </div>
                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt='hamburger icon' width={25} height={25}  />
                </div>
            </nav>
        </header>
    );
};

export default Nav;