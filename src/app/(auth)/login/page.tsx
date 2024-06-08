'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch } from '@/redux/hooks';
import { setAccessToken, setUser } from '@/redux/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import Image from 'next/image';
import { Checkbox } from '@nextui-org/react';
import { Button, Link } from '@nextui-org/react';
// import * as Yup from 'yup';
import * as Yup from 'yup';
import style from './style.module.css';

type ValueTypes = {
  email: string;
  password: string;
};

const initialValues: ValueTypes = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Password is too short. At least 8 characters').required(),
});

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values: ValueTypes) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();
      console.log('Response Data:', data);

      if (data.accessToken) {
        dispatch(setAccessToken(data.accessToken));
        dispatch(setUser(data.user));
        console.log('Access Token:', data.accessToken);
        router.push('/');
      } else {
        throw new Error('Access Token is null');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to login');
    } finally {
      setLoading(false);
    }
  };


  return (
    <main>
      <section className="block lg:flex bg-backgroundWhiteSmoke w-full h-screen">
        <div className="bg-[#F5F5F5] w-full flex flex-col h-screen lg:w-2/5 p-6">
          <div className="flex justify-center mb-10 mt-10">
            <Link href="/">
              <Image src="/assets/GradesBot Logo-01.png" width={270} height={270} alt="logo" />
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                handleSubmit(values);
              }}
            >
              <div className="space-y-3 w-[450px]">
                <Form>
                  <div className="space-y-3">
                    <div>
                      <label className={`${style.label}`} htmlFor="email">Email</label>
                      <Field type="email" name="email" id="email" className={`${style.input}`} placeholder="example@gmail.com" />
                      <ErrorMessage name="email" component="div" className={`${style.error}`} />
                    </div>
                    <div>
                      <label className={`${style.label}`} htmlFor="password">Password</label>
                      <div className="relative">
                        <Field type={showPassword ? "text" : "password"} name="password" id="password" className={`${style.input}`} placeholder="password" />
                        {!showPassword ? (
                          <IoEyeOffSharp onClick={handleShowPassword} className="absolute right-2 top-5 cursor-pointer text-gray-600" />
                        ) : (
                          <IoEyeSharp onClick={handleShowPassword} className="absolute right-2 top-5 cursor-pointer text-gray-600" />
                        )}
                      </div>
                      <ErrorMessage name="password" component="div" className={`${style.error}`} />
                    </div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="remember me" className="text-gray-600">
                        <Checkbox color="primary" radius="full"></Checkbox>Remember me
                      </label>
                      <Link href="/forgetpassword" className="text-[#253C95] font-medium" size="sm">Forgot password?</Link>
                    </div>
                    <div>
                      <Button type="submit" className={`${style.button}`} disabled={loading}>Login</Button>
                    </div>
                  </div>
                </Form>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <span className="w-1/2 border-b border-gray-300"></span>
                  <span className="text-sm text-gray-500">OR</span>
                  <span className="w-1/2 border-b border-gray-300"></span>
                </div>
                <div className="mt-4">
                  <button  className="w-full flex items-center justify-center py-3 px-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-600 bg-white hover:bg-gray-50">
                    <Image width={40} height={40} src="/assets/google.png" alt="Google icon" className="h-5 w-5 mr-2" />
                    Continue with Google
                  </button>
                </div>
                <div>
                  <button className="w-full flex items-center justify-center py-3 px-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-600 bg-white hover:bg-gray-50">
                    <Image width={40} height={40} src="/assets/github.png" alt="GitHub icon" className="h-5 w-5 mr-2" />
                    Continue with GitHub
                  </button>
                </div>
                <div className="mt-4 text-center text-sm text-gray-600">
                  <span>Don't have an account? </span>

                  <Link href="/signup" className="text-[#253C95] font-medium">Sign up</Link>
                </div>
              </div>
            </Formik>
          </div>
        </div>
        <div className="bg-white dark:bg-DarkGray600 w-3/5 hidden sm:flex flex-col justify-center items-center">
          <Image width={500} height={500} src="/assets/Tablet login-rafiki.png" alt="Illustration" />
          <h2 className="text-h4 font-bold text-[#253C95] -mt-4">Meet all your needs on one platform</h2>
          <p className="text-h6 mt-2 text-gray-500 font-medium text-center w-[530px]">
            Meet all your classroom needs on a single platform. Assign assignments to your students, create quizzes, share your notes, and more.
          </p>
        </div>
      </section>
    </main>
  );
}
