'use client'

import { useState } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { type Feira } from '@/data/feiras'

const SAO_PAULO: [number, number] = [-23.5505, -46.6333]

function UserLocationControl() {
  const map = useMap()
  const [userPos, setUserPos] = useState<[number, number] | null>(null)
  const [error, setError] = useState<string | null>(null)

  function handleLocate() {
    if (!navigator.geolocation) {
      setError('Geolocalização não é suportada pelo seu navegador.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude]
        setUserPos(coords)
        map.flyTo(coords, 15)
        setError(null)
      },
      () => {
        setError('Permissão de localização negada.')
      }
    )
  }

  return (
    <>
      <div style={{
        position: 'absolute',
        top: 80,
        left: 10,
        zIndex: 1000,
      }}>
        <button
          onClick={handleLocate}
          style={{
            background: 'white',
            border: 'none',
            borderRadius: 4,
            padding: '6px 10px',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
          }}
        >
          📍 Usar minha localização
        </button>
      </div>

      {error && (
        <div style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          background: 'white',
          padding: '8px 16px',
          borderRadius: 4,
          fontSize: 13,
          boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
          whiteSpace: 'nowrap',
        }}>
          {error}
        </div>
      )}

      {userPos && (
        <CircleMarker
          center={userPos}
          radius={10}
          pathOptions={{ color: '#2563eb', fillColor: '#2563eb', fillOpacity: 0.9 }}
        >
          <Popup>Você está aqui</Popup>
        </CircleMarker>
      )}
    </>
  )
}

type Props = {
  feiras: Feira[]
}

export default function Map({ feiras }: Props) {
  return (
    <MapContainer
      center={SAO_PAULO}
      zoom={13}
      style={{ width: '100%', height: '100%' }}
      zoomControl
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {feiras.map((feira) => (
        <CircleMarker
          key={feira.codigo_de_registro}
          center={[feira.lat, feira.lng]}
          radius={8}
          pathOptions={{ color: '#16a34a', fillColor: '#16a34a', fillOpacity: 0.8 }}
        >
          <Popup>
            <strong>Feira #{feira.codigo_de_registro}</strong><br />
            {feira.dia_da_semana} — {feira.categoria}<br />
            {feira.quantidade_de_feirantes} feirantes
          </Popup>
        </CircleMarker>
      ))}
      <UserLocationControl />
    </MapContainer>
  )
}
