'use client'
import { useEffect } from "react"
import { MapContainer, Polygon, Marker, TileLayer, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"
import * as L from "leaflet"
import { GeoSearchControl, MapBoxProvider } from 'leaflet-geosearch';
import "leaflet-geosearch/assets/css/leaflet.css";

const SearchField = ({ apiKey }) => {
  const provider = new MapBoxProvider({
    params: {
      access_token: apiKey,
    },
  });

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
  });

  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};



function blockPopUp(block: any) {
    //console.log("block for popup:")
    //console.log(block)
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

export default function Map(bas: any) {

    const baData = bas.data

    const baMarkers = baData.map((block: any) => {
        const blockPoly = L.polygon(block.coords)
        const blockCenter = blockPoly.getBounds().getCenter()
        
        return (
        <>
            <Marker key={"marker" + block.id} position={blockCenter}>
                 <Popup key={"popup" + block.id} maxWidth={800}>{blockPopUp(block)}</Popup>
            </Marker>
            <Polygon key={"poly" + block.id} positions={block.coords} />
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
           <SearchField apikey={"123"}/>
            {baMarkers}
        </MapContainer>
    )
}