import BaseAdapter from "@/network/baseNetworkAdapter";

/**
 * Login
 *
 * @input {
 * email: string,
 * password: string
 * }
 *
 */
class Login extends BaseAdapter {
    constructor() {
        super(`/api/user/token/`, BaseAdapter.METHODS.POST, []);
    }

    input({ email, password }: { email: string; password: string }) {
        this.data = {
            email,
            password,
        };
    }
}

export default Login;
