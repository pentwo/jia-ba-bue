import { globalTheme } from "@/styles/globalTheme";
import { AppShell, Container, Group, MantineProvider, Stack, Title, Text } from "@mantine/core";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <AppShell
            padding={0}
            // header={<Header />}
            navbar={<Navbar />}
            footer={<Footer />}
        >
            {children}
        </AppShell>
    );
}
