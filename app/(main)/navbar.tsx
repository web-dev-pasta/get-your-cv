"use client";
import { ModeToggle } from "@/components/dark-light-toggle";
import { UserButton } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme } = useTheme();
  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 p-3">
        <Link href="/resumes" className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt="logo" width={35} height={35} />
          <p className="text-xl font-bold tracking-tight">AI Resume Builder</p>
        </Link>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                labelIcon={<CreditCard className="size-4" />}
                href="/billing"
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
