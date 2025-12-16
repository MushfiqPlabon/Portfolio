import React, { useState } from "react";
import { useTheme } from "next-themes";
import { MOBILE_NAV_ITEMS } from "@/config/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const darkMode = theme === 'dark';
  const toggleDarkMode = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="p-[min(2vw,0.5rem)] rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary-accent"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <Menu className="h-6 w-6 text-primary-accent" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[min(90vw,400px)] bg-dark-bg bg-opacity-100 backdrop-blur-xl border border-glass-border p-6"
        aria-describedby={undefined}
      >
        <div className="flex flex-col space-y-6 mt-8">
          {MOBILE_NAV_ITEMS.map((item) => (
            <SheetClose asChild key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-xl font-medium text-foreground hover:text-primary-accent transition-colors block p-3 rounded-lg hover:bg-glass-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-primary-accent"
              >
                {item}
              </Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Button
              variant="ghost"
              className="text-xl font-medium text-foreground hover:text-primary-accent transition-colors block p-3 rounded-lg w-full text-left justify-start hover:bg-glass-white hover:bg-opacity-30"
              onClick={toggleDarkMode}
            >
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;