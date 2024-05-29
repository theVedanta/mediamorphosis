import "swiper/css";
import "swiper/css/autoplay";
import { Box, Flex, Heading, Icon, useColorMode } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { cards } from "@/content";
import { useEffect, useState } from "react";

const Carousel = () => {
    const { colorMode } = useColorMode();
    const [delay, setDelay] = useState(1000);

    useEffect(() => {
        setDelay(0);
    }, []);

    return (
        <Box className="carousel">
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                loop
                modules={[Autoplay]}
                autoplay={{
                    delay: delay,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                speed={3000}
                allowTouchMove={false}
            >
                {cards.map((card) => (
                    <SwiperSlide style={{ minHeight: "100%" }} key={card[0]}>
                        <Flex
                            bg={
                                colorMode === "light" ? "lightGray" : "darkGray"
                            }
                            color={
                                colorMode === "light" ? "#18161A" : "#A39595"
                            }
                            borderRadius="14px"
                            px={{ base: 5, lg: 8, "2xl": 10 }}
                            py={{ base: 4, lg: 7, "2xl": 8 }}
                            justifyContent="space-between"
                            alignItems="center"
                            h="100%"
                        >
                            <Heading
                                letterSpacing="0"
                                width={{
                                    base: "100%",
                                    lg: "85%",
                                    "2xl": "70%",
                                }}
                                noOfLines={2}
                                fontSize={{
                                    base: "lg !important",
                                    lg: "2xl !important",
                                    "2xl": "3xl !important",
                                }}
                            >
                                {card[0].split(" ")[0]}
                                {card[0].split(" ") && (
                                    <>
                                        <br />
                                        {card[0].split(" ")[1]}
                                    </>
                                )}
                            </Heading>

                            <Icon
                                boxSize={{
                                    base: "1.6rem",
                                    lg: "2.2rem",
                                    "2xl": "3rem",
                                }}
                                as={card[1]}
                            />
                        </Flex>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};
export default Carousel;
