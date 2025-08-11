import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import DonorRegistrationOnboarding from './pages/donor-registration-onboarding';
import EmergencyResponseCenter from './pages/emergency-response-center';
import PersonalImpactDashboard from './pages/personal-impact-dashboard';
import CommunityStoriesImpactHub from './pages/community-stories-impact-hub';
import FindDonationCentersScheduling from './pages/find-donation-centers-scheduling';
import HomepageBloodDonationCommunityHub from './pages/homepage-blood-donation-community-hub';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<CommunityStoriesImpactHub />} />
        <Route path="/donor-registration-onboarding" element={<DonorRegistrationOnboarding />} />
        <Route path="/emergency-response-center" element={<EmergencyResponseCenter />} />
        <Route path="/personal-impact-dashboard" element={<PersonalImpactDashboard />} />
        <Route path="/community-stories-impact-hub" element={<CommunityStoriesImpactHub />} />
        <Route path="/find-donation-centers-scheduling" element={<FindDonationCentersScheduling />} />
        <Route path="/homepage-blood-donation-community-hub" element={<HomepageBloodDonationCommunityHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
