import Link from "next/link";
import Nav from "./Nav"


const Header = () => {
  return (
    <header className="bg-primary">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div>
          <Link href="/" className="-m-1.5 p-1.5"> 
            <h1 className="text-4xl font-semibold">
              Chang <span className="text-lightGreen">.</span>
            </h1>
          </Link>

          <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href="/contact">
              <button className="py-2 px-4 rounded bg-blue-500">Hire me </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
