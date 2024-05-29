import { Flex } from "@chakra-ui/react";
import { Oval, TailSpin } from "react-loader-spinner";

const Loading = () => {
    return (
        <Flex w="100%" justifyContent="center" alignItems="center" h="60vh">
            {/* <Image
                src="/assets/loading2.gif"
                alt="Loading"
                width={400}
                loading="eager"
                height={400}
                unoptimized
            /> */}

            <Oval
                visible={true}
                height="100"
                width="100"
                color="#FB3B3B"
                secondaryColor="#FB3B3B"
                ariaLabel="tail-spin-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </Flex>
    );
};

export default Loading;
