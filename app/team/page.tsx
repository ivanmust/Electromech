import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, Award, Users, Clock } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "John Mwangi",
    position: "Managing Director",
    department: "Leadership",
    experience: "15+ years",
    email: "john@electromech.co.ke",
    phone: "+254 700 123 456",
    linkedin: "john-mwangi-electromech",
    image: "/placeholder-user.jpg",
    bio: "John leads our strategic vision and has been instrumental in expanding Electromech's operations across East Africa. He holds a Master's in Engineering and has over 15 years of experience in water and energy solutions.",
    specialties: ["Strategic Planning", "Business Development", "Project Management"]
  },
  {
    name: "Sarah Wanjiku",
    position: "Head of Engineering",
    department: "Engineering",
    experience: "12+ years",
    email: "sarah@electromech.co.ke",
    phone: "+254 700 123 457",
    linkedin: "sarah-wanjiku-engineering",
    image: "/placeholder-user.jpg",
    bio: "Sarah oversees all technical operations and ensures the highest quality standards in our engineering solutions. She specializes in water treatment systems and renewable energy integration.",
    specialties: ["Water Treatment", "Renewable Energy", "System Design"]
  },
  {
    name: "Michael Ochieng",
    position: "Senior Project Manager",
    department: "Project Management",
    experience: "10+ years",
    email: "michael@electromech.co.ke",
    phone: "+254 700 123 458",
    linkedin: "michael-ochieng-pm",
    image: "/placeholder-user.jpg",
    bio: "Michael manages our largest projects and ensures timely delivery while maintaining quality standards. He has successfully delivered over 200 projects across the region.",
    specialties: ["Project Management", "Client Relations", "Quality Assurance"]
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-success/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4 inline mr-2" />
              Our Team
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Meet Our <span className="text-accent">Expert Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty mb-8">
              Our dedicated professionals bring together decades of experience in water and energy solutions, 
              working tirelessly to deliver excellence across Africa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-xl">
                <Award className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-lg">15+ Years</h3>
                <p className="text-sm text-muted-foreground">Average Experience</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-xl">
                <Users className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold text-lg">3</h3>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-xl">
                <Clock className="w-8 h-8 text-success mb-2" />
                <h3 className="font-semibold text-lg">24/7</h3>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-white/90 font-medium">{member.position}</p>
                    <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
                      {member.department}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{member.experience} experience</span>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {member.bio}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-6 pt-0">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t space-y-2">
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <a href={`tel:${member.phone}`} className="text-primary hover:underline">
                          {member.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Linkedin className="w-4 h-4 text-muted-foreground" />
                        <a 
                          href={`https://linkedin.com/in/${member.linkedin}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your water and energy solutions needs. 
            Our expert team is ready to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="tel:+254700123456" 
              className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
