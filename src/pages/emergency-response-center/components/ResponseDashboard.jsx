import React from 'react';
import Icon from '../../../components/AppIcon';

const ResponseDashboard = ({ metrics }) => {
  const MetricCard = ({ icon, label, value, change, color = 'text-gray-900' }) => (
    <div className="bg-white rounded-lg shadow-brand p-6 card-morph">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            color?.includes('red') ? 'bg-red-100' :
            color?.includes('green') ? 'bg-green-100' :
            color?.includes('blue') ? 'bg-blue-100' :
            'bg-gray-100'
          }`}>
            <Icon 
              name={icon} 
              size={20} 
              color={
                color?.includes('red') ? '#DC2626' :
                color?.includes('green') ? '#059669' :
                color?.includes('blue') ? '#3B82F6' :
                '#6B7280'
              } 
            />
          </div>
          <div>
            <p className="text-sm text-gray-600">{label}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
          </div>
        </div>
        {change && (
          <div className={`text-sm font-medium ${
            change?.startsWith('+') ? 'text-green-600' : 'text-red-600'
          }`}>
            {change}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Emergency Response Dashboard</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>Live Updates</span>
        </div>
      </div>
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon="Users"
          label="Donors Mobilized"
          value={metrics?.donorsMobilized}
          change="+12 in last hour"
          color="text-blue-600"
        />
        <MetricCard
          icon="Calendar"
          label="Appointments Scheduled"
          value={metrics?.appointmentsScheduled}
          change="+8 in last hour"
          color="text-green-600"
        />
        <MetricCard
          icon="AlertTriangle"
          label="Active Alerts"
          value={metrics?.activeAlerts}
          change="-2 resolved"
          color="text-red-600"
        />
        <MetricCard
          icon="Clock"
          label="Avg Response Time"
          value={metrics?.avgResponseTime}
          change="-5 min improved"
          color="text-gray-900"
        />
      </div>
      {/* Real-time Activity Feed */}
      <div className="bg-white rounded-lg shadow-brand-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Real-Time Activity</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All Activity
          </button>
        </div>

        <div className="space-y-4">
          {metrics?.recentActivity?.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                activity?.type === 'donation' ? 'bg-green-100' :
                activity?.type === 'alert' ? 'bg-red-100' :
                activity?.type === 'response'? 'bg-blue-100' : 'bg-gray-100'
              }`}>
                <Icon 
                  name={
                    activity?.type === 'donation' ? 'Heart' :
                    activity?.type === 'alert' ? 'AlertTriangle' :
                    activity?.type === 'response'? 'Users' : 'Info'
                  } 
                  size={16} 
                  color={
                    activity?.type === 'donation' ? '#059669' :
                    activity?.type === 'alert' ? '#DC2626' :
                    activity?.type === 'response'? '#3B82F6' : '#6B7280'
                  }
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">{activity?.message}</p>
                <p className="text-xs text-gray-500">{activity?.timestamp}</p>
              </div>
              {activity?.location && (
                <div className="text-xs text-gray-500 flex items-center space-x-1">
                  <Icon name="MapPin" size={12} />
                  <span>{activity?.location}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Blood Type Status */}
      <div className="bg-white rounded-lg shadow-brand-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Blood Type Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {metrics?.bloodTypeStatus?.map((bloodType) => (
            <div key={bloodType?.type} className="text-center">
              <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-white ${
                bloodType?.status === 'critical' ? 'bg-red-600' :
                bloodType?.status === 'low' ? 'bg-orange-500' :
                bloodType?.status === 'stable'? 'bg-green-500' : 'bg-gray-400'
              }`}>
                {bloodType?.type}
              </div>
              <p className="text-xs text-gray-600">{bloodType?.units} units</p>
              <p className={`text-xs font-medium ${
                bloodType?.status === 'critical' ? 'text-red-600' :
                bloodType?.status === 'low' ? 'text-orange-600' :
                bloodType?.status === 'stable'? 'text-green-600' : 'text-gray-600'
              }`}>
                {bloodType?.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponseDashboard;