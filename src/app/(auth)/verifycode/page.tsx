'use client'
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image';
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import style from './style.module.css';
type ValueTypes={
    verificationCode: string;
}
const initialValues:ValueTypes={
    verificationCode:'',
}
const validationSchema = Yup.object().shape({
    verificationCode: Yup.string().required('Required'),
})
export default function VerifyCode() {
    const [showPassword,setShowPassword] = useState(false);
    const handleShowPassword=()=>{
        setShowPassword(!showPassword);
    }
  return (
    <main>
        <section className='block lg:flex  h-screen bg-backgroundWhiteSmoke w-full'>
            <div  className=' w-full flex flex-col  pb-5 lg:w-full  xl:w-1/2'>
                <div className='flex justify-center mt-20 mb-5'>
                    <Image src="/assets/GradesBot Logo-01.png" width={270} height={270} alt='logo' /> 
                    
                </div>
                <div className='w-full flex-col justify-center items-center'>
                    <h1 className='text-h2 text-center  pb-5  bg-backgroundWhiteSmoke font-bold text-primarycolor900'>Verification Code</h1>
                    <div className='w-[470px] sm:w-[620px] md:w-[700px]  xl:w-[650px] mx-auto'>
                    <p className='text-center text-h6 text-gray-400'>Enter the verification code sent to your email or phone to confirm your identity and secure your account. If you didn&apos;t receive it&apos; request a new code. Verify to continue.</p>
                    </div>
                </div>
                <div className='w-[430px] sm:w-[550px] md:w-[650px] xl:w-[590px] mt-10 bg-white h-auto rounded-xl mx-auto'>
                  
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values,action)=>{
                            console.log('value',values);
                        }}
                        
                    >
                        <Form>
                            <div className='w-[350px] sm:w-[470px] md:w-[560px] xl:w-[500px] mx-auto space-y-4 mt-6 mb-6'>
                            <div>
                            <label className={`${style.label}`} htmlFor="password">Verify Code</label>
                            <div className='relative'>
                                <Field type={
                                    showPassword ? "text" : "password"
                                } name="password" id="password" className={`${style.input}`} placeholder="verifycode" />
                                {
                                    !showPassword ? 
                                        ( <IoEyeOffSharp onClick={()=>handleShowPassword()} className='absolute right-2 top-5 cursor-pointer text-gray-600' />)
                                        :(<IoEyeSharp onClick={()=>handleShowPassword()} className='absolute right-2 top-5 cursor-pointer text-gray-600' />)
                                }
                               
                            </div>
                            <ErrorMessage name='password' component='div' className={`${style.error}`}/>
                        </div> 
                        <div>
                            <button type="submit" className={`${style.button}`}>Login</button>
                        </div>
                        <div>
                            <p className='text-h4 text-center text-primarycolor900 font-medium'>Turn Back</p>
                        </div>  
                        </div>
                        </Form>

                    </Formik>
                </div>
            </div>
            <div className=' xl:w-1/2 hidden flex-col xl:flex justify-center items-center h-screen '>
                <Image width={500} height={500} src="/assets/Verified-pana.png" alt="Illustration" className=""/> 
            </div>
        </section>
    </main>
  );
}
