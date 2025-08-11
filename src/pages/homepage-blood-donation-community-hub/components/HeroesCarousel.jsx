import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroesCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroStories = [
    {
      id: 1,
      type: "donor",
      name: "Sarah Martinez",
      age: 34,
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      story: `I've been donating for 8 years now. Knowing that my blood helped save a child's life during emergency surgery makes every donation worth it.`,
      impact: "23 donations • 69 lives impacted",
      badge: "Gold Donor",
      badgeColor: "bg-yellow-500"
    },
    {
      id: 2,
      type: "recipient",
      name: "Michael Chen",
      age: 28,
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      story: `After my accident, I needed 12 units of blood. Thanks to donors like you, I'm here today, healthy and grateful for this second chance at life.`,
      impact: "Received 12 units • Full recovery",
      badge: "Survivor",
      badgeColor: "bg-success-green"
    },
    {
      id: 3,
      type: "donor",
      name: "Emily Rodriguez",
      age: 42,
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      story: `As a nurse, I see firsthand how blood donations save lives. I donate regularly and encourage my family to do the same. It's our way of giving back.`,
      impact: "31 donations • 93 lives impacted",
      badge: "Platinum Donor",
      badgeColor: "bg-gray-400"
    },
    {
      id: 4,
      type: "recipient",
      name: "David Thompson",
      age: 55,
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      story: `During my cancer treatment, I needed regular blood transfusions. The generosity of strangers kept me fighting. Now in remission, I'm forever grateful.`,
      impact: "Received 28 units • In remission",
      badge: "Fighter",
      badgeColor: "bg-purple-500"
    },
    {
      id: 5,
      type: "donor",
      name: "Jessica Park",
      age: 26,
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      story: `I started donating in college and haven't stopped. It's amazing how 30 minutes of my time can potentially save three lives. Everyone should try it!`,
      impact: "15 donations • 45 lives impacted",
      badge: "Rising Hero",
      badgeColor: "bg-trust-blue"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroStories?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroStories?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroStories?.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroStories?.length) % heroStories?.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleViewAllStories = () => {
    navigate('/community-stories-impact-hub');
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-impact text-text-primary font-bold">
            Heroes Among Us
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real stories from real people whose lives have been touched by the power of blood donation.
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-brand-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroStories?.map((story) => (
                <div key={story?.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center min-h-[400px]">
                    {/* Story Content */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className={`inline-flex items-center space-x-2 ${story?.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          <Icon 
                            name={story?.type === 'donor' ? 'Heart' : 'Shield'} 
                            size={14} 
                          />
                          <span>{story?.badge}</span>
                        </div>
                        <div className="text-sm text-text-secondary">
                          {story?.location}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-text-primary">
                          {story?.name}, {story?.age}
                        </h3>
                        
                        <blockquote className="text-lg text-text-secondary leading-relaxed italic">
                          "{story?.story}"
                        </blockquote>
                        
                        <div className="flex items-center space-x-2 text-sm font-medium text-life-force">
                          <Icon name="Award" size={16} />
                          <span>{story?.impact}</span>
                        </div>
                      </div>
                    </div>

                    {/* Story Image */}
                    <div className="relative">
                      <div className="relative w-full max-w-md mx-auto">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-brand-lg">
                          <Image
                            src={story?.image}
                            alt={`${story?.name} - ${story?.badge}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Floating Impact Badge */}
                        <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-brand-lg border border-gray-100">
                          <div className="flex items-center space-x-2">
                            <Icon 
                              name={story?.type === 'donor' ? 'Heart' : 'Shield'} 
                              size={20} 
                              className="text-life-force" 
                            />
                            <div className="text-sm">
                              <div className="font-bold text-text-primary">
                                {story?.type === 'donor' ? 'Donor' : 'Recipient'}
                              </div>
                              <div className="text-text-secondary">Hero</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-brand-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <Icon name="ChevronLeft" size={24} className="text-text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-brand-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <Icon name="ChevronRight" size={24} className="text-text-primary" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {heroStories?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-life-force scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="Users"
            iconPosition="left"
            className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white"
            onClick={handleViewAllStories}
          >
            View All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroesCarousel;