import ServicePage from "@/components/ServicePage";

const DataAnalytics = () => {
  return (
    <>
      <ServicePage
        title="Data Analytics"
        description={
          "Custom Data Analytics to Elevate Your Business Operations."
        }
        services={[
          {
            name: "Elevate your Business Operations",
            description:
              "Unlock the power of your data with our comprehensive data analytics services. We provide deep insights into your business performance, helping you make informed decisions and drive growth. Our background in media analytics gives us a unique perspective on how to interpret and leverage data to enhance your marketing efforts and business strategies.",
          },
          {
            name: "Data Collection",
            description:
              "Gathering data from various sources using technologies like Google Analytics, SQL, and NoSQL databases.",
          },
          {
            name: "Data Visualization",
            description:
              "Creating intuitive and interactive visualizations with tools like Tableau, Power BI, and D3.js.",
          },
          {
            name: "Custom Dashboards",
            description:
              "Developing custom dashboards to monitor key metrics in real-time.",
          },
          {
            name: "Data Integration",
            description:
              "Integrating data from multiple sources to provide a comprehensive view of your business.",
          },
        ]}
        image={"/assets/services/template/data-analytics.png"}
      />
    </>
  );
};

export default DataAnalytics;
