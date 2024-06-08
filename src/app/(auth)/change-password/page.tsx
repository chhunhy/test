'use client'
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import {Link } from '@nextui-org/react';
import style from './style.module.css'
import { useChanagePasswordMutation } from "@/redux/service/user";

type ValueTypes={
    oldPassword:string;
    newPassword: string;
    confirmPassword:string;
}

const initialValues:ValueTypes={
    oldPassword:"",
    newPassword: "",
	confirmPassword: "",
}

const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().min(8,'Password is too short At least 8 characters').required(),
    newPassword: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Password must match")
    .required("Confirm password is required"), 
})
export default function ChanagePassword() {
  const [showPassword,setShowPassword] = useState(false);
  const [changePassword,{data,isLoading}]=useChanagePasswordMutation()
  const handleShowPassword=()=>{
    setShowPassword(!showPassword);
}
  const handleSubmit= async(changePasswordBody:ValueTypes)=>{
    try{
        const rest = await changePassword({changePasswordBody:changePasswordBody});
    }catch(error){
        console.log('error',error)
    }
  }
  return (
    <main>
        <section className='flex justify-center h-screen bg-backgroundWhiteSmoke items-center'>
            
            <div className='w-[450px] '>
            <div className='flex justify-center items-center mt-4 mb-4'>
                  <Link href='/'><Image src="/assets/GradesBot Logo-01.png" width={250} height={250} alt='logo' /> </Link>
              </div>
                
                 <div className=''>
                    <Formik 
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values,actin)=>{
                          handleSubmit(values)
                        }}
                    >
                       <div className='bg-white rounded-xl w-[450px] mx-auto pt-4'>
                          <Form>
                                <h1 className='text-h4 text-center text-primarycolor900 font-bold'>Change Password</h1>
                                <div className='w-96 space-y-4 mx-auto pb-5 pt-5'>
                                {/*old password */}
                                <div>
                                    <label className={`${style.label}`} htmlFor="oldPassword">Old Password</label>
                                    <div className='relative'>
                                        <Field type={
                                        showPassword ? "text" : "password"
                                        } name="oldPassword" id="oldPassword" className={`${style.input}`} placeholder="oldpassword" />
                                            {
                                                !showPassword ? 
                                                    ( <IoEyeOffSharp onClick={()=>handleShowPassword()} className='absolute right-2 top-5 cursor-pointer text-gray-600' />)
                                                    :(<IoEyeSharp onClick={()=>handleShowPassword()} className='absolute right-2 top-5 cursor-pointer text-gray-600' />)
                                            }
                               
                                </div>
                                     <ErrorMessage name='oldPassword' component='div' className={`${style.error}`}/>
                            </div>
                                        {/* password */}
                                        <div>
                                            <label className={`${style.label}`} htmlFor="newPassword">Password</label>
                                                <div className='relative'>
                                                    <Field type={
                                                            showPassword ? "text" : "password"
                                                            } name="newPassword" id="newPassword" className={`${style.input}`} placeholder="password" />
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
