import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const partnerships = [
    {
      id: 1,
      name: "Austin Medical Center",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop",
      type: "Hospital Partner",
      description: "Leading trauma center"
    },
    {
      id: 2,
      name: "Texas Children\'s Hospital",
      logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=100&fit=crop",
      type: "Pediatric Partner",
      description: "Specialized pediatric care"
    },
    {
      id: 3,
      name: "American Red Cross",
      logo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=100&fit=crop",
      type: "National Partner",
      description: "Disaster response leader"
    },
    {
      id: 4,
      name: "MD Anderson Cancer Center",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop",
      type: "Research Partner",
      description: "Cancer treatment pioneer"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "FDA Approved",
      icon: "Shield",
      description: "Meets all federal safety standards",
      color: "success-green"
    },
    {
      id: 2,
      name: "AABB Certified",
      icon: "Award",
      description: "Blood banking excellence accreditation",
      color: "trust-blue"
    },
    {
      id: 3,
      name: "HIPAA Compliant",
      icon: "Lock",
      description: "Protected health information security",
      color: "life-force"
    },
    {
      id: 4,
      name: "ISO 9001",
      icon: "CheckCircle",
      description: "Quality management system certified",
      color: "success-green"
    }
  ];

  const mediaFeatures = [
    {
      id: 1,
      outlet: "Austin American-Statesman",
      headline: "Local Blood Drive Saves 200+ Lives",
      date: "January 8, 2025",
      type: "news"
    },
    {
      id: 2,
      outlet: "KXAN News",
      headline: "Vital Drop App Revolutionizes Blood Donation",
      date: "December 15, 2024",
      type: "tv"
    },
    {
      id: 3,
      outlet: "Texas Monthly",
      headline: "The Heroes Behind Austin\'s Blood Supply",
      date: "November 22, 2024",
      type: "magazine"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Williams",
      title: "Chief of Emergency Medicine",
      hospital: "Austin Medical Center",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      quote: "Vital Drop has transformed how we coordinate emergency blood needs. The real-time matching system has saved countless lives."
    },
    {
      id: 2,
      name: "Mark Johnson",
      title: "Blood Bank Director",
      hospital: "Texas Children\'s Hospital",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      quote: "The platform's efficiency in connecting donors with urgent needs is unmatched. It's become essential to our operations."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-impact text-text-primary font-bold">
            Trusted by Leading Healthcare Institutions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our commitment to safety, quality, and excellence is recognized by top medical organizations nationwide.
          </p>
        </div>

        {/* Hospital Partnerships */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-text-primary text-center mb-8">
            Hospital Partners
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {partnerships?.map((partner) => (
              <div
                key={partner?.id}
                className="bg-surface rounded-xl p-6 text-center hover:shadow-brand-lg transition-all duration-300 trust-glow"
              >
                <div className="w-full h-16 mb-4 rounded-lg overflow-hidden bg-white shadow-brand">
                  <Image
                    src={partner?.logo}
                    alt={`${partner?.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-text-primary mb-1">
                  {partner?.name}
                </h4>
                <p className="text-sm text-trust-blue font-medium mb-2">
                  {partner?.type}
                </p>
                <p className="text-xs text-text-secondary">
                  {partner?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-text-primary text-center mb-8">
            Safety & Quality Certifications
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications?.map((cert) => (
              <div
                key={cert?.id}
                className="bg-surface rounded-xl p-6 text-center hover:shadow-brand-lg transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-${cert?.color} rounded-xl mb-4`}>
                  <Icon name={cert?.icon} size={24} color="white" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">
                  {cert?.name}
                </h4>
                <p className="text-sm text-text-secondary">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Professional Testimonials */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-text-primary text-center mb-8">
            What Medical Professionals Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials?.map((testimonial) => (
              <div
                key={testimonial?.id}
                className="bg-surface rounded-xl p-6 hover:shadow-brand-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial?.image}
                      alt={testimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-text-secondary italic mb-4">
                      "{testimonial?.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-text-primary">
                        {testimonial?.name}
                      </div>
                      <div className="text-sm text-trust-blue">
                        {testimonial?.title}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {testimonial?.hospital}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-text-primary text-center mb-8">
            Recent Media Coverage
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mediaFeatures?.map((feature) => (
              <div
                key={feature?.id}
                className="bg-surface rounded-xl p-6 hover:shadow-brand-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <Icon 
                    name={feature?.type === 'tv' ? 'Tv' : feature?.type === 'magazine' ? 'BookOpen' : 'Newspaper'} 
                    size={20} 
                    className="text-trust-blue flex-shrink-0 mt-1" 
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-2 leading-tight">
                      {feature?.headline}
                    </h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-trust-blue font-medium">
                        {feature?.outlet}
                      </span>
                      <span className="text-text-secondary">
                        {feature?.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="bg-gradient-to-r from-life-force to-trust-blue rounded-2xl p-8 text-white text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-white/90">Partner Hospitals</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-white/90">Safety Record</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Emergency Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5★</div>
              <div className="text-white/90">Medical Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;