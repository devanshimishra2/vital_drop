import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FeaturedStoryCard from './components/FeaturedStoryCard';
import StoryCard from './components/StoryCard';
import ImpactWall from './components/ImpactWall';
import StoryFilters from './components/StoryFilters';
import StorySubmissionModal from './components/StorySubmissionModal';
import MedicalPerspectiveCard from './components/MedicalPerspectiveCard';

const CommunityStoriesImpactHub = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock data for featured story
  const featuredStory = {
    id: 1,
    title: "From Critical Patient to Life Advocate: Sarah's Journey",
    excerpt: `Three years ago, I was the one lying in a hospital bed, desperately needing blood transfusions after a severe car accident. Today, I'm a regular donor who has given back over 15 times. The kindness of strangers saved my life, and now I'm determined to pay it forward. Every donation reminds me that we're all connected in this beautiful web of humanity.`,
    author: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    category: "Recovery Journey",
    date: "January 8, 2025",
    readTime: 5,
    image: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?w=800&h=600&fit=crop",
    hasVideo: true,
    likes: 234
  };

  // Mock data for stories
  const stories = [
    {
      id: 2,
      title: "Emergency Response: 24 Hours That Changed Everything",
      excerpt: `When the emergency alert came through at 2 AM, I didn't hesitate. A local family needed O-negative blood urgently, and I was one of the few compatible donors nearby. Racing to the hospital in the middle of the night, I felt like a real-life superhero.`,
      author: {
        name: "Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      category: "Emergency Save",
      date: "January 5, 2025",
      readTime: 3,
      image: "https://images.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg?w=400&h=300&fit=crop",
      hasVideo: false,
      likes: 189
    },
    {
      id: 3,
      title: "My 50th Donation: A Milestone of Giving",
      excerpt: `Today marks my 50th blood donation, and I couldn't be more proud. What started as a college requirement has become a lifelong commitment. Each donation represents hope, healing, and the incredible power of human generosity.`,
      author: {
        name: "Jennifer Chen",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      category: "Regular Donor",
      date: "January 3, 2025",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      hasVideo: false,
      likes: 156
    },
    {
      id: 4,
      title: "Medical Breakthrough: Rare Blood Type Saves Newborn",
      excerpt: `As someone with a rare blood type, I always knew my donations were special. But nothing prepared me for the call telling me my blood helped save a premature baby. Science and compassion came together to create a miracle.`,
      author: {
        name: "Dr. Amanda Foster",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
      },
      category: "Medical Breakthrough",
      date: "December 28, 2024",
      readTime: 6,
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?w=400&h=300&fit=crop",
      hasVideo: true,
      likes: 298
    },
    {
      id: 5,
      title: "Community Drive Success: 200 Donors in One Day",
      excerpt: `Our neighborhood organized the largest blood drive in the city's history. Seeing families, friends, and strangers come together for a common cause restored my faith in humanity. Together, we collected enough blood to help over 600 patients.`,
      author: {
        name: "Robert Thompson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      category: "Community Event",
      date: "December 25, 2024",
      readTime: 4,
      image: "https://images.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg?w=400&h=300&fit=crop",
      hasVideo: false,
      likes: 167
    },
    {
      id: 6,
      title: "From Fear to Courage: Overcoming Needle Phobia",
      excerpt: `I used to faint at the sight of needles. But when my sister needed blood during her cancer treatment, I knew I had to overcome my fear. Now I donate regularly and help other needle-phobic people find their courage too.`,
      author: {
        name: "Lisa Park",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      category: "Regular Donor",
      date: "December 22, 2024",
      readTime: 5,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      hasVideo: false,
      likes: 203
    },
    {
      id: 7,
      title: "Teenage Hero: High School Student Saves Three Lives",
      excerpt: `At 17, I became eligible to donate blood and immediately signed up. Little did I know that my first donation would help save three accident victims. Being called a hero at such a young age has shaped my entire perspective on giving back.`,
      author: {
        name: "Alex Johnson",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face"
      },
      category: "Emergency Save",
      date: "December 20, 2024",
      readTime: 3,
      image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?w=400&h=300&fit=crop",
      hasVideo: true,
      likes: 145
    }
  ];

  // Mock data for medical perspectives
  const medicalPerspectives = [
    {
      id: 1,
      title: "The Critical Importance of Regular Blood Donations",
      content: `As an emergency physician, I see firsthand how blood donations save lives every single day. From trauma patients to those undergoing surgery, having an adequate blood supply is literally the difference between life and death. Regular donors are the unsung heroes of modern medicine.`,
      doctor: {
        name: "Dr. Maria Santos",
        title: "Emergency Medicine Physician",
        hospital: "City General Hospital",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
        experience: 15,
        patientsHelped: 5000
      },
      date: "January 6, 2025",
      views: 1234
    },
    {
      id: 2,
      title: "Blood Type Compatibility: What Every Donor Should Know",
      content: `Understanding blood compatibility is crucial for both donors and recipients. O-negative donors are universal donors, but every blood type is valuable. AB-positive recipients can receive from anyone, making them universal recipients. Each donation has the potential to help multiple patients.`,
      doctor: {
        name: "Dr. James Wilson",
        title: "Hematologist",
        hospital: "Regional Medical Center",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
        experience: 22,
        patientsHelped: 8500
      },
      date: "January 4, 2025",
      views: 987
    }
  ];

  // Mock impact data
  const impactData = {
    totalDonations: 15847,
    livesSaved: 47541,
    activeDonors: 3256,
    locations: 89
  };

  const handleReadMore = (story) => {
    console.log('Reading more about:', story?.title);
  };

  const handleShare = (story) => {
    if (navigator.share) {
      navigator.share({
        title: story?.title,
        text: story?.excerpt,
        url: window.location?.href
      });
    } else {
      navigator.clipboard?.writeText(`${story?.title}\n\n${story?.excerpt}\n\n${window.location?.href}`);
    }
  };

  const handleStorySubmission = (formData) => {
    console.log('Story submitted:', formData);
    setIsSubmissionModalOpen(false);
    // Show success message
  };

  const filteredStories = stories?.filter(story => {
    const matchesFilter = activeFilter === 'all' || 
      (activeFilter === 'emergency' && story?.category === 'Emergency Save') ||
      (activeFilter === 'donor' && story?.category === 'Regular Donor') ||
      (activeFilter === 'medical' && story?.category === 'Medical Breakthrough') ||
      (activeFilter === 'community' && story?.category === 'Community Event') ||
      (activeFilter === 'recovery' && story?.category === 'Recovery Journey');
    
    const matchesSearch = story?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      story?.excerpt?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-life-force/5 to-trust-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-hero text-text-primary mb-6">
              Stories That <span className="text-life-force">Save Lives</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Discover the human impact behind every donation. Real stories from donors, recipients, 
              and medical professionals who make our life-saving community possible.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="Plus"
                iconPosition="left"
                className="cta-magnetic"
                onClick={() => setIsSubmissionModalOpen(true)}
              >
                Share Your Story
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Heart"
                iconPosition="left"
                onClick={() => navigate('/find-donation-centers-scheduling')}
              >
                Start Donating
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Story */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">Featured Story</h2>
              <p className="text-text-secondary">This month's inspiring spotlight</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Star" size={16} className="text-yellow-500" />
              <span>Editor's Choice</span>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FeaturedStoryCard 
              story={featuredStory} 
              onReadMore={handleReadMore}
            />
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <StoryFilters
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>

            {/* Stories Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-text-primary">
                  Community Stories ({filteredStories?.length})
                </h2>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Grid3X3"
                  >
                    Grid
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="List"
                  >
                    List
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                {filteredStories?.map((story) => (
                  <StoryCard
                    key={story?.id}
                    story={story}
                    onReadMore={handleReadMore}
                    onShare={handleShare}
                  />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <Button
                  variant="outline"
                  iconName="ChevronDown"
                  iconPosition="right"
                >
                  Load More Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Impact Wall */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Community Impact</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Together, we're creating ripples of hope that extend far beyond individual donations
            </p>
          </div>
          
          <ImpactWall impactData={impactData} />
        </div>
      </section>
      {/* Medical Perspectives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Medical Perspectives</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Expert insights from healthcare professionals on the front lines
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {medicalPerspectives?.map((perspective) => (
              <MedicalPerspectiveCard
                key={perspective?.id}
                perspective={perspective}
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-life-force to-cta-deep">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Story Could Save Lives
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Share your donation experience and inspire others to join our life-saving community
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="PenTool"
              iconPosition="left"
              onClick={() => setIsSubmissionModalOpen(true)}
            >
              Share Your Story
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Users"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-life-force"
              onClick={() => navigate('/homepage-blood-donation-community-hub')}
            >
              Join Community
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-life-force rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Vital Drop</h3>
                  <p className="text-sm text-gray-400">Save Lives Together</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Every story shared here represents hope, healing, and the incredible power of human generosity. 
                Together, we're building a community that saves lives one donation at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/find-donation-centers-scheduling" className="hover:text-white transition-colors">Find Centers</a></li>
                <li><a href="/personal-impact-dashboard" className="hover:text-white transition-colors">My Impact</a></li>
                <li><a href="/emergency-response-center" className="hover:text-white transition-colors">Emergency</a></li>
                <li><a href="/donor-registration-onboarding" className="hover:text-white transition-colors">Register</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date()?.getFullYear()} Vital Drop. All rights reserved. Saving lives through community.</p>
          </div>
        </div>
      </footer>
      {/* Story Submission Modal */}
      <StorySubmissionModal
        isOpen={isSubmissionModalOpen}
        onClose={() => setIsSubmissionModalOpen(false)}
        onSubmit={handleStorySubmission}
      />
    </div>
  );
};

export default CommunityStoriesImpactHub;