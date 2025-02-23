'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from '@/shared/ui/select';
import '@/shared/config/i18n';

export const LanguageChange = () => {
  const { t, i18n } = useTranslation('translations');
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className="flex items-center gap-1">
      <span>{t('greeting')}</span>
      <Select onValueChange={changeLanguage} value={selectedLanguage}>
        <SelectTrigger className="max-w-[100px] w-full">
          <SelectValue placeholder="Select language">
            {selectedLanguage}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton />
          <SelectGroup>
            <SelectLabel>Languages</SelectLabel>
            <SelectItem value="en">En</SelectItem>
            <SelectItem value="ru">Ru</SelectItem>
            <SelectItem value="kg">Kg</SelectItem>
          </SelectGroup>
          <SelectScrollDownButton />
        </SelectContent>
      </Select>
    </div>
  );
};
