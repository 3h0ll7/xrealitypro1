import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const members = [
    {
      name: "ميثم علي",
      role: "إضاءة سينمائية",
      image: "/lovable-uploads/b0becc41-2916-41bf-95ae-20569db25f23.png",
      alt: "صورة ميثم علي يحمل معدّة إضاءة احترافية"
    },
    {
      name: "محمد عماد",
      role: "تهيئة مواقع التصوير",
      image: "/lovable-uploads/99c1252b-d5bf-403d-90d7-f3b73db89715.png",
      alt: "محمد عماد يعمل على تجهيزات موقع التصوير"
    },
    {
      name: "علي حيدر",
      role: "تصوير سينمائي",
      image: "/lovable-uploads/3fc1b0e4-ef38-4f00-b37e-77a12820f818.png",
      alt: "علي حيدر يستخدم كاميرا سينمائية"
    }
  ];

  return (
    <section id="team" className="py-20 bg-dark-surface/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="hero-text">فريق</span>{" "}
            <span className="text-foreground">العمل</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نخبة من المحترفين خلف عدستنا
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="bg-dark-elevated/50 backdrop-blur-sm border-border/30 overflow-hidden group">
                <div className="relative h-80">
                  <img
                    src={m.image}
                    alt={m.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{m.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: members.map((m, index) => ({
              "@type": "Person",
              name: m.name,
              jobTitle: m.role,
              image: m.image,
              position: index + 1
            }))
          })
        }} />
      </div>
    </section>
  );
};

export default TeamSection;
