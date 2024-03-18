import { Heading, HeadingProps } from "@chakra-ui/react";
import { HTMLProps, ReactNode } from "react";

type CustomComponentProps = HTMLProps<HTMLDivElement> & {
    children: ReactNode;
};

const SlimHeading: React.FC<CustomComponentProps & HeadingProps> = ({
    children,
    ...props
}) => {
    return (
        <Heading
            w={{ base: "95%", sm: "75%" }}
            fontWeight={{ base: 300, sm: 400 }}
            fontSize={{ base: "3xl", sm: "7xl" }}
            lineHeight={1}
            letterSpacing={{ base: "-2px", sm: "-2px" }}
            {...props}
        >
            {children}
        </Heading>
    );
};
export default SlimHeading;
