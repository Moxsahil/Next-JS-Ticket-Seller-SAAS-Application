import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle} from "@/components/ToggleButton"
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="flex flex-col bg-gradient-to-r from-[#3494E6] to-[#EC6EAD] lg:flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="font-bold shrink-0">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-24 lg:w-28"
            />
          </Link>

          <div className="lg:hidden">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* Search Bar - Full width on mobile */}
        <div className="w-full lg:max-w-2xl">
          <SearchBar />
        </div>

        <div className="hidden lg:flex items-center gap-3 ml-auto">
          {/* <ModeToggle /> */}
          <SignedIn>
            <div className="flex items-center gap-3">
              <Link href="/seller">
                <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-gradient-to-r hover:from-[#ee0979] hover:to-[#ff6a00]  transition">
                  Sell Tickets
                </button>
              </Link>

              <Link href="/tickets">
                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                  My Tickets
                </button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Mobile Action Buttons */}
        <div className="lg:hidden w-full flex justify-center gap-3">
          <SignedIn>
            <Link href="/seller" className="flex-1">
              <button className="w-full bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                Sell Tickets
              </button>
            </Link>

            <Link href="/tickets" className="flex-1">
              <button className="w-full bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                My Tickets
              </button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default Header;
