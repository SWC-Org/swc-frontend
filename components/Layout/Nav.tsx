"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { DensitySmall } from "@mui/icons-material";

const Nav = () => {
  const isLogged = false;
  const routesNames = [
    { route: "Home", path: "/home" },
    { route: "About", path: "/home" },
    { route: "Customer", path: "/home" },
  ];

  const [toggleDropdown, setToggleDropdown] = useState(false);

  const signOut = () => {};

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">SWC</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isLogged ? (
          <div className="flex gap-3 md:gap-5">
            {routesNames.map((route) => (
              <Link href={route.path} className="black_btn btn-no-border">
                {route.route}
              </Link>
            ))}
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={"/assets/images/vercel.svg"}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex gap-3 md:gap-5">
              <Link href="/login">
                <button
                  type="button"
                  onClick={() => {}}
                  className="black_btn btn-no-border"
                >
                  Sign in
                </button>
              </Link>
              <Link href="/register">
                <button
                  type="button"
                  onClick={() => {}}
                  className="outline_btn"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isLogged ? (
          <div className="flex">
            <DensitySmall
              className="rounded-full"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
            <Link href="/profile">
              <Image
                src={"/assets/images/vercel.svg"}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>

            {toggleDropdown && (
              <div className="dropdown">
                {routesNames.map((route) => (
                  <Link
                    href={route.path}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    {route.route}
                  </Link>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/login">
              <button type="button" onClick={() => {}} className="black_btn">
                Sign in
              </button>
            </Link>
            <Link href="/login">
              <button type="button" onClick={() => {}} className="outline_btn">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
