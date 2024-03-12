import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    const links = [
        { text: "Work", href: "/work" },
        { text: "Services", href: "/services" },
        { text: "Contact", href: "/contact" },
    ];
    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            className="container"
            py={4}
        >
            <Link href="/">
                <Image
                    src="/assets/logo.svg"
                    alt="logo"
                    width={250}
                    height={50}
                    loading="eager"
                />
            </Link>

            <Flex>
                {links.map((link, i) => (
                    <Link href={link.href} key={i}>
                        <Text _hover={{ color: "red" }} px={10}>
                            {link.text}
                        </Text>
                    </Link>
                ))}
            </Flex>
        </Flex>
    );
};

export default Nav;
