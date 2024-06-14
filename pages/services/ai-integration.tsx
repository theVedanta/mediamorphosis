import ServicePage from "@/components/ServicePage";

const AIIntegration = () => {
  return (
    <>
      <ServicePage
        title="AI Integration"
        description={"Harness the power of artificial intelligence."}
        services={[
          {
            name: "Stay ahead of the competition.",
            description:
              "Stay ahead of the curve with our AI integration services. We help you harness the power of artificial intelligence to automate processes, enhance user experiences, and gain a competitive edge. With our strong foundation in innovative advertising solutions, we bring a creative and strategic approach to AI, ensuring it adds real value to your business.",
          },
          {
            name: "Machine Learning",
            description:
              "Developing machine learning models using frameworks like TensorFlow, PyTorch, and Scikit-learn.",
          },
          {
            name: "LLM Integrations",
            description:
              "Integrating the most powerful large language models like GPT, Gemini, and more to power your apps.",
          },
          {
            name: "Automation",
            description:
              "Using AI to automate routine tasks and improve operational efficiency.",
          },
          {
            name: "Computer Vision",
            description:
              "Creating computer vision applications with  deep learning frameworks.",
          },
        ]}
        image={"/assets/services/template/ai-integration.png"}
      />
    </>
  );
};

export default AIIntegration;
