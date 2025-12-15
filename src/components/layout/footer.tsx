import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/glass/glass-card";
import { FOOTER_NAV_ITEMS } from "@/config/nav-items";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-glass-border">
      <div className="max-w-6xl mx-auto">
        <GlassCard className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-primary-accent mb-4">Mushfiqur Rahman Plaban</h3>
              <p className="text-muted-foreground text-sm">
                Building Digital Solutions with an Interdisciplinary Approach
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-accent">Navigation</h4>
              <ul className="space-y-2">
                {FOOTER_NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary-accent transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-accent">Connect</h4>
              <ul className="space-y-2">
                {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
                  <li>
                    <a
                      href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary-accent transition-colors text-sm"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
                {process.env.NEXT_PUBLIC_GITHUB_URL && (
                  <li>
                    <a
                      href={process.env.NEXT_PUBLIC_GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary-accent transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  </li>
                )}
                {process.env.NEXT_PUBLIC_EMAIL && (
                  <li>
                    <a
                      href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                      className="text-muted-foreground hover:text-primary-accent transition-colors text-sm"
                    >
                      Email
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-accent">Contact</h4>
              <address className="not-italic text-muted-foreground text-sm">
                <p className="mb-2">Lalbagh, Dhaka, Bangladesh</p>
                {process.env.NEXT_PUBLIC_PHONE && <p className="mb-2">{process.env.NEXT_PUBLIC_PHONE}</p>}
                {process.env.NEXT_PUBLIC_EMAIL && <p>{process.env.NEXT_PUBLIC_EMAIL}</p>}
              </address>
            </div>
          </div>

          <div className="border-t border-glass-border mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Mushfiqur Rahman Plaban. All rights reserved.</p>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};

export default Footer;