import React from "react";
import Image from "next/image";

const WhyChooseCard: React.FC = () => {
  const cardData: WhyChoose[] = [
    {
      title: "Team and Individual",
      icon: "/assets/community.png",
      description:
        "GradesBot supports both team and individual work. Create and manage groups for team projects, or handle individual assignments with ease. Track progress and receive feedback, whether working solo or in a team.",
    },
    {
      title: "Real Time Notification",
      icon: "/assets/ringing.png",
      description:
        "Stay updated with GradesBot's real-time notifications. Instantly receive alerts for new assignments, grades, announcements, and class updates, ensuring you never miss important information.",
    },
    {
      title: "Auto Grading",
      icon: "/assets/bot.png",
      description:
        "Streamline your workflow withGradesBot's auto grading feature. Automatically assess assignments and quizzes, providing immediate feedback and saving valuable time for both students and instructors.",
    },
    {
      title: "Class Creation",
      icon: "/assets/assingment.png",
      description:
        "Easily set up your courses with GradesBot's class creation feature. Quickly create classes, add students, and organize materials in one seamless process, making it simple to start teaching right away.",
    },
    {
      title: "AI Power Quiz",
      icon: "/assets/ai.png",
      description:
        "Enhance assessments with GradesBot's AI-powered quizzes. Generate personalized quizzes, auto-grade responses, and provide instant feedback for efficient evaluation.",
    },
    {
      title: "Assingment Creation",
      icon: "/assets/assingment.png",
      description:
        "Create assignments effortlessly with GradesBot. Add instructions, due dates, and attachments. Assign to individuals or groups and track submissions easily.",
    },
  ];

  return (
    <div className="w-[90%] mx-auto sm:w-full grid grid-cols-1 place-content-center items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {cardData.map((card, index) => (
        <div key={index} className="w-full ">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            className="w-full  h-max flex flex-col gap-y-3 p-6 rounded-rounded12 bg-backgroundWhite dark:bg-DarkGray800"
          >
            <div className="w-14 ">
              {card.icon && (
                <div className="relative w-full h-full p-2 bg-primarycolor900 rounded-rounded8">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    objectFit="contain"
                    className="rounded-rounded8"
                  />
                </div>
              )}
            </div>
            <h3 className="text-fontcolorslate700 font-bold text-h5 dark:text-white">
              {card.title}
            </h3>
            <p className="text-fontcolorslate500 text-h6 dark:text-white">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseCard;
