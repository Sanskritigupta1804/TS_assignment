type Product = {
  name: string;
  price: number;
};
const products: Product[] = [
  { name: "Pen", price: 12 },
  { name: "Laptop", price: 1200 },
];
function getProductNames(items: Product[]): string[] {
  return items.map(item => item.name);
}

console.log(getProductNames(products)); 
