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
class GetMe extends BaseAdapter {
    constructor() {
        super(`/api/user/me/`, BaseAdapter.METHODS.GET, []);
    }
}

export default GetMe;
