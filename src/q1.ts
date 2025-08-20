
type User = {
  firstName: string;
  lastName: string;
};
function greetUser(user: User): string {
  return `Hello, ${user.firstName} ${user.lastName}!`;
}
const user: User = { firstName: "Sanskriti", lastName: "Gupta" };

console.log(greetUser(user));
