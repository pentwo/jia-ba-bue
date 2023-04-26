import User from "@/Interfaces/User";
import GetMe from "@/network/api/auth/GetMe";
import Login from "@/network/api/auth/Login";
import GetRecipes from "@/network/api/recipe/GetRecipes";
import { useLocalStorage } from "@mantine/hooks";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

interface AuthContextProviderInterface {
    children: React.ReactNode;
}

interface AuthContextInterface {
    user: User | null;
    fetchLogin: (value: { email: string; password: string }) => Promise<void>;
}

export const AuthContext = createContext<AuthContextInterface>({
    user: null,
    fetchLogin: async () => {},
});

export const AuthContextProvider = ({ children }: AuthContextProviderInterface) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useLocalStorage({ key: "token", defaultValue: "" });

    const route = useRouter();

    async function fetchLogin(value: { email: string; password: string }) {
        setToken("");
        const req = new Login();
        req.input(value);
        const res = await req.fetch();

        if (res.success) {
            const { token } = res.data as unknown as { token: string };
            setToken(token);

            route.push("/home");
        } else {
            console.log("Error: ", res.error);
        }
    }
    async function fetchUser() {
        const req = new GetMe();
        const res = await req.fetch();
        console.log("User res: ", res);

        if (res.success) {
            const resUser = res.data as unknown as User;
            resUser["token"] = token;

            setUser(resUser);
        }
    }

    useEffect(() => {
        if (token) {
            fetchUser();
        } else {
            setUser(null);
        }
    }, [token]);

    return (
        <AuthContext.Provider
            value={{
                user: user,
                fetchLogin: fetchLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
