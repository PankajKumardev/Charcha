import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 className=" text-6xl font-semibold ">Charcha</h1>
    <Button className="my-2">Click me</Button>
  </div>
  );
}
