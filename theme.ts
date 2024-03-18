import { defineStyle, extendTheme } from "@chakra-ui/react";

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
                    borderColor: { base: "red", sm: "red" },
                    borderRadius: "10px",
                    color: "white",
                    fontWeight: 400,
                    px: { base: 4, sm: 7 },
                    py: { base: 2, sm: 3 },
                    height: "auto",
                    fontSize: { base: "0.9rem", sm: "1.2rem" },
                    _hover: {
                        background: "red",
                        color: "black",
                    },
                },
            },
        },

        Heading: defineStyle({
            fontWeight: 400,
        }),
    },
    styles: {
        global: {
            body: {
                bg: "#000000",
                color: "#ffffff",
            },
        },
    },
});

export default theme;
