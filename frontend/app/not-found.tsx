import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-center mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="text-lg text-center mb-8">
        You can go back to the homepage by clicking the button below.
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
