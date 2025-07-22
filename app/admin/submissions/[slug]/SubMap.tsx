'use client'
import { LatLng, LatLngLiteral } from 'leaflet';
import dynamic from 'next/dynamic'
import { RefObject, SetStateAction } from 'react';

const MapLoader = dynamic(() => import('./Map'), {
        loading: () => <p>Loading...</p>,
        ssr: false
      })

export default function SubMap({setPolyCoords} : {setPolyCoords: React.Dispatch<SetStateAction<LatLng[]>>}) {

    return (
        <>
        <MapLoader setPolyCoords={setPolyCoords}/>
        </>
    )
}