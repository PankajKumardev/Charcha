import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
