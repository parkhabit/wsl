'use client';
import Link from "next/link"
import { usePathname } from 'next/navigation';


export default function NavLink({href, children}: {href: string, children: React.ReactNode}) {
const pathname = usePathname();

    return (
        <Link href={href} className={`py-2 px-3 rounded-full border text-sm ${pathname === href ? "bg-[#3a3f50] border-white" : "bg-[#333438] border-transparent"} `}>
            <p>{children}</p>
        </Link>
    );
  }
  