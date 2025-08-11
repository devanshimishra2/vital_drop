import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WelcomeScreen = ({ formData }) => {
  const navigate = useNavigate();
  const [isScheduling, setIsScheduling] = useState(false);

  const impactStats = {
    livesToSave: 12,
    donationsPerYear: 4,
    recipientTypes: ['Emergency patients', 'Surgery patients', 'Cancer patients']
  };

  const achievements = [
    {
      id: 'new_donor',
      title: 'New Donor',
      description: 'Welcome to the life-saving community',
      icon: 'Award',
      color: 'bg-life-force'
    },
    {
      id: 'first_step',
      title: 'First Step Hero',
      description: 'Completed registration process',
      icon: 'Star',
      color: 'bg-success-green'
    },
    {
      id: 'community_member',
      title: 'Community Member',
      description: 'Joined the Vital Drop family',
      icon: 'Users',
      color: 'bg-trust-blue'
    }
  ];

  const nextSteps = [
    {
      id: 'schedule',
      title: 'Schedule Your First Donation',
      description: 'Find a convenient time and location',
      icon: 'Calendar',
      action: () => navigate('/find-donation-centers-scheduling')
    },
    {
      id: 'prepare',
      title: 'Prepare for Donation',
      description: 'Learn what to expect and how to prepare',
      icon: 'BookOpen',
      action: () => window.open('https://www.redcross.org/give-blood/how-to-donate/how-blood-donations-help/blood-needs-blood-supply.html', '_blank')
    },
    {
      id: 'community',
      title: 'Join the Community',
      description: 'Connect with other donors and share stories',
      icon: 'MessageCircle',
      action: () => navigate('/community-stories-impact-hub')
    }
  ];

  const handleScheduleAppointment = () => {
    setIsScheduling(true);
    // Simulate scheduling process
    setTimeout(() => {
      navigate('/find-donation-centers-scheduling');
    }, 1000);
  };

  const handleAddToCalendar = () => {
    const event = {
      title: 'Blood Donation Reminder',
      start: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
      description: 'Time to schedule your first blood donation with Vital Drop!'
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event?.title)}&dates=${event?.start?.toISOString()?.replace(/[-:]/g, '')?.split('.')?.[0]}Z/${event?.start?.toISOString()?.replace(/[-:]/g, '')?.split('.')?.[0]}Z&details=${encodeURIComponent(event?.description)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-life-force to-cta-deep rounded-full mb-6 animate-pulse">
          <Icon name="Heart" size={40} color="white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Welcome to Vital Drop, {formData?.firstName}!
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Congratulations on taking the first step to become a life-saving hero. 
          Your generosity will make a profound difference in our community.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Impact Projection */}
        <div className="bg-gradient-to-br from-life-force to-cta-deep rounded-xl p-6 sm:p-8 text-white">
          <div className="flex items-center space-x-3 mb-6">
            <Icon name="TrendingUp" size={24} color="white" />
            <h2 className="text-xl font-bold">Your Potential Impact</h2>
          </div>
          
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{impactStats?.livesToSave}</div>
              <p className="text-white/90">Lives you could save annually</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{impactStats?.donationsPerYear}</div>
                <p className="text-white/80 text-sm">Donations per year</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3</div>
                <p className="text-white/80 text-sm">Lives per donation</p>
              </div>
            </div>
            
            <div>
              <p className="text-white/90 text-sm mb-2">Your donations will help:</p>
              <ul className="space-y-1">
                {impactStats?.recipientTypes?.map((type, index) => (
                  <li key={index} className="flex items-center space-x-2 text-white/80 text-sm">
                    <Icon name="Check" size={14} />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-brand-lg p-6 sm:p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Icon name="Trophy" size={24} color="#DC2626" />
            <h2 className="text-xl font-bold text-text-primary">Achievements Unlocked</h2>
          </div>
          
          <div className="space-y-4">
            {achievements?.map((achievement) => (
              <div key={achievement?.id} className="flex items-center space-x-4 p-4 bg-surface rounded-lg">
                <div className={`w-12 h-12 ${achievement?.color} rounded-full flex items-center justify-center`}>
                  <Icon name={achievement?.icon} size={20} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{achievement?.title}</h3>
                  <p className="text-sm text-text-secondary">{achievement?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Next Steps */}
      <div className="bg-white rounded-xl shadow-brand-lg p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold text-text-primary mb-6">What's Next?</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {nextSteps?.map((step, index) => (
            <button
              key={step?.id}
              onClick={step?.action}
              className="text-left p-4 border border-border rounded-lg hover:border-life-force hover:bg-red-50 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-life-force rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Icon name={step?.icon} size={20} color="white" />
                </div>
                <span className="text-sm font-medium text-life-force">Step {index + 1}</span>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{step?.title}</h3>
              <p className="text-sm text-text-secondary">{step?.description}</p>
            </button>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-surface to-white rounded-xl p-6 sm:p-8 text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Ready to Save Lives?</h2>
        <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
          Schedule your first donation appointment and join thousands of heroes making a difference every day.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="default"
            size="lg"
            onClick={handleScheduleAppointment}
            loading={isScheduling}
            iconName="Calendar"
            iconPosition="left"
            className="cta-magnetic emergency-pulse"
          >
            Schedule First Donation
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={handleAddToCalendar}
            iconName="CalendarPlus"
            iconPosition="left"
          >
            Add Reminder to Calendar
          </Button>
        </div>
        
        <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-text-secondary">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} />
            <span>45 minutes total time</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} />
            <span>100% safe process</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Heart" size={16} />
            <span>Save 3 lives</span>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className="mt-8 bg-white rounded-xl shadow-brand p-6 text-center">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
            alt="Dr. Sarah Chen"
            className="w-12 h-12 rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold text-text-primary">Dr. Sarah Chen</p>
            <p className="text-sm text-text-secondary">Blood Bank Director</p>
          </div>
        </div>
        <blockquote className="text-text-secondary italic">
          "Every new donor like {formData?.firstName} brings hope to patients in need. 
          Your decision to donate blood is truly a gift of life."
        </blockquote>
      </div>
    </div>
  );
};

export default WelcomeScreen;