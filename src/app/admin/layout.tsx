'use client'

import { useRouter } from "next/navigation";
import { Nav, NavLink } from "../components/Nav";

export const dynamic = "force-dynamic"

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    const router = useRouter();
    
    const handleSignOut = async () =>{
      await fetch("/api/logout", { method: "POST" }); // Call a logout API
      router.push("/"); // Redirect to home
    }

    return (
        <>
            <Nav>
                <NavLink href='/admin'>Dashboard</NavLink>
                <NavLink href='/admin/products'>Products</NavLink>
                <NavLink href='/admin/users'>Customers</NavLink>
                <NavLink href='/admin/orders'>Sales</NavLink>
                <NavLink href={'/'}>User Home</NavLink>
                <button onClick={handleSignOut} className="ml-auto px-4 py-2 bg-red-500 text-white rounded">
                  Sign Out
                </button>
            </Nav>
            <div className="container my-6">{children}</div>
        </>
  )}