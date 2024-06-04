
export interface ICategory {
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    name: string;
    updated: string;
}

export interface ITable {
    id: string;
    number: string;
    enabled: boolean;
}

export interface ICategoryMock {
    name: string;
    id: string;
 }
 
 export interface IProduct {
    collectionId: string;
    collectionName: string;
    created: string;
    description: string;
    enabled: boolean;
    id: string;
    id_category: string;
    name: string;
    price: number;
    updated: string;
    url: string;
}

export interface IOrderItem {
    product: IProduct;
    count: number;
 }