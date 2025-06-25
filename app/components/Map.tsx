'use client'
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet"
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

function findCenter(arr) {
  // console.log( arr)
        {
            var minX, maxX, minY, maxY;
            for (var i = 0; i < arr.length; i++)
            {
                
                minX = (parseFloat(arr[i][0]) < minX || minX == null) ? parseFloat(arr[i][0]) : minX;
                maxX = (parseFloat(arr[i][0]) > maxX || maxX == null) ? parseFloat(arr[i][0]) : maxX;
                minY = (parseFloat(arr[i][1]) < minY || minY == null) ? parseFloat(arr[i][1]) : minY;
                maxY = (parseFloat(arr[i][1]) > maxY || maxY == null) ? parseFloat(arr[i][1]) : maxY;
            }
           // console.log((minX));

            return [(minX + maxX) / 2, (minY + maxY) / 2];
        }
    }
export default function Map(bas) {

    const baData = bas.data
    //console.log(bas)
    //console.log(baData)
    const baMakers = baData.map(block => {
        const blockCoords = findCenter(block.coords)
       console.log(blockCoords);
       // console.log(block)
       return <Marker position={findCenter(block.coords)} />
    }
    )
    
    return (

    <MapContainer center={[40.67443, -73.94438]} zoom={17} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    )
}