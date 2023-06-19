import NavbarLayout from "@/components/layout/Navbar";

export default function HeaderLayout({ children }: { children: React.ReactNode }) {
    return <><NavbarLayout></NavbarLayout>{children}</>
}