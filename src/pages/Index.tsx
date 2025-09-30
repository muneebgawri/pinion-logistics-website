import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Clock,
  Shield,
  Users,
  Package,
  Zap,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  TrendingUp,
  Target,
  Award,
  Menu,
  X,
} from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-trucks.jpg";
import wheelWagonIcon from "@/assets/wheel-wagon.svg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const origin = formData.get("origin") as string;
    const destination = formData.get("destination") as string;
    const details = formData.get("details") as string;

    const subject = encodeURIComponent(`Quote Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nOrigin: ${origin}\nDestination: ${destination}\n\nLoad Details:\n${details}`
    );

    window.location.href = `mailto:office@atoblogistics.co?subject=${subject}&body=${body}`;
    
    toast.success("Opening your email client...");
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img src={wheelWagonIcon} alt="Wheel icon" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">AtoB Logistics</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Professional freight trucks on highway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Maximize Your Earnings, Minimize Your Risk
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Professional dispatching services that keep you moving forward with transparent, flexible, and reliable solutions.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-elegant"
          >
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About AtoB Logistics</h2>
            <p className="text-lg text-muted-foreground mb-6">
              AtoB Logistics specializes in professional dispatching services that maximize your earnings while minimizing risk.
              We're committed to transparency, flexibility, and reliability that keeps your operations moving forward.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is simple: provide you with consistent, high-paying loads while handling all the paperwork and administrative details.
              With our integrated approach to Sales, Operations, and Finance, we ensure every load contributes directly to your success.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 hover:border-accent transition-colors">
              <CardContent className="pt-8 pb-6">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground font-medium">On-Time Delivery</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-accent transition-colors">
              <CardContent className="pt-8 pb-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground font-medium">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-accent transition-colors">
              <CardContent className="pt-8 pb-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground font-medium">Clients Served</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Dispatching Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We've got you covered. Our dispatching solutions are designed to maximize your earnings while minimizing risk. 
              We provide transparent, flexible, and reliable services that keep you moving forward without hidden costs or forced commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-elegant transition-shadow border-2 hover:border-primary">
              <CardContent className="pt-8 pb-6">
                <TrendingUp className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3 text-primary">3–5 High-Paying Loads Every Week</h3>
                <p className="text-muted-foreground">
                  Consistent access to profitable freight opportunities that maximize your earning potential.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow border-2 hover:border-primary">
              <CardContent className="pt-8 pb-6">
                <CheckCircle2 className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3 text-primary">No Flat Fees</h3>
                <p className="text-muted-foreground">
                  Pay only a fair percentage, no hidden charges or upfront costs to worry about.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow border-2 hover:border-primary">
              <CardContent className="pt-8 pb-6">
                <Shield className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3 text-primary">Zero Risk</h3>
                <p className="text-muted-foreground">
                  No upfront investment or financial risk. Start earning without any initial capital requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow border-2 hover:border-primary">
              <CardContent className="pt-8 pb-6">
                <Clock className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3 text-primary">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock assistance to keep your operations running smoothly, whenever you need help.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow border-2 hover:border-primary">
              <CardContent className="pt-8 pb-6">
                <Target className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3 text-primary">Net 7 Payment Terms</h3>
                <p className="text-muted-foreground">
                  Quick, predictable payment cycles that keep your cash flow steady and reliable.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow border-2 hover:border-primary">
              <CardContent className="pt-8 pb-6">
                <Package className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3 text-primary">Full Paperwork Handling</h3>
                <p className="text-muted-foreground">
                  From load booking to payment processing, we take care of all the administrative details.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow border-2 hover:border-primary">
              <CardContent className="pt-8 pb-6">
                <Users className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3 text-primary">No Forced Dispatching</h3>
                <p className="text-muted-foreground">
                  You're always in control of which loads you accept. No pressure, no obligations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow border-2 hover:border-primary">
              <CardContent className="pt-8 pb-6">
                <Zap className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3 text-primary">No Contract Lock-In</h3>
                <p className="text-muted-foreground">
                  Work with us flexibly, without long-term binding commitments or restrictive agreements.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow border-2 hover:border-primary">
              <CardContent className="pt-8 pb-6">
                <Truck className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3 text-primary">Integrated Approach</h3>
                <p className="text-muted-foreground">
                  We integrate Sales, Operations, and Finance seamlessly to ensure every load contributes to your success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Why Choose AtoB?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We go beyond basic freight services to deliver exceptional value and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Transparency</h3>
              <p className="text-muted-foreground">
                Clear pricing and real-time tracking for complete visibility.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Nationwide Coverage</h3>
              <p className="text-muted-foreground">
                Extensive network reaching every corner of the country.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Safety & Compliance</h3>
              <p className="text-muted-foreground">
                Fully licensed, insured, and compliant with all regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Dedicated Support</h3>
              <p className="text-muted-foreground">
                24/7 customer service team ready to assist you anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it—hear from the businesses we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "AtoB Logistics has been our go-to freight partner for 3 years. Their reliability and
                  communication are unmatched. Highly recommended!"
                </p>
                <div>
                  <div className="font-bold text-foreground">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Supply Chain Manager, TechCorp</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "When we needed expedited delivery across the country, AtoB came through flawlessly.
                  Professional, fast, and affordable."
                </p>
                <div>
                  <div className="font-bold text-foreground">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">Operations Director, MediSupply Inc.</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Outstanding service from start to finish. AtoB handled our specialized equipment with
                  care and professionalism. Will use again!"
                </p>
                <div>
                  <div className="font-bold text-foreground">Emily Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Logistics Coordinator, BuildPro</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partner Logos Placeholder */}
          {/* <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-primary">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="text-4xl font-bold text-muted-foreground">PARTNER 1</div>
              <div className="text-4xl font-bold text-muted-foreground">PARTNER 2</div>
              <div className="text-4xl font-bold text-muted-foreground">PARTNER 3</div>
              <div className="text-4xl font-bold text-muted-foreground">PARTNER 4</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Cargo Delivered On Time, Every Time.
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied clients who trust AtoB Logistics for their freight needs.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-elegant"
          >
            Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact / Quote Form Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Ready to move your freight? Fill out the form below or contact us directly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Request a Quote</h3>
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Full Name *
                      </label>
                      <Input id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email Address *
                      </label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                        Phone Number *
                      </label>
                      <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>
                    <div>
                      <label htmlFor="origin" className="block text-sm font-medium mb-2 text-foreground">
                        Origin Location *
                      </label>
                      <Input id="origin" name="origin" placeholder="City, State" required />
                    </div>
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium mb-2 text-foreground">
                        Destination Location *
                      </label>
                      <Input id="destination" name="destination" placeholder="City, State" required />
                    </div>
                    <div>
                      <label htmlFor="details" className="block text-sm font-medium mb-2 text-foreground">
                        Load Details *
                      </label>
                      <Textarea
                        id="details"
                        name="details"
                        placeholder="Describe your freight (weight, dimensions, special requirements, etc.)"
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-foreground mb-1">Phone</div>
                          <a
                            href="tel:+19793151024"
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            979-315-1024
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-foreground mb-1">Email</div>
                          <a
                            href="mailto:office@atoblogistics.co"
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            office@atoblogistics.co
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-foreground mb-1">Headquarters</div>
                          <div className="text-muted-foreground">
                            7901 4TH ST N STE 300
                            <br />
                            St. Petersburg, FL 33702
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-foreground mb-1">Business Hours</div>
                          <div className="text-muted-foreground">
                            Monday - Sunday: 7:00 AM - 7:00 PM
                            <br />
                            24/7 Emergency Service Available
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Embed */}
                <Card className="border-2">
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.5875!2d-82.6773!3d27.7766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e1e4c4c4c4c5%3A0x1234567890abcdef!2s7901%204th%20St%20N%20STE%20300%2C%20St%20Petersburg%2C%20FL%2033702!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AtoB Logistics Office Location"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={wheelWagonIcon} alt="Wheel icon" className="h-8 w-8 invert" />
                <span className="text-xl font-bold">AtoB Logistics</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Your trusted partner for reliable freight and logistics solutions nationwide.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div>Dispatching Services</div>
                <div>High-Paying Loads</div>
                <div>24/7 Support</div>
                <div>Paperwork Handling</div>
                <div>Net 7 Payments</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex gap-4 mb-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-lg">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-lg">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Instagram"
                >
                  <span className="text-lg">ig</span>
                </a>
              </div>
              <p className="text-sm text-primary-foreground/80">
                <Phone className="inline h-4 w-4 mr-2" />
                979-315-1024
              </p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2025 AtoB Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
