// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const works = [
  {
    id: "d38a3b8e67c6",
    title: "Argent Bank",
    description:
      "Development of the front-end of a Banking Application using React, Redux and RTK Query",
    image: "/works/argent-bank-2.webp",
    tags: ["sass", "javascript", "react", "redux"],
    code: "https://github.com/MarionCorvez/argent-bank",
  },
  {
    id: "e3ab19975640",
    title: "724 Events",
    description:
      "Test and debug an event agency website made with React using Jest",
    image: "/works/724-events-2.webp",
    tags: ["sass", "javascript", "react", "jest"],
    code: "https://github.com/MarionCorvez/724-events",
    demo: "https://724-events-theta.vercel.app/",
  },
  {
    id: "e14d1943f464",
    title: "Kasa",
    description: "Creation of a real estate rental application with React",
    image: "/works/kasa-2.webp",
    tags: ["sass", "javascript", "react"],
    code: "https://github.com/MarionCorvez/kasa",
    demo: "https://kasa-eosin.vercel.app/",
  },
  {
    id: "5b619fe57baa",
    title: "Sophie Bluel",
    description: "Build of a dynamic portfolio with JavaScript and web API",
    image: "/works/sophie-bluel-2.webp",
    tags: ["sass", "javascript"],
    code: "https://github.com/MarionCorvez/sophie-bluel",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

module.exports = {
  users,
  works,
  revenue,
};
