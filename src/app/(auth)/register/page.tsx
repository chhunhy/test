'use client'
import React, { useState } from 'react';
import {Link, image } from '@nextui-org/react';
import style from './style.module.css'
import { useRouter } from "next/navigation";
import * as Yup from 'yup';
import {Checkbox} from "@nextui-org/checkbox";
import { signIn } from "next-auth/react"
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { useRegisterMutation } from '@/redux/service/auth';
type ValueTypes = {
	email: string;
	username: string;
	password: string;
    confirmedPassword:string;
	
};
const initialValues: ValueTypes = {
    username:"",
	email: "",
	password: "",
	confirmedPassword: "",
};

const validationSchema = Yup.object().shape({
    username:Yup.string().max(60,"Username is too long").required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string().required("Password is required"),
    confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required("Confirm password is required"),
});

export default function Register() {
    
    const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
    const [register,{data,isLoading}]=useRegisterMutation();
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
		// Toggle password visibility
	};

    const handleSubmit = async (user:ValueTypes)=>{
       try {
         const res = await register({data:user}).unwrap();
        } catch (error) {
         console.log(error);
        }

    }


  return (
    <main>
        <section className='block lg:flex   w-full bg-orange-500 h-auto'>
            <div className='bg-[#F5F5F5] w-full flex flex-col lg:w-2/5 '>
            <div className='flex justify-center mb-4 mt-4'>
                <Link href='/'><Image src="/assets/GradesBot Logo-01.png" width={270} height={270} alt='logo' /> </Link>
            </div>
                    <div className=' flex justify-center w-full'>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                               handleSubmit(values);
                            }}
                        >
                            <div className='w-[450px] space-y-3'>
                            <Form>
                                <div className='space-y-3'>
                                    
                                    {/* username */}
                                    <div>
                                            <label className={`${style.label}`} htmlFor="username">Username</label>
                                        <Field type="text" name="username" id="username" className={`${style.input}`}   placeholder="username" />
                                        <ErrorMessage name='username' component='div' className={`${style.error}`}/>
                                        </div>
                                    {/* email */}
                                        <div>
                                            <label className={`${style.label}`} htmlFor="email">Email</label>
                                        <Field type="email" name="email" id="email" className={`${style.input}`}   placeholder="example@gmail.com" />
                                        <ErrorMessage name='email' component='div' className={`${style.error}`}/>
                                        </div>
                                        {/* password */}
                                        <div>
                                            <label className={`${style.label}`} htmlFor="password">Password</label>
                                                <div className='relative'>
                                                    <Field type={
                                                            showPassword ? "text" : "password"
                                                            } name="password" id="password" className={`${style.input}`} placeholder="password" />
                                                            {
                                                                !showPassword ? 
                                                                    ( <IoEyeOffSharp onClick={()=>handleShowPassword()} className='absolute right-2 top-5 cursor-pointer text-gray-600' />)
                                                                    :(<IoEyeSharp onClick={()=>handleShowPassword()} className='absolute right-2 top-5 cursor-pointer text-gray-600' />)
                                                            }
                               
                                                </div>
                                                <ErrorMessage name='password' component='div' className={`${style.error}`}/>
                                        </div>
                                        {/*confirm password */}
                                        <div>
                                            <label className={`${style.label}`} htmlFor="confirmpassword">Confirm Password</label>
                                                <div className='relative'>
                                                    <Field type={
                                                            showPassword ? "text" : "password"
                                                            } name="confirmedPassword" id="confirmedPassword" className={`${style.input}`} placeholder="confirm password" />
                                                            {
                                                                !showPassword ? 
                                                                    ( <IoEyeOffSharp onClick={()=>handleShowPassword()} className='absolute right-2 top-5 cursor-pointer text-gray-600' />)
                                                                    :(<IoEyeSharp onClick={()=>handleShowPassword()} className='absolute right-2 top-5 cursor-pointer text-gray-600' />)
                                                            }
                               
                                                </div>
                                                <ErrorMessage name='confirmedPassword' component='div' className={`${style.error}`}/>
                                        </div>
                                        <div>
                                            <Checkbox color='primary' className='text-gray-600' radius='full' >Check and read Term and Privacy</Checkbox>
                                        </div>
                                        <div>
                                            <button type="submit" className={`${style.button}`}>
                                                {/* {isLoading ? "Loading...":"Register"} */}
                                                Register
                                                </button>
                                        </div>
                                </div>
                            </Form>
                                <div className="flex items-center justify-center space-x-2 my-4">
                                    <span className="w-1/2 border-b border-gray-300"></span>
                                    <span className="text-sm text-gray-500">OR</span>
                                    <span className="w-1/2 border-b border-gray-300"></span>
                                </div>
                                <div className='mt-4'>
                                    <button onClick={() => signIn('google')} className="w-full  flex items-center justify-center py-3 px-3 border border-gray-300 rounded-xl  text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-50">
                                        <Image width={40} height={40} src="/assets/google.png" alt="Google icon" className="h-5 w-5 mr-2 "/> 
                                            Continue with Google
                                     </button>
                                </div>
                                <div>
                                    <button onClick={() => signIn('github')}  className="w-full flex items-center justify-center py-3 px-3 border border-gray-300 rounded-xl  text-sm font-medium text-gray-600 bg-white hover:bg-gray-50">
                                        <Image width={40} height={40} src="/assets/github.png" alt="Github icon" className="h-5 w-5 mr-2"/> 
                                        Continue with Github
                                    </button>
                                </div>
                                <div className="text-center text-md text-gray-500 mt-4">
                                    Aleady  have an account? <Link href="/verifycode" className="text-[#253C95] pl-3 hover:underline font-bold">Login</Link>
                                </div>
                            </div>
                            
                            
                        </Formik>
                    </div>
            </div>
            <div className='bg-white w-3/5 hidden flex-col md:flex justify-center items-center -mt-10 '>
                <Image width={430} height={430} src="/assets/Computer login-amico.png" alt="Illustration" className=""/> 
                <h2 className="text-h4 font-bold text-[#253C95] mt-7">Meet all your needs on one platform</h2>
                <p className="text-h6 mt-2 text-gray-500 font-medium text-center w-[530px]">
                    Meet all your classroom needs on a single platform. Assign assignments to your students, create quizzes, share your notes, and more.
                </p>
            </div>
        </section>
        
    </main>
  );
}
