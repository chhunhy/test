'use client'
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import style from './style.module.css'
import {Link } from '@nextui-org/react';
type ValueTypes={
    newPassword: string;
    confirmedPassword:string;
}
const initialValues:ValueTypes={
  newPassword: "",
	confirmedPassword: "",
}

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Password must match")
    .required("Confirm password is required"), 
})

export default function ResetPassword() {
  const [showPassword,setShowPassword] = useState(false);
  const handleShowPassword=()=>{
    setShowPassword(!showPassword);
}
  return (
    <main>
        <section className='flex justify-center h-screen bg-backgroundWhiteSmoke items-center'>
            
            <div className='w-[450px]'>
            <div className='flex justify-center items-center mt-4 mb-4'>
                  <Link href='/'><Image src="/assets/GradesBot Logo-01.png" width={250} height={250} alt='logo' /> </Link>
              </div>
                
                 <div className=''>
                    <Formik 
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values,actin)=>{
                          console.log('values',values)
                        }}
                    >
                       <div className='bg-white rounded-xl w-[450px] mx-auto'>
                       <h1 className='text-h4 text-center text-primarycolor900 font-bold pt-4'>Reset Password</h1>
                          <Form>
                                <div className='w-96 space-y-4 mx-auto pb-4 pt-4'>
                            {/* password */}
                            <div>
                                            <label className={`${style.label}`} htmlFor="newPassword">Password</label>
                                                <div className='relative'>
                                                    <Field type={
                                                            showPassword ? "text" : "password"
                                                            } name="newPassword" id="password" className={`${style.input}`} placeholder="password" />
                                                            {
                                                                !showPassword ? 
                                                                    ( <IoEyeOffSharp onClick={()=>handleShowPassword()} className='absolute right-2 top-5 cursor-pointer text-gray-600' />)
                                                                    :(<IoEyeSharp onClick={()=>handleShowPassword()} className='absolute right-2 top-5 cursor-pointer text-gray-600' />)
                                                            }
                               
                                                </div>
                                                <ErrorMessage name='newPassword' component='div' className={`${style.error}`}/>
                                        </div>
                                        {/*confirm password */}
                                        <div>
                                            <label className={`${style.label}`} htmlFor="confirmpassword">Confirm Password</label>
                                                <div className='relative'>
                                                    <Field type={
                                                            showPassword ? "text" : "password"
                                                            } name="confirmPassword" id="confirmPassword" className={`${style.input}`} placeholder="confirm password" />
                                                            {
                                                                !showPassword ? 
                                                                    ( <IoEyeOffSharp onClick={()=>handleShowPassword()} className='absolute right-2 top-5 cursor-pointer text-gray-600' />)
                                                                    :(<IoEyeSharp onClick={()=>handleShowPassword()} className='absolute right-2 top-5 cursor-pointer text-gray-600' />)
                                                            }
                               
                                                </div>
                                                <ErrorMessage name='confirmPassword' component='div' className={`${style.error}`}/>
                                        </div>
                                  <div>
                                      <button type="submit" className={`${style.button}`}>Send</button>
                                  </div>
                                  <div>
                                  <p className='text-primarycolor900 text-h5 text-center font-medium'><Link href="/login" className='text-primarycolor900 text-h5 text-center font-medium' >Turn Back</Link></p>
                                </div> 
                                </div>
                            </Form>
                       </div>
                    </Formik> 
                  </div> 
            </div>  
        </section>
    </main>
  );
}
