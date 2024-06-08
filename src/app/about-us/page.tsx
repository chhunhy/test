import React from "react";
import MentorComponent from "@/components/about-us/MentorComponent";
import TeamMemberComponent from "@/components/about-us/TeamMemberComponent";
import Navigation from "@/components/navigation/Navigation";
import AboutUsComponent from "@/components/about-us/AboutUsComponent";

const AboutUs = () => {
  return (
    <>
      <Navigation />
      <AboutUsComponent/>
      <MentorComponent />
      <TeamMemberComponent />
    </>
  );
};
export default AboutUs;
