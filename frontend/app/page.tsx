import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-semibold">Charcha</h1>
      <p className="text-2xl text-gray-500">
        A platform for meaningful conversations
      </p>
      <div className="flex flex-row space-x-4 mt-4">
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
      <div className="flex flex-row space-x-8 mt-8">
        <div className="flex flex-col space-y-4">
          <Button variant="outline">Sign In</Button>
          <Button variant="outline">Sign Up</Button>
        </div>
        <div className="flex flex-col space-y-4">
          <Button variant="outline">Features</Button>
          <Button variant="outline">Pricing</Button>
          <Button variant="outline">Contact</Button>
        </div>
        <div className="flex flex-col space-y-4">
          <Button variant="outline">About</Button>
          <Button variant="outline">Blog</Button>
          <Button variant="outline">FAQ</Button>
        </div>
        <div>
          <Button variant="outline">More</Button>
        </div>
      </div>
    </div>
  );
}
