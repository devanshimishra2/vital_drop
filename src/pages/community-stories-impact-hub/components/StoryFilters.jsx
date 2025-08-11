import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryFilters = ({ activeFilter, onFilterChange, searchQuery, onSearchChange }) => {
  const filterCategories = [
    { id: 'all', label: 'All Stories', icon: 'Grid3X3', count: 156 },
    { id: 'emergency', label: 'Emergency Saves', icon: 'AlertTriangle', count: 23 },
    { id: 'donor', label: 'Donor Journeys', icon: 'Heart', count: 45 },
    { id: 'medical', label: 'Medical Breakthroughs', icon: 'Stethoscope', count: 18 },
    { id: 'community', label: 'Community Events', icon: 'Users', count: 34 },
    { id: 'recovery', label: 'Recovery Stories', icon: 'TrendingUp', count: 36 }
  ];

  const sortOptions = [
    { id: 'recent', label: 'Most Recent', icon: 'Clock' },
    { id: 'popular', label: 'Most Popular', icon: 'Heart' },
    { id: 'impact', label: 'Highest Impact', icon: 'TrendingUp' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-brand p-6 space-y-6">
      {/* Search */}
      <div className="relative">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
        />
        <input
          type="text"
          placeholder="Search stories..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-life-force focus:border-transparent"
        />
      </div>
      {/* Category Filters */}
      <div>
        <h4 className="font-semibold text-text-primary mb-3">Categories</h4>
        <div className="space-y-2">
          {filterCategories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => onFilterChange(category?.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                activeFilter === category?.id
                  ? 'bg-life-force text-white shadow-brand'
                  : 'hover:bg-surface text-text-primary'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon 
                  name={category?.icon} 
                  size={16} 
                  color={activeFilter === category?.id ? 'white' : 'currentColor'} 
                />
                <span className="font-medium">{category?.label}</span>
              </div>
              <span className={`text-sm px-2 py-1 rounded-full ${
                activeFilter === category?.id
                  ? 'bg-white/20 text-white' :'bg-surface text-text-secondary'
              }`}>
                {category?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Sort Options */}
      <div>
        <h4 className="font-semibold text-text-primary mb-3">Sort By</h4>
        <div className="space-y-2">
          {sortOptions?.map((option) => (
            <button
              key={option?.id}
              className="w-full flex items-center space-x-3 p-3 rounded-lg text-left hover:bg-surface transition-colors"
            >
              <Icon name={option?.icon} size={16} className="text-text-secondary" />
              <span className="font-medium text-text-primary">{option?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Quick Actions */}
      <div className="pt-4 border-t border-border space-y-3">
        <Button
          variant="outline"
          fullWidth
          iconName="Plus"
          iconPosition="left"
          className="justify-center"
        >
          Share Your Story
        </Button>
        
        <Button
          variant="ghost"
          fullWidth
          iconName="Bell"
          iconPosition="left"
          className="justify-center"
        >
          Story Notifications
        </Button>
      </div>
    </div>
  );
};

export default StoryFilters;