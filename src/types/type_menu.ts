export type MenuItem = {
    id: number
    name: String,
    price: number
}

export type OrderItem = MenuItem & {
    quantity: number
}
