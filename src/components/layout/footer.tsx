import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/glass/glass-card";
import { FOOTER_NAV_ITEMS } from "@/config/navigation";

const Footer = () => {
  return (
    <footer className="py-[max(3vh,2rem)] px-4 border-t border-border">
      <div className="max-w-[min(90vw,1200px)] mx-auto">
        <GlassCard className="p-[var(--fluid-padding)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-[var(--fluid-gap)]">
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">Mushfiqur Rahman Plaban</h3>
              <p className="text-muted-foreground text-sm">
                Building Digital Solutions with an Interdisciplinary Approach
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Navigation</h4>
              <ul className="space-y-2">
                {FOOTER_NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Connect</h4>
              <ul className="space-y-2">
                {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
                  <li>
                    <a
                      href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
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
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  </li>
                )}
                {process.env.NEXT_PUBLIC_EMAIL && (
                  <li>
                    <a
                      href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Email
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Contact</h4>
              <address className="not-italic text-muted-foreground text-sm">
                <p className="mb-2">Lalbagh, Dhaka, Bangladesh</p>
                {process.env.NEXT_PUBLIC_EMAIL && <p>{process.env.NEXT_PUBLIC_EMAIL}</p>}
              </address>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} Mushfiqur Rahman Plaban. All rights reserved.</p>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};

export default Footer;