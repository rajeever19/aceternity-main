// import Image from "next/image";
import { HeroParallaxDemo } from "@/components/ui/HeroParallaxDemo";
import { NavbarDemo } from "@/components/ui/NavbarDemo";
import { BentoGridDemo } from "@/components/ui/BentoGridDemo";
import { FollowingPointerDemo } from "@/components/ui/FollowingPointerDemo";
import { InfiniteMovingCardsDemo } from "@/components/ui/InfiniteMovingCardsDemo";
import { AnimatedPinDemo } from "@/components/ui/AnimatedPinDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavbarDemo/> 
      <HeroParallaxDemo/>
       <BentoGridDemo/> 
      {/* <FollowingPointerDemo/> */}
      <InfiniteMovingCardsDemo/> 
      <AnimatedPinDemo/>
    </main>
  );
}
