"use client";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/NavBar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import guffyLogo from "@/images/guffylogo1.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailAndPasswordExists = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Registration failed");
      }

      const data = await response.json();
      console.log("Registration successful", data);
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Nav />
      <main className="flex items-center justify-center min-h-screen">
        <Card className="flex flex-col items-center justify-center p-8">
          <Image src={guffyLogo} alt="guffygang logo" className="h-24 w-auto pt-4 invert dark:invert-0" />
          <CardTitle className="text-3xl p-2 mb-4">Register</CardTitle>
          <form onSubmit={handleSubmit} className="w-full">
            <CardContent className="w-full">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                type="email"
                className="w-full mb-4"
              />
            </CardContent>
            <CardContent className="w-full">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type="password"
                className="w-full mb-4"
              />
            </CardContent>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <Button
              type="submit"
              style={{ cursor: emailAndPasswordExists() ? "pointer" : "not-allowed" }}
              disabled={!emailAndPasswordExists()}
              className="w-full bg-primary text-white py-2 px-4 rounded-md"
            >
              Register
            </Button>
          </form>
        </Card>
      </main>
    </>
  );
}
