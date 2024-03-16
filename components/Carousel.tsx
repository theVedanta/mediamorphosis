import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Feather } from "react-feather";

const Carousel = () => {
    return (
        <Box className="carousel">
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
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
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={3000}
                allowTouchMove={false}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <SwiperSlide key={i}>
                        <Flex
                            bg="#18161A"
                            color="#A39595"
                            borderRadius="14px"
                            px={{ base: 4, sm: 10 }}
                            py={{ base: 4, sm: 8 }}
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Heading
                                letterSpacing="0"
                                width="70%"
                                noOfLines={2}
                                fontSize={{
                                    base: "xl !important",
                                    sm: "4xl !important",
                                }}
                                fontWeight={600}
                            >
                                Data Analytics
                            </Heading>

                            <Icon
                                boxSize={{ base: "2rem", sm: "3rem" }}
                                as={Feather}
                            />
                        </Flex>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};
export default Carousel;
