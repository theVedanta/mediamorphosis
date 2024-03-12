import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/autoplay";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Nav />
            <Component className={`${inter.className}`} {...pageProps} />
            <Footer />
        </ChakraProvider>
    );
}
