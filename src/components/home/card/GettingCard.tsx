import React from "react";
import Image from 'next/image';

const GettingCard: React.FC = () => {   const cardData: GettingStated[] = [
    {
      title: "Create class",
      icon: "/assets/edit.png",
    },
    {
      title: "Join class",
      icon: "/assets/link.png",
    },
    {
      title: "Auto Grading",
      icon: "/assets/automation.png",
    },
    {
      title: "Team Submission",
      icon: "/assets/assessment.png",
    },
  ];


  return (
    <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-center items-center gap-6 pt-3">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex w-[60%] sm:w-full mx-auto gap-x-2 justify-start items-center py-3 px-4 rounded-lg border border-primarycolor250 text-fontcolorslate600 text-h6 sm:text-h5 font-semibold shadow-primarycolor400 dark:text-white dark:bg-DarkGray800 dark:border-primarycolor900 dark:shadow-primarycolor700"
        >
          {card.icon && (
            <Image 
              src={card.icon} 
              alt={card.title} 
              width={40} 
              height={40} 
              className="mr-2 ml-4" 
            />
          )}
          {card.title}
        </div>
      ))}
    </div>
  );
  
};

export default GettingCard;
