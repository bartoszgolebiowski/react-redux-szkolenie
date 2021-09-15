export type TrendingProductsResponse = {
    count: number;
    results: TrendingProduct[];
    params: ParamsProducts;
    type: string;
    pagination: PaginationProducts;
};
 
export type TrendingProduct = {
    listing_id: number;
    title: string;
    price: string;
    description: string;
    currency_code: string;
    url: string;
    sku: string[];
    is_vintage: boolean;
    Images: Images[];
};
 
export type Images = {
    url_170x135: string;
};
 
export type ParamsProducts = {
    limit: string;
    offset: number;
    page: string;
};
 
export type PaginationProducts = {
    effective_limit: number;
    effective_offset: number;
    next_offset: number;
    effective_page: number;
    next_page: number;
};
 
const PRODUCTS_LIST_FETCH_ERROR = "Could not fetch products";
 
const api_key = "zfbmo6g0aar1s1ppg350oqro";
const API = "https://community-etsy.p.rapidapi.com/listings/trending";
const FIELDS = [
    "title",
    "description",
    "price",
    "currency_code",
    "url",
    "listing_id",
    "price",
];
const INCLUDES = ["Images(url_170x135)"];
 
const options = () => ({
    method: "GET",
    headers: {
        "x-rapidapi-host": "community-etsy.p.rapidapi.com",
        "x-rapidapi-key": "10a5116c48msh3a20ca2f36faebbp1bf756jsnb5eda315068b",
        useQueryString: "true",
    },
});
 
export const getTrendingProducts = (
    page = "1",
    offset = "0",
    limit = "100"
): Promise<TrendingProduct[]> => {
    return fetch(
        `${API}?${new URLSearchParams({
            api_key,
            page,
            limit,
            offset,
            fields: FIELDS.join(","),
            includes: INCLUDES.join(", "),
        })}`,
        options()
    )
        .then(checkStatus(PRODUCTS_LIST_FETCH_ERROR))
        .then((res) => res.json())
        .then(filterErrorProducts);
};
 
export const filterErrorProducts = (
    response: TrendingProductsResponse
): TrendingProduct[] => {
    return response.results.filter(
        (product) =>
            !product.hasOwnProperty("error_messages") && product.price !== undefined
    );
};
 
export const checkStatus = (errorMessage: string) => (res: Response) => {
    if (res.status < 500) {
        return res;
    }
    throw Error(errorMessage);
}
 
export const filterByName = (name: string) => (product: TrendingProduct) =>
    product.title.includes(name);