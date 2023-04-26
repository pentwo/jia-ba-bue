import Layout from "@/components/layout/Layout";
import { AuthContextProvider } from "@/context/AuthContext";
import { RecipeContextProvider } from "@/context/RecipeContext";
import { globalTheme } from "@/styles/globalTheme";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, ...appProps }: AppProps) {
    const isLoginPage = Component.name === "Login";

    if (isLoginPage) {
        return (
            <MantineProvider withGlobalStyles withNormalizeCSS theme={globalTheme}>
                <AuthContextProvider>
                    <Component {...pageProps} />
                </AuthContextProvider>
            </MantineProvider>
        );
    }

    return (
        <>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={globalTheme}>
                <AuthContextProvider>
                    <RecipeContextProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </RecipeContextProvider>
                </AuthContextProvider>
            </MantineProvider>
        </>
    );
}
