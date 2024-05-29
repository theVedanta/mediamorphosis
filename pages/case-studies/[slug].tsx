import Consultation from "@/components/Consultation";
import ProjectGrid from "@/components/ProjectGrid";
import Loading from "@/components/Loading";
import Image from "next/image";
// import Lightbox, { SlideImage } from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { BASE_API_URL, errorHandler } from "@/content";
import SlimHeading from "@/components/SlimHeading";
import parse from "html-react-parser";
import { RenderDate } from "@/date";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Post = () => {
    const [caseStudy, setCaseStudy] = useState<CaseStudy>();
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const { slug } = router.query;

    // const [lightboxOpen, setLightboxOpen] = useState<[boolean, number]>([
    //     false,
    //     0,
    // ]);

    useEffect(() => {
        const getCaseStudy = async () => {
            try {
                const res = await axios.get(
                    `${BASE_API_URL}?slug=${slug}&per_page=1`
                );
                if (!res.data || res.data.length === 0) {
                    return errorHandler;
                }

                const study = res.data[0];

                const [day, month, year] = study.acf.start_date
                    .split("/")
                    .map(Number);
                const start_date = new Date(year, month - 1, day);

                const [daye, monthe, yeare] = study.acf.end_date
                    .split("/")
                    .map(Number);
                const end_date = new Date(yeare, monthe - 1, daye);

                const formattedStudy: CaseStudy = {
                    id: study.id,
                    title: study.title.rendered,
                    banner: study.acf.banner,
                    slug: study.slug,
                    content: parse(study.content.rendered),
                    client: study.acf.client,
                    start_date,
                    end_date,
                };

                setCaseStudy(formattedStudy);
            } catch (err) {
                return errorHandler;
            }

            setLoading(false);
        };

        slug && getCaseStudy();
    }, [slug]);

    // const caseStudyImgs: SlideImage[] = [];

    return loading ? (
        <Loading />
    ) : (
        caseStudy && (
            <>
                {/* <Lightbox
                open={lightboxOpen[0]}
                index={lightboxOpen[1]}
                close={() => setLightboxOpen([false, 0])}
                slides={caseStudyImgs}
            /> */}

                <Box minH="100vh">
                    <Flex
                        className="container"
                        justifyContent="center"
                        py={{ base: 0, lg: 4, "2xl": 6 }}
                        alignItems="center"
                    >
                        <Box
                            position="relative"
                            w="100%"
                            h={{ base: "200px", lg: "400px", "2xl": "500px" }}
                        >
                            <Image
                                src={caseStudy.banner}
                                fill={true}
                                priority={true}
                                alt="banner"
                                style={{ borderRadius: "14px" }}
                            />
                        </Box>
                    </Flex>

                    <Box
                        mt={{ base: 6, lg: 10, "2xl": 14 }}
                        px={{ base: 8, lg: 44, "2xl": 60 }}
                        width="100%"
                    >
                        <SlimHeading
                            w="100%"
                            fontSize={{
                                base: "2rem",
                                lg: "2.6rem",
                                "2xl": "3rem",
                            }}
                        >
                            {caseStudy.title}
                        </SlimHeading>

                        <Flex
                            alignItems="center"
                            w="100%"
                            mt={6}
                            wrap={{ base: "wrap", lg: "nowrap" }}
                            mb={{ base: 10, lg: 16, "2xl": 20 }}
                        >
                            {caseStudy.client && (
                                <Box w={{ base: "100%", lg: "50%" }}>
                                    <Text>Client</Text>
                                    <Text
                                        fontSize={{
                                            base: "1rem",
                                            sm: "1.8rem",
                                        }}
                                        fontWeight={500}
                                    >
                                        {caseStudy.client}
                                    </Text>
                                </Box>
                            )}

                            {!isNaN(caseStudy.start_date.getTime()) && (
                                <Box
                                    mt={{ base: 4, lg: 0 }}
                                    w={{ base: "100%", lg: "50%" }}
                                >
                                    <Text>Timeline</Text>
                                    <Text
                                        fontSize={{
                                            base: "1rem",
                                            sm: "1.8rem",
                                        }}
                                        fontWeight={500}
                                    >
                                        {RenderDate(
                                            caseStudy.start_date,
                                            caseStudy.end_date
                                        )}
                                    </Text>
                                </Box>
                            )}
                        </Flex>

                        <Box className="content">{caseStudy.content}</Box>
                    </Box>
                </Box>

                <Consultation />
                <ProjectGrid auto />
            </>
        )
    );
};

export default Post;
