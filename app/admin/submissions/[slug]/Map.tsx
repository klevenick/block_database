
import { MapContainer, Polygon, Marker, TileLayer, Popup, FeatureGroup, Circle } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"
import * as L from "leaflet"
import React, { RefObject, SetStateAction } from "react"
import { Block } from '@/lib/definitions'
import Link from "next/link"
import { EditControl } from "react-leaflet-draw"
import { sendCoords } from "@/lib/db"
import { LatLng } from "leaflet"

function handleDraw(e: any) {
    console.log(e)
}

export default function Map({setPolyCoords} : {setPolyCoords: React.Dispatch<SetStateAction<LatLng[]>>}) {
    
    function handleCreate(e: any) {
        const layer = e.layer
        const latlang = layer._latlngs
        console.log("latlng set to:")
        console.log(latlang)
        sendCoords(latlang, setPolyCoords)

    }
    const DrawComponent = () => (
    <FeatureGroup>
        <EditControl
        position='topright'
        onEdited={handleDraw}
        onCreated={handleCreate}
        onDeleted={handleDraw}
        draw={{
            rectangle: false
        }}
        />
        <Circle center={[51.51, -0.06]} radius={200} />
    </FeatureGroup>
    );
    
    return (
        <MapContainer center={[40.67443, -73.94438]} zoom={17} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <DrawComponent />
        </MapContainer>
    )
}
