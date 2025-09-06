import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, ChevronLeft, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

// Import generated images
import profilePhoto from '@/assets/profile-photo.jpg';
import photo1 from '@/assets/photo-1.jpg';
import photo2 from '@/assets/photo-2.jpg';
import rcPlane1 from '@/assets/rc-plane-1.jpg';
import pcbBoard1 from '@/assets/pcb-board-1.jpg';
import electronics2 from '@/assets/electronics-2.jpg';

const Index = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentElectronicsIndex, setCurrentElectronicsIndex] = useState(0);

  const photographyImages = [photo1, photo2];
  const electronicsImages = [pcbBoard1, electronics2];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photographyImages.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photographyImages.length) % photographyImages.length);
  };

  const nextElectronics = () => {
    setCurrentElectronicsIndex((prev) => (prev + 1) % electronicsImages.length);
  };

  const prevElectronics = () => {
    setCurrentElectronicsIndex((prev) => (prev - 1 + electronicsImages.length) % electronicsImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-swift">About</a>
            <a href="#photography" className="text-muted-foreground hover:text-foreground transition-swift">Photography</a>
            <a href="#hobbies" className="text-muted-foreground hover:text-foreground transition-swift">Hobbies</a>
            <a href="#electronics" className="text-muted-foreground hover:text-foreground transition-swift">Electronics</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-swift">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-spacing pt-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            <span className="text-foreground">Creative</span>
            <br />
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
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a multi-passionate creator who finds joy in capturing the world through photography, 
                exploring the skies with RC aircraft, and designing innovative electronic solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each pursuit feeds my curiosity and drives me to push creative boundaries, 
                whether it's finding the perfect shot, mastering aerobatics, or crafting precise circuit designs.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={profilePhoto} 
                  alt="Profile"
                  className="w-80 h-80 object-cover rounded-2xl shadow-elegant hover-lift"
                />
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

          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-elegant hover-glow">
              <div className="relative aspect-golden">
                <img 
                  src={photographyImages[currentPhotoIndex]} 
                  alt={`Photography ${currentPhotoIndex + 1}`}
                  className="w-full h-full object-cover transition-elegant"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Button 
                  variant="secondary" 
                  size="icon" 
                  onClick={prevPhoto}
                  className="bg-background/80 backdrop-blur-sm hover-lift"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Button 
                  variant="secondary" 
                  size="icon" 
                  onClick={nextPhoto}
                  className="bg-background/80 backdrop-blur-sm hover-lift"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <div className="text-center mt-8">
              <Button asChild className="hover-lift">
                <a href="https://flickr.com" target="_blank" rel="noopener noreferrer">
                  View Full Gallery on Flickr
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section - RC Aviation */}
      <section id="hobbies" className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-primary mb-golden-lg">RC Aviation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                There's nothing quite like the thrill of piloting remote control aircraft. 
                From precision aerobatics to smooth gliding, RC aviation combines technical skill 
                with the pure joy of flight.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each flight is an opportunity to push boundaries, whether mastering new maneuvers 
                or testing custom modifications. The sky is truly the limit.
              </p>
              <Button asChild className="hover-lift">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  Watch Flight Videos
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex justify-center">
              <Card className="overflow-hidden shadow-elegant hover-glow">
                <img 
                  src={rcPlane1} 
                  alt="RC Plane"
                  className="w-full aspect-golden object-cover"
                />
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

          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-elegant hover-glow">
              <div className="relative aspect-golden">
                <img 
                  src={electronicsImages[currentElectronicsIndex]} 
                  alt={`Electronics ${currentElectronicsIndex + 1}`}
                  className="w-full h-full object-cover transition-elegant"
                />
              </div>
              
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Button 
                  variant="secondary" 
                  size="icon" 
                  onClick={prevElectronics}
                  className="bg-background/80 backdrop-blur-sm hover-lift"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Button 
                  variant="secondary" 
                  size="icon" 
                  onClick={nextElectronics}
                  className="bg-background/80 backdrop-blur-sm hover-lift"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <div className="text-center mt-8">
              <Button asChild className="hover-lift">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View Projects on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-primary mb-8">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interested in collaborating or just want to chat about photography, RC aviation, or electronics? 
            I'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-lift shadow-elegant">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-muted-foreground">hello@portfolio.com</p>
            </Card>
            
            <Card className="p-8 hover-lift shadow-elegant">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </Card>
            
            <Card className="p-8 hover-lift shadow-elegant">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Location</h3>
              <p className="text-muted-foreground">Available Worldwide</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>&copy; 2024 Creative Portfolio. Crafted with passion and precision.</p>
      </footer>
    </div>
  );
};

export default Index;