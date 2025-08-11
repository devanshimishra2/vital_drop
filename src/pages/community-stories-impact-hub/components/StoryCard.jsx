import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StoryCard = ({ story, onReadMore, onShare }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      'Emergency Save': 'AlertTriangle',
      'Regular Donor': 'Heart',
      'Medical Breakthrough': 'Stethoscope',
      'Community Event': 'Users',
      'Recovery Journey': 'TrendingUp'
    };
    return icons?.[category] || 'FileText';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Emergency Save': 'bg-red-100 text-red-700',
      'Regular Donor': 'bg-blue-100 text-blue-700',
      'Medical Breakthrough': 'bg-green-100 text-green-700',
      'Community Event': 'bg-purple-100 text-purple-700',
      'Recovery Journey': 'bg-orange-100 text-orange-700'
    };
    return colors?.[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-xl shadow-brand overflow-hidden card-morph h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={story?.image}
          alt={story?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(story?.category)}`}>
            <Icon name={getCategoryIcon(story?.category)} size={10} className="mr-1" />
            {story?.category}
          </span>
        </div>
        {story?.hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Icon name="Play" size={24} color="white" />
            </div>
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={story?.author?.avatar}
              alt={story?.author?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-text-primary">{story?.author?.name}</p>
            <p className="text-xs text-text-secondary">{story?.date}</p>
          </div>
        </div>
        
        <h3 className="font-semibold text-text-primary mb-2 line-clamp-2 flex-shrink-0">
          {story?.title}
        </h3>
        
        <p className="text-sm text-text-secondary mb-4 line-clamp-3 flex-1">
          {story?.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center space-x-3 text-xs text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{story?.readTime}m</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Heart" size={12} />
              <span>{story?.likes}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onShare(story)}
              className="p-1 text-text-secondary hover:text-trust-blue transition-colors"
            >
              <Icon name="Share2" size={14} />
            </button>
            <Button
              variant="ghost"
              size="xs"
              onClick={() => onReadMore(story)}
            >
              Read
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;