import React from "react"
import Image from "next/image"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-center w-full bg-cream100">
      <div className="flex items-center justify-between wide-container !py-4 flex-wrap w-full">
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="Ecommerce"
            width={40}
            height={40}
            unoptimized={true}
          />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden [&_svg]:w-auto [&_svg]:h-auto"
            >
              <Menu color={"var(--green900)"} size={28} />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="fixed w-64 sm:w-72">
            <SheetTitle className="hidden">Menu</SheetTitle>
            <nav className="grid gap-4 pt-10 text-lg font-medium">
              <NavbarLink title="Products" href="/products" />
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden lg:flex items-center leading-5 lg:gap-4">
          <NavbarLink title="All Products" href="/products" />
          <NavbarLink title="Login" href="/login" />
          <NavbarLink title="Register" href="/register" />
        </nav>
      </div>
    </header>
  )
}

interface NavbarLinkProps {
  href: string
  title: string
}

export const NavbarLink = ({ href, title }: NavbarLinkProps) => {
  return (
    <Link href={href}>
      <span className="font-sans text-base text-green900 text-lg md:text-base hover:text-green500">
        {title}
      </span>
    </Link>
  )
}
