'use client';

import {
  fetchSkillsForPosition,
  getPositionSuggestions,
} from '@/lib/skillsApiClient';
import { useState } from 'react';

export default function ResumeBuilder() {
  const [activeSection, setActiveSection] = useState('personal');

  // Skills state
  const [position, setPosition] = useState('');
  const [positionSuggestions, setPositionSuggestions] = useState<string[]>([]);
  const [showPositionSuggestions, setShowPositionSuggestions] = useState(false);
  const [allAvailableSkills, setAllAvailableSkills] = useState<string[]>([]); // All skills from API
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]); // Currently displayed
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [customSkill, setCustomSkill] = useState('');
  const [customSkillSuggestions, setCustomSkillSuggestions] = useState<
    string[]
  >([]);
  const [showCustomSkillSuggestions, setShowCustomSkillSuggestions] =
    useState(false);
  const [isLoadingSkills, setIsLoadingSkills] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  // Handle position input change with autocomplete
  const handlePositionChange = async (value: string) => {
    setPosition(value);
    const suggestions = await getPositionSuggestions(value);
    console.log('Position suggestions for:', value, '→', suggestions);
    setPositionSuggestions(suggestions);
    setShowPositionSuggestions(suggestions.length > 0);
    setSelectedSuggestionIndex(-1); // Reset selection when typing
  };

  // Select position from suggestions
  const selectPosition = (selectedPosition: string) => {
    console.log('Selecting position:', selectedPosition);
    setPosition(selectedPosition);
    setShowPositionSuggestions(false);
    setSelectedSuggestionIndex(-1);
    handlePositionBlur(selectedPosition);
  };

  // Handle keyboard navigation
  const handlePositionKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showPositionSuggestions || positionSuggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestionIndex(prev =>
          prev < positionSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedSuggestionIndex >= 0) {
          selectPosition(positionSuggestions[selectedSuggestionIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setShowPositionSuggestions(false);
        setSelectedSuggestionIndex(-1);
        break;
    }
  };

  // Fetch skills when position is entered
  const handlePositionBlur = async (positionValue?: string) => {
    const targetPosition = positionValue || position;

    if (!targetPosition.trim()) {
      setSuggestedSkills([]);
      return;
    }

    // Delay to allow suggestion click
    setTimeout(() => {
      setShowPositionSuggestions(false);
    }, 200);

    setIsLoadingSkills(true);

    try {
      // Fetch skills from API
      const apiSkills = await fetchSkillsForPosition(targetPosition);

      if (apiSkills.length > 0) {
        setAllAvailableSkills(apiSkills);
        setSuggestedSkills(apiSkills.slice(0, 14)); // Show first 15
      } else {
        // No skills found for this position
        setAllAvailableSkills([]);
        setSuggestedSkills([]);
        console.warn(`No skills found for position: ${targetPosition}`);
      }
    } catch (error) {
      console.error('Error fetching skills:', error);
      setAllAvailableSkills([]);
      setSuggestedSkills([]);
    } finally {
      setIsLoadingSkills(false);
    }
  };

  // Toggle skill selection - add to selected and remove from suggestions
  const toggleSkill = (skill: string) => {
    console.log('Toggle skill:', skill);
    console.log('Current suggestedSkills:', suggestedSkills);
    console.log('Current selectedSkills:', selectedSkills);

    if (selectedSkills.includes(skill)) {
      // If already selected, remove it from selected
      const newSelected = selectedSkills.filter(s => s !== skill);
      setSelectedSkills(newSelected);
      console.log('Removed from selected, new selected:', newSelected);

      // Add it back to suggestions if not already there
      if (!suggestedSkills.includes(skill)) {
        const newSuggested = [...suggestedSkills, skill];
        setSuggestedSkills(newSuggested);
        console.log('Added back to suggestions:', newSuggested);
      }
    } else if (selectedSkills.length < 50) {
      // Add to selected
      const newSelected = [...selectedSkills, skill];
      setSelectedSkills(newSelected);
      console.log('Added to selected:', newSelected);

      // Find a replacement skill from allAvailableSkills
      const replacementSkill = allAvailableSkills.find(
        s => !newSelected.includes(s) && !suggestedSkills.includes(s)
      );

      if (replacementSkill) {
        // Replace the selected skill with a new one
        const newSuggested = suggestedSkills.map(s =>
          s === skill ? replacementSkill : s
        );
        setSuggestedSkills(newSuggested);
        console.log(
          'Replaced in suggestions with:',
          replacementSkill,
          'New suggested:',
          newSuggested
        );
      } else {
        // No replacement available, just remove it
        const newSuggested = suggestedSkills.filter(s => s !== skill);
        setSuggestedSkills(newSuggested);
        console.log(
          'No replacement, removed from suggestions, new suggested:',
          newSuggested
        );
      }
    }
  };

  // Handle custom skill input change with autocomplete
  const handleCustomSkillChange = (value: string) => {
    setCustomSkill(value);

    if (value.trim()) {
      // Filter from ALL available skills that aren't already selected
      const filtered = allAvailableSkills
        .filter(
          skill =>
            skill.toLowerCase().includes(value.toLowerCase()) &&
            !selectedSkills.includes(skill)
        )
        .slice(0, 10);
      setCustomSkillSuggestions(filtered);
      setShowCustomSkillSuggestions(filtered.length > 0);
    } else {
      setCustomSkillSuggestions([]);
      setShowCustomSkillSuggestions(false);
    }
  };

  // Select skill from custom skill suggestions
  const selectCustomSkill = (skill: string) => {
    if (selectedSkills.length < 50 && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setCustomSkill('');
      setShowCustomSkillSuggestions(false);
    }
  };

  // Add custom skill
  const addCustomSkill = () => {
    const trimmedSkill = customSkill.trim();
    if (
      trimmedSkill &&
      !selectedSkills.includes(trimmedSkill) &&
      selectedSkills.length < 50
    ) {
      setSelectedSkills([...selectedSkills, trimmedSkill]);
      setCustomSkill('');
      setShowCustomSkillSuggestions(false);
    }
  };

  // Handle Enter key for custom skill
  const handleCustomSkillKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCustomSkill();
    }
  };

  // Remove skill
  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#3b3be3] to-[#3b3be3] bg-clip-text text-transparent">
          Template Information
        </h1>
        <p className="page-subtitle">
          Create a professional template to complement your job applications
        </p>
      </div>

      <div className="resume-builder">
        <div className="builder-sidebar">
          <div
            className={`section-tab ${
              activeSection === 'personal' ? 'active' : ''
            }`}
            onClick={() => setActiveSection('personal')}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Personal Info
          </div>
          <div
            className={`section-tab ${
              activeSection === 'experience' ? 'active' : ''
            }`}
            onClick={() => setActiveSection('experience')}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Experience
          </div>
          <div
            className={`section-tab ${
              activeSection === 'education' ? 'active' : ''
            }`}
            onClick={() => setActiveSection('education')}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            Education
          </div>
          <div
            className={`section-tab ${
              activeSection === 'skills' ? 'active' : ''
            }`}
            onClick={() => setActiveSection('skills')}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Skills
          </div>
        </div>

        <div className="builder-content">
          <div className="content-card">
            <h2 className="section-title">
              {activeSection === 'personal' && 'Personal Information'}
              {activeSection === 'experience' && 'Work Experience'}
              {activeSection === 'education' && 'Education'}
              {activeSection === 'skills' && 'Skills & Expertise'}
            </h2>

            {activeSection === 'personal' && (
              <div className="form-section">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="+1 234 567 8900" />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input type="text" placeholder="City, Country" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Professional Summary</label>
                  <textarea
                    rows={4}
                    placeholder="Brief overview of your professional background..."
                  />
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="form-section">
                <p className="section-description">
                  Add your work experience, starting with the most recent
                  position.
                </p>
                <button className="btn btn-primary">+ Add Experience</button>
              </div>
            )}

            {activeSection === 'education' && (
              <div className="form-section">
                <p className="section-description">
                  Add your educational background and qualifications.
                </p>
                <button className="btn btn-primary">+ Add Education</button>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="form-section">
                <p className="section-description">
                  Enter your target position to get relevant skill suggestions,
                  or add custom skills.
                </p>

                <div className="form-group" style={{ position: 'relative' }}>
                  <label>Target Position</label>
                  <input
                    type="text"
                    placeholder="e.g., Software Developer, Data Scientist"
                    value={position}
                    onChange={e => handlePositionChange(e.target.value)}
                    onKeyDown={handlePositionKeyDown}
                    onBlur={() => handlePositionBlur()}
                    onFocus={async () => {
                      if (position) {
                        const suggestions = await getPositionSuggestions(
                          position
                        );
                        setPositionSuggestions(suggestions);
                        setShowPositionSuggestions(suggestions.length > 0);
                      }
                    }}
                  />
                  {showPositionSuggestions &&
                    positionSuggestions.length > 0 && (
                      <div className="autocomplete-dropdown">
                        {positionSuggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            className={`autocomplete-item ${
                              index === selectedSuggestionIndex
                                ? 'selected'
                                : ''
                            }`}
                            onMouseEnter={() =>
                              setSelectedSuggestionIndex(index)
                            }
                            onMouseDown={e => {
                              e.preventDefault(); // Prevent blur
                              selectPosition(suggestion);
                            }}
                          >
                            {suggestion}
                          </div>
                        ))}
                      </div>
                    )}
                  {isLoadingSkills && (
                    <div className="skills-loading">
                      <div className="loading-spinner"></div>
                      <p className="loading-text">Loading skills from API...</p>
                      <div className="skills-grid">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                          <div key={i} className="skill-skeleton"></div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {suggestedSkills.length > 0 && (
                  <div className="skills-suggestions">
                    <h4>Suggested Skills (Select up to 50)</h4>
                    <div className="skills-grid">
                      {suggestedSkills.map((skill, index) => (
                        <div
                          key={index}
                          className={`skill-chip ${
                            selectedSkills.includes(skill) ? 'selected' : ''
                          } ${
                            selectedSkills.length >= 50 &&
                            !selectedSkills.includes(skill)
                              ? 'disabled'
                              : ''
                          }`}
                          onClick={() => toggleSkill(skill)}
                        >
                          {skill}
                          {selectedSkills.includes(skill) && (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="form-group" style={{ position: 'relative' }}>
                  <label>Add Custom Skill</label>
                  <div className="custom-skill-input">
                    <input
                      type="text"
                      placeholder="Enter a skill and press Enter"
                      value={customSkill}
                      onChange={e => handleCustomSkillChange(e.target.value)}
                      onKeyPress={handleCustomSkillKeyPress}
                      onBlur={() => {
                        setTimeout(
                          () => setShowCustomSkillSuggestions(false),
                          200
                        );
                      }}
                      onFocus={() => {
                        if (
                          customSkill.trim() &&
                          customSkillSuggestions.length > 0
                        ) {
                          setShowCustomSkillSuggestions(true);
                        }
                      }}
                      disabled={selectedSkills.length >= 50}
                    />
                    <button
                      className="btn btn-secondary"
                      onClick={addCustomSkill}
                      disabled={
                        !customSkill.trim() || selectedSkills.length >= 50
                      }
                    >
                      Add
                    </button>
                  </div>
                  {showCustomSkillSuggestions &&
                    customSkillSuggestions.length > 0 && (
                      <div className="autocomplete-dropdown">
                        {customSkillSuggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            className="autocomplete-item"
                            onClick={() => selectCustomSkill(suggestion)}
                          >
                            {suggestion}
                          </div>
                        ))}
                      </div>
                    )}
                </div>

                {selectedSkills.length > 0 && (
                  <div className="selected-skills">
                    <h4>Selected Skills ({selectedSkills.length}/50)</h4>
                    <div className="skills-grid">
                      {selectedSkills.map((skill, index) => (
                        <div key={index} className="skill-chip-final">
                          {skill}
                          <button
                            className="remove-skill"
                            onClick={() => removeSkill(skill)}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-container {
          padding: 2rem;
          height: 100%;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
        }

        .resume-builder {
          display: grid;
          grid-template-columns: 200px 1fr 300px;
          gap: 1.5rem;
          height: calc(100vh - 200px);
        }

        .builder-sidebar {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .section-tab {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
        }

        .section-tab svg {
          width: 18px;
          height: 18px;
          opacity: 0.6;
        }

        .section-tab:hover {
          border-color: #3b3be3;
          background: #eff6ff;
        }

        .section-tab.active {
          background: #3b3be3;
          color: #ffffff;
          border-color: #3b3be3;
        }

        .section-tab.active svg {
          opacity: 1;
          color: #ffffff;
        }

        .builder-content {
          overflow-y: auto;
        }

        .content-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .section-description {
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .form-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .form-group input,
        .form-group textarea {
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          background: #f9fafb;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          color: #374151;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3b3be3;
          box-shadow: 0 0 0 3px #eff6ff;
          background: #ffffff;
        }

        .preview-panel {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .preview-panel h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .resume-preview {
          background: white;
          border: 1px solid var(--border);
          border-radius: 8px;
          aspect-ratio: 8.5 / 11;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .resume-content {
          padding: 2rem;
          font-family: 'Georgia', serif;
        }

        .resume-header {
          text-align: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #3b3be3;
        }

        .resume-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .resume-contact {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .resume-section {
          margin-bottom: 1.5rem;
        }

        .resume-section-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #3b3be3;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 0.25rem;
        }

        .resume-text {
          font-size: 0.875rem;
          color: #374151;
          line-height: 1.6;
        }

        .resume-text-muted {
          font-size: 0.8125rem;
          color: #9ca3af;
          font-style: italic;
        }

        .resume-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .resume-skill-tag {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          background: #eff6ff;
          color: #3b3be3;
          border-radius: 4px;
          font-size: 0.8125rem;
          font-weight: 500;
        }

        .preview-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--text-muted);
        }

        .preview-placeholder svg {
          width: 48px;
          height: 48px;
          margin-bottom: 1rem;
          opacity: 0.3;
        }

        .preview-placeholder p {
          font-size: 0.875rem;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          font-size: 0.875rem;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: scale(1.02);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }

        .btn-secondary:hover {
          background: var(--bg-secondary);
        }

        .btn-secondary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .loading-text {
          font-size: 0.875rem;
          color: #3b3be3;
          margin: 0.5rem 0;
          text-align: center;
          font-weight: 500;
        }

        .skills-loading {
          text-align: center;
          padding: 2rem 0;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          margin: 0 auto 1rem;
          border: 3px solid #e5e7eb;
          border-top-color: #3b3be3;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .skill-skeleton {
          height: 38px;
          background: linear-gradient(
            90deg,
            #f0f0f0 25%,
            #e0e0e0 50%,
            #f0f0f0 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .skills-suggestions,
        .selected-skills {
          margin-top: 1.5rem;
        }

        .skills-suggestions h4,
        .selected-skills h4 {
          font-size: 0.9375rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 0.75rem;
        }

        .skill-chip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          background: #3b3be3;
          border: 1px solid #3b3be3;
          border-radius: 8px;
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          user-select: none;
          color: #ffffff;
        }

        .skill-chip:hover {
          border-color: #5c5cff;
          background: #5c5cff;
          transform: translateY(-1px);
        }

        .skill-chip.selected {
          background: #3b3be3;
          color: #ffffff;
          border-color: #3b3be3;
        }

        .skill-chip.selected svg {
          width: 14px;
          height: 14px;
          color: #ffffff;
        }

        .skill-chip.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .skill-chip.disabled:hover {
          transform: none;
          border-color: #e5e7eb;
          background: #f9fafb;
        }

        .skill-chip-final {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          background: #60a5fa;
          border: 1px solid #60a5fa;
          border-radius: 8px;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #ffffff;
          user-select: none;
        }

        .skill-chip-final svg {
          width: 14px;
          height: 14px;
          color: #ffffff;
        }

        .custom-skill-input {
          display: flex;
          gap: 0.75rem;
        }

        .custom-skill-input input {
          flex: 1;
        }

        .remove-skill {
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.2s ease;
        }

        .remove-skill svg {
          width: 14px;
          height: 14px;
        }

        .remove-skill:hover {
          transform: scale(1.2);
        }

        .autocomplete-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          margin-top: 0.25rem;
          max-height: 300px;
          overflow-y: auto;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1000;
        }

        .autocomplete-item {
          padding: 0.75rem 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border-bottom: 1px solid #e5e7eb;
          color: #374151;
          font-size: 0.875rem;
        }

        .autocomplete-item:last-child {
          border-bottom: none;
        }

        .autocomplete-item:hover,
        .autocomplete-item.selected {
          background: #eff6ff;
          color: #3b3be3;
        }
      `}</style>
    </div>
  );
}
