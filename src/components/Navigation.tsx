import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera, Zap, Users, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "الخدمات", href: "#services", icon: Camera },
    { name: "المميزات", href: "#features", icon: Zap },
    { name: "فريق العمل", href: "#team", icon: Users },
    { name: "لوحة التحكم", href: "#dashboard", icon: Settings },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Camera className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold hero-text">X REALITY PRO</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center space-x-2 rtl:space-x-reverse"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <Button variant="outline" className="border-primary/20 hover:border-primary">
              تسجيل دخول
            </Button>
            <Button className="bg-primary hover:bg-primary/90 gold-glow">
              ابدأ الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-4 border-t border-border/20"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center space-x-2 rtl:space-x-reverse py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </motion.a>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-border/20">
                  <Button variant="outline" className="border-primary/20 hover:border-primary">
                    تسجيل دخول
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90">
                    ابدأ الآن
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;