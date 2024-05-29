import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Sun } from "react-feather";

const Nav = () => {
    const { toggleColorMode } = useColorMode();
    const btnRef = useRef(null);
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
                    src={`/assets/logo.svg`}
                    alt="logo"
                    width={1000}
                    height={1000}
                    style={{ width: "auto", height: "4rem" }}
                    loading="eager"
                />
            </Link>

            <Flex display={{ base: "none", lg: "flex" }} alignItems="center">
                <Links />
                <ModeBtn toggleColorMode={toggleColorMode} />
            </Flex>

            <Box
                display={{ base: "flex", lg: "none" }}
                style={{ justifyContent: "center", alignItems: "center" }}
            >
                <ModeBtn toggleColorMode={toggleColorMode} />
                <Flex
                    alignItems="center"
                    fontSize={24}
                    ref={btnRef}
                    onClick={onOpen}
                    cursor="pointer"
                >
                    <HamburgerIcon />
                </Flex>

                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent bg={useColorModeValue("#fff", "#000")}>
                        <DrawerCloseButton />

                        <DrawerBody
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            onClick={onClose}
                        >
                            <Links mb={10} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Flex>
    );
};

const Links = ({ ...props }) => {
    const router = useRouter();
    const links = [
        { text: "Work", href: "/work" },
        { text: "Services", href: "/services" },
        { text: "Contact", href: "/contact" },
    ];

    return links.map((link, i) => (
        <Link href={link.href} key={i}>
            <Text
                {...props}
                _hover={{ color: "red" }}
                transition="all 0.3s"
                color={router.pathname === link.href ? "red" : ""}
                px={10}
            >
                {link.text}
            </Text>
        </Link>
    ));
};

const ModeBtn = ({ toggleColorMode }: any) => {
    return (
        <Icon
            ml={{ base: 0, lg: 14 }}
            mr={{ base: 5, lg: 0 }}
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ color: "red" }}
            onClick={toggleColorMode}
            as={Sun}
            boxSize="1.4rem"
        />
    );
};

export default Nav;
