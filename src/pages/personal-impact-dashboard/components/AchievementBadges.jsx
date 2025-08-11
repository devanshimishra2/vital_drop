import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadges = () => {
  const [selectedBadge, setSelectedBadge] = useState(null);

  const achievements = [
    {
      id: 1,
      title: "First Donation Hero",
      description: "Completed your very first blood donation",
      icon: "Heart",
      color: "from-life-force to-red-700",
      textColor: "text-life-force",
      bgColor: "bg-life-force",
      earned: true,
      earnedDate: "2023-03-15",
      rarity: "Common",
      points: 100
    },
    {
      id: 2,
      title: "Gallon Club Member",
      description: "Donated over 1 gallon of life-saving blood",
      icon: "Award",
      color: "from-amber-500 to-orange-600",
      textColor: "text-amber-600",
      bgColor: "bg-amber-500",
      earned: true,
      earnedDate: "2024-08-20",
      rarity: "Rare",
      points: 500
    },
    {
      id: 3,
      title: "Emergency Responder",
      description: "Responded to 3+ emergency donation calls",
      icon: "Zap",
      color: "from-red-500 to-red-700",
      textColor: "text-red-600",
      bgColor: "bg-red-500",
      earned: true,
      earnedDate: "2024-11-10",
      rarity: "Epic",
      points: 750
    },
    {
      id: 4,
      title: "Consistency Champion",
      description: "Donated regularly for 12 consecutive months",
      icon: "Target",
      color: "from-success-green to-emerald-700",
      textColor: "text-success-green",
      bgColor: "bg-success-green",
      earned: true,
      earnedDate: "2024-12-15",
      rarity: "Rare",
      points: 600
    },
    {
      id: 5,
      title: "Community Leader",
      description: "Referred 10+ new donors to the program",
      icon: "Users",
      color: "from-trust-blue to-blue-700",
      textColor: "text-trust-blue",
      bgColor: "bg-trust-blue",
      earned: false,
      progress: 7,
      target: 10,
      rarity: "Epic",
      points: 800
    },
    {
      id: 6,
      title: "Double Gallon Hero",
      description: "Donated over 2 gallons of blood",
      icon: "Trophy",
      color: "from-purple-500 to-purple-700",
      textColor: "text-purple-600",
      bgColor: "bg-purple-500",
      earned: true,
      earnedDate: "2025-01-15",
      rarity: "Legendary",
      points: 1000,
      isNew: true
    },
    {
      id: 7,
      title: "Platelet Specialist",
      description: "Complete 5 platelet donations",
      icon: "Droplets",
      color: "from-cyan-500 to-cyan-700",
      textColor: "text-cyan-600",
      bgColor: "bg-cyan-500",
      earned: false,
      progress: 1,
      target: 5,
      rarity: "Rare",
      points: 400
    },
    {
      id: 8,
      title: "Health Guardian",
      description: "Maintain excellent health metrics for 6 months",
      icon: "Shield",
      color: "from-green-500 to-green-700",
      textColor: "text-green-600",
      bgColor: "bg-green-500",
      earned: false,
      progress: 4,
      target: 6,
      rarity: "Rare",
      points: 500
    }
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Common': return 'text-gray-600 bg-gray-100';
      case 'Rare': return 'text-blue-600 bg-blue-100';
      case 'Epic': return 'text-purple-600 bg-purple-100';
      case 'Legendary': return 'text-amber-600 bg-amber-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const totalPoints = achievements?.filter(a => a?.earned)?.reduce((sum, a) => sum + a?.points, 0);
  const earnedCount = achievements?.filter(a => a?.earned)?.length;

  const handleShare = (badge) => {
    // Mock share functionality
    const shareText = `I just earned the "${badge?.title}" badge on Vital Drop! 🏆 Join me in saving lives through blood donation. #VitalDrop #BloodDonation #SaveLives`;
    
    if (navigator.share) {
      navigator.share({
        title: `Achievement Unlocked: ${badge?.title}`,
        text: shareText,
        url: window.location?.href
      });
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard?.writeText(shareText);
      alert('Achievement shared to clipboard!');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
            <Icon name="Award" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Achievement Badges</h2>
            <p className="text-text-secondary">Celebrate your donation milestones</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-amber-600">{totalPoints}</div>
          <p className="text-sm text-text-secondary">Total Points</p>
        </div>
      </div>
      {/* Progress Summary */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-8 border border-amber-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Achievement Progress</h3>
            <p className="text-text-secondary">
              {earnedCount} of {achievements?.length} badges earned
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-amber-600">{Math.round((earnedCount / achievements?.length) * 100)}%</div>
            <p className="text-sm text-text-secondary">Complete</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-amber-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full transition-all duration-1000"
              style={{ width: `${(earnedCount / achievements?.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {achievements?.map((badge) => (
          <div
            key={badge?.id}
            className={`relative bg-surface rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer hover:shadow-brand-md ${
              badge?.earned 
                ? 'border-transparent hover:border-amber-300' :'border-dashed border-gray-300 opacity-60 hover:opacity-80'
            }`}
            onClick={() => setSelectedBadge(selectedBadge === badge?.id ? null : badge?.id)}
          >
            {/* New Badge Indicator */}
            {badge?.isNew && badge?.earned && (
              <div className="absolute -top-2 -right-2 bg-life-force text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                NEW!
              </div>
            )}

            {/* Badge Icon */}
            <div className="text-center mb-4">
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${
                badge?.earned 
                  ? `bg-gradient-to-br ${badge?.color} shadow-brand-md` 
                  : 'bg-gray-200'
              }`}>
                <Icon 
                  name={badge?.icon} 
                  size={28} 
                  color={badge?.earned ? "white" : "#9CA3AF"} 
                />
              </div>
              
              {/* Rarity Badge */}
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(badge?.rarity)}`}>
                {badge?.rarity}
              </span>
            </div>

            {/* Badge Info */}
            <div className="text-center">
              <h3 className={`font-semibold mb-2 ${badge?.earned ? 'text-text-primary' : 'text-gray-500'}`}>
                {badge?.title}
              </h3>
              <p className={`text-sm mb-3 ${badge?.earned ? 'text-text-secondary' : 'text-gray-400'}`}>
                {badge?.description}
              </p>

              {/* Progress Bar for Unearned Badges */}
              {!badge?.earned && badge?.progress !== undefined && (
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{badge?.progress}/{badge?.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-trust-blue to-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(badge?.progress / badge?.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Points */}
              <div className={`text-sm font-medium ${badge?.earned ? badge?.textColor : 'text-gray-400'}`}>
                {badge?.points} points
              </div>

              {/* Earned Date */}
              {badge?.earned && badge?.earnedDate && (
                <div className="text-xs text-text-secondary mt-2">
                  Earned {new Date(badge.earnedDate)?.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
              )}
            </div>

            {/* Expanded Details */}
            {selectedBadge === badge?.id && badge?.earned && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Achievement Date:</span>
                    <span className="font-medium text-text-primary">
                      {new Date(badge.earnedDate)?.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Points Earned:</span>
                    <span className="font-medium text-amber-600">+{badge?.points}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e?.stopPropagation();
                      handleShare(badge);
                    }}
                    className="w-full bg-gradient-to-r from-trust-blue to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Icon name="Share2" size={16} />
                    <span>Share Achievement</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Next Achievement Preview */}
      <div className="mt-8 bg-gradient-to-r from-trust-blue/5 to-purple-500/5 rounded-xl p-6 border border-trust-blue/20">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-trust-blue to-purple-500 rounded-lg flex items-center justify-center">
            <Icon name="Target" size={24} color="white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-primary mb-1">Next Achievement</h3>
            <p className="text-text-secondary text-sm mb-2">
              You're close to earning the "Community Leader" badge! Refer 3 more donors to unlock it.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-trust-blue to-purple-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <span className="text-sm font-medium text-trust-blue">7/10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementBadges;