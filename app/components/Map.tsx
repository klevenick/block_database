'use client'

import { MapContainer, Polygon, Marker, TileLayer, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"
import L from "leaflet"


export default function Map(bas: any) {

    const baData = bas.data

    const baMarkers = baData.map((block: any) => {
        const blockPoly = L.polygon(block.coords)
        const blockCenter = blockPoly.getBounds().getCenter()
        
        return (
        <>
            <Marker key={block.id} position={blockCenter} />
            <Polygon positions={block.coords} />
        </>  
        )
    }

    )
    
    return (
        <MapContainer center={[40.67443, -73.94438]} zoom={17} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {baMarkers}
        </MapContainer>
    )
}