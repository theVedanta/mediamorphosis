import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const Italic = ({ children }: { children: ReactNode }) => {
    return (
        <Text
            className="italic"
            fontFamily="serif"
            color="red"
            display="inline"
            fontSize={{ base: "2.6rem", sm: "5rem" }}
        >
            <i>{children}</i>
        </Text>
    );
};
export default Italic;
