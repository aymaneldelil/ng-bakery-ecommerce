import { IProductReview } from "./i-product-review";

export interface Iproduct {
    id:number ;
    title:string;
    categoy:string;
    bakeryID:number;
    description:string;
    productURL:string;
    price:number;
    size:Array<string>;
    review:Array<IProductReview>
}
