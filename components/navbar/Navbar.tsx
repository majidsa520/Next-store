import Container from "@/components/global/Container";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col flex-wrap gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        {/* As we're using useSearchParams in NavSearch component, we need to wrap this comp into a suspense
        read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
        */}
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex items-center gap-4">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
