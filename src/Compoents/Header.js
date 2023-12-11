import React from 'react';

 const Header = () => {
    return(
    <div className='main-header-container '>
       
        <div className='Header  h-24 space-x-[200px] flex justify-center shadow-md'>
        <a  href="https://careers.citigroup.com/">
        <img className='w-16 h-9 mt-[30px] ' src="https://tbcdn.talentbrew.com/company/287/26508/content/logo.svg"
            alt="logo" />
        </a>
       
        <ul className='flex mt-8 gap-5 mr-5  '>
            <li className=' cursor-pointer p-2 m-2  text-black text-xl'>
            <a href="https://careers.citigroup.com/" >Home</a></li>
            <li className='cursor-pointer p-2 m-2  text-black text-xl'>
            <a href="https://careers.citigroup.com/locations/"  >Locations</a>
            </li>
            <li className='cursor-pointer p-2 m-2  text-black text-xl'>
            <a href="https://careers.citigroup.com/teams/" target="_blank" >Teams</a></li>
            <li className='cursor-pointer p-2 m-2   text-black text-xl'>
            <a href="https://careers.citigroup.com/why-citi/our-values.html" target="_blank" >Why Citi</a>
            </li>
            <li className='p-2 m-2  text-black text-xl'>
            <a href="https://careers.citigroup.com/students-and-graduates/" target="_blank" >Students &amp; Graduates</a>
            </li>
        </ul>
        
        <h1 className='  text-blue-600 mt-[38px] text-3xl'>Careers</h1>
        </div>
    </div>
    )
}

export default Header;
