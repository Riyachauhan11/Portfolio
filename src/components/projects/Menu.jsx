import QueryGenie from "../../assets/query genie.svg";
import Travel from "../../assets/travel itinerary planner.svg";
import Gps from "../../assets/travel.svg";
import Pixora from "../../assets/Pixora.png";
import House from "../../assets/house.png";
import Currency from "../../assets/currency.png";
import Book from "../../assets/books.svg";
import WebScrape from "../../assets/scrape.svg";
import Patent1 from "../../assets/patent1.svg";
import Patent2 from "../../assets/patent2.svg";
import Dungeon from "../../assets/DungeonCrawl.svg";
import Game2048 from "../../assets/2048.svg";
import VS from "../../assets/ninja.svg";
import Rocket from "../../assets/rocket.svg";

const Menu = [
  {
    id: 1,
    image: Pixora,
    title: "Pixora",
    category: "Fullstack",
    description:
      "An AI-driven photo editor offering canvas tools, smart enhancements, and secure access with a pro subscription for advanced AI features.",
    tech: [
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Clerk",
      "Convex",
      "Fabric.js",
    ],
    link: "https://github.com/Riyachauhan11/Pixora",
    ytlink: "https://www.youtube.com/watch?v=JbdbmgSZBqk",
  },
  {
    id: 2,
    image: Book,
    title: "Books Journal",
    category: "Fullstack",
    description:
      "A platform that enables users to maintain a record of their reading experiences by storing  reviews of the books they have read.",
    tech: ["Node.js", "Express.js", "EJS", "Bootstrap", "PostgreSQL", "OAuth"],
    link: "https://github.com/Riyachauhan11/Books-Journal",
    ytlink: "https://youtu.be/QK5BuhblROY",
  },
  {
    id: 3,
    image: Gps,
    title: "GPS & Geofencing",
    category: "Fullstack",
    description:
      "An application that tracks users locations, sends alerts when they exit designated geofenced areas, and supports usage-based vehicle billing.",
    tech: ["Node.js", "EJS", "Firebase", "Google Maps API", "Geolocation API "],
    link: "https://github.com/Riyachauhan11/GPS",
    ytlink: "https://youtu.be/uL-7TzPQ1fo",
  },
  {
    id: 4,
    image: House,
    title: "HomeNest",
    category: "Fullstack",
    description:
      "A full-stack real estate platform where users can explore, list, and chat about properties to move forward with their purchases.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Prisma", "Socket.IO"],
    link: "https://github.com/Riyachauhan11/HomeNest",
    ytlink: "https://youtu.be/9-G2gNSDxnI",
  },
  {
    id: 5,
    image: Currency,
    title: "Currency Exchange Rates & Conversion",
    category: "Fullstack",
    description:
      "A web app that delivers real-time and historical foreign exchange data allowing users to view rates, convert currencies, and visualize trends.",
    tech: ["Node.js", "Express.js", "EJS", "Bootstrap", "RESTful API"],
    link: "https://github.com/Riyachauhan11/Currency-Exchange-Website",
    ytlink: "https://youtu.be/kPiYPEQ0-dY",
  },
  {
    id: 6,
    image: WebScrape,
    title: "Web Scraper",
    category: "AI",
    description:
      "An AI-powered web scraper that enables efficient data extraction, supports proxies for reliable access, and applies AI-driven text analysis.",
    tech: ["Python", "Selenium", "Streamlit", "Ollama", "Bright Data"],
    link: "https://github.com/Riyachauhan11/Web-Scraper",
  },
  {
    id: 7,
    image: QueryGenie,
    title: "QueryGenie",
    category: "AI",
    description:
      "An AI support system using RAG, trained on company policies to handle queries, assess sentiment and generate responses based on confidence and urgency.",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "ChromaDB",
      "Streamlit",
      "ChatGroq",
    ],
    link: "https://github.com/Riyachauhan11/QueryGenie-Final-Entry",
  },
  {
    id: 8,
    image: Travel,
    title: "Travel-Itinerary-Planner",
    category: "AI",
    description:
      "An AI-powered Travel Itinerary Planner that generates personalized trip plans based on the user’s chosen city and preferred places to visit.",
    tech: ["LangChain", "LangGraph", "Gradio", "GroqCloud", "Colab"],
    link: "https://github.com/Riyachauhan11/Travel-Itinerary-Planner",
  },
  {
    id: 9,
    image: Dungeon,
    title: "Dungeon Crawler",
    category: "Game",
    description:
      "A 2D scrolling shooter game where players must defeat enemies to advance through 4 levels, culminating in a final boss battle.",
    tech: ["Pygame", "OOPS", "Python"],
    link: "https://github.com/Riyachauhan11/Dungeon-Crawler",
  },
  {
    id: 10,
    image: VS,
    title: "Ninja vs Robots",
    category: "Game",
    description:
      "A scrolling platformer where players battle robots, regain health by consuming potions, and face instant death if they fall off the map.",
    tech: ["Pygame", "OOPS", "Python"],
    link: "https://github.com/Riyachauhan11/ninja-vs-robots_platformer",
  },
  {
    id: 11,
    image: Rocket,
    title: "Space Invader",
    category: "Game",
    description:
      "A 2D shooter game where players control a spaceship to shoot and destroy enemy alien sprites moving across the screen.",
    tech: ["Pygame", "OOPS", "Python"],
    link: "https://github.com/Riyachauhan11/space_invader",
  },
  {
    id: 12,
    image: Game2048,
    title: "2048",
    category: "Game",
    description:
      "A single-player sliding puzzle game where players merge tiles to form 2048, with the option to keep playing to create even larger numbers.",
    tech: ["Python", "Tkinter"],
    link: "https://github.com/Riyachauhan11/2048-game",
  },
  {
    id: 13,
    image: Patent1,
    title: "A Marking Device & Method of Use Thereof",
    category: "Published Patent",
    description:
      "A dual-ink marking device equipped with a timer and counting module, designed to improve accuracy in OMR sheet marking.",
    tech: [],
    link: "https://drive.google.com/file/d/1KayvvI5RYF1c35ANvoJgz2N6XMnyQrkU/view?usp=sharing",
  },
  {
    id: 14,
    image: Patent2,
    title:
      "System & Method For Actuating An Assisting Wheel Assembly For Vehicle Support",
    category: "Published Patent",
    description:
      "A pneumatic retractable training wheel system for two-wheelers that enhances stability and confidence for novice and disabled riders.",
    tech: [],
    link: "https://drive.google.com/file/d/1F06hkAS-Lsr-kSWhbXAGiBc6gm-QHL7b/view?usp=sharing",
  },
];

export default Menu;
