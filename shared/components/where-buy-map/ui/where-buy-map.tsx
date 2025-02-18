'use client';

import { getMapCoords } from '@/sanity/lib/sanity';
import React, { useEffect, useState } from 'react';

interface MapCoords {
  place: string;
  latitude: string;
  longitude: string;
}

interface Props {
  title?: string;
  showBtnText?: string;
  hideBtnText?: string;
}

export const WhereBuyMap = (props: Props) => {
  const {
    title = 'Где купить',
    showBtnText = 'Показать карту продаж',
    hideBtnText = 'Скрыть карту продаж',
  } = props;
  const [showMap, setShowMap] = useState(false);
  const [points, setPoints] = useState<{ lat: string; lon: string }[]>([]);

  const toggleShowMap = () => {
    setShowMap(!showMap);
  };

  useEffect(() => {
    const fetchData = async () => {
      const mapCoords = await getMapCoords();
      const locations = mapCoords.map((coord: MapCoords) => ({
        lat: coord.latitude,
        lon: coord.longitude,
      }));
      setPoints(locations);
    };

    fetchData();
  }, []);

  const pointsString = points
    .map((point) => `${point.lat},${point.lon},pm2rdl`)
    .join('~');

  const mapSrc = `https://yandex.com/map-widget/v1/?ll=10.854186%2C49.182076&z=4&pt=${pointsString}`;

  return (
    <div
      className="w-full bg-white rounded-[20px]
      p-4 
      md:p-6 
      2xl:p-8
    "
    >
      <h2
        className=" font-bold font-HavalMittel text-[#364059]
              text-[18px] mb-4 leading-6
              md:text-[24px] md:mb-4 md:leading-8
              xl:text-[28px]
            "
      >
        {title}
      </h2>
      <button
        className="font-HavalMittel-medium w-full py-3 px-5 border-2 border-[#2f41b0] bg-[#2f41b0] text-white rounded-[12px]
              text-[18px] leading-6 
              md:max-w-[236px]
            "
        onClick={toggleShowMap}
      >
        {showMap ? hideBtnText : showBtnText}
      </button>

      {showMap && (
        <div className="mt-4">
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              height: '400px',
            }}
          >
            <iframe
              src={mapSrc}
              style={{ position: 'relative', width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
