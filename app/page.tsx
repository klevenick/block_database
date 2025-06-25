
import Link from "next/link";
import SearchForm from "./components/SearchForm"
import Map from "./components/Map"
import { getBAs } from "./actions/db"

export default async function Home() {
  const bas = await getBAs()
  const mapCenter = [40.67443, -73.94438]
  
  console.log("associations: " +  bas);
  return (
    <main className="min-h-screen flex flex-col items-center">
      <h1>Find a block database near you</h1>
      <section className="searchInput">
        <SearchForm />
      </section>
      <section className="mapSection">
        <Map data={bas}/>
      </section>
    </main>
  );
}
