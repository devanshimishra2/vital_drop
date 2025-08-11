import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CommunityLeaderboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [showFullLeaderboard, setShowFullLeaderboard] = useState(false);

  const leaderboardData = {
    month: [
      {
        rank: 1,
        name: "Michael R.",
        donations: 3,
        points: 1250,
        badge: "Emergency Hero",
        isCurrentUser: false,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 2,
        name: "Jennifer L.",
        donations: 2,
        points: 980,
        badge: "Consistency Champion",
        isCurrentUser: false,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 3,
        name: "David K.",
        donations: 2,
        points: 875,
        badge: "Community Leader",
        isCurrentUser: false,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 4,
        name: "Lisa M.",
        donations: 2,
        points: 820,
        badge: "Gallon Club",
        isCurrentUser: false,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 5,
        name: "Robert T.",
        donations: 1,
        points: 750,
        badge: "Regular Donor",
        isCurrentUser: false,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 6,
        name: "Amanda S.",
        donations: 1,
        points: 680,
        badge: "First Timer",
        isCurrentUser: false,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 7,
        name: "You (Sarah)",
        donations: 1,
        points: 650,
        badge: "Gallon Club",
        isCurrentUser: true,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 8,
        name: "James W.",
        donations: 1,
        points: 620,
        badge: "New Hero",
        isCurrentUser: false,
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face"
      }
    ],
    year: [
      {
        rank: 1,
        name: "Michael R.",
        donations: 24,
        points: 12500,
        badge: "Platinum Hero",
        isCurrentUser: false,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 2,
        name: "Jennifer L.",
        donations: 20,
        points: 10800,
        badge: "Gold Champion",
        isCurrentUser: false,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 3,
        name: "You (Sarah)",
        donations: 16,
        points: 8750,
        badge: "Double Gallon Hero",
        isCurrentUser: true,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
      },
      {
        rank: 4,
        name: "David K.",
        donations: 15,
        points: 8200,
        badge: "Silver Star",
        isCurrentUser: false,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  };

  const currentData = leaderboardData?.[selectedPeriod];
  const currentUser = currentData?.find(user => user?.isCurrentUser);
  const displayData = showFullLeaderboard ? currentData : currentData?.slice(0, 5);

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return 'from-amber-400 to-yellow-500';
      case 2: return 'from-gray-300 to-gray-400';
      case 3: return 'from-amber-600 to-amber-700';
      default: return 'from-trust-blue to-blue-600';
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return 'Crown';
      case 2: return 'Medal';
      case 3: return 'Award';
      default: return 'User';
    }
  };

  const getBadgeColor = (badge) => {
    const colors = {
      'Emergency Hero': 'bg-red-100 text-red-700',
      'Consistency Champion': 'bg-green-100 text-green-700',
      'Community Leader': 'bg-blue-100 text-blue-700',
      'Gallon Club': 'bg-purple-100 text-purple-700',
      'Double Gallon Hero': 'bg-purple-100 text-purple-700',
      'Regular Donor': 'bg-gray-100 text-gray-700',
      'First Timer': 'bg-amber-100 text-amber-700',
      'New Hero': 'bg-cyan-100 text-cyan-700',
      'Platinum Hero': 'bg-gray-100 text-gray-800',
      'Gold Champion': 'bg-yellow-100 text-yellow-800',
      'Silver Star': 'bg-gray-100 text-gray-700'
    };
    return colors?.[badge] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
            <Icon name="Trophy" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Community Leaderboard</h2>
            <p className="text-text-secondary">See how you rank among local donors</p>
          </div>
        </div>
        
        {/* Period Selector */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-text-secondary">Period:</span>
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e?.target?.value)}
            className="bg-surface border border-border rounded-lg px-3 py-1 text-sm font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-trust-blue"
          >
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>
      {/* Current User Highlight */}
      {currentUser && (
        <div className="bg-gradient-to-r from-trust-blue/10 to-purple-500/10 rounded-xl p-6 mb-8 border border-trust-blue/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={currentUser?.avatar} 
                  alt="Your avatar"
                  className="w-16 h-16 rounded-full object-cover border-4 border-trust-blue"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-trust-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                  #{currentUser?.rank}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">Your Current Ranking</h3>
                <p className="text-text-secondary">
                  #{currentUser?.rank} out of {currentData?.length} donors in your area
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Icon name="Droplets" size={14} className="text-life-force" />
                    <span className="text-sm font-medium">{currentUser?.donations} donations</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-amber-500" />
                    <span className="text-sm font-medium">{currentUser?.points} points</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(currentUser?.badge)}`}>
                {currentUser?.badge}
              </span>
            </div>
          </div>
        </div>
      )}
      {/* Leaderboard List */}
      <div className="space-y-4">
        {displayData?.map((user, index) => (
          <div
            key={user?.rank}
            className={`relative bg-surface rounded-xl p-6 border-2 transition-all duration-300 ${
              user?.isCurrentUser 
                ? 'border-trust-blue shadow-brand-md bg-gradient-to-r from-trust-blue/5 to-purple-500/5' 
                : 'border-transparent hover:border-gray-200'
            }`}
          >
            {/* Rank Badge */}
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getRankColor(user?.rank)} flex items-center justify-center shadow-brand-md`}>
                {user?.rank <= 3 ? (
                  <Icon name={getRankIcon(user?.rank)} size={20} color="white" />
                ) : (
                  <span className="text-white font-bold text-sm">#{user?.rank}</span>
                )}
              </div>
            </div>

            {/* User Info */}
            <div className="ml-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={user?.avatar} 
                  alt={`${user?.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-brand"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className={`font-semibold ${user?.isCurrentUser ? 'text-trust-blue' : 'text-text-primary'}`}>
                      {user?.name}
                    </h3>
                    {user?.isCurrentUser && (
                      <span className="bg-trust-blue text-white text-xs px-2 py-1 rounded-full font-medium">
                        You
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1">
                      <Icon name="Droplets" size={14} className="text-life-force" />
                      <span className="text-sm text-text-secondary">
                        {user?.donations} donation{user?.donations !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-amber-500" />
                      <span className="text-sm text-text-secondary">{user?.points} pts</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="text-right">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(user?.badge)}`}>
                  {user?.badge}
                </span>
                {user?.rank <= 3 && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-1 text-xs text-text-secondary">
                      <Icon name="TrendingUp" size={12} />
                      <span>Top Performer</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Achievement Glow for Top 3 */}
            {user?.rank <= 3 && (
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-amber-500/5 to-transparent animate-pulse"></div>
            )}
          </div>
        ))}
      </div>
      {/* Show More/Less Button */}
      {currentData?.length > 5 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowFullLeaderboard(!showFullLeaderboard)}
            className="text-trust-blue hover:text-blue-700 font-medium text-sm transition-colors duration-200 flex items-center space-x-1 mx-auto"
          >
            <span>{showFullLeaderboard ? 'Show Less' : `Show All ${currentData?.length} Donors`}</span>
            <Icon name={showFullLeaderboard ? "ChevronUp" : "ChevronDown"} size={16} />
          </button>
        </div>
      )}
      {/* Competition Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <Icon name="Target" size={20} color="white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-600">
                {currentUser ? Math.max(0, currentUser?.rank - 1) : 0}
              </div>
              <div className="text-sm text-text-secondary">Ranks to climb</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-success-green/10 to-emerald-500/10 rounded-xl p-6 border border-success-green/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-success-green rounded-lg flex items-center justify-center">
              <Icon name="Users" size={20} color="white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-success-green">{currentData?.length}</div>
              <div className="text-sm text-text-secondary">Active donors</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-life-force/10 to-red-500/10 rounded-xl p-6 border border-life-force/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-life-force rounded-lg flex items-center justify-center">
              <Icon name="Heart" size={20} color="white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-life-force">
                {currentData?.reduce((sum, user) => sum + user?.donations, 0)}
              </div>
              <div className="text-sm text-text-secondary">Total donations</div>
            </div>
          </div>
        </div>
      </div>
      {/* Friendly Competition CTA */}
      <div className="mt-8 bg-gradient-to-r from-trust-blue to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Ready to Climb the Ranks?</h3>
            <p className="text-white/90 text-sm">
              Schedule your next donation and earn points to move up the leaderboard while saving lives!
            </p>
          </div>
          <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2 ml-6">
            <Icon name="Calendar" size={16} color="white" />
            <span className="font-medium">Schedule Donation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityLeaderboard;