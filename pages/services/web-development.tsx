import ServicePage from "@/components/ServicePage";

const WebDevelopment = () => {
  return (
    <>
      <ServicePage
        title="Web Development"
        description={"Bring Your Online Space to Life with a Stunning Website."}
        services={[
          {
            name: "Elevate your online presence",
            description:
              "In the digital age, your website is often the first impression of your brand. Our web development services combine creativity and technical expertise to deliver stunning, responsive websites that not only look great but also perform excellently. With a solid foundation in media and advertising, we know how to capture and retain your audience's attention, driving conversions and boosting your online presence.",
          },
          {
            name: "Custom Web Development",
            description:
              "Building tailored websites using the latest technologies such as Next.js, Typescript, Tailwind CSS and No-Code platforms like Webflow and Framer.",
          },
          {
            name: "Responsive Design",
            description:
              "Creating sites that look and function perfectly on any device.",
          },
          {
            name: "CMS Integration",
            description:
              "Implementing content management systems like WordPress, Drupal, and Joomla for easy content updates.",
          },
          {
            name: "E-commerce Solutions",
            description:
              "Developing robust e-commerce platforms with technologies like Shopify and WooCommerce.",
          },
        ]}
        image={"/assets/services/template/webd.png"}
      />
    </>
  );
};

export default WebDevelopment;
