import Italic from "@/components/Italic";
import SlimHeading from "@/components/SlimHeading";
import {
    Box,
    Button,
    Flex,
    FormControl,
    Icon,
    Input,
    Text,
    Textarea,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Mail, MapPin, Phone } from "react-feather";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
    const [sending, setSending] = useState(false);
    const toast = useToast();

    emailjs.init(process.env.NEXT_PUBLIC_EMAIL_JS as string);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setSending(true);
        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID as string,
                "template_ldeueyf",
                {
                    from_name:
                        e.target.first_name.value.trim() +
                        " " +
                        e.target.last_name.value.trim(),
                    email: e.target.email.value.trim(),
                    phone: e.target.phone.value.trim(),
                    message: e.target.message.value.trim(),
                }
            )
            .then(
                function (response) {
                    e.target.first_name.value = "";
                    e.target.last_name.value = "";
                    e.target.email.value = "";
                    e.target.phone.value = "";
                    e.target.message.value = "";

                    toast({
                        title: "Email Sent",
                        description:
                            "We've sent the Email. Our staff will reach out to you soon",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    });

                    setSending(false);
                },
                function (error) {
                    setSending(false);
                    toast({
                        title: "Some error occurred",
                        description:
                            "This is likely and issue from our side. Please try again.",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    });
                    console.log(error);
                }
            );
    };

    return (
        <>
            <Head>
                <title>MediaMorphosis - Contact</title>
            </Head>

            <main>
                <Flex
                    mt={{ base: 8, lg: 16, "2xl": 20 }}
                    pb={{ base: 0, lg: 44, "2xl": 60 }}
                    className="container"
                    w="100%"
                    wrap={{ base: "wrap", lg: "nowrap" }}
                >
                    <Box flex={1}>
                        <SlimHeading
                            fontSize={{ base: "5xl", lg: "6xl", "2xl": "7xl" }}
                            fontWeight={500}
                            w="100%"
                        >
                            <Italic fontSize={{ base: "6xl", lg: "7xl" }}>
                                Get in touch
                            </Italic>
                            <br />
                            with our team.
                        </SlimHeading>

                        <Box display={{ base: "none", lg: "inline-block" }}>
                            <ContactLinks />
                        </Box>
                    </Box>

                    <Box
                        mt={{ base: 10, lg: 16, "2xl": 20 }}
                        flex={1}
                        px={{ base: 0, lg: "6%", "2xl": "10%" }}
                    >
                        <form onSubmit={handleSubmit}>
                            <Flex gap={3}>
                                <FormControl>
                                    <Input
                                        name="first_name"
                                        required
                                        placeholder="First Name"
                                    />
                                </FormControl>

                                <FormControl>
                                    <Input
                                        name="last_name"
                                        required
                                        placeholder="Last Name"
                                    />
                                </FormControl>
                            </Flex>
                            <FormControl mt={5}>
                                <Input
                                    name="email"
                                    required
                                    placeholder="Email"
                                />
                            </FormControl>
                            <FormControl mt={5}>
                                <Input
                                    name="phone"
                                    required
                                    placeholder="Phone Number"
                                />
                            </FormControl>
                            <FormControl mt={5}>
                                <Textarea
                                    name="message"
                                    required
                                    maxHeight="30vh"
                                    minHeight="10vh"
                                    height="20vh"
                                    variant="filled"
                                    placeholder="Message"
                                />
                            </FormControl>

                            <Button
                                disabled={sending}
                                opacity={sending ? 0.2 : 1}
                                bg={useColorModeValue("#000", "#fff")}
                                color={useColorModeValue("#fff", "#000")}
                                w="100%"
                                border="none"
                                mt={5}
                                type="submit"
                            >
                                Send Message
                            </Button>

                            <Box
                                display={{ base: "inline-block", lg: "none" }}
                                mt={10}
                            >
                                <ContactLinks />
                            </Box>
                        </form>
                    </Box>
                </Flex>
            </main>
        </>
    );
};

const ContactLinks = () => {
    const contacts = [
        {
            icon: Mail,
            name: "info@mediamorphosisinc.com",
            href: "mailto:info@mediamorphosisinc.com",
        },
        {
            icon: Phone,
            name: "+1 (123) 456 789 0123",
            href: "tel:+1 (123) 456 789 0123",
        },
        {
            icon: MapPin,
            name: `35-37 36th St,
Astoria,
NY 11106, USA`,
            href: "https://maps.app.goo.gl/E1Ct6Z2jKtvTPA4e7",
        },
    ];

    return (
        <Box mt={{ base: 4, lg: 14, "2xl": 20 }}>
            {contacts.map((contact, i) => (
                <Link
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    key={i}
                >
                    <Flex
                        maxW="80%"
                        overflow="visible"
                        my={{ base: 6, lg: 8, "2xl": 10 }}
                        alignItems="center"
                    >
                        <Icon
                            as={contact.icon}
                            boxSize={{
                                base: "2rem",
                                sm: "3rem",
                            }}
                            mr={10}
                        />
                        <Text
                            fontSize={{
                                base: "1.2rem",
                                sm: "1.6rem",
                            }}
                        >
                            {contact.name}
                        </Text>
                    </Flex>
                </Link>
            ))}
        </Box>
    );
};

export default Contact;
