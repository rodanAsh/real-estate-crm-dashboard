import {FaSun,FaMoon} from 'react-icons/fa6'
import { useTheme } from '../hooks/useTheme'
import profile from '../assets/profile.png'
import {FaCaretDown} from 'react-icons/fa'
import { useState } from 'react'

const Header = () => {
    const {theme,toggleTheme} = useTheme()
    const [isMenu,setIsMenu] = useState(false)

    const handleTheme = () => {
        toggleTheme()
    }

  return (
    <section className="px-8 py-2 background-gradient flex items-center justify-between">
        {/* logo */}
        <h1 className="text-2xl font-bold text-white">Yagri<span className='text-yellow-500 font-extrabold'>.</span></h1>
        <div className='flex items-center gap-2 md:gap-4'>
            <div onClick={handleTheme} className='text-white text-xl cursor-pointer'>
                {
                    theme ? <FaSun /> : <FaMoon />
                }
            </div>
            <div className='relative'>
                <div onClick={() => setIsMenu(prev => !prev)} className='flex items-end text-white cursor-pointer hover:scale-105 transition-all duration-75'>
                    <img className='w-8 rounded-full' src={profile} alt="" />
                    <FaCaretDown />
                </div>
                
                {/* Modal */}
                {
                    isMenu && (
                        <div className='p-2 absolute top-10 right-0 bg-white text-xs text-black rounded-md leading-snug font-medium z-10'>
                            <p className='hover:underline cursor-pointer'>Notifications</p>
                            <p className='hover:underline cursor-pointer'>Settings</p>
                            <p className='hover:underline cursor-pointer'>Logout</p>
                        </div>
                    )
                }
                
            </div>
        </div>
    </section>
  )
}

export default Header