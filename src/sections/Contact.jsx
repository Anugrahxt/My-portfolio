import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight
} from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "The fastest way to get a response. Let's chat about your business.",
    actionText: "Message on WhatsApp",
    href: "https://wa.me/918279431232", // Standard WhatsApp API link
    primary: true,
  },
  {
    icon: Phone,
    title: "Call Me",
    description: "Prefer to talk it out? Give me a ring during business hours.",
    actionText: "+91 82794-31232",
    href: "tel:+918279431232",
    primary: false,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Best for sending over documents, logos, or detailed project briefs.",
    actionText: "anugrah.tewari.in@gmail.com",
    href: "mailto:anugrah.tewari.in@gmail.com",
    primary: false,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's grow{" "}
            <span className="font-serif italic font-normal text-white">
              your business.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in animation-delay-200">
            Ready to upgrade your digital storefront? Reach out through any of the methods below, and let's discuss how we can bring more customers through your doors.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.href}
              target={method.icon === MessageCircle ? "_blank" : "_self"}
              rel="noreferrer"
              className={`group relative p-8 rounded-3xl transition-all duration-300 animate-fade-in
                ${
                  method.primary
                    ? "bg-primary/10 border-2 border-primary/30 hover:border-primary shadow-[0_0_30px_rgba(32,178,166,0.15)] hover:shadow-[0_0_40px_rgba(32,178,166,0.3)]"
                    : "glass border border-primary/10 hover:border-primary/30"
                }`}
              style={{ animationDelay: `${(idx + 1) * 150 + 200}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-colors
                  ${
                    method.primary
                      ? "bg-primary text-background"
                      : "bg-primary/10 text-primary group-hover:bg-primary/20"
                  }`}
              >
                <method.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
              <p className="text-muted-foreground mb-8 min-h-[48px]">
                {method.description}
              </p>
              
              <div className={`flex items-center gap-2 font-medium ${method.primary ? "text-primary" : "text-foreground"}`}>
                {method.actionText}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Location/Availability Banner */}
        <div className="mt-12 max-w-4xl mx-auto glass rounded-full p-2 pr-6 flex flex-col sm:flex-row items-center gap-4 border border-primary/20 animate-fade-in animation-delay-700">
          <div className="flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-medium">Dehradun, Uttarakhand</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 text-muted-foreground text-sm">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            Currently available for local coffee meetings & new projects
          </div>
        </div>
      </div>
    </section>
  );
};