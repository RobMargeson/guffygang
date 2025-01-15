import { Button } from "@/components/ui/button";
import { ProfileForm } from "@/components/Form";
import { Nav } from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="py-24 flex flex-col gap-8 items-center text-center justify-center">
        <h1 className="text-4xl font-bold">GUFFY GANG</h1>
        <p className="text-2xl text-muted-foreground">...GUFF THE FUCK UP!</p>
        <div className="flex gap-6 py-6">
        <Button>Learn More</Button>
        <Button variant={"secondary"}>Learn More</Button>
        </div>
        <ProfileForm />
        
        </section>


    </main>
    
  );
}
