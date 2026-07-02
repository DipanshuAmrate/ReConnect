import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Features",
    "Mentors",
    "Testimonials",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-lime-600">
          ReConnect
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-lime-600 transition"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            text="Login"
            variant="primary"
          />
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6">

          <ul className="flex flex-col gap-5">

            {navLinks.map((link) => (

              <li
                key={link}
                className="hover:text-lime-600 cursor-pointer"
              >
                {link}
              </li>

            ))}

          </ul>

          <div className="mt-6">
            <Button
              text="Login"
              variant="primary"
            />
          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;