import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HospitalPartners = ({ partners }) => {
  return (
    <div className="bg-white rounded-lg shadow-brand-lg p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted Hospital Partners</h2>
        <p className="text-gray-600">
          Working with leading medical institutions to ensure rapid emergency response
        </p>
      </div>
      {/* Partner Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {partners?.map((partner) => (
          <div key={partner?.id} className="group">
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors trust-glow">
              <div className="aspect-square flex items-center justify-center mb-3">
                <Image
                  src={partner?.logo}
                  alt={`${partner?.name} logo`}
                  className="max-w-full max-h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 text-center">{partner?.name}</h3>
              <p className="text-xs text-gray-600 text-center mt-1">{partner?.location}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Medical Professional Endorsements */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Medical Professional Endorsements</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {partners?.slice(0, 2)?.map((partner) => (
            <div key={`endorsement-${partner?.id}`} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Image
                  src={partner?.doctorPhoto}
                  alt={partner?.doctorName}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <blockquote className="text-gray-700 mb-3 italic">
                    "{partner?.endorsement}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900">{partner?.doctorName}</p>
                    <p className="text-sm text-gray-600">{partner?.doctorTitle}</p>
                    <p className="text-sm text-gray-600">{partner?.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Partnership Stats */}
      <div className="border-t border-gray-200 pt-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-life-force rounded-lg mx-auto mb-3 flex items-center justify-center">
              <Icon name="Building2" size={24} color="white" />
            </div>
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Partner Hospitals</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-trust-blue rounded-lg mx-auto mb-3 flex items-center justify-center">
              <Icon name="Clock" size={24} color="white" />
            </div>
            <div className="text-2xl font-bold text-gray-900">&lt;15 min</div>
            <div className="text-sm text-gray-600">Avg Response Time</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-success-green rounded-lg mx-auto mb-3 flex items-center justify-center">
              <Icon name="Shield" size={24} color="white" />
            </div>
            <div className="text-2xl font-bold text-gray-900">99.8%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
      {/* Certification Badges */}
      <div className="border-t border-gray-200 pt-8 mt-8">
        <h4 className="text-sm font-semibold text-gray-900 mb-4 text-center">
          Certified & Compliant
        </h4>
        <div className="flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={20} color="#059669" />
            <span className="text-sm text-gray-600">HIPAA Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={20} color="#3B82F6" />
            <span className="text-sm text-gray-600">FDA Approved</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={20} color="#DC2626" />
            <span className="text-sm text-gray-600">Red Cross Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalPartners;