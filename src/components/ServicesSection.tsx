import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Film, Users, Building, Heart, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "التصوير السينمائي الفني",
      description: "أسلوب سينمائي متميز مع إضاءة احترافية ومعالجة متقدمة",
      icon: Film,
      image: "/lovable-uploads/0f06fc1c-0d7a-4667-b6cf-1ac0600b4d19.png",
      // price removed
      features: ["تصوير خارجي", "معالجة احترافية", "صور عالية الجودة"]
    },
    {
      title: "تصوير سينمائي درامي",
      description: "تصوير سينمائي بإضاءة درامية وتجارب متقنة ودقة",
      icon: Camera,
      image: "/lovable-uploads/f6edf561-8e82-463e-85ee-f7069e984765.png",
      // price removed
      features: ["إضاءة درامية", "تنسيق المشاهد", "تأثيرات بصرية"]
    },
    {
      title: "التصوير الرياضي المتقدم",
      description: "التقاط لحظات الانتصار والتميز الرياضي",
      icon: Star,
      image: "/lovable-uploads/ca22a2e9-d318-4e61-a82c-7f575dff8291.png",
      // price removed
      features: ["تصوير سريع", "دقة عالية", "لحظات حاسمة"]
    },
    {
      title: "تصوير رياضي احترافي",
      description: "تصوير الرياضة بلحظات التميز والإثارة والحماس",
      icon: Users,
      image: "/lovable-uploads/22213e74-b250-4c52-b99f-693072d910be.png",
      // price removed
      features: ["تقنيات متطورة", "التقاط الحركة", "جودة احترافية"]
    },
    {
      title: "التصوير التجاري الإعلاني",
      description: "تصوير إعلاني عالية الجودة لأعمالك التجارية",
      icon: Building,
      image: "/lovable-uploads/e8a7f347-7020-4e94-914c-8846bd86540e.png",
      // price removed
      features: ["تصوير المنتجات", "إعلانات تجارية", "برانح الشركات"]
    },
    {
      title: "تصوير حفل التخرج",
      description: "التقاط لحظات الخرج المتميزة لحفلات التخرج الجامعية",
      icon: Heart,
      image: "/lovable-uploads/f8974324-41f3-44ef-90ff-f475a34c6518.png",
      // price removed
      features: ["حفلات التخرج", "صور تذكارية", "لحظات مميزة"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-surface/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="hero-text">معرض</span>{" "}
            <span className="text-foreground">أعمالنا</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            استكشف مجموعة من أفضل أعمالنا في مختلف مجالات التصوير
          </p>
          
          {/* Service Categories */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["التصوير الفني", "التصوير الرياضي", "التصوير السينمائي", "التصوير الاجتماعي", "جميع الأعمال"].map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 4 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-dark-elevated border border-border/30 text-muted-foreground hover:text-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-dark-elevated/50 backdrop-blur-sm border-border/30 hover:border-primary/50 transition-all duration-500 overflow-hidden group">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-center">
                    <Button size="sm" variant="outline" className="border-primary/30 hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      عرض التفاصيل
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;