"use client";

// import { Sheet, SheetContent, SheetTrigger } from '@/component/ui/sheet'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "../app/lib/links";
import { useState } from "react";

const MobileNav = () => {
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Button to open the sidebar */}
      <button
        onClick={() => setSidebarOpen(true)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 xl:hidden"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      {/* Sidebar and overlay - only rendered when sidebarOpen is true */}
      {sidebarOpen && (
        <>
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black opacity-50 z-40"
          />

          {/* Sidebar panel */}
          <div
            style={{ backgroundColor: "#1c1c22" }}
            className="fixed inset-y-0 left-0 z-50 w-64 shadow-xl transform transition-transform duration-300 ease-in-out"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setSidebarOpen(false)}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-32 mb-40 text-center text-2xl">
              <Link href="/">
                <h1 className="text-4xl font-semibold">
                  Chang <span className="text-lightGreen">.</span>
                </h1>
              </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
              {links.map((link, index) => {
                const isActive =
                  link.path === pathname ||
                  pathname.startsWith(link.path + "/");
                return (
                  <Link
                    href={link.path}
                    key={index}
                    className={`capitalize font-medium transition-all duration-300 hover:text-lightGreen border-b-2 ${
                      isActive
                        ? "text-lightGreen border-lightGreen"
                        : "border-transparent hover:border-lightGreen"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default MobileNav;
