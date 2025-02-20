'use client';

import { getMapCoords } from '@/sanity/lib/sanity';
import React, { useEffect, useState } from 'react';

interface MapCoords {
  place: string;
  latitude: string;
  longitude: string;
}

export const Map = () => {
  const [points, setPoints] = useState<{ lat: string; lon: string }[]>([]);

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

  const mapSrc = `https://yandex.com/map-widget/v1/?ll=${points[0]?.lat}%2C${points[0]?.lon}&z=12&pt=${pointsString}`;

  return (
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
  );
};
