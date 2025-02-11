"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"
import { links } from "../lib/links"

const Nav = ({}) => {

    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
            const isActive = link.path === pathname || pathname.startsWith(link.path + "/");
            return (
            <Link
                href={link.path}
                key={index}
                className={`capitalize font-medium transition-all duration-300 hover:text-lightGreen border-b-2 ${
                isActive ? "text-lightGreen border-lightGreen" : "border-transparent hover:border-lightGreen"
                }`}
            >
                {link.name}
            </Link>
            );
        })}
        </nav>
    );
}

export default Nav; 