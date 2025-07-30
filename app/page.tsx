'use client'
import dynamic from 'next/dynamic'
import { getBlockAssociations } from "@/lib/db"
import { useEffect, useState } from 'react'
import { Block } from '@/lib/definitions'
import Link from 'next/link'


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
      <section className="pageHeader">
        <h1>Find a block association near you</h1>
        <span>Enter your address in the search bar below</span>
      </section>
      <section className="mapSection">
      <MapLoader blockData={blockData}/>
      </section>
      <section className="button_footer">
        <div className="button">
          <Link href="./contact">
            Add Your Block Association
          </Link>
        </div>
        <div className="button">
          <Link href="./faq">
            FAQ
          </Link>
        </div>
      </section>
    </main>
  );
}
