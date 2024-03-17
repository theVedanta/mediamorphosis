import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "react-feather";

const Footer = () => {
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
            name: "About",
            href: "/about",
        },

        {
            name: "Work",
            href: "/work",
        },
        {
            name: "Blog",
            href: "/blog",
        },

        {
            name: "Services",
            href: "/services",
        },
    ];
    const linkBox2 = [
        {
            name: "About",
            href: "/about",
        },

        {
            name: "Work",
            href: "/work",
        },
        {
            name: "Blog",
            href: "/blog",
        },

        {
            name: "Services",
            href: "/services",
        },
    ];
    const linkBox3 = [
        {
            name: "About",
            href: "/about",
        },

        {
            name: "Work",
            href: "/work",
        },
        {
            name: "Blog",
            href: "/blog",
        },
    ];

    return (
        <Flex
            py={14}
            className="container"
            backgroundImage="/assets/footer.svg"
            backgroundRepeat="none"
            backgroundSize="cover"
            h="54vh"
        >
            <Box className="footer-social" w="50%" position="relative">
                <Image
                    src="/assets/logo.svg"
                    alt="logo"
                    width={300}
                    height={200}
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
                                mx={{ base: "3px", sm: 2 }}
                                borderRadius="50%"
                                border="1px solid"
                                borderColor="white"
                                _hover={{ bg: "white", color: "black" }}
                                minW={{ base: "40px", sm: "55px" }}
                                h={{ base: "40px", sm: "55px" }}
                                padding={{ base: "0 !important" }}
                            >
                                <Text w={{ base: "1.2rem", sm: "1.6rem" }}>
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
                    fontSize={{ base: 12, sm: 20 }}
                    w={{ base: "200%", sm: "100%" }}
                    textAlign={{ base: "center", sm: "left" }}
                >
                    Copyright © Media Morphosis 2024 All Rights Reserved.
                </Text>
            </Box>

            <Flex
                w="50%"
                pt={{ base: 0, sm: 20 }}
                h="100%"
                direction={{ base: "column", sm: "row" }}
                alignItems="flex-start"
                pl={{ base: 14, sm: 0 }}
                justifyContent={{ base: "flex-start", sm: "space-around" }}
            >
                <Box>
                    {linkBox1.map((link) => (
                        <Link href={link.href} key={link.name}>
                            <Text
                                fontSize={{ base: 14, sm: 22 }}
                                lineHeight={1.6}
                            >
                                {link.name}
                            </Text>
                        </Link>
                    ))}
                </Box>
                <Box>
                    {linkBox2.map((link) => (
                        <Link href={link.href} key={link.name}>
                            <Text
                                fontSize={{ base: 14, sm: 22 }}
                                lineHeight={1.6}
                            >
                                {link.name}
                            </Text>
                        </Link>
                    ))}
                </Box>
                <Box>
                    {linkBox3.map((link) => (
                        <Link href={link.href} key={link.name}>
                            <Text
                                fontSize={{ base: 14, sm: 22 }}
                                lineHeight={1.6}
                            >
                                {link.name}
                            </Text>
                        </Link>
                    ))}
                </Box>
            </Flex>
        </Flex>
    );
};

export default Footer;
