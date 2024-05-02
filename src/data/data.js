import yoga_1 from "/yoga_app/yoga_1.png";
import yoga_2 from "/yoga_app/yoga_2.png";
import yoga_3 from "/yoga_app/yoga_3.png";
import yoga_4 from "/yoga_app/yoga_4.png";
import yoga_5 from "/yoga_app/yoga_5.png";

import pizza_1 from "/pizza_app/pizza_1.png";
import pizza_2 from "/pizza_app/pizza_2.png";
import pizza_3 from "/pizza_app/pizza_3.png";
import pizza_4 from "/pizza_app/pizza_4.png";
import pizza_5 from "/pizza_app/pizza_5.png";

import imr_1 from "/imr_app/imr_1.png";
import imr_2 from "/imr_app/imr_2.png";
import imr_3 from "/imr_app/imr_3.png";
import imr_4 from "/imr_app/imr_4.png";
import imr_5 from "/imr_app/imr_5.png";
import imr_6 from "/imr_app/imr_6.png";

export const data = [
  {
    id: 1,
    name: "Yoga Studio Web Application",
    image: [yoga_1, yoga_2, yoga_3, yoga_4, yoga_5],
    github: "https://github.com/nikhil0689/yoga-frontend",
    live: "https://main.d35odw21oyjve2.amplifyapp.com/",
    description:
      "The app is built for a Yoga studio to manage the details of Students, Classes and their payments. The backend is built on NestJS frame work. Backend consists of Rest apis for CRUD operations. All the APIs are guarded using Auth guard using passport strategies. The login mechanism uses access token and refresh tokens. Front end is built using React and styled components. AWS RDS (MySQL) is used for database. Front end is hosted on AWS amplify and the backend is hosted as a AWS lambda function. ",
  },
  {
    id: 2,
    name: "Fast-Pizza React practice",
    image: [pizza_1, pizza_2, pizza_3, pizza_4, pizza_5],
    github: "https://github.com/nikhil0689/fast-pizza",
    live: "https://fast-pizza-1wgtkkd07-nikhil-chandrashekars-projects.vercel.app/",
    description:
      "The app is built as a part of React practice. This is a Pizza ordering app that makes use of redux tool kit for state management and tailwind for styling. The app is hosted on Vercel.",
  },
  {
    id: 3,
    name: "Food hydrocolloids Website",
    image: [imr_1, imr_2, imr_3, imr_4, imr_5, imr_6],
    github: "",
    live: "https://hydrocolloid.com",
    description:
      "The website IMR international was build during my internship. This is built using PHP and MySQL. The website is hosted on a private linux hosting. Sign up and sign in, registration for yearly conference, hydrocolloid market data are some of the note worthy features of the app",
  },
];
