import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Zap, Users, Award, Shield, Headphones } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "فريق محترف",
      description: "فريق من المصورين المحترفين ذوي الخبرة الواسعة",
      icon: Users,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "خبرة واسعة",
      description: "أكثر من 10 سنوات في مجال التصوير الاحترافي",
      icon: Award,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "عملاء سعداء",
      description: "نهتم برضا عملائنا ونحرص على تحقيق توقعاتهم",
      icon: Shield,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "معداتنا المتطورة",
      description: "نستخدم أحدث معدات التصوير المتقدمة في السوق",
      icon: Camera,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "سرعة في التنفيذ",
      description: "نلتزم بالمواعيد المحددة ونحقق أفضل النتائج",
      icon: Zap,
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "دعم مستمر",
      description: "خدمة عملاء متاحة 24/7 لضمان رضاكم التام",
      icon: Headphones,
      color: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="features" className="py-20">
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
            <span className="text-foreground">من</span>{" "}
            <span className="hero-text">نحن</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مصورون محترفون نسعى لتقديم أفضل تجربة تصوير
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">قصتنا</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            بدأت <span className="hero-text font-semibold">Xreality.pro</span> كحلم بسيط لتوثيق اللحظات الجميلة وتحويلها إلى ذكريات خالدة. منذ انطلاقنا قبل أكثر من 10 أعوام، تحولنا إلى إحدى أهم شركات التصوير في المنطقة
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            نؤمن بأن كل صورة تحكي قصة، وكل لحظة تستحق أن تخلط بأجمل صورة. يجمع بين الخبرة الواسعة والتقنية الحديثة لضمان التقاط التصوير
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-dark-elevated/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-500 h-full group">
                <CardContent className="p-6 text-center">
                  {/* Icon with background */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Advanced Equipment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-dark-elevated/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="hero-text">معداتنا</span>{" "}
                <span className="text-foreground">المتطورة</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                نستخدم أحدث وأفضل معدات التصوير المتاحة في السوق، من كاميرات عالية الجودة إلى عدسات متخصصة وأنظمة إضاءة احترافية
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-dark-surface/50 rounded-lg">
                  <div className="text-xl font-bold hero-text">Sony A7R V</div>
                  <div className="text-sm text-muted-foreground">كاميرات احترافية</div>
                </div>
                <div className="text-center p-4 bg-dark-surface/50 rounded-lg">
                  <div className="text-xl font-bold hero-text">Canon R5</div>
                  <div className="text-sm text-muted-foreground">تقنيات متقدمة</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">مجموعة نامية من العدسات المتخصصة</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">أنظمة إضاءة احترافية متقدمة</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">طائرات مسيرة للتصوير الجوي</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-dark-surface/50 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/a365c107-ebe5-460e-90a9-685f8dbc1484.png"
                  alt="عرض صور فوتوغرافية"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;