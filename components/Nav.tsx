import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Nav = () => {
    const btnRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                    width={200}
                    height={50}
                    loading="eager"
                />
            </Link>

            <Flex display={{ base: "none", sm: "flex" }}>
                <Links />
            </Flex>

            <Box display={{ base: "flex", sm: "none" }}>
                <IconButton
                    border="none"
                    fontSize={24}
                    ref={btnRef}
                    colorScheme="teal"
                    onClick={onOpen}
                >
                    <HamburgerIcon />
                </IconButton>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent bg="black">
                        <DrawerCloseButton color="white" />

                        <DrawerBody>
                            <Links mb={10} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Flex>
    );
};

const Links = ({ ...props }) => {
    const links = [
        { text: "Work", href: "/work" },
        { text: "Services", href: "/services" },
        { text: "Contact", href: "/contact" },
    ];

    return links.map((link, i) => (
        <Link href={link.href} key={i}>
            <Text {...props} _hover={{ color: "red" }} px={10}>
                {link.text}
            </Text>
        </Link>
    ));
};

export default Nav;
