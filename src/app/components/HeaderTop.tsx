import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitch, BsTwitter } from 'react-icons/bs'
const HeaderTop = () => {
    return (
        <div className='border-b border-black hidden sm:block bg-[#FF5321]'>
            <div className='container py-4'>
                <div className='flex justify-between items-center'>
                    <div className='hidden lg:flex gap-2'>
                        <div className='header_top_icon_wrapper'>
                            <BsFacebook />

                        </div>
                        <div className='header_top_icon_wrapper'>
                            <BsLinkedin />

                        </div>
                        <div className='header_top_icon_wrapper'>
                            <BsInstagram />

                        </div>
                        <div className='header_top_icon_wrapper'>
                            <BsTwitter />

                        </div>

                    </div>

                    <div className='text-white text-[16px]'> <b> FREE SHOPPING</b> THIS WEEK ORDER - $55

                    </div>

                    <div className='flex gap-4 '>
                        <select className='text-gray-500 text-[12px] w-[70px]' name="currency" id="currency">
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="PKR" >PKR </option>
                        </select>

                        <select className='text-gray-500 text-[12px] w-[80px]' name="language" id="language">
                            <option value="ENGLISH">ENGLISH</option>
                            <option value="FRENCH">FRENCH</option>
                            <option value="URDU">URDU</option>
                            <option value="HINDI">HINDI</option>
                            <option value="CHINESE">CHINESE</option>
                        </select>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderTop