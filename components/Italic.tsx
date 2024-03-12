import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const Italic = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontFamily="serif" color="red" display="inline" fontSize="5rem">
            <i>{children}</i>
        </Text>
    );
};
export default Italic;
