
export interface Product {
    _id: string;
    pid: number;
    name: string;
    version: string;
    price: String;
    desc: string;
}

export interface Order {
    _id: string;
    oid: String;
    customer: {
        name: string; // Customer's name
        email: string; // Customer's email
        mobile: string; // Customer's mobile number
        address: string;
    };
    items: Array<{
        productId: string;
        quantity: number;
        price: number;
    }>;
    totalAmount: number;
    orderDate: Date;
    status: 'pending' | 'completed' | 'shipped' | 'cancelled';
    note: string;
}

export type ProductName = 'Alpha' | 'Beta' | 'Gamma';