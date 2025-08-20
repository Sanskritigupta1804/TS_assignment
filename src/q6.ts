type Order = {
  id: number;
  customer: string;
  items: string[];
  status: "pending" | "shipped" | "delivered";
};

const defaultOrder: Order = {
  id: 0,
  customer: "John",
  items: [],
  status: "pending"
};


function createOrder(customer: string, items: string[]): Order {
  return { ...defaultOrder, id: Date.now(), customer, items };
}


function updateOrder(order: Order, updates: Partial<Order>): Order {
  return { ...order, ...updates };
}


function getOrderSummary(order: Readonly<Order>): string {
  return `${order.customer} - ${order.status}: ${order.items.length} items`;
}


let order1 = createOrder("Alice", ["Book", "Pen"]);
order1 = updateOrder(order1, { status: "shipped" });
console.log(getOrderSummary(order1));
