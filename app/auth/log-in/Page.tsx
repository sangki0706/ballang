import Header from '@/app/_components/Header'
import React from 'react'

function LogInPage() {
  return (
    <div>
      <Header/>

      <form className="flex flex-col items-center justify-center min-h-screen">

        <h2 className='mb-4 font-bold text-3xl '>로그인</h2>

        <label htmlFor="email" className='mb-2 text-left text-sm font-medium text-gray-700'>이메일</label>
        <input id='email' type="email" className='border border-black h-10 w-96 '  />

        <label htmlFor="password" className='mb-2 text-left text-sm font-medium text-gray-700'>비밀번호</label>
        <input id='password' type="password" className='border border-black h-10 w-96 '  />

        <button className='h-14 w-96 bg-black text-white mt-8'>로그인하기</button>

      </form>
    </div>
  )
}

export default LogInPage