import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const EmergencyTestimonials = ({ testimonials }) => {
  return (
    <div className="bg-white rounded-lg shadow-brand-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-success-green rounded-lg flex items-center justify-center">
          <Icon name="Heart" size={24} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Lives Saved Through Emergency Response</h2>
          <p className="text-gray-600">Recent success stories from our emergency donation program</p>
        </div>
      </div>
      <div className="space-y-6">
        {testimonials?.map((testimonial) => (
          <div key={testimonial?.id} className="border border-gray-200 rounded-lg p-6 card-morph">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src={testimonial?.recipientPhoto}
                    alt={testimonial?.recipientName}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success-green rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial?.recipientName}</h3>
                    <p className="text-sm text-gray-600">{testimonial?.condition}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-life-force">{testimonial?.bloodType}</div>
                    <div className="text-xs text-gray-500">{testimonial?.timeAgo}</div>
                  </div>
                </div>

                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial?.story}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{testimonial?.hospital}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>Response time: {testimonial?.responseTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-medium text-success-green">
                      {testimonial?.donorsHelped} donors responded
                    </div>
                    <Icon name="Users" size={16} color="#10B981" />
                  </div>
                </div>
              </div>
            </div>

            {/* Donor acknowledgment */}
            {testimonial?.donorMessage && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-start space-x-2">
                    <Icon name="MessageCircle" size={16} color="#6B7280" />
                    <div>
                      <p className="text-sm text-gray-700 italic">"{testimonial?.donorMessage}"</p>
                      <p className="text-xs text-gray-500 mt-1">- Anonymous Donor</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-4">
          Your emergency response could be the next life-saving story
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <Icon name="Shield" size={16} />
          <span>All emergency donations are processed with highest priority</span>
        </div>
      </div>
    </div>
  );
};

export default EmergencyTestimonials;