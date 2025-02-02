import Link from "next/link";
import Nav from "./Nav";


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <nav>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/"> 
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
