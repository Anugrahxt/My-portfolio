import { Zap, Handshake, LayoutDashboard, Target } from "lucide-react"; // Swapped icons to match business benefits

const highlights = [
  {
    icon: LayoutDashboard,
    title: "Custom Design",
    description:
      "Crafting unique, mobile-friendly websites that perfectly match your brand's personality.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Optimizing every page to load instantly, keeping your visitors engaged and reducing bounce rates.",
  },
  {
    icon: Target,
    title: "Conversion Focused",
    description: "Designing strategic layouts that turn casual website visitors into paying customers.",
  },
  {
    icon: Handshake,
    title: "Reliable Support",
    description:
      "Working closely with you every step of the way, even after the website goes live.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Helping local businesses,
              <span className="font-serif italic font-normal text-white">
                {" "}
                stand out online.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Anugrah, a web developer right in Dehradun dedicated to helping local businesses thrive in the digital world. After building websites for over 10 clients nation-wide, I know exactly what it takes to make a business look professional online.
              </p>
              <p>
                Whether you need a simple portfolio, a restaurant menu, or a fully functional booking system, I handle all the technical heavy lifting. My goal is to build a digital storefront that works as hard for your business as you do.
              </p>
              <p>
                I believe that a great website isn't just about looking good—it's about making it feel natural for your customers to find you, trust you, and reach out to you.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "What I want? Build beautiful, hassle-free websites that bring more customers through your doors."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};