import { As } from "@chakra-ui/react";
import {
  BarChart2,
  Code,
  Cpu,
  Mail,
  MessageCircle,
  Package,
  PenTool,
  Settings,
  Video,
} from "react-feather";

const BASE_API_URL = `https://mediamorphosisinc.com/wp-json/wp/v2/case-studies`;

const cards: [string, As, string, string, string][] = [
  [
    "App Development",
    Package,
    `Craft an App That Puts Your Business in Everyone's Pocket.`,
    `Our app development service turns your ideas into intuitive, user-friendly mobile applications that stand out in crowded marketplaces. Whether it's for iOS, Android, or cross-platform solutions, we focus on creating apps that offer engaging user experiences, seamless functionality, and real-time performance. By integrating the latest in app development technologies, we help you connect with your audience on their favorite devices, fostering loyalty and driving engagement.`,
    "/app-development",
  ],
  [
    "Web Development",
    Code,
    `Bring Your Online Space to Life with a Stunning Website`,
    ` Our web development service focuses on building robust, scalable, and visually appealing websites that meet the unique needs of your business. Whether you need a simple landing page, a dynamic e-commerce platform, or a complex web application, we ensure a seamless and responsive experience across all devices. Utilizing the latest web technologies and frameworks, we create websites that are not only aesthetically pleasing but also optimized for performance, security, and SEO. Our goal is to help you establish a strong online presence and achieve your business objectives through a user-centric approach. `,
    "/web-development",
  ],
  [
    "UI/UX Design",
    PenTool,
    `Designing Experiences That Delight and Engage`,
    `Our UI/UX design service is dedicated to crafting intuitive and engaging user interfaces that enhance the overall user experience. We believe that great design is more than just aesthetics; it’s about creating a seamless journey for your users. Our team combines design thinking, user research, and usability testing to develop interfaces that are both visually stunning and highly functional. From wireframing to prototyping, we work closely with you to ensure the design aligns with your brand and resonates with your audience, ultimately driving higher user satisfaction and retention.`,
    "/ui-ux-design",
  ],
  [
    "Video Services",
    Video,
    `Implementing sophisticated video solutions to power your applications`,
    `Our video services specialize in integrating video functionality into your software applications and platforms. From video streaming to video conferencing, we offer solutions that allow you to engage with your audience through video content. Whether you need a custom video player, live video broadcasting, or video calling capabilities, we design and implement features that deliver high-quality video experiences. Our team focuses on optimizing video performance, ensuring smooth playback, and providing secure video communication to meet your business needs.`,
    "/video-services",
  ],
  [
    "Messaging Services",
    MessageCircle,
    `Enhancing real-time connectivity with secure and scalable messaging solutions for seamless communication.`,
    ` Our messaging services provide real-time communication solutions for businesses of all sizes. We enable you to integrate chat and messaging features into your applications, ensuring seamless and instant communication with your users. Whether you need in-app messaging, SMS, or push notifications, we offer scalable solutions that enhance user engagement and customer support. By using secure protocols and advanced messaging technologies, we ensure reliable communication while protecting user privacy.`,
    "/messaging-services",
  ],
  [
    "Email Services",
    Mail,
    `Reliable and scalable email solutions designed to optimize your communication and marketing strategies.`,
    `Our email services are designed to facilitate effective communication and marketing campaigns. We offer a comprehensive suite of email solutions, including bulk email sending, email tracking, and automated email marketing workflows. Whether you're looking to send newsletters, promotional offers, or transactional emails, we ensure that your messages reach your audience securely and reliably. Our services also include email list management, segmentation, and analytics, allowing you to tailor your communications and measure campaign performance effectively.`,
    "/email-services",
  ],
  [
    "Data Analytics",
    BarChart2,
    `Custom Web Applications to Elevate Your Business Operations.`,
    `Our data analytics service empowers your business with actionable insights derived from data. We help you collect, analyze, and visualize data to make informed decisions and identify trends. Whether it's sales, marketing, customer behavior, or operational data, we use advanced analytics tools and techniques to uncover hidden patterns and opportunities. By providing custom dashboards and reports, we make it easy for you to track key metrics and make data-driven decisions. With our data analytics solutions, you can gain a competitive edge and drive business growth.`,
    "/data-analytics",
  ],
  [
    "Internal Tools",
    Settings,
    `Custom-Built Tools to Power Your Business From Within.`,
    `Our internal tools service focuses on streamlining your business processes through custom-built software solutions. We understand that off-the-shelf tools might not meet your unique requirements, so we develop tailor-made internal tools to improve productivity and collaboration within your organization. Whether it's a project management system, a CRM, or an inventory tracking application, we design and build tools that fit your workflows. By integrating with existing systems and automating repetitive tasks, we help you save time, reduce errors, and increase efficiency.`,
    "/internal-tools",
  ],
  [
    "AI Integration",
    Cpu,
    `Designing Experiences That Delight and Engage.`,
    `Our AI integration service brings the power of artificial intelligence to your business. We help you leverage AI technologies such as machine learning, natural language processing, and computer vision to create intelligent applications and automate tasks. Whether it's chatbots for customer support, predictive analytics for business insights, or AI-driven automation, we design and implement solutions that enhance your operations. With our AI integration, you can transform the way you interact with customers, make decisions, and manage resources, leading to improved efficiency and innovation.`,
    "/ai-integration",
  ],
];

const errorHandler = {
  redirect: {
    destination: "/error",
    permanent: false,
  },
};

export { BASE_API_URL, cards, errorHandler };
