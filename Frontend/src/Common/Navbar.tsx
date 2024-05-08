import { FaBars } from "react-icons/fa";
import logo from "../assets/Navbar/Shoe_logo.png";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/Navbar/avatar.png";
import { FiLogOut } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Search from "../Components/Search";


const Navbar = () => {
  let isAuthenticated = true;

  const [opennav, setopennav] = useState(false);
  const [profileopen, setprofileopen] = useState(false);
  const [searchpanel,setsearchpanel] = useState(false)

  const toggleNav = () => {
    setopennav(!opennav);
  };

  return (
    <div>
      <header className="bg-[#ffffff30] px-4 md:px-8 py-1">
        <nav className="flex items-center  justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className=" h-8 md:h-12" />
            <h1 className="text-2xl md:text-3xl font-semibold">OXY</h1>
          </div>

          {/* small screens */}
          {opennav && (
            <>
              <div className="fixed top-0 right-0 w-screen h-full bg-black/50 backdrop-blur-sm  bg-slate-500">
                <section className="absolute bg-white  flex flex-col text- duration-100 top-0 right-0 h-screen p-4 px-12 gap-4 z-50">
                  <button
                    className="text-2xl mb-8 cursor-pointer pl-16"
                    onClick={() => setopennav(!opennav)}
                  >
                    <MdOutlineClose />
                  </button>

                  <button className="flex items-center gap-2">
                    <FaRegHeart className="text-2xl" />
                    Wishlist
                  </button>
                  <button className="flex items-center gap-2">
                    <IoBagOutline className="text-2xl" />
                    Cart
                  </button>
                  <hr></hr>
                  <Link className=" hover:text-blue-500 hover:scale-125 duration-100">
                    Home
                  </Link>
                  <Link className=" hover:text-blue-500 hover:scale-125 duration-100">
                    SHOP
                  </Link>
                  <Link className=" hover:text-blue-500 hover:scale-125 duration-100">
                    MEN
                  </Link>
                  <Link className=" hover:text-blue-500 hover:scale-125 duration-100">
                    WOMEN
                  </Link>
                  <Link className=" hover:text-blue-500 hover:scale-125 duration-100">
                    PREMIUM
                  </Link>
                </section>
              </div>
            </>
          )}

          {/* Medium large screens */}
          <div className="hidden md:block">
            <ul className="flex text-md gap-5 items-center cursor-pointer ">
              <li className=" hover:text-blue-500 hover:scale-125 duration-100">
                <a>HOME</a>
              </li>
              <li className=" hover:text-blue-500 hover:scale-125 duration-100">
                <a>SHOP</a>
              </li>
              <li className=" hover:text-blue-500 hover:scale-125 duration-100">
                <a>MEN</a>
              </li>
              <li className=" hover:text-blue-500 hover:scale-125 duration-100">
                <a>WOMEN</a>
              </li>
              <li className=" hover:text-blue-500 hover:scale-125 duration-100">
                <a>PREMIUM</a>
              </li>
              <li className=" hover:text-blue-500 hover:scale-125 duration-100">
                <IoBagOutline className="text-2xl" />
              </li>
            </ul>
          </div>



          <div className="flex items-center gap-2  md:gap-4">

           
           <button className="py-1 px-2" onClick={()=>setsearchpanel(!searchpanel)}>
            <IoSearch className="text-2xl md:text-3xl"/></button>
            {
              searchpanel && (
                <><Search onClose={()=>setsearchpanel(!searchpanel)}/></>
              )
            }
           

            {!isAuthenticated && (
              <button className="duration-150 bg-blue-500 border-0 px-1 md:px-3 py-1 rounded-md text-white hover:bg-green-500 hover:scale-110">
                Sign-In
              </button>
            )}

            {isAuthenticated && (
              <>
                <img
                  src={avatar}
                  onClick={() => setprofileopen(!profileopen)}
                  className="rounded-circle h-10 md:h-12 border-2 rounded-full cursor-pointer "
                />

                {/* Porofile Dropdown */}
                {profileopen && (
                  <>
                    <div className="bg-[#ffffff30] items-center absolute top-16 md:right-10 right-4 ">
                      <div className="flex flex-col gap-2 border-2 px-5 py-2">
                        <Link>My Account</Link>
                        <Link>Returns and Order</Link>
                        <button className="flex items-center gap-2">
                          <IoBagOutline className="text-xl" />
                          Cart
                        </button>
                        <button className="flex items-center gap-2">
                          <FaRegHeart className="text-xl" />
                          Wishlist
                        </button>
                        <hr></hr>
                        <Link>
                          <button className="flex my-2 items-center gap-2 duration-150 bg-red-500 border-0 px-3 py-1 rounded-md text-white  hover:scale-110">
                            <FiLogOut /> Logout
                          </button>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}


            <button onClick={toggleNav} className="md:hidden">
              <FaBars className="text-3xl " />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
