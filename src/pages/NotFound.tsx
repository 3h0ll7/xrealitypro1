import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Compass, Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  {
    title: "خدماتنا",
    description: "استعرض حلول التصوير الاحترافية",
    href: "/#services",
  },
  {
    title: "مميزاتنا",
    description: "تعرّف على خبرات الفريق والتقنيات",
    href: "/#features",
  },
  {
    title: "فريق العمل",
    description: "قابل الخبراء خلف العدسة",
    href: "/#team",
  },
  {
    title: "تواصل معنا",
    description: "دعنا نحول فكرتك إلى واقع بصري",
    href: "/#contact",
  },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-dark-surface to-black text-foreground">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gold/10 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl border border-border/40 bg-dark-elevated/70 p-10 text-center shadow-2xl"
        >
          <span className="inline-flex items-center justify-center rounded-full bg-primary/15 px-4 py-1 text-sm font-medium text-primary">
            خطأ 404
          </span>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            <span className="hero-text">الصفحة</span> غير موجودة
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            يبدو أنك وصلت إلى رابط غير متاح. تأكد من صحة العنوان أو استخدم الروابط أدناه للعودة إلى رحلتك البصرية مع X REALITY PRO.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-primary px-8 text-primary-foreground hover:bg-primary/90">
              <Link to="/">
                <ArrowLeft className="ml-2 h-5 w-5" />
                العودة للرئيسية
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass-effect border-primary/40 text-foreground hover:border-primary hover:text-primary"
            >
              <a href="mailto:info@xreality.pro">
                <Mail className="ml-2 h-5 w-5" />
                راسل فريق الدعم
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {quickLinks.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-dark-elevated/40 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{item.title}</p>
                    <p className="mt-2 text-xl font-semibold">{item.description}</p>
                  </div>
                  <div className="rounded-full border border-border/40 bg-background/60 p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Compass className="h-5 w-5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          <div className="mt-10 text-center text-sm text-muted-foreground">
            أو اضغط على زر المنزل للعودة مباشرة.
            <Button asChild variant="link" className="ml-2 text-primary">
              <Link to="/">
                <Home className="ml-1 h-4 w-4" />الرئيسية
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
