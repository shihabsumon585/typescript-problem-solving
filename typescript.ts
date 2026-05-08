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


// problem 2
type Person = {
    name: string;
    age: number;
}
type JobDetails = {
    role: string;
    sallary: number;
}
type Employee = Person & JobDetails;
const employee : Employee = {
    name: "Md Shihab Sumon",
    age: 23,
    role: "Next Level Developer",
    sallary: 25000
}
const getProfile = ({name, role}: Employee): string => {
    return `Name: ${name}, Role: ${role}`
}
// console.log(getProfile(employee));