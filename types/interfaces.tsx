
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
        address: string;
    };
    items: Array<{
        productId: string;
        productName: string;
        quantity: number;
        price: number;
    }>;
    totalAmount: number;
    orderDate: Date;
    status: 'pending' | 'completed' | 'shipped' | 'cancelled';
}
