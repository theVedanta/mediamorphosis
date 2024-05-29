import { Text, TextProps } from "@chakra-ui/react";
import { HTMLProps, ReactNode } from "react";

type ItalicProps = HTMLProps<HTMLDivElement> & {
    children: ReactNode;
};

const Italic: React.FC<ItalicProps & TextProps> = ({ children, ...props }) => {
    return (
        <Text
            fontFamily="PP Neue Editorial"
            color="red"
            fontSize={{ base: "2rem", lg: "3.8rem", "2xl": "4.6rem" }}
            fontWeight={300}
            className="italic"
            {...props}
        >
            <i style={{ display: "inline !important" }}>{children}</i>
        </Text>
    );
};
export default Italic;
