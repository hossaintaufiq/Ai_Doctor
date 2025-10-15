import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto py-8 px-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Link
              href="/"
              title={siteConfig.name}
              className="flex items-center space-x-2"
            >
              <Icons.logo className="w-auto h-[30px]" />
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="https://x.com/sumamakhan761" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://linkedin.com/in/sumama-khan" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://sumama-portfolio-gold.vercel.app" aria-label="Portfolio" className="text-muted-foreground hover:text-primary transition-colors">
              <CgWebsite size={20} />
            </Link>
          </div>
        </div>

        <div className="text-center mt-6">
          <span className="text-sm text-muted-foreground">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:text-primary transition-colors">
              {siteConfig.name}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
