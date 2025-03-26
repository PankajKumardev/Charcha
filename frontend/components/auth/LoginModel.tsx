"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Globe } from "lucide-react"; 

const handleGoogleLogin = async () => {
  signIn("google", {
    redirect: true,
    callbackUrl: "/",
  });
};

export default function LoginModal() {
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Getting start</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to QuickChat</DialogTitle>
          <DialogDescription>
            QuickChat makes it effortless to create secure chat links and start
            conversations in seconds.
          </DialogDescription>
        </DialogHeader>
        <Button variant="outline" onClick={handleGoogleLogin}>
            <Globe className="mr-4" size={25} />
            Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
}