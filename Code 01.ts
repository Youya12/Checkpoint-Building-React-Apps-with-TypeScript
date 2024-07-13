// Define a type for the props
interface GreetingProps {
  name: string;
}

// Convert the functional component to TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
