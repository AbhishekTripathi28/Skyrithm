import { PropsWithChildren } from "react";
import Header from "./Header";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen container bg-gradient-to-br from-background to-muted">
      {/* header */}
      <Header/>
      <main className="min-h-screen container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        {children}
      </main>
      {/* footer */}
    </div>
  );
}

export default Layout;
