import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const StorySubmissionModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    story: '',
    authorName: '',
    authorEmail: '',
    isAnonymous: false,
    allowContact: true
  });

  const categoryOptions = [
    { value: 'emergency', label: 'Emergency Save' },
    { value: 'donor', label: 'Regular Donor Journey' },
    { value: 'medical', label: 'Medical Breakthrough' },
    { value: 'community', label: 'Community Event' },
    { value: 'recovery', label: 'Recovery Story' }
  ];

  const handleSubmit = (e) => {
    e?.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      category: '',
      story: '',
      authorName: '',
      authorEmail: '',
      isAnonymous: false,
      allowContact: true
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-brand-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-border p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Share Your Story</h2>
              <p className="text-text-secondary">Help inspire others with your donation experience</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-surface rounded-lg transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Story Title"
              type="text"
              placeholder="Give your story a compelling title"
              value={formData?.title}
              onChange={(e) => handleChange('title', e?.target?.value)}
              required
            />
            
            <Select
              label="Story Category"
              options={categoryOptions}
              value={formData?.category}
              onChange={(value) => handleChange('category', value)}
              placeholder="Select category"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Your Story *
            </label>
            <textarea
              value={formData?.story}
              onChange={(e) => handleChange('story', e?.target?.value)}
              placeholder={`Share your experience... Here are some prompts to get you started:\n\n• What motivated you to donate?\n• How did the donation process go?\n• What impact did you see or hear about?\n• How did it make you feel?\n• What would you tell someone considering donation?`}
              rows={8}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-life-force focus:border-transparent resize-none"
              required
            />
            <p className="text-xs text-text-secondary mt-1">Minimum 100 words recommended</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Your Name"
              type="text"
              placeholder="Enter your full name"
              value={formData?.authorName}
              onChange={(e) => handleChange('authorName', e?.target?.value)}
              disabled={formData?.isAnonymous}
              required={!formData?.isAnonymous}
            />
            
            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              value={formData?.authorEmail}
              onChange={(e) => handleChange('authorEmail', e?.target?.value)}
              description="For verification and updates only"
              required
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="anonymous"
                checked={formData?.isAnonymous}
                onChange={(e) => handleChange('isAnonymous', e?.target?.checked)}
                className="mt-1 w-4 h-4 text-life-force border-border rounded focus:ring-life-force"
              />
              <div>
                <label htmlFor="anonymous" className="text-sm font-medium text-text-primary">
                  Publish anonymously
                </label>
                <p className="text-xs text-text-secondary">Your story will be shared without your name</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="contact"
                checked={formData?.allowContact}
                onChange={(e) => handleChange('allowContact', e?.target?.checked)}
                className="mt-1 w-4 h-4 text-life-force border-border rounded focus:ring-life-force"
              />
              <div>
                <label htmlFor="contact" className="text-sm font-medium text-text-primary">
                  Allow follow-up contact
                </label>
                <p className="text-xs text-text-secondary">We may reach out for additional details or media features</p>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={16} className="text-trust-blue mt-0.5" />
              <div className="text-sm text-text-secondary">
                <p className="font-medium text-text-primary mb-1">Review Process</p>
                <p>All stories are reviewed for authenticity and appropriateness before publication. This typically takes 2-3 business days. You'll receive an email confirmation once your story is live.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4 pt-4 border-t border-border">
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              iconName="Send"
              iconPosition="right"
            >
              Submit Story
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StorySubmissionModal;