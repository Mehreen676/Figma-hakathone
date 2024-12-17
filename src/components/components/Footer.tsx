import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="px-6 py-8 text-white bg-black">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Column 1: Find a Store */}
                <div>
                    <h3 className="mb-4 text-sm font-semibold">FIND A STORE</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">Become Link Member</Link></li>
                        <li><Link href="#" className="hover:underline">Sign Up for Email</Link></li>
                        <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
                    </ul>
                </div>

                {/* Column 2: Get Help */}
                <div>
                    <h3 className="mb-4 text-sm font-semibold">GET HELP</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">Order Status</Link></li>
                        <li><Link href="#" className="hover:underline">Delivery</Link></li>
                        <li><Link href="#" className="hover:underline">Returns</Link></li>
                        <li><Link href="#" className="hover:underline">Payment Options</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
                    </ul>
                </div>

                {/* Column 3: About Nike */}
                <div>
                    <h3 className="mb-4 text-sm font-semibold">ABOUT NIKE</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">News</Link></li>
                        <li><Link href="#" className="hover:underline">Careers</Link></li>
                        <li><Link href="#" className="hover:underline">Investors</Link></li>
                        <li><Link href="#" className="hover:underline">Sustainability</Link></li>
                    </ul>
                </div>

                {/* Column 4: Social Media Icons */}
                <div className="flex items-start justify-start gap-4 lg:justify-end">
                    <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" aria-label="Twitter" />
                    <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" aria-label="Facebook" />
                    <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" aria-label="YouTube" />
                    <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" aria-label="Instagram" />
                </div>
            </div>

            {/* Footer Information */}
            <div className="flex flex-wrap items-center justify-between mt-8 text-xs text-gray-400">
                <div className="flex gap-2 mb-4 md:mb-0">
                    <IoLocationOutline className="text-sm" />
                    <p>India</p>
                    <p>© 2023 Nike, Inc. All Rights Reserved</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Link href="#" className="hover:underline">Guides</Link>
                    <Link href="#" className="hover:underline">Terms of Sale</Link>
                    <Link href="#" className="hover:underline">Terms of Use</Link>
                    <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;