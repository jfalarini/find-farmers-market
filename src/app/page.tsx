import dynamic from 'next/dynamic'
import { feiras } from '@/data/feiras'

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Map feiras={feiras} />
    </main>
  )
}
