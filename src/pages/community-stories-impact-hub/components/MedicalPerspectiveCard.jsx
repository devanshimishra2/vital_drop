import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MedicalPerspectiveCard = ({ perspective, onReadMore }) => {
  return (
    <div className="bg-white rounded-xl shadow-brand p-6 card-morph">
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={perspective?.doctor?.avatar}
            alt={perspective?.doctor?.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-semibold text-text-primary">{perspective?.doctor?.name}</h4>
            <div className="w-2 h-2 bg-success-green rounded-full"></div>
            <span className="text-sm text-success-green font-medium">Verified</span>
          </div>
          
          <p className="text-sm text-text-secondary mb-1">{perspective?.doctor?.title}</p>
          <p className="text-sm text-text-secondary mb-4">{perspective?.doctor?.hospital}</p>
          
          <div className="flex items-center space-x-4 text-xs text-text-secondary mb-4">
            <div className="flex items-center space-x-1">
              <Icon name="Award" size={12} />
              <span>{perspective?.doctor?.experience} years experience</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={12} />
              <span>{perspective?.doctor?.patientsHelped}+ patients helped</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-text-primary mb-3">{perspective?.title}</h3>
        <p className="text-text-secondary mb-4 line-clamp-3">{perspective?.content}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{perspective?.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={14} />
              <span>{perspective?.views} views</span>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => onReadMore(perspective)}
          >
            Read Full
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MedicalPerspectiveCard;