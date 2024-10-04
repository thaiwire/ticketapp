'use client'

import Link from 'next/link'
import React from 'react'

const MainNextLink = () => {
  const links = [
    {label : "Dashboard",href: "/"},
    {label : "Tickets",href: "/tickets"},
    {label : "Users",href: "/users"}
  ]

  return (
    <div className="flex items-center gap-2">

        {links.map((link)=>(
            <Link href={link.href} className="navbar-link" key={link.label}>
            {link.label}
            </Link>

        ))}

        {/* <Link href="/" className='navbar-link'>DashBoard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/users">Users</Link> */}
      </div>
  )
}

export default MainNextLink