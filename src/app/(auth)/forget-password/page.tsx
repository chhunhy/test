'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link } from '@nextui-org/react';
import Image from 'next/image';
import style from './style.module.css'
import { useForgetPasswordMutation } from '@/redux/service/auth';
type ValueTypes={
  email: string;
}
const initialValues:ValueTypes={
  email:''
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})
export default function ForgetPassword() {
  const [forgot,{data,isLoading}]=useForgetPasswordMutation();
  const handleSubmit = async (email:ValueTypes)=>{
    try{
      const rest = await forgot({email:email});
    }catch(error){
      console.log('error',error)
    }
  }
  return (
    <main>
        <section className='flex justify-center h-screen bg-backgroundWhiteSmoke dark:bg-DarkGray600 items-center'>
        
            <div className=' w-[450px] h-80'>
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
                       <div className='bg-white rounded-xl w-[450px] mx-auto '>
                       <h1 className='text-h4 text-center text-primarycolor900 font-bold pt-4'>Forget Password</h1>
                          <Form>
                                <div className='w-96 space-y-4 mx-auto pb-4 pt-4'>
                                  <div>
                                    {/* email */}
                                      <label className={`${style.label}`} htmlFor="email">Email</label>
                                    <Field type="email" name="email" id="email" className={`${style.input}`}   placeholder="example@gmail.com" />
                                    <ErrorMessage name='email' component='div' className={`${style.error}`}/>
                                  </div>
                                  <div>
                                      <button type="submit" className={`${style.button}`}>Next</button>
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
