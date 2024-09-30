import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex justify-between items-center p-4 border-b border-black'>

        <div className='flex space-x-4'>
            <Link href={"/"} className='font-bold text-xl'>발랑</Link>
            <Link href={"/brands"}>BRANDS</Link>
        </div>

        <div className='flex space-x-4'>
            <Link href={"/auth/sign-up"}>회원가입</Link>
            <Link href={"/auth/log-in"}>로그인</Link>
        </div>

    </header>
  )
}

export default Header