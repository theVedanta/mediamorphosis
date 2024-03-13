import { Button, color, defineStyle, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },
    colors: {
        red: "#FB3B3B",
        gray: "#191919",
    },
    components: {
        Button: {
            defaultProps: {
                variant: "outline",
                size: "lg",
            },
            variants: {
                outline: {
                    border: "2px solid",
                    borderColor: "red",
                    borderRadius: "10px",
                    color: "white",
                    fontWeight: 400,
                    px: { base: 6, sm: 10 },
                    fontSize: { base: "1rem", sm: "1.2rem" },
                    _hover: {
                        background: "red",
                        color: "black",
                    },
                },
            },
        },

        Heading: defineStyle({
            fontWeight: 400,
            lineHeight: "-100px",
        }),
    },
    styles: {
        global: {
            body: {
                bg: "black",
                color: "white",
            },
        },
    },
});

export default theme;
