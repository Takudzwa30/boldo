// Libraries
import { StaticImageData } from "next/image";

// Images
import blogOne from "@/Assets/images/blogImageOne.png";
import userOne from "@/Assets/images/userOne.png";

export const blogs: Blog[] = [
  {
    id: 1,
    image: blogOne,
    category: "Category",
    date: "November 22, 2021",
    blogText: "Pitch termsheet backing validation focus release.",
    name: "Chandler Bing",
    userImage: userOne,
  },
  {
    id: 2,
    image: blogOne,
    category: "Category",
    date: "November 22, 2021",
    blogText: "Pitch termsheet backing validation focus release.",
    name: "Chandler Bing",
    userImage: userOne,
  },
  {
    id: 3,
    image: blogOne,
    category: "Category",
    date: "November 22, 2021",
    blogText: "Pitch termsheet backing validation focus release.",
    name: "Chandler Bing",
    userImage: userOne,
  },
];
