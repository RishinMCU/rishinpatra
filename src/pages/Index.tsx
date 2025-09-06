import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, ChevronLeft, ChevronRight, Mail, MapPin, Phone, Linkedin, Menu, X } from 'lucide-react';
import { CatFace } from '@/components/CatFace';
import { useToast } from '@/hooks/use-toast';
import { externalLinks, linkText } from '@/config/links';

// Import generated images
import profilePhoto from '@/assets/profile-photo.jpg';
import photo1 from '@/assets/photography/photo-1.jpg';
import photo2 from '@/assets/photography/photo-2.jpg';
import photo3 from '@/assets/photography/photo-3.jpg';
import photo4 from '@/assets/photography/photo-4.jpg';
import photo5 from '@/assets/photography/photo-5.jpg';
import photo6 from '@/assets/photography/photo-6.jpg';
import photo7 from '@/assets/photography/photo-7.jpg';
import photo8 from '@/assets/photography/photo-8.jpg';
import photo9 from '@/assets/photography/photo-9.jpg';
import photo10 from '@/assets/photography/photo-10.jpg';
import photo11 from '@/assets/photography/photo-11.jpg';
import rcPlane1 from '@/assets/hobbies/rc-plane-1.jpg';
import hobby2 from '@/assets/hobbies/hobby-2.jpg';
import hobby3 from '@/assets/hobbies/hobby-3.jpg';
import pcbBoard1 from '@/assets/electronics/pcb-board-1.jpg';
import electronics2 from '@/assets/electronics/electronics-2.jpg';
import electronics3 from '@/assets/electronics/electronics-3.jpg';
const Index = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentElectronicsIndex, setCurrentElectronicsIndex] = useState(0);
  const [currentHobbyIndex, setCurrentHobbyIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    toast
  } = useToast();
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);
  const photographyImages = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11];
  const electronicsImages = [pcbBoard1, electronics2, electronics3];
  const hobbyImages = [rcPlane1, hobby2, hobby3];
  const nextPhoto = () => {
    setCurrentPhotoIndex(prev => (prev + 1) % photographyImages.length);
  };
  const prevPhoto = () => {
    setCurrentPhotoIndex(prev => (prev - 1 + photographyImages.length) % photographyImages.length);
  };
  const nextElectronics = () => {
    setCurrentElectronicsIndex(prev => (prev + 1) % electronicsImages.length);
  };
  const prevElectronics = () => {
    setCurrentElectronicsIndex(prev => (prev - 1 + electronicsImages.length) % electronicsImages.length);
  };
  const nextHobby = () => {
    setCurrentHobbyIndex(prev => (prev + 1) % hobbyImages.length);
  };
  const prevHobby = () => {
    setCurrentHobbyIndex(prev => (prev - 1 + hobbyImages.length) % hobbyImages.length);
  };
  return <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center space-x-8 text-base">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-swift whitespace-nowrap">About</a>
            <a href="#photography" className="text-muted-foreground hover:text-foreground transition-swift whitespace-nowrap">Photography</a>
            <a href="#hobbies" className="text-muted-foreground hover:text-foreground transition-swift whitespace-nowrap">Hobbies</a>
            <a href="#electronics" className="text-muted-foreground hover:text-foreground transition-swift whitespace-nowrap">Electronics</a>
            <a href={externalLinks.resume} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-swift whitespace-nowrap">{linkText.resume}</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-swift whitespace-nowrap">Contact</a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center relative z-50">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="text-muted-foreground hover:text-foreground relative z-50"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            
            <Button
              asChild
              variant="ghost"
              className="text-muted-foreground hover:text-foreground transition-swift text-sm font-medium relative z-50"
            >
              <a 
                href={externalLinks.resume} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {linkText.resume}
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Card */}
        <div className={`md:hidden fixed top-[73px] left-4 right-4 z-50 transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          <div className="bg-background border border-border rounded-xl shadow-2xl p-8">
            <div className="flex flex-col items-center space-y-6 text-xl">
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-foreground transition-swift cursor-pointer"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                About
              </a>
              <a 
                href="#photography" 
                className="text-muted-foreground hover:text-foreground transition-swift cursor-pointer"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('photography')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Photography
              </a>
              <a 
                href="#hobbies" 
                className="text-muted-foreground hover:text-foreground transition-swift cursor-pointer"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('hobbies')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Hobbies
              </a>
              <a 
                href="#electronics" 
                className="text-muted-foreground hover:text-foreground transition-swift cursor-pointer"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('electronics')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Electronics
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-foreground transition-swift cursor-pointer"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-spacing pt-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            <span className="text-primary font-medium">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about capturing moments, building dreams, and creating innovative solutions through photography, RC aviation, and electronics design.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-primary mb-golden-lg">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">I'm Rishin Patra, an electronics engineer and master's student at Michigan Technological University. My work revolves around designing embedded analog and digital circuits, RF systems, and custom PCBs. I enjoy taking an idea from schematic to prototype whether that's a low-power NFC sensor, a fault-simulating HVDC converter, or a battery management system for automotive applications.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                During my research at MTU, I've developed batteryless NFC-based sensors, designed HVDC systems, and contributed to battery 
                management systems at the Automotive Research Association of India. I work with platforms like KiCad, Altium, Cadence, 
                and embedded C/C++, bringing together hardware and software to create efficient, real-world solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">Beyond engineering, I channel my curiosity into mountain biking, go-kart racing, flying RC planes, and piloting FPV drones. I'm also passionate about photography and videography, experimenting with perspective and motion to capture the world from new angles. For me, engineering and photography are two sides of the same coin one builds the tools, the other uses them to reimagine the world.</p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img src={profilePhoto} alt="Profile" className="w-80 h-80 object-cover rounded-2xl shadow-elegant hover-lift" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section id="photography" className="section-spacing bg-gradient-accent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-primary mb-4">Photography</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capturing life's fleeting moments and the beauty that surrounds us
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Images on left - larger */}
            <div className="relative lg:col-span-2 mx-auto w-full max-w-full">
              <Card className="overflow-hidden shadow-elegant hover-glow">
                <div className="relative aspect-[4/3] sm:aspect-video min-h-60 sm:min-h-80">
                  <img src={photographyImages[currentPhotoIndex]} alt={`Photography ${currentPhotoIndex + 1}`} className="w-full h-full object-cover object-center transition-elegant" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="absolute top-1/2 left-1 sm:left-2 md:left-4 transform -translate-y-1/2">
                  <Button variant="secondary" size="icon" onClick={prevPhoto} className="bg-background/90 backdrop-blur-sm hover-lift w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10">
                    <ChevronLeft className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
                
                <div className="absolute top-1/2 right-1 sm:right-2 md:right-4 transform -translate-y-1/2">
                  <Button variant="secondary" size="icon" onClick={nextPhoto} className="bg-background/90 backdrop-blur-sm hover-lift w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10">
                    <ChevronRight className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Text content on right */}
            <div className="space-y-6 lg:col-span-1">
              <h3 className="text-2xl font-light text-primary mb-4">My Photography Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I capture the world through my GoPro, iPhone, and drone, experimenting with perspective and motion. 
                From aerial landscapes to trail adventures, each shot tells a unique story of exploration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My work focuses on finding beauty in movement and adventure, combining technology with creativity 
                to capture moments from unique angles and viewpoints that traditional photography can't reach.
              </p>
              <div className="pt-4">
                <Button asChild className="hover-lift">
                  <a href={externalLinks.flickr} target="_blank" rel="noopener noreferrer">
                    {linkText.flickr}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-primary mb-4">Hobbies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring passions that fuel creativity and technical innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Text content on left */}
            <div className="space-y-6 lg:col-span-1 order-2 lg:order-1">
              <h3 className="text-2xl font-light text-primary mb-4">RC Aviation & Outdoor Adventures</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I build and fly RC planes, pilot FPV drones, and race RC cars. These activities teach me precision, patience, 
                and the thrill of engineering in motion. From custom builds to mastering complex maneuvers, each project 
                combines technical skill with pure excitement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond RC hobbies, I enjoy hiking, mountain biking, go-kart racing, and amateur radio (ham radio). 
                These outdoor pursuits keep me energized and provide endless opportunities for adventure and learning.
              </p>
              <div className="pt-4">
                <Button asChild className="hover-lift">
                  <a href={externalLinks.youtube} target="_blank" rel="noopener noreferrer">
                    {linkText.youtube}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Images on right - larger */}
            <div className="relative lg:col-span-2 order-1 lg:order-2 mx-auto w-full max-w-full">
              <Card className="overflow-hidden shadow-elegant hover-glow">
                <div className="relative aspect-[4/3] sm:aspect-video min-h-60 sm:min-h-80">
                  <img src={hobbyImages[currentHobbyIndex]} alt={`Hobby ${currentHobbyIndex + 1}`} className="w-full h-full object-cover object-center transition-elegant" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="absolute top-1/2 left-1 sm:left-2 md:left-4 transform -translate-y-1/2">
                  <Button variant="secondary" size="icon" onClick={prevHobby} className="bg-background/90 backdrop-blur-sm hover-lift w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10">
                    <ChevronLeft className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
                
                <div className="absolute top-1/2 right-1 sm:right-2 md:right-4 transform -translate-y-1/2">
                  <Button variant="secondary" size="icon" onClick={nextHobby} className="bg-background/90 backdrop-blur-sm hover-lift w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10">
                    <ChevronRight className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Electronics Section */}
      <section id="electronics" className="section-spacing bg-gradient-accent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-primary mb-4">Electronics Design</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafting innovative circuits and PCB designs that bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Images on left - larger */}
            <div className="relative lg:col-span-2 mx-auto w-full max-w-full">
              <Card className="overflow-hidden shadow-elegant hover-glow">
                <div className="relative aspect-[4/3] sm:aspect-video min-h-60 sm:min-h-80">
                  <img src={electronicsImages[currentElectronicsIndex]} alt={`Electronics ${currentElectronicsIndex + 1}`} className="w-full h-full object-cover object-center transition-elegant" />
                </div>
                
                <div className="absolute top-1/2 left-1 sm:left-2 md:left-4 transform -translate-y-1/2">
                  <Button variant="secondary" size="icon" onClick={prevElectronics} className="bg-background/90 backdrop-blur-sm hover-lift w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10">
                    <ChevronLeft className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
                
                <div className="absolute top-1/2 right-1 sm:right-2 md:right-4 transform -translate-y-1/2">
                  <Button variant="secondary" size="icon" onClick={nextElectronics} className="bg-background/90 backdrop-blur-sm hover-lift w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10">
                    <ChevronRight className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Text content on right */}
            <div className="space-y-6 lg:col-span-1">
              <h3 className="text-2xl font-light text-primary mb-4">Circuit Design & PCB Development</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From schematic design to PCB layout, I create custom electronic solutions using KiCad and Altium Designer. 
                My focus is on efficient, reliable designs for embedded systems and IoT applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each project combines theoretical knowledge with practical implementation, 
                ensuring optimal performance and manufacturability in every design.
              </p>
              <div className="pt-4">
                <Button asChild className="hover-lift">
                  <a href={externalLinks.github} target="_blank" rel="noopener noreferrer">
                    {linkText.github}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <h2 className="text-4xl font-light text-primary">Get In Touch</h2>
            <CatFace className="animate-fade-in" />
          </div>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interested in collaborating or just want to chat about photography, RC aviation, or electronics? 
            I'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 hover-lift shadow-elegant cursor-pointer transition-all duration-200 hover:bg-accent/50" data-contact="email" onClick={async () => {
            if (isDesktop) {
              try {
                await navigator.clipboard.writeText(externalLinks.email);
                toast({
                  title: "Email copied!",
                  description: `${externalLinks.email} has been copied to clipboard`
                });
              } catch (err) {
                console.log('Fallback: Could not copy text');
              }
            } else {
              window.open(`mailto:${externalLinks.email}?subject=Hello&body=Hi there!`);
            }
          }}>
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-muted-foreground">rpatra@mtu.edu</p>
            </Card>
            
            <Card className="p-8 hover-lift shadow-elegant cursor-pointer transition-all duration-200 hover:bg-accent/50" data-contact="phone" onClick={async () => {
            try {
              await navigator.clipboard.writeText('+1 906 281 7933');
              toast({
                title: "Phone number copied!",
                description: "+1 906 281 7933 has been copied to clipboard"
              });
            } catch (err) {
              console.log('Fallback: Could not copy text');
            }
          }}>
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 906 281 7933</p>
            </Card>
            
            <Card className="p-8 hover-lift shadow-elegant cursor-pointer transition-all duration-200 hover:bg-accent/50" data-contact="location" onClick={() => {
            window.open('https://maps.google.com/?q=Houghton,Michigan', '_blank');
          }}>
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Location</h3>
              <p className="text-muted-foreground">Houghton, Michigan</p>
            </Card>
            
            <Card className="p-8 hover-lift shadow-elegant cursor-pointer transition-all duration-200 hover:bg-accent/50" onClick={() => {
            window.open(externalLinks.linkedin, '_blank');
          }}>
              <Linkedin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">LinkedIn</h3>
              <p className="text-muted-foreground">Connect with me</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>&copy; 2024 Creative Portfolio. Crafted with passion and precision.</p>
      </footer>
    </div>;
};
export default Index;