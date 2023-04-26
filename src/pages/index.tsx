import {
    Button,
    Center,
    Container,
    Group,
    PasswordInput,
    Stack,
    TextInput,
    Title,
} from "@mantine/core";
import Hero from "@/components/layout/Hero";
import { useForm } from "@mantine/form";
import MainImg from "@/images/main-1.png";
import Image from "next/image";
import { IconMail, IconPassword } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Login() {
    return (
        <>
            <Container h={"100vh"} sx={(theme) => ({})}>
                <Group spacing={80} h={"100%"}>
                    <Image width={500} src={MainImg} alt={"main-character"} />
                    <LoginForm />
                </Group>
            </Container>
        </>
    );
}

const LoginForm = () => {
    const { fetchLogin } = useContext(AuthContext);

    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },
    });
    const router = useRouter();

    const handleSubmit = form.onSubmit((values) => {
        fetchLogin(values);
        // router.push("/home");
    });

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={"lg"}>
                <Title order={1}>Jia-Ba-Bue</Title>
                <TextInput
                    icon={<IconMail stroke={"1"} />}
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    withAsterisk
                    {...form.getInputProps("email")}
                />
                <PasswordInput
                    icon={<IconPassword stroke={"1"} />}
                    label="Password"
                    placeholder="Enter your password"
                    withAsterisk
                    {...form.getInputProps("password")}
                />
                <Button type="submit" variant="outline">
                    Sign in
                </Button>
            </Stack>
        </form>
    );
};
