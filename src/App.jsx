
import Button from "./components/Button";

export default function App() {
  return (
    <div className="flex gap-3">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="outline">Learn More</Button>
    </div>
  );
}
