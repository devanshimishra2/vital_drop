import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PersonalizedRecommendations = () => {
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);

  const recommendations = [
    {
      id: 1,
      type: "optimal_timing",
      title: "Optimal Donation Timing",
      description: "Based on your health data and donation history",
      priority: "high",
      icon: "Clock",
      color: "from-trust-blue to-blue-600",
      bgColor: "bg-trust-blue/10",
      borderColor: "border-trust-blue/20",
      details: {
        recommendation: "Schedule your next donation for March 15-20, 2025",
        reasoning: [
          "Your iron levels are consistently highest mid-month",
          "You've shown best recovery rates when donating on weekdays",
          "Community need is typically higher during this period",
          "Your schedule shows availability during these dates"
        ],
        actionItems: [
          "Book appointment for March 17, 2025 at 10:30 AM",
          "Start iron-rich diet 3 days before donation",
          "Ensure 8+ hours sleep the night before"
        ],
        expectedOutcome: "Optimal donation experience with minimal side effects"
      }
    },
    {
      id: 2,
      type: "health_optimization",
      title: "Health Optimization Tips",
      description: "Personalized advice to improve your donation readiness",
      priority: "medium",
      icon: "Heart",
      color: "from-success-green to-emerald-600",
      bgColor: "bg-success-green/10",
      borderColor: "border-success-green/20",
      details: {
        recommendation: "Focus on iron and vitamin C intake",
        reasoning: [
          "Your recent iron levels (14.2 g/dL) are excellent but could be optimized",
          "Vitamin C enhances iron absorption by up to 300%",
          "Your donation recovery time could improve by 15%",
          "Consistent nutrition leads to better donation experiences"
        ],
        actionItems: [
          "Include citrus fruits with iron-rich meals",
          "Add spinach, lean red meat, or lentils to your diet",
          "Take vitamin C supplement 1 hour before iron-rich meals",
          "Avoid coffee/tea within 2 hours of iron-rich foods"
        ],
        expectedOutcome: "Improved iron levels and faster post-donation recovery"
      }
    },
    {
      id: 3,
      type: "community_impact",
      title: "Maximize Community Impact",
      description: "Opportunities to increase your local impact",
      priority: "high",
      icon: "Users",
      color: "from-life-force to-red-600",
      bgColor: "bg-life-force/10",
      borderColor: "border-life-force/20",
      details: {
        recommendation: "Consider platelet donation for cancer patients",
        reasoning: [
          "Local cancer center has 40% shortage of platelets",
          "Your blood type (O+) is in high demand for platelet donations",
          "Platelet donations can help 2-3 patients per session",
          "You\'re eligible every 7 days vs 56 days for whole blood"
        ],
        actionItems: [
          "Schedule platelet donation consultation",
          "Learn about the 90-minute platelet process",
          "Consider bi-weekly platelet donation schedule",
          "Join the Platelet Heroes program"
        ],
        expectedOutcome: "Help 6-8 additional patients per month"
      }
    },
    {
      id: 4,
      type: "achievement_progress",
      title: "Achievement Progress",
      description: "You\'re close to unlocking new badges",
      priority: "low",
      icon: "Award",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      details: {
        recommendation: "Complete 3 more referrals to earn Community Leader badge",
        reasoning: [
          "You currently have 7 successful referrals",
          "Community Leader badge awards 800 points",
          "Badge unlocks exclusive donor events and recognition",
          "Your referrals have a 85% conversion rate (above average)"
        ],
        actionItems: [
          "Share your donation story on social media",
          "Invite friends to join you for group donation",
          "Use the referral program in the app",
          "Participate in workplace donation drives"
        ],
        expectedOutcome: "Unlock Community Leader status and exclusive benefits"
      }
    },
    {
      id: 5,
      type: "emergency_readiness",
      title: "Emergency Response Readiness",
      description: "Be prepared for urgent community needs",
      priority: "medium",
      icon: "AlertTriangle",
      color: "from-red-500 to-red-700",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
      details: {
        recommendation: "Enable emergency notifications and maintain readiness",
        reasoning: [
          "Emergency blood needs increase 30% during winter months",
          "Your response time to emergencies is excellent (avg 4 hours)",
          "O+ blood type is needed in 85% of emergency situations",
          "Emergency donors save 40% more lives than regular donors"
        ],
        actionItems: [
          "Enable push notifications for emergency alerts",
          "Keep emergency contact info updated",
          "Maintain eligibility by following health guidelines",
          "Consider keeping emergency donation slot open monthly"
        ],
        expectedOutcome: "Be ready to respond to critical community needs"
      }
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-life-force text-white';
      case 'medium': return 'bg-amber-500 text-white';
      case 'low': return 'bg-gray-400 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return 'AlertCircle';
      case 'medium': return 'Info';
      case 'low': return 'CheckCircle';
      default: return 'Info';
    }
  };

  const handleActionClick = (action, recommendationId) => {
    // Mock action handling
    alert(`Action: "${action}" for recommendation ${recommendationId} - This would trigger the appropriate flow`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
            <Icon name="Lightbulb" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Personalized Recommendations</h2>
            <p className="text-text-secondary">AI-powered insights to optimize your donation impact</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
          <span className="text-sm text-text-secondary">Updated daily</span>
        </div>
      </div>
      {/* Recommendations Grid */}
      <div className="space-y-6">
        {recommendations?.map((rec) => (
          <div
            key={rec?.id}
            className={`relative rounded-xl border-2 transition-all duration-300 cursor-pointer ${
              selectedRecommendation === rec?.id 
                ? `${rec?.borderColor} shadow-brand-lg` 
                : 'border-transparent hover:border-gray-200'
            } ${rec?.bgColor}`}
          >
            {/* Main Card */}
            <div 
              className="p-6"
              onClick={() => setSelectedRecommendation(selectedRecommendation === rec?.id ? null : rec?.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${rec?.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={rec?.icon} size={24} color="white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-text-primary">{rec?.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec?.priority)}`}>
                        <Icon name={getPriorityIcon(rec?.priority)} size={10} className="inline mr-1" />
                        {rec?.priority?.charAt(0)?.toUpperCase() + rec?.priority?.slice(1)}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm mb-4">{rec?.description}</p>
                    
                    {/* Quick Preview */}
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="text-sm font-medium text-text-primary">{rec?.details?.recommendation}</p>
                    </div>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="ml-4">
                  <Icon 
                    name={selectedRecommendation === rec?.id ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-text-secondary" 
                  />
                </div>
              </div>
            </div>

            {/* Expanded Details */}
            {selectedRecommendation === rec?.id && (
              <div className="border-t border-white/50 p-6 bg-white/30">
                <div className="space-y-6">
                  {/* Reasoning */}
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center space-x-2">
                      <Icon name="Brain" size={18} className="text-purple-600" />
                      <span>Why This Recommendation?</span>
                    </h4>
                    <div className="space-y-2">
                      {rec?.details?.reasoning?.map((reason, index) => (
                        <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-3">
                          <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon name="Check" size={12} color="white" />
                          </div>
                          <span className="text-sm text-text-secondary">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Items */}
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center space-x-2">
                      <Icon name="CheckSquare" size={18} className="text-success-green" />
                      <span>Action Items</span>
                    </h4>
                    <div className="space-y-3">
                      {rec?.details?.actionItems?.map((action, index) => (
                        <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4 border border-border">
                          <div className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">{index + 1}</span>
                            </div>
                            <span className="text-sm text-text-secondary">{action}</span>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleActionClick(action, rec?.id)}
                            className="ml-4"
                          >
                            Take Action
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expected Outcome */}
                  <div className="bg-gradient-to-r from-success-green/10 to-emerald-500/10 rounded-lg p-4 border border-success-green/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-success-green rounded-lg flex items-center justify-center">
                        <Icon name="Target" size={20} color="white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-text-primary mb-1">Expected Outcome</h5>
                        <p className="text-sm text-text-secondary">{rec?.details?.expectedOutcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-white/50">
                    <Button
                      variant="default"
                      iconName="Play"
                      iconPosition="left"
                      onClick={() => handleActionClick('Start Implementation', rec?.id)}
                    >
                      Start Implementation
                    </Button>
                    <Button
                      variant="outline"
                      iconName="BookOpen"
                      iconPosition="left"
                      onClick={() => handleActionClick('Learn More', rec?.id)}
                    >
                      Learn More
                    </Button>
                    <Button
                      variant="ghost"
                      iconName="X"
                      iconPosition="left"
                      onClick={() => handleActionClick('Dismiss', rec?.id)}
                      className="text-text-secondary hover:text-text-primary"
                    >
                      Dismiss
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* AI Insights Summary */}
      <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Icon name="Brain" size={24} color="white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-primary mb-2">AI Insights Summary</h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>• Your donation patterns show 92% consistency - excellent for community planning</p>
              <p>• Health metrics indicate optimal donation readiness with room for minor improvements</p>
              <p>• Your referral success rate (85%) is significantly above average (62%)</p>
              <p>• Emergency response time ranks in top 15% of local donors</p>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success-green rounded-full"></div>
                <span className="text-sm font-medium text-success-green">Overall Health: Excellent</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-trust-blue rounded-full"></div>
                <span className="text-sm font-medium text-trust-blue">Impact Potential: High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feedback Section */}
      <div className="mt-6 text-center">
        <p className="text-sm text-text-secondary mb-3">How helpful are these recommendations?</p>
        <div className="flex items-center justify-center space-x-2">
          {[1, 2, 3, 4, 5]?.map((rating) => (
            <button
              key={rating}
              onClick={() => alert(`Rating ${rating} submitted - This would save feedback`)}
              className="w-8 h-8 rounded-full border-2 border-amber-300 hover:bg-amber-300 hover:text-white transition-colors duration-200 flex items-center justify-center"
            >
              <Icon name="Star" size={16} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;