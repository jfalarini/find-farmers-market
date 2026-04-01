import { feiras, type Feira } from "@/data/feiras"

type Coordinates = {
  lat: number
  lng: number
}

export type FeiraWithCoordinates = Feira & { coordinates: Coordinates | null }

async function geocodeAddress(address: string): Promise<Coordinates | null> {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`

  const res = await fetch(url, {
    headers: { "User-Agent": "FindFeirasApp/1.0" },
  })

  if (!res.ok || !res.headers.get("content-type")?.includes("json")) return null

  const data = await res.json()

  if (!data.length) return null

  return {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
  }
}

// Nominatim allows max 1 request/second
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function geocodeFeiras(): Promise<FeiraWithCoordinates[]> {
  const results: FeiraWithCoordinates[] = []

  for (const feira of feiras) {
    const fullAddress = `${feira.endereco}, ${feira.numero}, São Paulo, Brazil`
    const coordinates = await geocodeAddress(fullAddress)
    if (coordinates) {
      console.log(`✓ encontrado: ${fullAddress}`)
    } else {
      console.log(`✗ não encontrado: ${fullAddress}`)
    }
    results.push({ ...feira, coordinates })
    await sleep(1000)
  }

  return results
}
