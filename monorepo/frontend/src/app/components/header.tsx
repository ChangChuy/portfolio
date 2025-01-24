import Link from "next/link";


const Header = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div>
          <Link href="/" className="-m-1.5 p-1.5"> 
          <h1 className="text-4xl font-semibold text-black">
           Chang <span className="text-accent">.</span>
          </h1>
          </Link>
        </div>
      </nav>
    </header>

  );
}

export default Header;
