import React from 'react';
import Image from "next/image";
import {assets} from "@/assets/assets";

const NavBar = () => {
    return (
        <>
            <div className={'fixed top-0 right-0 w-[90%] -z-10 translate-y-[-80%]'}>
               <Image src={assets.header_bg_color} alt='header-bg-color' />
            </div>
         <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex item-center justify-between z-50">
             <a href="#top">
                 <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt="logo" />
             </a>
             <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
                 <li><a href="#top" className='font-Ovo'>Home</a></li>
                 <li><a href="#about" className='font-Ovo'>About me</a></li>
                 <li><a href="#services" className='font-Ovo'>Services</a></li>
                 <li><a href="#work" className='font-Ovo'>My Work</a></li>
                 <li><a href="#contact" className='font-Ovo'>Contact me</a></li>
             </ul>
             <div className={'flex items-center gap-4'}>
                 <button>
                     <Image src={assets.moon_icon} alt={'theme_logo'} className={'w-6'}/>
                 </button>
                 <a href={'#contact'} className="font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-200 rounded-full ml-4">Contact <Image src={assets.arrow_icon} alt={'contact_icon'} className="w-3"/></a>
                 <button className={'block ml-3'}>
                     <Image src={assets.menu_black} alt={'menu_black'} className={'md:hidden w-6'}/>
                 </button>
             </div>
         </nav>
        </>
    )
}

export default NavBar;