import ServicePage from "@/components/ServicePage";

const VideoServices = () => {
  return (
    <>
      <ServicePage
        title="Video Services"
        description={"Streaming, CDN, and more."}
        services={[
          {
            name: "Implementing Sophisticated Video Solutions",
            description:
              "Bring your applications to life with our advanced video services. From live streaming to video on demand, our team leverages sophisticated video technologies to power your applications, creating immersive and dynamic experiences. With a strong foundation in media production, we ensure high-quality video solutions that elevate your brand and captivate your audience.",
          },
          {
            name: "Live Streaming",
            description:
              "Implementing real-time streaming solutions with technologies like Wowza and OBS Studio.",
          },
          {
            name: "Video Hosting",
            description:
              "Providing reliable video hosting and delivery through platforms like Vimeo and YouTube.",
          },
          {
            name: "Custom Video Players",
            description:
              "Developing tailored video players using HTML5 and JavaScript.",
          },
          {
            name: "Interactive Videos",
            description:
              "Adding interactive elements to your videos to engage viewers more deeply.",
          },
        ]}
        image={"/assets/services/template/videoservices.png"}
      />
    </>
  );
};

export default VideoServices;
