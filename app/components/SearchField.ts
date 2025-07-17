import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import "leaflet-geosearch/assets/css/leaflet.css";
import { useEffect } from 'react';

export default function SearchField() {
  const provider = new OpenStreetMapProvider()

  // @ts-expect-error GeoSearchControl isn't mine
  const searchControl = new GeoSearchControl({
    provider: provider,
  });

  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    
  }, []);

  return null;
};