
import { MapContainer, Polygon, Marker, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"
import * as L from "leaflet"
import SearchField from "./SearchField"
import React from "react"
import { Block } from '@/lib/definitions'

function blockPopUp(block: Block) {

    return (

        <section className="blockPopup">
            <h2>{block.name}</h2>
            <h3>Boundaries</h3>
            <span>{block.boundaries}</span>
            <div className="blockPopup-contact">
                <h3>Contact</h3> 
                {block.email ? (<span>Email: {block.email}</span>) : null}
                {block.phone ? (<span>Phone: {block.phone}</span>) : null}
                {block.website ? (<span>Website: {block.website}</span>) : null}
                
                
            </div>            
        </section>
    )
}


export default function Map({ blockData } : { blockData : Array<Block> }) {
    
    
    return (
        <MapContainer center={[40.67443, -73.94438]} zoom={17} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            { blockData.map((block: Block, index: number) => {
                const blockPoly = L.polygon(block.coords)
                const blockCenter = blockPoly.getBounds().getCenter()
                return (
                <React.Fragment key={index}>
                <Marker key={"marker" + block.id} position={blockCenter}>
                    <Popup key={"popup" + block.id} maxWidth={800}>{blockPopUp(block)}</Popup>
                </Marker>
                <Polygon key={"poly" + block.id} positions={block.coords} />
                </React.Fragment>
                )
            }) }
           <SearchField />
        </MapContainer>
    )
}
