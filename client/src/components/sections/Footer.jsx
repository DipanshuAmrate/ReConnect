import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company */}

        <div>

          <h2 className="text-3xl font-bold text-lime-400">
            ReConnect
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            Connecting students with alumni through mentorship,
            referrals, networking and career opportunities.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="font-semibold text-xl mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Home</li>

            <li>Features</li>

            <li>Mentors</li>

            <li>Jobs</li>

            <li>Events</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="font-semibold text-xl mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">

            <div className="flex gap-3">
              <Mail size={18} />
              reconnect@gmail.com
            </div>

            <div className="flex gap-3">
              <Phone size={18} />
              +91 9876543210
            </div>

            <div className="flex gap-3">
              <MapPin size={18} />
              OIST, Bhopal
            </div>

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="font-semibold text-xl mb-5">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl">

            <FaFacebook className="cursor-pointer hover:text-lime-400 transition" />

            <FaInstagram className="cursor-pointer hover:text-lime-400 transition" />

            <FaLinkedin className="cursor-pointer hover:text-lime-400 transition" />

            <FaGithub className="cursor-pointer hover:text-lime-400 transition" />

          </div>

        </div>

      </div>

      <hr className="border-gray-700 my-10" />

      <div className="text-center text-gray-500">
        © 2026 ReConnect. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;