import Image from "next/image";
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col p-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="flex flex-col gap-4 mt-8">
        <Button variant="default">Create a board</Button>
        <Button variant="default">Invite a user</Button>
      </div>
    </div>
  ) 
}