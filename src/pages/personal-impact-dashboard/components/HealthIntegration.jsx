import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HealthIntegration = () => {
  const [connectedApps, setConnectedApps] = useState([
    {
      id: 1,
      name: "Apple Health",
      icon: "Smartphone",
      connected: true,
      lastSync: "2025-01-11T14:30:00Z",
      dataTypes: ["Heart Rate", "Blood Pressure", "Sleep", "Activity"],
      status: "active"
    },
    {
      id: 2,
      name: "Fitbit",
      icon: "Watch",
      connected: true,
      lastSync: "2025-01-11T12:15:00Z",
      dataTypes: ["Steps", "Heart Rate", "Sleep Quality", "Stress"],
      status: "active"
    },
    {
      id: 3,
      name: "MyFitnessPal",
      icon: "Utensils",
      connected: false,
      lastSync: null,
      dataTypes: ["Nutrition", "Iron Intake", "Hydration", "Calories"],
      status: "available"
    }
  ]);

  const healthMetrics = {
    current: {
      heartRate: {
        value: 68,
        unit: "bpm",
        status: "excellent",
        trend: "stable",
        lastUpdated: "2025-01-11T14:30:00Z"
      },
      bloodPressure: {
        systolic: 118,
        diastolic: 76,
        status: "optimal",
        trend: "improving",
        lastUpdated: "2025-01-11T08:00:00Z"
      },
      ironLevel: {
        value: 14.2,
        unit: "g/dL",
        status: "excellent",
        trend: "stable",
        lastUpdated: "2025-01-10T10:00:00Z"
      },
      hydration: {
        value: 85,
        unit: "%",
        status: "good",
        trend: "improving",
        lastUpdated: "2025-01-11T16:00:00Z"
      },
      sleep: {
        value: 7.5,
        unit: "hours",
        status: "good",
        trend: "stable",
        lastUpdated: "2025-01-11T07:00:00Z"
      },
      activity: {
        value: 8500,
        unit: "steps",
        status: "active",
        trend: "increasing",
        lastUpdated: "2025-01-11T16:00:00Z"
      }
    },
    donationReadiness: {
      score: 92,
      status: "excellent",
      factors: [
        { name: "Iron Levels", score: 95, impact: "high" },
        { name: "Blood Pressure", score: 98, impact: "high" },
        { name: "Heart Rate", score: 90, impact: "medium" },
        { name: "Hydration", score: 85, impact: "medium" },
        { name: "Sleep Quality", score: 88, impact: "medium" },
        { name: "Recent Activity", score: 92, impact: "low" }
      ]
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-success-green bg-green-50 border-green-200';
      case 'optimal': return 'text-success-green bg-green-50 border-green-200';
      case 'good': return 'text-trust-blue bg-blue-50 border-blue-200';
      case 'active': return 'text-trust-blue bg-blue-50 border-blue-200';
      case 'fair': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'poor': return 'text-life-force bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return { icon: 'TrendingUp', color: 'text-success-green' };
      case 'increasing': return { icon: 'TrendingUp', color: 'text-success-green' };
      case 'stable': return { icon: 'Minus', color: 'text-trust-blue' };
      case 'declining': return { icon: 'TrendingDown', color: 'text-amber-600' };
      case 'decreasing': return { icon: 'TrendingDown', color: 'text-amber-600' };
      default: return { icon: 'Minus', color: 'text-gray-400' };
    }
  };

  const getReadinessScoreColor = (score) => {
    if (score >= 90) return 'text-success-green';
    if (score >= 75) return 'text-trust-blue';
    if (score >= 60) return 'text-amber-600';
    return 'text-life-force';
  };

  const handleConnectApp = (appId) => {
    // Mock connection functionality
    setConnectedApps(apps => 
      apps?.map(app => 
        app?.id === appId 
          ? { ...app, connected: true, status: 'active', lastSync: new Date()?.toISOString() }
          : app
      )
    );
    alert(`Connected to ${connectedApps?.find(app => app?.id === appId)?.name} successfully!`);
  };

  const handleDisconnectApp = (appId) => {
    if (confirm('Are you sure you want to disconnect this app?')) {
      setConnectedApps(apps => 
        apps?.map(app => 
          app?.id === appId 
            ? { ...app, connected: false, status: 'available', lastSync: null }
            : app
        )
      );
    }
  };

  const handleSyncNow = (appId) => {
    setConnectedApps(apps => 
      apps?.map(app => 
        app?.id === appId 
          ? { ...app, lastSync: new Date()?.toISOString() }
          : app
      )
    );
    alert('Sync completed successfully!');
  };

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-success-green rounded-lg flex items-center justify-center">
            <Icon name="Activity" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Health Integration</h2>
            <p className="text-text-secondary">Track wellness metrics for optimal donation readiness</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
          <span className="text-sm text-text-secondary">Live sync enabled</span>
        </div>
      </div>
      {/* Donation Readiness Score */}
      <div className="bg-gradient-to-r from-success-green/10 to-emerald-500/10 rounded-xl p-6 mb-8 border border-success-green/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Donation Readiness Score</h3>
            <p className="text-text-secondary text-sm">Based on your current health metrics</p>
          </div>
          <div className="text-right">
            <div className={`text-4xl font-bold ${getReadinessScoreColor(healthMetrics?.donationReadiness?.score)}`}>
              {healthMetrics?.donationReadiness?.score}
            </div>
            <p className="text-sm text-text-secondary">out of 100</p>
          </div>
        </div>

        {/* Readiness Factors */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {healthMetrics?.donationReadiness?.factors?.map((factor, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text-primary">{factor?.name}</span>
                <span className={`text-sm font-bold ${getReadinessScoreColor(factor?.score)}`}>
                  {factor?.score}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    factor?.score >= 90 ? 'bg-success-green' :
                    factor?.score >= 75 ? 'bg-trust-blue' :
                    factor?.score >= 60 ? 'bg-amber-500' : 'bg-life-force'
                  }`}
                  style={{ width: `${factor?.score}%` }}
                ></div>
              </div>
              <div className="mt-1 text-xs text-text-secondary">
                {factor?.impact?.charAt(0)?.toUpperCase() + factor?.impact?.slice(1)} impact
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Current Health Metrics */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-primary mb-6">Current Health Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Heart Rate */}
          <div className="bg-surface rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-life-force rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Heart Rate</h4>
                  <p className="text-xs text-text-secondary">Resting BPM</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">
                  {healthMetrics?.current?.heartRate?.value}
                </div>
                <p className="text-xs text-text-secondary">{healthMetrics?.current?.heartRate?.unit}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(healthMetrics?.current?.heartRate?.status)}`}>
                {healthMetrics?.current?.heartRate?.status?.charAt(0)?.toUpperCase() + healthMetrics?.current?.heartRate?.status?.slice(1)}
              </span>
              <div className="flex items-center space-x-1">
                <Icon 
                  name={getTrendIcon(healthMetrics?.current?.heartRate?.trend)?.icon} 
                  size={14} 
                  className={getTrendIcon(healthMetrics?.current?.heartRate?.trend)?.color}
                />
                <span className="text-xs text-text-secondary capitalize">{healthMetrics?.current?.heartRate?.trend}</span>
              </div>
            </div>
          </div>

          {/* Blood Pressure */}
          <div className="bg-surface rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-trust-blue rounded-lg flex items-center justify-center">
                  <Icon name="Activity" size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Blood Pressure</h4>
                  <p className="text-xs text-text-secondary">Systolic/Diastolic</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">
                  {healthMetrics?.current?.bloodPressure?.systolic}/{healthMetrics?.current?.bloodPressure?.diastolic}
                </div>
                <p className="text-xs text-text-secondary">mmHg</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(healthMetrics?.current?.bloodPressure?.status)}`}>
                {healthMetrics?.current?.bloodPressure?.status?.charAt(0)?.toUpperCase() + healthMetrics?.current?.bloodPressure?.status?.slice(1)}
              </span>
              <div className="flex items-center space-x-1">
                <Icon 
                  name={getTrendIcon(healthMetrics?.current?.bloodPressure?.trend)?.icon} 
                  size={14} 
                  className={getTrendIcon(healthMetrics?.current?.bloodPressure?.trend)?.color}
                />
                <span className="text-xs text-text-secondary capitalize">{healthMetrics?.current?.bloodPressure?.trend}</span>
              </div>
            </div>
          </div>

          {/* Iron Level */}
          <div className="bg-surface rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Iron Level</h4>
                  <p className="text-xs text-text-secondary">Hemoglobin</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">
                  {healthMetrics?.current?.ironLevel?.value}
                </div>
                <p className="text-xs text-text-secondary">{healthMetrics?.current?.ironLevel?.unit}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(healthMetrics?.current?.ironLevel?.status)}`}>
                {healthMetrics?.current?.ironLevel?.status?.charAt(0)?.toUpperCase() + healthMetrics?.current?.ironLevel?.status?.slice(1)}
              </span>
              <div className="flex items-center space-x-1">
                <Icon 
                  name={getTrendIcon(healthMetrics?.current?.ironLevel?.trend)?.icon} 
                  size={14} 
                  className={getTrendIcon(healthMetrics?.current?.ironLevel?.trend)?.color}
                />
                <span className="text-xs text-text-secondary capitalize">{healthMetrics?.current?.ironLevel?.trend}</span>
              </div>
            </div>
          </div>

          {/* Hydration */}
          <div className="bg-surface rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Icon name="Droplets" size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Hydration</h4>
                  <p className="text-xs text-text-secondary">Daily Goal</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">
                  {healthMetrics?.current?.hydration?.value}
                </div>
                <p className="text-xs text-text-secondary">{healthMetrics?.current?.hydration?.unit}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(healthMetrics?.current?.hydration?.status)}`}>
                {healthMetrics?.current?.hydration?.status?.charAt(0)?.toUpperCase() + healthMetrics?.current?.hydration?.status?.slice(1)}
              </span>
              <div className="flex items-center space-x-1">
                <Icon 
                  name={getTrendIcon(healthMetrics?.current?.hydration?.trend)?.icon} 
                  size={14} 
                  className={getTrendIcon(healthMetrics?.current?.hydration?.trend)?.color}
                />
                <span className="text-xs text-text-secondary capitalize">{healthMetrics?.current?.hydration?.trend}</span>
              </div>
            </div>
          </div>

          {/* Sleep */}
          <div className="bg-surface rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <Icon name="Moon" size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Sleep</h4>
                  <p className="text-xs text-text-secondary">Last Night</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">
                  {healthMetrics?.current?.sleep?.value}
                </div>
                <p className="text-xs text-text-secondary">{healthMetrics?.current?.sleep?.unit}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(healthMetrics?.current?.sleep?.status)}`}>
                {healthMetrics?.current?.sleep?.status?.charAt(0)?.toUpperCase() + healthMetrics?.current?.sleep?.status?.slice(1)}
              </span>
              <div className="flex items-center space-x-1">
                <Icon 
                  name={getTrendIcon(healthMetrics?.current?.sleep?.trend)?.icon} 
                  size={14} 
                  className={getTrendIcon(healthMetrics?.current?.sleep?.trend)?.color}
                />
                <span className="text-xs text-text-secondary capitalize">{healthMetrics?.current?.sleep?.trend}</span>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-surface rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Icon name="Footprints" size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Activity</h4>
                  <p className="text-xs text-text-secondary">Today's Steps</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">
                  {healthMetrics?.current?.activity?.value?.toLocaleString()}
                </div>
                <p className="text-xs text-text-secondary">{healthMetrics?.current?.activity?.unit}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(healthMetrics?.current?.activity?.status)}`}>
                {healthMetrics?.current?.activity?.status?.charAt(0)?.toUpperCase() + healthMetrics?.current?.activity?.status?.slice(1)}
              </span>
              <div className="flex items-center space-x-1">
                <Icon 
                  name={getTrendIcon(healthMetrics?.current?.activity?.trend)?.icon} 
                  size={14} 
                  className={getTrendIcon(healthMetrics?.current?.activity?.trend)?.color}
                />
                <span className="text-xs text-text-secondary capitalize">{healthMetrics?.current?.activity?.trend}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Connected Apps */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-6">Connected Health Apps</h3>
        <div className="space-y-4">
          {connectedApps?.map((app) => (
            <div key={app?.id} className="bg-surface rounded-xl p-6 border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    app?.connected ? 'bg-success-green' : 'bg-gray-400'
                  }`}>
                    <Icon name={app?.icon} size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{app?.name}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        app?.connected 
                          ? 'bg-success-green text-white' :'bg-gray-200 text-gray-600'
                      }`}>
                        {app?.connected ? 'Connected' : 'Available'}
                      </span>
                      {app?.lastSync && (
                        <span className="text-xs text-text-secondary">
                          Last sync: {new Date(app.lastSync)?.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-text-secondary">
                        Data types: {app?.dataTypes?.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {app?.connected ? (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="RefreshCw"
                        iconPosition="left"
                        onClick={() => handleSyncNow(app?.id)}
                      >
                        Sync Now
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="Unlink"
                        iconPosition="left"
                        onClick={() => handleDisconnectApp(app?.id)}
                        className="text-life-force hover:text-red-700"
                      >
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="default"
                      size="sm"
                      iconName="Link"
                      iconPosition="left"
                      onClick={() => handleConnectApp(app?.id)}
                    >
                      Connect
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Health Tips */}
      <div className="mt-8 bg-gradient-to-r from-trust-blue/10 to-success-green/10 rounded-xl p-6 border border-trust-blue/20">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-trust-blue to-success-green rounded-lg flex items-center justify-center">
            <Icon name="Lightbulb" size={24} color="white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-primary mb-2">Health Tips for Better Donations</h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>• Your metrics show excellent donation readiness - keep up the great work!</p>
              <p>• Consider increasing hydration 24 hours before your next donation</p>
              <p>• Your iron levels are optimal - maintain your current diet</p>
              <p>• Regular exercise is helping maintain excellent cardiovascular health</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthIntegration;