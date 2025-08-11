import React from 'react';
import Header from '../../components/ui/Header';
import ImpactHeroSection from './components/ImpactHeroSection';
import DonationTimeline from './components/DonationTimeline';
import AchievementBadges from './components/AchievementBadges';
import BloodJourneyMap from './components/BloodJourneyMap';
import UpcomingAppointments from './components/UpcomingAppointments';
import CommunityLeaderboard from './components/CommunityLeaderboard';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import HealthIntegration from './components/HealthIntegration';
import ReferralProgram from './components/ReferralProgram';

const PersonalImpactDashboard = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <ImpactHeroSection />
        
        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Row 1: Timeline and Achievements */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <DonationTimeline />
            <AchievementBadges />
          </div>
          
          {/* Row 2: Blood Journey Map */}
          <BloodJourneyMap />
          
          {/* Row 3: Appointments and Leaderboard */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <UpcomingAppointments />
            <CommunityLeaderboard />
          </div>
          
          {/* Row 4: Recommendations */}
          <PersonalizedRecommendations />
          
          {/* Row 5: Health Integration and Referral Program */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <HealthIntegration />
            <ReferralProgram />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-life-force to-cta-deep rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Vital Drop</h3>
                  <p className="text-white/80 text-sm">Save Lives Together</p>
                </div>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Connecting donors, recipients, and communities in a unified life-saving network. 
                Every drop counts, every donor matters.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="/find-donation-centers-scheduling" className="hover:text-white transition-colors">Find Centers</a></li>
                <li><a href="/emergency-response-center" className="hover:text-white transition-colors">Emergency Response</a></li>
                <li><a href="/community-stories-impact-hub" className="hover:text-white transition-colors">Impact Stories</a></li>
                <li><a href="/donor-registration-onboarding" className="hover:text-white transition-colors">Register</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4><ul className="space-y-2 text-sm text-white/70">
                <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 Vital Drop. All rights reserved. Saving lives, one donation at a time.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms</a>
              <a href="/accessibility" className="text-white/60 hover:text-white text-sm transition-colors">Accessibility</a>
              <div className="flex items-center space-x-3">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalImpactDashboard;