import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const Italic = ({ children }: { children: ReactNode }) => {
    return (
        <Text
            className="italic"
            fontFamily="serif"
            color="red"
            display="inline"
            fontSize={{ base: "2.2rem", sm: "5rem" }}
            fontWeight={300}
            noOfLines={1}
            style={{
                display: "inline !important",
                letterSpacing: "-10px !important",
            }}
        >
            <i style={{ display: "inline !important" }}>{children}</i>
        </Text>
    );
}
export default Italic;
