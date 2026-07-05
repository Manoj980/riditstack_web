import { Header } from "./header"
import { Footer } from "./footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-[5.5rem] max-[656px]:pt-0">{children}</main>
      <Footer />
    </div>
  )
}