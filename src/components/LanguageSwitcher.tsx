import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { locales, stripLocaleFromPath } from '@/i18n/config';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find(l => l.code === i18n.language) || locales[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLanguage = (locale: typeof locales[0]) => {
    if (locale.code === i18n.language) {
      setIsOpen(false);
      return;
    }

    // Change i18next language
    i18n.changeLanguage(locale.code);

    // Save preference
    localStorage.setItem('preferred-language', locale.code);

    // Update URL with locale prefix (no page reload, just URL change)
    const currentPath = window.location.pathname;
    const cleanPath = stripLocaleFromPath(currentPath);

    const newPath = locale.urlPrefix
      ? `/${locale.urlPrefix}${cleanPath}`
      : cleanPath;

    window.history.pushState({}, '', newPath);

    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Current Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
        aria-label="Select language"
      >
        <span className="text-[13px] font-semibold tracking-wide">{currentLocale.shortName}</span>
        <svg
          className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-1 min-w-[180px] z-[100] transition-all duration-200 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
        }`}
      >
        {locales.map((locale) => (
          <button
            key={locale.code}
            onClick={() => switchLanguage(locale)}
            className={`block w-full px-4 py-2.5 text-left text-[13px] font-medium transition-colors duration-150 hover:bg-gray-50 ${
              locale.code === i18n.language ? 'text-primary bg-primary/5' : 'text-gray-700'
            }`}
          >
            {locale.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
