import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/glass/glass-card";
import { FOOTER_NAV_ITEMS } from "@/config/navigation";
import { PersonalInfo } from "@/types";

interface FooterProps {
  personalInfo: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  return (
    <footer className="py-[max(3vh,2rem)] px-4 border-t border-border">
      <div className="max-w-[min(90vw,1200px)] mx-auto">
        <GlassCard className="p-[var(--fluid-padding)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-[var(--fluid-gap)]">
            <div>
              <h3 className="text-[var(--fluid-text-lg)] font-bold text-primary mb-4">{personalInfo.name}</h3>
              <p className="text-muted-foreground text-[var(--fluid-text-sm)]">
                {personalInfo.title}
              </p>
            </div>

            <div>
              <h4 className="text-[var(--fluid-text-lg)] font-semibold mb-4 text-primary">Navigation</h4>
              <ul className="space-y-2">
                {FOOTER_NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-[var(--fluid-text-sm)]"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[var(--fluid-text-lg)] font-semibold mb-4 text-primary">Connect</h4>
              <ul className="space-y-2">
                {personalInfo.links.linkedin && (
                  <li>
                    <a
                      href={personalInfo.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-[var(--fluid-text-sm)]"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
                {personalInfo.links.github && (
                  <li>
                    <a
                      href={personalInfo.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-[var(--fluid-text-sm)]"
                    >
                      GitHub
                    </a>
                  </li>
                )}
                {personalInfo.links.email && (
                  <li>
                    <a
                      href={`mailto:${personalInfo.links.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-[var(--fluid-text-sm)]"
                    >
                      Email
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-[var(--fluid-text-lg)] font-semibold mb-4 text-primary">Contact</h4>
              <address className="not-italic text-muted-foreground text-[var(--fluid-text-sm)]">
                <p className="mb-2">{personalInfo.location}</p>
                {personalInfo.links.email && <p>{personalInfo.links.email}</p>}
              </address>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-[var(--fluid-text-sm)]">
            <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};

export default Footer;