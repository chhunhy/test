import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUsComponent = () => {
  return (
    <section className=" bg-backgroundWhiteSmoke dark:bg-DarkGray600 ">
        <div className="container relative z-10 pt-80">
          <div className=" pt-14 ">
            <div className="w-full z-10 grid  gap-y-2 place-items-center relative  rounded-rounded24  gap-5 pt-14  place-content-center items-center">
              <Link
                href="#"
                className="w-[100px] text-center py-1 px-3 text-h5 text-ascentcolorblue100 bg-secondarycolor rounded-rounded12"
              >
                {" "}
                GradesBot{" "}
              </Link>

              <div className="z-16 relative text-center text-h1 mt-6 font-bold text-primarycolor900 dark:text-primarycolor700">
                <div className="absolute -top-3 right-3">
                  <img
                    src="/assets/GradesBot Logo-04.png"
                    alt="Logo gradebot"
                    className="w-8"
                  />
                </div>
                <h1>About Us</h1>
              </div>

              <p className="text-h5 mt-3 text-fontcolorslate700 dark:text-white w-[90%] text-center sm:w-[85%] md:text-[80%] lg:text-[75%]">
                GradesBot is a comprehensive class management and assessment
                platform designed to streamline the educational experience for
                both teachers and students. We believe that technology can
                transform the way we teach and learn, and our mission is to
                create tools that foster a more engaging, efficient, and
                collaborative virtual classroom.
              </p>

              <Image
                src="/assets/aboutUs/au1.png"
                alt="Logo GradeBot"
                width={1200}
                height={1200}
                className="w-[80%] mt-4"
              />
            </div>
          </div>

          {/* Our mission */}
          <div className="w-ful flex justify-center items-center">
            <div data-aos="zoom-in-right" className="w-1/2 ">
              <div className="w-[95%] grid place-content-start gap-y-4">
                <h2 className="text-h1 font-bold dark:text-white">
                  Our Mission{" "}
                </h2>
                <p className="text-fontcolorslate600 text-h5 dark:text-white">
                  Our mission at GradesBot is to innovate education technology,
                  simplifying classroom management, fostering collaboration, and
                  inspiring academic excellence. Through cutting-edge tools and
                  a supportive environment, we empower learners to thrive and
                  reach their full potential.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in-left" className="w-1/2 flex justify-end">
              <Image
                src="/assets/aboutUs/au2.png"
                alt="Logo GradeBot"
                width={1200}
                height={1200}
                className="w-[80%] mt-4"
              />
            </div>
          </div>

          {/* Our mission */}
          <div className="w-full flex justify-center items-center">
            <div data-aos="zoom-in-left" className="w-1/2 flex justify-start">
              <Image
                src="/assets/aboutUs/au3.png"
                alt="Logo GradeBot"
                width={1200}
                height={1200}
                className="w-[80%] mt-4"
              />
            </div>

            <div data-aos="zoom-in-right" className="w-1/2 ">
              <div className="w-[95%] grid place-content-start gap-y-4">
                <h2 className="text-h1 font-bold dark:text-white">
                  Our Vision{" "}
                </h2>
                <p className="text-fontcolorslate600 text-h5 dark:text-white">
                Our vision at GradesBot is to revolutionize the education landscape by providing a seamless and empowering learning experience. We aspire to become the premier platform that facilitates collaboration, fosters innovation, and unlocks the full potential of every learner, ultimately shaping a brighter future for education worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUsComponent
