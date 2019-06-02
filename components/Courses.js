import React from "react";
import styled from "styled-components";
import Course from "../components/Course";

const Courses = () => (
  <Container>
    {courses.map((course, index) => (
      <Course
        key={index}
        image={course.image}
        title={course.title}
        subtitle={course.subtitle}
        logo={course.logo}
        topic={course.topic}
        avatar={course.avatar}
        caption={course.caption}
      />
    ))}
  </Container>
);

export default Courses;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 10px;
`;

// Data - replace author with topic
const courses = [
  {
    title: "Honest Truthtelling",
    subtitle: "12 sections",
    image: require("../assets/background5.jpg"),
    logo: require("../assets/logo-meditate.png"),
    topic: "World",
    avatar: require("../assets/avatar.jpg"),
    caption: "Transform by telling the truth"
  },
  {
    title: "Energy Foundations",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-meditate.png"),
    topic: "Energy",
    avatar: require("../assets/avatar.jpg"),
    caption: "Go beyond the five senses and enter a world of abundance"
  },
  {
    title: "Practical Astrology",
    subtitle: "12 sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-meditate.png"),
    topic: "Spirituality",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn how celestial bodies shape your life"
  },
  {
    title: "Vastu Foundations",
    subtitle: "12 sections",
    image: require("../assets/background6.jpg"),
    logo: require("../assets/logo-meditate.png"),
    topic: "Energy",
    avatar: require("../assets/avatar.jpg"),
    caption: "Programming the subconscious by designing the space"
  }
];
