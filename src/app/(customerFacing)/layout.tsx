import Nav, { NavLink } from "@/components/Nav";
import React from "react";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/orders">Sales</NavLink>
      </Nav>
      <div className="container my-5">{children}</div>
    </>
  );
}
