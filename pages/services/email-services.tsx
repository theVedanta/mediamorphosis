import ServicePage from "@/components/ServicePage";

const Email = () => {
  return (
    <>
      <ServicePage
        title="Email Services"
        description={"Optimize your communication and marketing strategies."}
        services={[
          {
            name: "Reliable and scalable email solutions ",
            description:
              "Effective email communication is key to successful marketing. Our email services offer reliable and scalable solutions designed to optimize your communication and marketing strategies. Drawing on our extensive experience in crafting impactful advertising campaigns, we help you create personalized and targeted email campaigns that drive engagement and deliver results.",
          },
          {
            name: "Email Campaign Management",
            description:
              "Designing, executing, and managing email campaigns with platforms like Mailchimp and Constant Contact.",
          },
          {
            name: "Personalization",
            description:
              "Creating personalized email content using dynamic content insertion and segmentation.",
          },
          {
            name: "Automation",
            description:
              "Implementing automated email workflows with tools like HubSpot and ActiveCampaign.",
          },
          {
            name: "Analytics and Reporting",
            description:
              "Providing detailed analytics and performance reports to measure the effectiveness of your campaigns.",
          },
        ]}
        image={"/assets/services/template/email.png"}
        banner={"/assets/services/template/email-banner.png"}
      />
    </>
  );
};

export default Email;
