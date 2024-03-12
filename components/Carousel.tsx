import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Feather } from "react-feather";

const Carousel = () => {
    return (
        <Box className="carousel">
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
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
                            px={10}
                            py={8}
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Heading width="70%" noOfLines={2} fontWeight={600}>
                                Data Analytics
                            </Heading>

                            <Text>
                                <Feather size={54} />
                            </Text>
                        </Flex>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};
export default Carousel;
