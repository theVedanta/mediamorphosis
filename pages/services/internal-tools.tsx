import ServicePage from "@/components/ServicePage";

const InternalTools = () => {
  return (
    <>
      <ServicePage
        title="Internal Tools"
        description={"Custom-Built Tools to Power Your Business From Within."}
        services={[
          {
            name: "Elevate your Business Operations",
            description:
              "Streamline your operations with our custom internal tools designed to boost efficiency and productivity. From project management software to workflow automation, we develop tools that meet the specific needs of your business. Our experience in creating streamlined processes in the media industry ensures that we deliver solutions that simplify your operations and improve your bottom line.",
          },
          {
            name: "Custom Software Development",
            description:
              "Building tailored software solutions using technologies like Python, Ruby on Rails, and Node.js.",
          },
          {
            name: "Project Management Tools",
            description:
              "Developing and implementing tools to enhance project management and collaboration.",
          },
          {
            name: "Workflow Automation",
            description:
              "Automating repetitive tasks with tools like Zapier and Microsoft Power Automate.",
          },
          {
            name: "User Training and Support",
            description:
              "Providing training and support to ensure smooth adoption and use of new tools.",
          },
        ]}
        image={"/assets/services/template/internal-tools.png"}
      />
    </>
  );
};

export default InternalTools;
