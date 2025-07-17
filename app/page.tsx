'use client'
import dynamic from 'next/dynamic'
import { getBlockAssociations } from "@/lib/db"
import { useEffect, useState } from 'react'
import { Block } from '@/lib/definitions'


const MapLoader = dynamic(() => import('./components/Map'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

export default function Page() {
  const [blockData, setBlockData] = useState(Array<Block>);

  useEffect(() => {
  getBlockAssociations().then((data) => {
    setBlockData(data)  
  })
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center">
      <h1>Find a block database near you</h1>
      <section className="searchInput">

      </section>
      <section className="mapSection">
      <MapLoader blockData={blockData}/>
      </section>
    </main>
  );
}
