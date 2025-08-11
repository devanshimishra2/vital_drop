import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterPanel = ({ 
  filters, 
  onFiltersChange, 
  onClearFilters, 
  isOpen, 
  onToggle 
}) => {
  const bloodTypeOptions = [
    { value: 'all', label: 'All Blood Types' },
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' }
  ];

  const sortOptions = [
    { value: 'distance', label: 'Distance' },
    { value: 'rating', label: 'Rating' },
    { value: 'waitTime', label: 'Wait Time' },
    { value: 'availability', label: 'Availability' }
  ];

  const handleFilterChange = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const activeFiltersCount = Object.values(filters)?.filter(value => {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') return value !== 'all' && value !== '';
    if (Array.isArray(value)) return value?.length > 0;
    return false;
  })?.length;

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          size="sm"
          iconName="Filter"
          iconPosition="left"
          onClick={onToggle}
          className="w-full justify-center"
        >
          Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </Button>
      </div>
      {/* Filter Panel */}
      <div className={`bg-white rounded-lg shadow-brand p-4 ${
        isOpen ? 'block' : 'hidden lg:block'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-text-primary">Filters</h3>
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-life-force hover:text-cta-deep"
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="space-y-4">
          {/* Sort By */}
          <div>
            <Select
              label="Sort By"
              options={sortOptions}
              value={filters?.sortBy}
              onChange={(value) => handleFilterChange('sortBy', value)}
              className="w-full"
            />
          </div>

          {/* Blood Type Filter */}
          <div>
            <Select
              label="Blood Type Needed"
              options={bloodTypeOptions}
              value={filters?.bloodType}
              onChange={(value) => handleFilterChange('bloodType', value)}
              className="w-full"
            />
          </div>

          {/* Availability Filters */}
          <div>
            <div className="text-sm font-medium text-text-primary mb-2">Availability</div>
            <div className="space-y-2">
              <Checkbox
                label="Open Now"
                checked={filters?.openNow}
                onChange={(e) => handleFilterChange('openNow', e?.target?.checked)}
              />
              <Checkbox
                label="Weekend Hours"
                checked={filters?.weekendHours}
                onChange={(e) => handleFilterChange('weekendHours', e?.target?.checked)}
              />
              <Checkbox
                label="Extended Hours"
                checked={filters?.extendedHours}
                onChange={(e) => handleFilterChange('extendedHours', e?.target?.checked)}
              />
            </div>
          </div>

          {/* Special Features */}
          <div>
            <div className="text-sm font-medium text-text-primary mb-2">Special Features</div>
            <div className="space-y-2">
              <Checkbox
                label="Mobile Drive"
                checked={filters?.mobileDrive}
                onChange={(e) => handleFilterChange('mobileDrive', e?.target?.checked)}
              />
              <Checkbox
                label="First-Time Donor Specialist"
                checked={filters?.firstTimeDonor}
                onChange={(e) => handleFilterChange('firstTimeDonor', e?.target?.checked)}
              />
              <Checkbox
                label="Wheelchair Accessible"
                checked={filters?.wheelchairAccessible}
                onChange={(e) => handleFilterChange('wheelchairAccessible', e?.target?.checked)}
              />
              <Checkbox
                label="Parking Available"
                checked={filters?.parkingAvailable}
                onChange={(e) => handleFilterChange('parkingAvailable', e?.target?.checked)}
              />
            </div>
          </div>

          {/* Inventory Level */}
          <div>
            <div className="text-sm font-medium text-text-primary mb-2">Inventory Level</div>
            <div className="space-y-2">
              <Checkbox
                label="Critical Need"
                checked={filters?.criticalNeed}
                onChange={(e) => handleFilterChange('criticalNeed', e?.target?.checked)}
              />
              <Checkbox
                label="Low Stock"
                checked={filters?.lowStock}
                onChange={(e) => handleFilterChange('lowStock', e?.target?.checked)}
              />
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <div className="text-sm font-medium text-text-primary mb-2">Minimum Rating</div>
            <div className="flex space-x-2">
              {[3, 4, 4.5]?.map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleFilterChange('minRating', rating)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm transition-colors ${
                    filters?.minRating === rating
                      ? 'bg-life-force text-white'
                      : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                  }`}
                >
                  <Icon name="Star" size={14} className="fill-current" />
                  <span>{rating}+</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Button (Mobile) */}
        <div className="lg:hidden mt-6">
          <Button
            variant="default"
            size="sm"
            fullWidth
            onClick={onToggle}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;