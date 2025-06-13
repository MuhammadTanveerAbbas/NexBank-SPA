import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

// Navigation Links
export const navLinks = [
  { id: "home", title: "Home" },
  { id: "features", title: "Features" },
  { id: "product", title: "Product" },
  { id: "clients", title: "Clients" },
];

// Feature Cards
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "Access exclusive rewards, promotional benefits, and top-tier incentives with our premier credit solutions.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "Your security is our priority. NexBank employs industry-leading protocols to safeguard all data and transactions.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "Seamlessly transfer balances and reduce interest expenses through our streamlined financial tools.",
  },
];

// Testimonials / Feedback
export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is merely a vehicle—it can take you far, but you must remain in control of the journey.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Financial freedom simplifies life. If you're fortunate enough to achieve it, consider it a major asset.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Long-term prosperity often stems from mastery in finance, global trade, and capital strategy.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

// Stats Section
export const stats = [
  {
    id: "stats-1",
    title: "Active Users",
    value: "3,800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Companies",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transactions Processed",
    value: "$230M+",
  },
];

// Footer Links
export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      { name: "Content", link: "https://www.nexbank.com/content/" },
      { name: "How It Works", link: "https://www.nexbank.com/how-it-works/" },
      { name: "Create", link: "https://www.nexbank.com/create/" },
      { name: "Explore", link: "https://www.nexbank.com/explore/" },
      {
        name: "Terms & Services",
        link: "https://www.nexbank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Help Center", link: "https://www.nexbank.com/help-center/" },
      { name: "Partners", link: "https://www.nexbank.com/partners/" },
      { name: "Suggestions", link: "https://www.nexbank.com/suggestions/" },
      { name: "Blog", link: "https://www.nexbank.com/blog/" },
      { name: "Newsletters", link: "https://www.nexbank.com/newsletters/" },
    ],
  },
  {
    title: "Partner",
    links: [
      { name: "Our Partners", link: "https://www.nexbank.com/our-partner/" },
      {
        name: "Become a Partner",
        link: "https://www.nexbank.com/become-a-partner/",
      },
    ],
  },
];

// Social Media Links
export const socialMedia = [
  { id: "social-media-1", icon: linkedin, link: "https://www.linkedin.com/" },
  { id: "social-media-2", icon: facebook, link: "https://www.facebook.com/" },
  { id: "social-media-3", icon: instagram, link: "https://www.instagram.com/" },
  { id: "social-media-4", icon: twitter, link: "https://x.com/" },
];

// Brand Clients
export const clients = [
  { id: "client-1", logo: airbnb },
  { id: "client-2", logo: binance },
  { id: "client-3", logo: coinbase },
  { id: "client-4", logo: dropbox },
];
