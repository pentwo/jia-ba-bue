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
class GetRecipe extends BaseAdapter {
    constructor(id: number) {
        super(`/api/recipe/recipe/{{1}}/`, BaseAdapter.METHODS.GET, [id]);
    }
}

export default GetRecipe;
