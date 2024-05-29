import {
    Box,
    Button,
    Flex,
    Text,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "react-feather";

const Footer = () => {
    const { colorMode } = useColorMode();

    const socials = [
        {
            href: "https://www.facebook.com/MediaMorphosis1/",
            icon: <Facebook width="inherit" />,
        },
        {
            href: "https://twitter.com/media_morphosis",
            icon: <Twitter width="inherit" />,
        },
        {
            href: "https://www.linkedin.com/company/mediamorphosis-inc/",
            icon: <Linkedin width="inherit" />,
        },
    ];

    const linkBox1 = [
        {
            name: "Work",
            href: "/work",
        },
        {
            name: "Services",
            href: "/services",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ];

    const linkBox2 = [
        {
            name: "About",
            href: "https://mediamorphosisinc.com/about-us/",
        },
        {
            name: "Ethnic Markets",
            href: "https://mediamorphosisinc.com/ethnic-markets/",
        },
        {
            name: "Ethnic Media",
            href: "https://mediamorphosisinc.com/ethnic-media/",
        },
    ];
    const linkBox3 = [
        {
            name: "Careers",
            href: "https://mediamorphosisinc.com/careers/",
        },
        {
            name: "Blog",
            href: "https://mediamorphosisinc.com/blog/",
        },
    ];

    return (
        <Flex
            py={14}
            className="container"
            backgroundImage={`/assets/footer${useColorModeValue(
                "light",
                ""
            )}.png`}
            backgroundRepeat="none"
            backgroundSize="cover"
            h={{ base: "400px", "2xl": "500px" }}
        >
            <Box className="footer-social" w="50%" position="relative">
                <Image
                    src={`/assets/logo.svg`}
                    alt="logo"
                    width={200}
                    height={150}
                    style={{ marginBottom: "3rem" }}
                />
                <Flex>
                    {socials.map((social, i) => (
                        <Link
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener"
                        >
                            <Button
                                mx={{ base: "3px", lg: "6px", "2xl": 2 }}
                                borderRadius="50%"
                                border="1px solid"
                                borderColor={
                                    colorMode === "light" ? "black" : "white"
                                }
                                _hover={{ bg: "white", color: "black" }}
                                minW={{
                                    base: "40px",
                                    lg: "50px",
                                    "2xl": "55px",
                                }}
                                h={{ base: "40px", lg: "50px", "2xl": "55px" }}
                                padding={{ base: "0 !important" }}
                            >
                                <Text
                                    w={{
                                        base: "1.2rem",
                                        lg: "1.4rem",
                                        "2xl": "1.6rem",
                                    }}
                                >
                                    {social.icon}
                                </Text>
                            </Button>
                        </Link>
                    ))}
                </Flex>

                <Text
                    position="absolute"
                    bottom={0}
                    left={0}
                    fontSize={{ base: 16, lg: 18, "2xl": 20 }}
                    w={{ base: "200%", lg: "100%" }}
                    textAlign={{ base: "center", lg: "left" }}
                >
                    <i>Copyright © Media Morphosis 2024 All Rights Reserved.</i>
                </Text>
            </Box>

            <Flex
                w="50%"
                pt={{ base: 0, lg: 10, "2xl": 20 }}
                h="100%"
                direction={{ base: "column", lg: "row" }}
                alignItems="flex-start"
                pl={{ base: 14, lg: 0 }}
                justifyContent={{ base: "flex-start", lg: "space-around" }}
            >
                {[1, 2, 3].map((j) => (
                    <Box key={j}>
                        {(j == 1 ? linkBox1 : j == 2 ? linkBox2 : linkBox3).map(
                            (link) => (
                                <Link href={link.href} key={link.name}>
                                    <Text
                                        _hover={{ color: "red" }}
                                        transition="all 0.2s"
                                        fontSize={{
                                            base: 16,
                                            lg: 18,
                                            "2xl": 22,
                                        }}
                                        lineHeight={1.6}
                                    >
                                        {link.name}
                                    </Text>
                                </Link>
                            )
                        )}
                    </Box>
                ))}
            </Flex>
        </Flex>
    );
};

export default Footer;
