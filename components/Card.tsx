import { Button, Flex, GridItem } from "@chakra-ui/react";
import SlimHeading from "./SlimHeading";
import Link from "next/link";
import Image from "next/image";

interface CaseStudyProp {
    title: string;
    slug: string;
    banner: string;
}

const Card = ({ caseStudy }: { caseStudy: CaseStudyProp }) => {
    return (
        <GridItem
            aspectRatio="1/1"
            w="100%"
            p={{ base: 10, lg: 14, "2xl": 16 }}
            borderRadius={{ base: 14, lg: 20 }}
            position="relative"
            overflow="hidden"
        >
            <Image
                style={{
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    filter: "brightness(0.3)",
                }}
                fill
                loading="eager"
                src={caseStudy.banner}
                alt="project-img"
            ></Image>

            <Flex
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
                h="100%"
            >
                <SlimHeading
                    textAlign="left"
                    w="100%"
                    fontSize={{ base: "1.2rem", lg: "1.8rem", "2xl": "2.4rem" }}
                    fontWeight={300}
                    color="white !important"
                    lineHeight={1.3}
                    letterSpacing="-1px"
                >
                    {caseStudy.title}
                </SlimHeading>

                <Link href={"/case-studies/" + caseStudy.slug}>
                    <Button color="white !important">Read more</Button>
                </Link>
            </Flex>
        </GridItem>
    );
};
export default Card;
