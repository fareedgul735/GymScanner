import StarLogo from "../images/stars.png";
import Books from "../images/Books.png";
import Location from "../images/Location.png";
import Dumbell from "../images/Dumbell.png";
import World from "../images/World.png";
import member from "../images/member.png";
import verify from "../images/verify.png";
import flash from "../images/flash.png";
import Rating from "../images/Rating.png";
import circleLogo from "../images/circle_logo.png";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

export const logo = {
  GymScanner: "Gymscanner",
  GymBoy: "GymBoy",
  GymScan: "© Gymscanner 2025",
  StarLogo,
};
export const Headings = {
  HeaderHeading: "Your Global Fitness Companion",
  GymWorksHeading: "How Gymscanner Works",
  PepoleScannerHeading: "Why People Love Gymscanner",
  DiveHead: "Ready to dive in?",
  ExpeHead: "Real Experiences from Real People",
};
export const Descriptions = {
  HeaderDescription:
    "Discover and book top gyms and certified personal trainers worldwide.",
  GymWorksDes: "Find a trainer or gym in just a few clicks",
  PeopleScannerDes: "A smarter way to stay fit anywhere in the world",
  DiveDes: "Sign Up, select your desired challenge account and Get Fundded",
  ExpeDesc:
    "Hear from travelers and trainers using Gymscanner around the world",
};

export const NavbarItems = [
  "Find Trainners",
  "How It Works",
  "Become a Trainer",
];

export const SmallText = {
  SmartFitnessStartsHere: "Smart fitness starts here",
};

export const SelectOptions = [
  { value: "1", label: "CBUM" },
  { value: "2", label: "Arnold" },
  { value: "3", label: "Fareed" },
];

export const Placeholders = {
  Trainer: "Trainers",
};

export const infoItems = [
  { heading: "Location", description: "City or address" },
  { heading: "Training Type", description: "Type (e.g. Yoga)" },
  { heading: "Date", description: "Select date" },
];

export const GymWorkDetail = [
  {
    icon: Location,
    title: "Search Anywhere",
    description: "Enter your location, date, and training type",
  },
  {
    icon: Dumbell,
    title: "Compare & Choose",
    description: "View top-rated gyms and trainers near you",
  },
  {
    icon: Books,
    title: "Book Instantly",
    description: "Reserve and pay securely — no commitment",
  },
];

export const PeopleScannerDeatil = [
  {
    icon: World,
    title: "Worldwide Access ",
    des: "Find gyms and trainers in 100+ cities",
  },
  {
    icon: member,
    title: "No Membership Required",
    des: "Pay-per-session. No contracts, ever.",
  },
  {
    icon: verify,
    title: "Verified Trainers & Gyms",
    des: "Curated professionals, rated by real users",
  },
  {
    icon: flash,
    title: "Instant Booking",
    des: "Book in minutes, with real-time availability",
  },
];

export const FooterLinks = [
  {
    title: "UseFul Links",
    link_1: "Terms Of Use",
    link_2: "Privacy Policy",
    link_3: "Contact",
  },
  {
    title: "UseFul Links",
    link_1: "Terms Of Use",
    link_2: "Privacy Policy",
    link_3: "Contact",
  },
  {
    title: "UseFul Links",
    link_1: "Terms Of Use",
    link_2: "Privacy Policy",
    link_3: "Contact",
  },
];

export const Icons = [
  <GithubOutlined />,
  <LinkedinOutlined />,
  <TwitterOutlined />,
  <InstagramOutlined />,
];

export const Cards = [
  {
    avatar: circleLogo,
    title: "Fareed",
    rating_logo: Rating,
    rating_point: "9.2",
    desc: "Found a gym near my Airbnb in Rome within minutes. Loved the flexibility!",
  },
  {
    avatar: circleLogo,
    title: "Saeed",
    rating_logo: Rating,
    rating_point: "11.2",
    desc: "Booked a yoga session while in Lisbon — quick, easy, and great coach!",
  },
  {
    avatar: circleLogo,
    title: "Waleed",
    rating_logo: Rating,
    rating_point: "1101.2",
    desc: "Perfect for digital nomads like me. Great selection of gyms around the world.",
  },
  {
    avatar: circleLogo,
    title: "Umer",
    rating_logo: Rating,
    rating_point: "101.2",
    desc: "Perfect for digital nomads like me. Great selection of gyms around the world.",
  },
  {
    avatar: circleLogo,
    title: "Ajab",
    rating_logo: Rating,
    rating_point: "11.2",
    desc: "Perfect for digital nomads like me. Great selection of gyms around the world.",
  },
  
];
