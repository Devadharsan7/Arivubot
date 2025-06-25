import Link from 'next/link';
import { Bot, Facebook, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '/#features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'Enterprise', href: '/enterprise' },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Blog', href: '/blog' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Partners', href: '/partners' },
    ],
    Legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Cookies', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-16">
          <div className="flex-shrink-0 min-w-[250px] md:pr-12">
            <Link href="/" className="flex items-center">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Arivubot</span>
            </Link>
            <p className="mt-4 text-gray-700 max-w-md text-base">
              Build powerful AI chatbots with your own data. 
              Automate customer support and streamline business communication.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col md:flex-row md:justify-between gap-8 md:gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="min-w-[140px]">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                  {category}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-left text-gray-600">
            © {new Date().getFullYear()} Arivubot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}