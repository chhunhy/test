"use client";

import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us" className="dark:bg-DarkGray600">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-14 pb-10 items-center">
          <div
            className="w-[90%] mx-auto md:w-full grid place-content-center items-center md:place-content-start gap-y-3"
          >
            <h2
              data-aos="zoom-out-down"
              className="text-h1 text-primarycolor900 font-bold dark:text-secondarycolor text-center md:text-left"
            >
              Contact Us
            </h2>
            <p
              data-aos="zoom-out-down"
              className="text-h5 text-fontcolorslate600 dark:text-white text-center md:text-left"
            >
              Got any issue? Want to send us feedback? Feel free to contact us
              here.
            </p>

            <form
              className="flex max-w-[600px] flex-col gap-4"
              action="soknyhacker@gmail.com"
              method="POST"
            >
              <div data-aos="zoom-out-down">
                <div className="mb-2 block">
                  <label
                    htmlFor="email"
                    className="text-h6 font-medium text-fontcolorslate700 dark:text-white"
                  >
                    Your email
                  </label>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 border border-slate-200 rounded-rounded8 hover:border-primarycolor400 focus:outline-none "
                  required
                />
              </div>
              <div >
                <div className="mb-2 block">
                  <label
                    htmlFor="message"
                    className="text-h6 font-medium text-fontcolorslate700 dark:text-white"
                  >
                    Your message
                  </label>
                </div>
                <textarea
                  name="message"
                  id="message"
                  className="w-full p-2 border border-slate-200 resize-none rounded-rounded8 hover:border-primarycolor400 focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-[200px] flex justify-center items-center px-4 py-2 bg-primarycolor900 text-white rounded-rounded8 hover:bg-primarycolor700 focus:outline-none  
                dark:bg-secondarycolor dark:hover:bg-secondarycolor600 dark:text-white dark:focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>

          <div data-aos="zoom-out-left">
            <Image
                src="/assets/contact.png"
                width={1000}
                height={1000}
                alt="Contact us"
                className="w-[90%]">
              </Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
