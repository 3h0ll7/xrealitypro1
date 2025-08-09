import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Clock } from "lucide-react";
import IOKnob from "@/components/IOKnob";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-dark-surface/30">
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
            <span className="hero-text">تواصل</span>{" "}
            <span className="text-foreground">معنا</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لمساعدتك في تحقيق رؤيتك البصرية. تواصل معنا اليوم
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-dark-elevated/50 backdrop-blur-sm border-border/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span>تواصل معنا</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  أملأ النموذج أدناه وسنتواصل معك خلال 24 ساعة
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        الاسم الكامل <span className="text-primary">*</span>
                      </label>
                      <Input 
                        placeholder="أدخل اسمك الكامل"
                        className="bg-dark-surface/50 border-border/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        رقم الهاتف <span className="text-primary">*</span>
                      </label>
                      <Input 
                        placeholder="مثال: +966 12 345 6789"
                        className="bg-dark-surface/50 border-border/30 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      البريد الإلكتروني <span className="text-primary">*</span>
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-dark-surface/50 border-border/30 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      نوع الخدمة المطلوبة <span className="text-primary">*</span>
                    </label>
                    <select className="w-full px-3 py-2 bg-dark-surface/50 border border-border/30 rounded-md focus:border-primary focus:outline-none text-foreground">
                      <option value="">اختر نوع الخدمة</option>
                      <option value="portrait">التصوير الشخصي</option>
                      <option value="wedding">تصوير حفلات الزفاف</option>
                      <option value="commercial">التصوير التجاري</option>
                      <option value="events">تصوير المناسبات</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      الرسالة <span className="text-primary">*</span>
                    </label>
                    <Textarea 
                      placeholder="أخبرنا بتفاصيل مشروعك..."
                      rows={5}
                      className="bg-dark-surface/50 border-border/30 focus:border-primary"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 gold-glow"
                    size="lg"
                  >
                    إرسال الطلب
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  title: "راسلنا",
                  content: "info@xreality.pro",
                  subtitle: "رد في أسرع وقت",
                  icon: Mail,
                  href: "mailto:info@xreality.pro"
                },
                {
                  title: "تابعنا على إنستغرام",
                  content: "@xreality.pro",
                  subtitle: "أحدث أعمالنا يوميًا",
                  icon: Instagram,
                  href: "https://www.instagram.com/xreality.pro?igsh=MWN0aWlseWYzcHk1bg=="
                }
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-dark-elevated/50 backdrop-blur-sm border-border/30 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                          <contact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{contact.title}</h4>
                          <a 
                            href={contact.href}
                            className="hero-text font-medium text-lg hover:underline"
                          >
                            {contact.content}
                          </a>
                          <p className="text-muted-foreground text-sm mt-1">
                            {contact.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Service Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                {/* Decorative background image */}
                <div aria-hidden="true" className="pointer-events-none absolute -right-8 -bottom-8 w-40 md:w-56 opacity-25">
                  <img
                    src="/lovable-uploads/cd255d73-6669-4097-871d-ff1306c0a083.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <CardContent className="relative z-10 p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <span>خدماتنا</span>
                    <div className="ml-auto rtl:mr-auto">
                      <IOKnob />
                    </div>
                  </h3>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold hero-text">لماذا تختار Xreality.pro؟</h4>
                    <div className="space-y-2">
                      {[
                        "نهتم بكل التفاصيل لضمان رضاكم التام",
                        "نعتمد بكل التفاصيل على أحدث التقنيات",
                        "خبرة واسعة والتميز الحديثة لضمان التقاط التصوير",
                        "نتبع جودة عالمية الجودة للعلامات التجارية",
                        "نستخدم احدث تقنيات التصوير في المجال"
                      ].map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span>{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;