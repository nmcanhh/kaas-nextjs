'use client'

import config from "@/utils/config";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Language = {
  code: string
  name: string
  flag: string
  flagSrc: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸", flagSrc: "./images/image-13.png" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳", flagSrc: "./images/image-69.png" },
]

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const selectLanguage = (language: Language) => {
    setCurrentLanguage(language)
    setIsLanguageDropdownOpen(false)
    // Here you would implement the actual language change logic
    console.log(`Language changed to ${language.name}`)
  }

  return (
    <nav className={`${scrolled ? "fixed top-0 bg-white shadow-md" : "absolute bg-transparent"} pt-[1.5rem] pb-5 lg:pt-10 lg:pb-5 px-[2rem] top-0 left-0 right-0 z-50 flex flex-wrap gap-[0.5rem] justify-between items-center xl:px-20 max-w-full w-full`}>
      <p className="self-stretch my-auto text-xs text-black rounded-none w-[226px]">
        <img
          className="w-[86px] lg:w-[131px]"
          src="./icons/kaas.svg"
          alt="Kaas"
        />
        A project of INNOTECH & NAPA GLOBAL
      </p>
      <div className="hidden lg:flex flex-wrap gap-10 justify-center items-center self-stretch py-1.5 pr-8 pl-1.5 my-auto bg-slate-50 min-w-60 rounded-[290px] max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-1.5 justify-center items-center self-stretch px-4 py-2 my-auto bg-indigo-500 rounded-[40px] w-[52px]">
          <img
            src="./icons/home.svg"
            alt="Home"
            className="object-contain self-stretch my-auto w-5 aspect-square"
          />
        </div>
        <Link className="self-stretch my-auto text-base font-medium text-center text-neutral-800" href={config.solutionHref}>Solution</Link>
        <Link className="self-stretch my-auto text-base font-medium text-center text-neutral-800" href={config.servicesHref}>Services</Link>
        <Link className="self-stretch my-auto text-base font-medium text-center text-neutral-800" href={config.aboutInnotechHref}>About Innotech</Link>
        <Link className="self-stretch my-auto text-base font-medium text-center text-neutral-800" href={config.aboutNapaHref}>About Napa Global</Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden lg:block relative" ref={dropdownRef}>
          <button
            onClick={toggleLanguageDropdown}
            className="w-[48px] h-[48px] rounded-full overflow-hidden border-2 border-gray-200 relative group"
            aria-label="Switch language"
          >
            <Image
              src={currentLanguage.flagSrc || "/placeholder.svg"}
              alt={currentLanguage.name}
              width={48}
              height={48}
              className="object-cover transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>

          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 py-1 border border-gray-100">
              <div className="px-4 py-2 text-sm font-medium text-gray-500 border-b border-gray-100">
                Switch Language
              </div>
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => selectLanguage(language)}
                  className={`${currentLanguage.code === language.code ? "bg-gray-50 text-[#6366F1]" : "text-gray-700"} flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-50`}
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-3 border border-gray-200">
                    <Image
                      src={language.flagSrc || "/placeholder.svg"}
                      alt={language.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <span>{language.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>


        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex items-center justify-center"
          onClick={toggleMobileMenu}
          data-mobile-toggle="true"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={clsx(
            "fixed inset-0 bg-white z-40 pt-20 px-4 transition-transform duration-300 ease-in-out transform lg:hidden",
            { "translate-x-0": isMobileMenuOpen, "translate-x-full": !isMobileMenuOpen }
          )}
        >
          {/* Close button at the top of mobile menu */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
          <nav className="flex flex-col space-y-4">
            <Link
              href={config.homeHref}
              className="flex items-center space-x-2 text-gray-700 hover:text-[#6366F1] font-medium py-3 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#6366F1]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>Home</span>
            </Link>
            <Link
              href={config.solutionHref}
              className="text-gray-700 hover:text-[#6366F1] font-medium py-3 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solution
            </Link>
            <Link
              href={config.servicesHref}
              className="text-gray-700 hover:text-[#6366F1] font-medium py-3 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href={config.aboutInnotechHref}
              className="text-gray-700 hover:text-[#6366F1] font-medium py-3 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Innotech
            </Link>
            <Link
              href={config.aboutNapaHref}
              className="text-gray-700 hover:text-[#6366F1] font-medium py-3 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Napa Global
            </Link>

            {/* Mobile Language Switcher */}
            <div className="py-3 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-500 mb-2">Switch Language</p>
              <div className="flex flex-col space-y-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      selectLanguage(language)
                      setIsMobileMenuOpen(false)
                    }}
                    className={clsx(
                      "flex items-center px-2 py-2 text-sm rounded-md",
                      currentLanguage.code === language.code
                        ? "bg-[#6366F1]/10 text-[#6366F1]"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    <div className="w-6 h-6 rounded-full overflow-hidden mr-3 border border-gray-200">
                      <Image
                        src={language.flagSrc || "/placeholder.svg"}
                        alt={language.name}
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
