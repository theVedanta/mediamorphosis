import { BASE_API_URL } from "@/content";
import { Text } from "@chakra-ui/react";
import axios from "axios";
import ProjectGrid from "./ProjectGrid";
import Card from "./Card";
import { useEffect, useState } from "react";
import Loading from "./Loading";

type CaseStudies = Pick<CaseStudy, "id" | "title" | "banner" | "slug">[];

const CaseStudyList = () => {
    const [caseStudies, setCaseStudies] = useState<CaseStudies>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStudies = async () => {
            try {
                const res = await axios.get(BASE_API_URL + "?per_page=10");
                const caseStudies: CaseStudies = res.data.map((study: any) => ({
                    id: study.id,
                    title: study.title.rendered,
                    banner: study.acf.banner,
                    slug: study.slug,
                }));

                setCaseStudies(caseStudies);
            } catch (err) {
                console.log(err);
            }

            return setLoading(false);
        };

        getStudies();
    }, []);

    return loading ? (
        <Loading />
    ) : caseStudies.length === 0 ? (
        <Text
            fontWeight={500}
            mt={14}
            textAlign="center"
            w="100%"
            fontSize={{ base: "1.4rem", lg: "1.6rem", "2xl": "2rem" }}
        >
            No Posts to Show
        </Text>
    ) : (
        <ProjectGrid>
            {caseStudies.map((caseStudy) => (
                <Card key={caseStudy.id} caseStudy={caseStudy} />
            ))}
        </ProjectGrid>
    );
};

export default CaseStudyList;
