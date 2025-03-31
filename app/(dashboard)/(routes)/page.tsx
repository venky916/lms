import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      This is Protected page
      <Button>Click me</Button>
      <p className="text-3xl font-medium text-sky-700">Hello world</p>
      <UserButton />
    </div>
  );
}
