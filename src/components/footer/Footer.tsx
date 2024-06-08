
"use client";
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Footer } from "flowbite-react";

export function FooterComponent() {
  return (
    <footer  className="dark:bg-DarkGray800 pt-8 pb-12">

      <section  className="container  my-6 flex flex-wrap gap-3  justify-between lg:items-start md:justify-center md:gap-x-10 lg:gap-x-0 md:items-center gap-y-3 ">

            <div className=" w-full md:w-[60%] lg:w-[37%] flex flex-col gap-y-4 md:gap-y-6 justify-center items-center md:justify-center  md:items-center lg:items-start ">

                {/* logo for light mode */}
                <span className='flex justify-center lg:justify-start items-start dark:hidden'>
                    <Image
                        className='w-1/2'
                        src="/assets/logo/logol.png"
                        alt="Picture of the author"
                        width={1000}
                        height={1000}
                    />
                </span>

                {/* logo for dark mode */}
                <span className='hidden dark:flex justify-center lg:justify-start '>
                    <Image
                        className='w-1/2'
                        src="/assets/logo/logod.png"
                        alt="Picture of the author"
                        width={1000}
                        height={1000}
                    />
                </span>
                
                <p className='w-[50%] lg:w-[70%]  text-left text-fontcolorslate700 text-h7 dark:text-white pb-4 md:pt-0'>Welcome to your personalized learning hub, empowering goal achievement.</p>
            </div>

            <div className='w-[47%] md:w-[22%] lg:w-[15%] mx-auto'>
                <h3 className=' text-fontcolorslate700 text-h4 font-semibold dark:text-white'>Page Link</h3>
                <div className='grid mt-3'>
                    <ul className='text-fontcolorslate600 text-h5 grid gap-y-4 dark:text-white '>
                        <li className=' hover:text-primarycolor900 dark:hover:text-secondarycolor'>
                            <Link href="/">Feature</Link>
                        </li>
                        <li className='hover:text-primarycolor900 dark:hover:text-secondarycolor'>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className='hover:text-primarycolor900 dark:hover:text-secondarycolor'>
                            <Link href="/">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-[45%] md:w-[22%] lg:w-[15%] mx-auto'>
                <h3 className='text-fontcolorslate700 text-h4 font-semibold dark:text-white'>Page Link</h3>
                <div className='grid mt-3'>
                    <ul className='text-fontcolorslate600 text-h5 grid gap-y-4 dark:text-white'>
                        <li className='hover:text-primarycolor900 dark:hover:text-secondarycolor'>
                            <Link href="#">Class Creation</Link>
                        </li>
                        <li className='hover:text-primarycolor900 dark:hover:text-secondarycolor'>
                            <Link href="#">Assingnment</Link>
                        </li>
                        <li className='hover:text-primarycolor900 dark:hover:text-secondarycolor'>
                            <Link href="#">Auto Grading</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-[45%] md:w-[22%] lg:w-[15%] '>
                <h3 className='text-fontcolorslate700 text-h4 font-semibold dark:text-white'>Page Link</h3>
                <div className='grid mt-3'>
                    <ul className='text-fontcolorslate600 text-h5 grid gap-y-4 dark:text-white'>
                        <li className='hover:text-primarycolor900 dark:hover:text-secondarycolor'>
                            <Link href="#">Team of use</Link>
                        </li>
                        <li className='hover:text-primarycolor900 dark:hover:text-secondarycolor'>
                            <Link href="#">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-[45%] md:w-[22%] lg:w-[15%] '>
                <h3 className='text-fontcolorslate700 text-h4 font-semibold dark:text-white'>Social Link</h3>
                <div className='grid mt-3'>
                    <ul className='text-fontcolorslate600 text-h5 grid gap-y-4 dark:text-white'>
                        <li className='hover:text-primarycolor900 dark:hover:text-secondarycolor'>
                            <Link href="#" className='flex gap-x-2 items-center'>
                                <span className='text-primarycolor800 text-h4 hover:text-primarycolor700'><FaFacebook /></span>
                                <span> Facebook</span>
                            </Link>
                        </li>
                        <li className='hover:text-primarycolor900 dark:hover:text-secondarycolor'>
                        <Link href="#" className='flex gap-x-2 items-center'>
                                <span className='text-fontcolorslate800 hover:text-fontcolorslate700 text-h4 dark:text-backgroundWhiteSmoke'><FaSquareXTwitter /></span>
                                <span> Twitter</span>
                            </Link>
                        </li>
                        <li className='hover:text-primarycolor900 dark:hover:text-secondarycolor'>
                            <Link href="#" className='flex gap-x-2'>
                                <Image
                                    className='w-6'
                                    src="/assets/icons/mail.png"
                                    alt="facebook image"
                                    width={100}
                                    height={100}
                                />
                               <span> Mail</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

      </section>

      <div className=' text-center dark:text-white'>
        <Footer.Divider />
        <Footer.Copyright href="/" by="GradesBot. All right reversed™" year={2024} />
      </div>

    </footer>
  );
}
