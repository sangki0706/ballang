'use client';

import { SignUp } from '@/api/auth.api';
import Header from '@/app/_components/Header'
import { signUpPage } from '@/schema/auth.schema';
import { useRouter } from 'next/navigation';
import React, { ComponentProps, useRef } from 'react'

function SignUpPage() {
  const router = useRouter();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const passwordConfirmInput = useRef<HTMLInputElement>(null);

  const handleSubmit:ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    //예외처리
    if(!emailInput.current) return;
    if(!passwordInput.current) return;
    if(!passwordConfirmInput.current) return;

    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    const passwordConfirm = passwordConfirmInput.current.value;

    if(!email) return alert("이메일 주소가 없습니다 이메일 주소를 입력해주세요");
    if(!password) return alert("비밀번호가 없습니다 비밀번호를 입력해주세요");
    if(password.length < 6) return alert("비밀번호가 6글자 이상이 아닙니다 6글자 이상 작성해주세요");
    if(!passwordConfirm) return alert("비밀번호 확인이 없습니다 비밀번호 확인을 입력해주세요 ");
    if(!email.includes("@") && !email.includes(".")) return alert("비밀번호 양식이 맞지 않습니다");
    if(password !== passwordConfirm)return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");

    const data:signUpPage = {email, password};

    await SignUp(data);

    alert("회원가입이 완료되었습니다, 감사합니다.");

    router.push("/");

    console.log(data);

  }


  return (
    <div>

      <Header />

      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="font-bold text-3xl">회원가입</h2>

        <label htmlFor="email" className='mb-2 text-left text-sm font-medium text-gray-700'>이메일</label>
        <input ref={emailInput} id='email' type="email" className='border border-black h-10 w-96 '  />

        <label htmlFor="password" className='mb-2 text-left text-sm font-medium text-gray-700'>비밀번호</label>
        <input ref={passwordInput} id='password' type="password" className='border border-black h-10 w-96 '  />

        <label htmlFor="passwordconfirm" className='mb-2 text-left text-sm font-medium text-gray-700'>비밀번호확인</label>
        <input ref={passwordConfirmInput} id='passwordconfirm' type="password" className='border border-black h-10 w-96 '  />

        <button className='h-14 w-96 bg-black text-white mt-8'>회원가입하기</button>
      </form>

    </div>
  )
}

export default SignUpPage