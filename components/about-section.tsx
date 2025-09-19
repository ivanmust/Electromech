import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

const values = [
  "Sustainability: We are committed to promoting sustainable practices in the water and energy sectors, prioritizing solutions that minimize environmental impact and conserve resources for future generations.",
  "Innovation: We embrace a culture of continuous innovation, constantly seeking out new technologies, processes, and approaches to enhance the efficiency and effectiveness of our equipment and services.",
  "Integrity: We uphold the highest standards of integrity, honesty, and ethical behavior in all our interactions with customers, employees, partners, and stakeholders.",
  "Customer-Centric: We prioritize the needs of our customers and strive to exceed their expectations by delivering tailored solutions, prompt support, and exceptional service.",
  "Collaboration: We foster a collaborative environment, promoting teamwork and open communication both internally and externally, to achieve mutual success with our customers, partners, and suppliers.",
  "Reliability: We are dedicated to providing reliable and durable equipment that meets the highest quality standards, ensuring long-term performance and customer satisfaction.",
  "Social Responsibility: We actively engage in initiatives that contribute to the well-being of society, supporting community development, education, and access to clean water and energy.",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            About Electromech
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Leading Water Engineering Experts</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-5xl mx-auto leading-relaxed">
            We are a registered and recognized business specialized in providing comprehensive water engineering solutions and
            maintenance of engineering equipment. With over 11 years of experience, we excel in Water Pumps, Swimming Pools and Fountains, Water
            Treatment, Irrigation, Solar Equipment, and General Machinery including Generators, Pressure Washers, and Drilling Machines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader className="pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                To supply high-quality water and energy equipment, fostering a sustainable future through
                innovation, reliability, and exceptional customer service. We strive to be a trusted partner, delivering
                cutting-edge solutions that optimize resource usage and enhance the well-being of communities and businesses.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader className="pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                To be the leading provider of sustainable water and energy solutions in East Africa, empowering communities and
                industries with innovative technology and reliable service excellence.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader className="pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Our core values drive everything we do. We are committed to reliability, quality, safety, and excellence
                in every project, ensuring customer satisfaction and long-term partnerships.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-10 border border-primary/10">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground text-lg">The principles that guide our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-base leading-relaxed font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
