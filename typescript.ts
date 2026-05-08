// problem 1
type CartItem = {
    name: string;
    price: number;
    quantity?: number;
}

const cartItem: CartItem = {
    name: "Pen",
    price: 10,
    quantity: 5
}

const calculateTotal = ({ price, quantity = 1 }: CartItem): number => {
    return price * quantity;
}

// console.log(calculateTotal(cartItem));


