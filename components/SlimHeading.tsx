import { Heading, HeadingProps } from "@chakra-ui/react";
import { HTMLProps, ReactNode } from "react";

type SlimHeadingProps = HTMLProps<HTMLDivElement> & {
    children: ReactNode;
};

const SlimHeading: React.FC<SlimHeadingProps & HeadingProps> = ({
    children,
    ...props
}) => {
    return (
        <Heading
            w={{ base: "100%", lg: "85%", "2xl": "75%" }}
            fontWeight={{ base: 300, lg: 500 }}
            fontSize={{ base: "3xl", lg: "5xl", "2xl": "7xl" }}
            lineHeight={1}
            letterSpacing="-1px"
            {...props}
        >
            {children}
        </Heading>
    );
};
export default SlimHeading;
