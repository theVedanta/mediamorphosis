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
                    px: 10,
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
                bg: "black",
                color: "white",
            },
        },
    },
});

export default theme;
