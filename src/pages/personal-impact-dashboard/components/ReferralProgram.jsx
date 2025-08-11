import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ReferralProgram = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showShareModal, setShowShareModal] = useState(false);

  const referralStats = {
    totalReferred: 12,
    successfulDonors: 7,
    pendingInvites: 3,
    totalImpact: 21,
    pointsEarned: 3500,
    currentStreak: 4,
    conversionRate: 58
  };

  const referralHistory = [
    {
      id: 1,
      name: "Jessica M.",
      email: "jessica.m@email.com",
      inviteDate: "2024-12-15",
      status: "active_donor",
      firstDonation: "2024-12-28",
      totalDonations: 2,
      pointsEarned: 500,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mark T.",
      email: "mark.t@email.com",
      inviteDate: "2024-11-20",
      status: "active_donor",
      firstDonation: "2024-12-05",
      totalDonations: 3,
      pointsEarned: 750,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sarah L.",
      email: "sarah.l@email.com",
      inviteDate: "2024-11-10",
      status: "registered",
      firstDonation: null,
      totalDonations: 0,
      pointsEarned: 100,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David R.",
      email: "david.r@email.com",
      inviteDate: "2024-10-25",
      status: "pending",
      firstDonation: null,
      totalDonations: 0,
      pointsEarned: 0,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Emily K.",
      email: "emily.k@email.com",
      inviteDate: "2024-10-15",
      status: "active_donor",
      firstDonation: "2024-11-02",
      totalDonations: 4,
      pointsEarned: 1000,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const rewards = [
    {
      id: 1,
      title: "First Referral Bonus",
      description: "Earn 250 points for your first successful referral",
      points: 250,
      requirement: "1 successful referral",
      earned: true,
      earnedDate: "2024-08-15"
    },
    {
      id: 2,
      title: "Community Builder",
      description: "Refer 5 people who become active donors",
      points: 1000,
      requirement: "5 active referrals",
      earned: true,
      earnedDate: "2024-11-20"
    },
    {
      id: 3,
      title: "Influence Master",
      description: "Refer 10 people who become active donors",
      points: 2500,
      requirement: "10 active referrals",
      earned: false,
      progress: 7,
      target: 10
    },
    {
      id: 4,
      title: "Life Network Leader",
      description: "Refer 20 people who become active donors",
      points: 5000,
      requirement: "20 active referrals",
      earned: false,
      progress: 7,
      target: 20
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active_donor': return 'bg-success-green text-white';
      case 'registered': return 'bg-trust-blue text-white';
      case 'pending': return 'bg-amber-500 text-white';
      case 'declined': return 'bg-gray-400 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active_donor': return 'CheckCircle';
      case 'registered': return 'UserCheck';
      case 'pending': return 'Clock';
      case 'declined': return 'XCircle';
      default: return 'User';
    }
  };

  const shareOptions = [
    {
      platform: 'email',
      name: 'Email',
      icon: 'Mail',
      color: 'bg-gray-600',
      message: `Hi! I've been donating blood with Vital Drop and it's been an amazing experience. Every donation can save up to 3 lives! Would you like to join me in making a difference? Use my referral link: https://vitaldrop.com/ref/sarah123`
    },
    {
      platform: 'sms',
      name: 'Text Message',
      icon: 'MessageSquare',
      color: 'bg-success-green',
      message: `Hey! I've been saving lives by donating blood with Vital Drop. Want to join me? Each donation helps up to 3 people! Check it out: https://vitaldrop.com/ref/sarah123`
    },
    {
      platform: 'facebook',name: 'Facebook',icon: 'Facebook',color: 'bg-blue-600',message: `I've been making a real difference by donating blood with Vital Drop! 🩸❤️ Every donation can save up to 3 lives. Join me in this life-saving mission! #BloodDonation #SaveLives https://vitaldrop.com/ref/sarah123`
    },
    {
      platform: 'twitter',
      name: 'Twitter',
      icon: 'Twitter',
      color: 'bg-sky-500',
      message: `Proud to be saving lives through @VitalDrop! 🩸 Each donation helps up to 3 people. Join me in making a difference! #BloodDonation #SaveLives https://vitaldrop.com/ref/sarah123`
    },
    {
      platform: 'whatsapp',
      name: 'WhatsApp',
      icon: 'MessageCircle',
      color: 'bg-green-600',
      message: `Hi! I've been donating blood with Vital Drop and it's incredibly rewarding. Every donation can save up to 3 lives! Want to join me? https://vitaldrop.com/ref/sarah123`
    },
    {
      platform: 'linkedin',
      name: 'LinkedIn',
      icon: 'Linkedin',
      color: 'bg-blue-700',
      message: `Proud to be part of the Vital Drop community, saving lives through blood donation. Each donation can impact up to 3 patients. Join me in making a difference in our community! https://vitaldrop.com/ref/sarah123`
    }
  ];

  const handleShare = (option) => {
    // Mock share functionality
    if (navigator.share && option?.platform === 'native') {
      navigator.share({
        title: 'Join me in saving lives with Vital Drop',
        text: option?.message,
        url: 'https://vitaldrop.com/ref/sarah123'
      });
    } else {
      // Copy to clipboard as fallback
      navigator.clipboard?.writeText(option?.message);
      alert(`${option?.name} message copied to clipboard!`);
    }
    setShowShareModal(false);
  };

  const handleSendInvite = (email) => {
    // Mock invite functionality
    alert(`Invitation sent to ${email} - This would send an actual invite`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
            <Icon name="Users" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Referral Program</h2>
            <p className="text-text-secondary">Invite friends and multiply your impact</p>
          </div>
        </div>
        <Button
          variant="default"
          iconName="Share2"
          iconPosition="left"
          onClick={() => setShowShareModal(true)}
        >
          Invite Friends
        </Button>
      </div>
      {/* Tab Navigation */}
      <div className="flex items-center space-x-1 mb-8 bg-surface rounded-lg p-1">
        {[
          { id: 'overview', label: 'Overview', icon: 'BarChart3' },
          { id: 'referrals', label: 'My Referrals', icon: 'Users' },
          { id: 'rewards', label: 'Rewards', icon: 'Award' }
        ]?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setSelectedTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedTab === tab?.id
                ? 'bg-white text-trust-blue shadow-brand'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Overview Tab */}
      {selectedTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={20} color="white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{referralStats?.totalReferred}</div>
                  <div className="text-sm text-text-secondary">Total Referred</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-success-green/10 to-emerald-500/10 rounded-xl p-6 border border-success-green/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-success-green rounded-lg flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} color="white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-success-green">{referralStats?.successfulDonors}</div>
                  <div className="text-sm text-text-secondary">Active Donors</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-life-force/10 to-red-500/10 rounded-xl p-6 border border-life-force/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-life-force rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={20} color="white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-life-force">{referralStats?.totalImpact}</div>
                  <div className="text-sm text-text-secondary">Lives Impacted</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <Icon name="Star" size={20} color="white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">{referralStats?.pointsEarned}</div>
                  <div className="text-sm text-text-secondary">Points Earned</div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-surface rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Conversion Rate</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-trust-blue">{referralStats?.conversionRate}%</span>
                <span className="text-sm text-text-secondary">Above average (45%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-trust-blue to-blue-600 h-3 rounded-full"
                  style={{ width: `${referralStats?.conversionRate}%` }}
                ></div>
              </div>
              <p className="text-sm text-text-secondary mt-2">
                {referralStats?.successfulDonors} out of {referralStats?.totalReferred} referrals became donors
              </p>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Current Streak</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-success-green">{referralStats?.currentStreak}</span>
                <span className="text-sm text-text-secondary">Consecutive months</span>
              </div>
              <div className="flex items-center space-x-2">
                {[...Array(6)]?.map((_, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index < referralStats?.currentStreak
                        ? 'bg-success-green text-white' :'bg-gray-200 text-gray-400'
                    }`}
                  >
                    <Icon name="Check" size={14} />
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-secondary mt-2">
                Keep referring to maintain your streak!
              </p>
            </div>
          </div>

          {/* Referral Link */}
          <div className="bg-gradient-to-r from-trust-blue/10 to-purple-500/10 rounded-xl p-6 border border-trust-blue/20">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Your Referral Link</h3>
            <div className="flex items-center space-x-3">
              <div className="flex-1 bg-white rounded-lg p-3 border border-border font-mono text-sm text-text-secondary">
                https://vitaldrop.com/ref/sarah123
              </div>
              <Button
                variant="outline"
                iconName="Copy"
                iconPosition="left"
                onClick={() => {
                  navigator.clipboard?.writeText('https://vitaldrop.com/ref/sarah123');
                  alert('Referral link copied to clipboard!');
                }}
              >
                Copy
              </Button>
              <Button
                variant="default"
                iconName="Share2"
                iconPosition="left"
                onClick={() => setShowShareModal(true)}
              >
                Share
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Referrals Tab */}
      {selectedTab === 'referrals' && (
        <div className="space-y-6">
          {referralHistory?.map((referral) => (
            <div key={referral?.id} className="bg-surface rounded-xl p-6 border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img 
                    src={referral?.avatar} 
                    alt={`${referral?.name} avatar`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-brand"
                  />
                  <div>
                    <h4 className="font-semibold text-text-primary">{referral?.name}</h4>
                    <p className="text-sm text-text-secondary">{referral?.email}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(referral?.status)}`}>
                        <Icon name={getStatusIcon(referral?.status)} size={10} className="inline mr-1" />
                        {referral?.status?.replace('_', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                      </span>
                      <span className="text-xs text-text-secondary">
                        Invited: {new Date(referral.inviteDate)?.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-bold text-amber-600">+{referral?.pointsEarned}</div>
                  <p className="text-sm text-text-secondary">points earned</p>
                  {referral?.totalDonations > 0 && (
                    <p className="text-xs text-text-secondary mt-1">
                      {referral?.totalDonations} donation{referral?.totalDonations !== 1 ? 's' : ''}
                    </p>
                  )}
                </div>
              </div>

              {referral?.status === 'pending' && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Send"
                      iconPosition="left"
                      onClick={() => handleSendInvite(referral?.email)}
                    >
                      Resend Invite
                    </Button>
                    <span className="text-sm text-text-secondary">
                      Invite sent {Math.floor((Date.now() - new Date(referral.inviteDate)?.getTime()) / (1000 * 60 * 60 * 24))} days ago
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {/* Rewards Tab */}
      {selectedTab === 'rewards' && (
        <div className="space-y-6">
          {rewards?.map((reward) => (
            <div key={reward?.id} className={`bg-surface rounded-xl p-6 border-2 ${
              reward?.earned ? 'border-success-green/30 bg-success-green/5' : 'border-border'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    reward?.earned ? 'bg-success-green' : 'bg-gray-400'
                  }`}>
                    <Icon name="Award" size={24} color="white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-1">{reward?.title}</h4>
                    <p className="text-sm text-text-secondary mb-3">{reward?.description}</p>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-amber-600">
                        +{reward?.points} points
                      </span>
                      <span className="text-sm text-text-secondary">
                        {reward?.requirement}
                      </span>
                    </div>
                    
                    {!reward?.earned && reward?.progress !== undefined && (
                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-text-secondary mb-1">
                          <span>Progress</span>
                          <span>{reward?.progress}/{reward?.target}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-trust-blue to-purple-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(reward?.progress / reward?.target) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="text-right">
                  {reward?.earned ? (
                    <div>
                      <div className="flex items-center space-x-2 text-success-green mb-1">
                        <Icon name="CheckCircle" size={16} />
                        <span className="text-sm font-medium">Earned</span>
                      </div>
                      <p className="text-xs text-text-secondary">
                        {new Date(reward.earnedDate)?.toLocaleDateString()}
                      </p>
                    </div>
                  ) : (
                    <div className="text-sm text-text-secondary">
                      {reward?.target - reward?.progress} more to go
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-text-primary">Share Your Referral Link</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            
            <div className="space-y-3">
              {shareOptions?.map((option) => (
                <button
                  key={option?.platform}
                  onClick={() => handleShare(option)}
                  className="w-full flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-surface transition-colors duration-200"
                >
                  <div className={`w-10 h-10 rounded-lg ${option?.color} flex items-center justify-center`}>
                    <Icon name={option?.icon} size={20} color="white" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-text-primary">{option?.name}</div>
                    <div className="text-sm text-text-secondary truncate">
                      {option?.message?.substring(0, 60)}...
                    </div>
                  </div>
                  <Icon name="ChevronRight" size={16} className="text-text-secondary" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferralProgram;