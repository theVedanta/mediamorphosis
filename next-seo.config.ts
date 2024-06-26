import { NextSeoProps } from "next-seo";

const title = "Digital Marketing Agency NYC";
const url = "https://digital.mediamorphosisinc.com";
const embedImage = `${url}/assets/embed-image.png`;
const description =
    "A Full-Service Technology Powerhouse in NYC with a Rich Advertising Heritage. Specializing in crafting innovative software and digital solutions, we excel at driving consumer engagement through cutting-edge technology. Our expertise in seamless integration of advertising strategies with technology-driven campaigns propels business growth, optimizing for scalability and cost efficiency while engaging audiences in meaningful ways.";

const SEO: NextSeoProps = {
    title: "Digital Marketing Agency NYC",
    description: description,
    openGraph: {
        title,
        description,
        url,
        siteName: title,
        type: "website",
        images: [
            {
                url: embedImage,
                width: 800,
                height: 600,
                alt: "Embed Image",
            },
            {
                url: embedImage,
                width: 1800,
                height: 1600,
                alt: "Embed Image",
            },
            {
                url: embedImage,
                width: 256,
                height: 256,
                alt: "Embed Image",
            },
        ],
    },
    canonical: "https://digital.mediamorphosisinc.com",

    twitter: {
        cardType: "summary_large_image",
        handle: "@vedantasomnath2",
    },

    robotsProps: {
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: "none",
        maxVideoPreview: -1,
    },

    additionalMetaTags: [
        {
            property: "keywords",
            content:
                "MediaMorphosis, Service agency, New York, Digital, Media, Morphosis, Web, App, Services, Mediamorphosisinc",
        },
    ],
};

export default SEO;
