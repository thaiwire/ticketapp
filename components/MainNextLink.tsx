"use client";

import Link from "next/link";
import React from "react";

const MainNextLink = ({ role }: { role?: string }) => {
  const links = [
    { label: "Dashboard", href: "/", adminOnly: false },
    { label: "Tickets", href: "/tickets", adminOnly: false },
    { label: "Users", href: "/users", adminOnly: true },
  ];

  return (
    <div className="flex items-center gap-2">
      {links
        .filter((link) => !link.adminOnly || role === "ADMIN")
        .map((link) => (
          <Link href={link.href} className="navbar-link" key={link.label}>
            {link.label}
          </Link>
        ))}

      {/* <Link href="/" className='navbar-link'>DashBoard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/users">Users</Link> */}
    </div>
  );
};

export default MainNextLink;
