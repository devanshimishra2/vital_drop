import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedStoryCard = ({ story, onReadMore }) => {
  return (
    <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden card-morph">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={story?.image}
          alt={story?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-life-force text-white">
            <Icon name="Heart" size={12} className="mr-1" />
            Featured Story
          </span>
        </div>
        {story?.hasVideo && (
          <div className="absolute top-4 right-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Icon name="Play" size={20} color="white" />
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={story?.author?.avatar}
              alt={story?.author?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-text-primary">{story?.author?.name}</h4>
            <p className="text-sm text-text-secondary">{story?.category}</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-text-primary mb-3 line-clamp-2">
          {story?.title}
        </h3>
        
        <p className="text-text-secondary mb-4 line-clamp-3">
          {story?.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{story?.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{story?.readTime} min read</span>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => onReadMore(story)}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStoryCard;