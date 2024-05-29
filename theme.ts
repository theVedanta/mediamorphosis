import { ThemeConfig, defineStyle, extendTheme } from "@chakra-ui/react";

const theme: ThemeConfig = extendTheme({
    initialColorMode: "light",
    useSystemColorMode: false,
    fonts: {
        heading: `'PP Neue Montreal', 'Inter', sans-serif`,
        body: `'PP Neue Montreal', 'Inter', sans-serif`,
    },
    colors: {
        red: "#FB3B3B",
        darkGray: "#191919",
        lightGray: "#E3E3E3",
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
                    fontWeight: 400,
                    px: { base: 5, lg: 6, "2xl": 7 },
                    py: 3,
                    height: "auto",
                    fontSize: { base: "1rem", "2xl": "1.2rem" },
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

        Input: {
            defaultProps: {
                variant: "filled",
                size: "lg",
            },
        },
    },
    styles: {
        global: (props: any) => ({
            body: {
                bg: props.colorMode === "dark" ? "#000000" : "#ffffff",
                color: props.colorMode === "dark" ? "#ffffff" : "#000000",
            },
        }),
    },
});

export default theme;
