import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Twitter } from "react-feather";

const Footer = () => {
    const socials = [
        {
            name: "Twitter",
            href: "/",
            icon: <Twitter />,
        },
        {
            name: "Twitter",
            href: "/",
            icon: <Twitter />,
        },

        {
            name: "Twitter",
            href: "/",
            icon: <Twitter />,
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

        {
            name: "Services",
            href: "/services",
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
                    width={400}
                    height={200}
                    style={{ marginBottom: "3rem" }}
                />
                <Flex>
                    {socials.map((social, i) => (
                        <Link key={i} href={social.href}>
                            <Button
                                mx={2}
                                borderRadius="50%"
                                p={2}
                                px="0 !important"
                                border="1px solid"
                                borderColor="white"
                                _hover={{ bg: "white", color: "black" }}
                            >
                                {social.icon}
                            </Button>
                        </Link>
                    ))}
                </Flex>

                <Text position="absolute" bottom={0} left={0}>
                    Copyright © Media Morphosis 2024 All Rights Reserved.
                </Text>
            </Box>

            <Flex w="50%" justifyContent="space-around" pt={20}>
                <Box>
                    {linkBox1.map((link) => (
                        <Link href={link.href} key={link.name}>
                            <Text fontSize={22} lineHeight={1.4}>
                                {link.name}
                            </Text>
                        </Link>
                    ))}
                </Box>
                <Box>
                    {linkBox2.map((link) => (
                        <Link href={link.href} key={link.name}>
                            <Text fontSize={22} lineHeight={1.4}>
                                {link.name}
                            </Text>
                        </Link>
                    ))}
                </Box>
                <Box>
                    {linkBox3.map((link) => (
                        <Link href={link.href} key={link.name}>
                            <Text fontSize={22} lineHeight={1.4}>
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
