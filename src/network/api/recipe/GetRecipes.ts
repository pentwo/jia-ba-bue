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
class GetRecipes extends BaseAdapter {
    constructor() {
        super(`/api/recipe/recipe/`, BaseAdapter.METHODS.GET, []);
    }
}

export default GetRecipes;
