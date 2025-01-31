'use client'

import { useRef, useEffect, useState } from 'react'
import { PlayIcon, PauseIcon, TimerResetIcon as ResetIcon } from 'lucide-react'

const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 200
const ACHILLES_COLOR = '#3498db'
const TORTOISE_COLOR = '#2ecc71'
const TRACK_COLOR = '#ecf0f1'

interface Character {
  x: number
  speed: number
  size: number
}

export default function ZenosParadox() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [speed, setSpeed] = useState(0.3)
  const [displayData, setDisplayData] = useState({
    achillesX: 0,
    tortoiseX: 400,
    time: 0,
  })

  const achillesRef = useRef<Character>({ x: 0, speed: 10, size: 20 })
  const tortoiseRef = useRef<Character>({ x: 400, speed: 5, size: 15 })
  const timeRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return

    const animate = () => {
      if (!isRunning) return

      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      // Draw track
      ctx.fillStyle = TRACK_COLOR
      ctx.fillRect(0, CANVAS_HEIGHT - 40, CANVAS_WIDTH, 40)

      // Draw Achilles
      ctx.fillStyle = ACHILLES_COLOR
      ctx.beginPath()
      ctx.arc(
        achillesRef.current.x,
        CANVAS_HEIGHT - 30,
        achillesRef.current.size,
        0,
        Math.PI * 2
      )
      ctx.fill()

      // Draw Tortoise
      ctx.fillStyle = TORTOISE_COLOR
      ctx.beginPath()
      ctx.arc(
        tortoiseRef.current.x,
        CANVAS_HEIGHT - 25,
        tortoiseRef.current.size,
        0,
        Math.PI * 2
      )
      ctx.fill()

      // Update positions
      achillesRef.current.x += achillesRef.current.speed * speed
      tortoiseRef.current.x += tortoiseRef.current.speed * speed
      timeRef.current += 0.1 * speed

      // Update display data less frequently
      if (Math.floor(timeRef.current * 10) % 5 === 0) {
        setDisplayData({
          achillesX: achillesRef.current.x,
          tortoiseX: tortoiseRef.current.x,
          time: timeRef.current,
        })
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    if (isRunning) {
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isRunning, speed])

  const handlePlayPause = () => setIsRunning(!isRunning)
  const handleReset = () => {
    setIsRunning(false)
    achillesRef.current = { x: 0, speed: 10, size: 20 }
    tortoiseRef.current = { x: 400, speed: 5, size: 15 }
    timeRef.current = 0
    setDisplayData({ achillesX: 0, tortoiseX: 400, time: 0 })
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1
        style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}
      >
        Zeno's Paradox: Achilles and the Tortoise
      </h1>

      <div style={{ marginBottom: '20px' }}>
        <p>
          This famous paradox, proposed by the ancient Greek philosopher Zeno,
          presents a race between Achilles (the fastest runner in Greece) and a
          tortoise. The tortoise is given a head start, and Zeno argues that
          Achilles can never catch up to the tortoise through the following
          logic:
        </p>
        <ul
          style={{
            marginLeft: '20px',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          <li>
            By the time Achilles reaches the tortoise's starting position, the
            tortoise has moved forward
          </li>
          <li>
            When Achilles reaches that new position, the tortoise has again
            moved forward
          </li>
          <li>
            This process continues infinitely, with the tortoise always ahead by
            some distance
          </li>
        </ul>
        <p>
          While the logic seems sound, it creates a paradox because we know in
          reality that Achilles would overtake the tortoise. The resolution lies
          in understanding infinite series convergence.
        </p>
      </div>

      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{ border: '1px solid #ccc' }}
      />

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button
          onClick={handlePlayPause}
          style={{
            padding: '10px',
            backgroundColor: '#4CAF50',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {isRunning ? <PauseIcon color="white" /> : <PlayIcon color="white" />}
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: '10px',
            backgroundColor: '#f44336',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ResetIcon color="white" />
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Animation Speed
        </label>
        <input
          type="range"
          min={0.1}
          max={1.0}
          step={0.1}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          style={{ width: '150px' }}
        />
      </div>

      <div style={{ marginTop: '20px', fontSize: '14px' }}>
        <p>Time Elapsed: {displayData.time.toFixed(2)} seconds</p>
        <p>Achilles Position: {displayData.achillesX.toFixed(2)}</p>
        <p>Tortoise Position: {displayData.tortoiseX.toFixed(2)}</p>
        <p>
          Distance Between:{' '}
          {(displayData.tortoiseX - displayData.achillesX).toFixed(2)}
        </p>
      </div>

      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '15px',
          borderRadius: '5px',
          marginTop: '15px',
        }}
      >
        <h3 style={{ marginBottom: '10px' }}>Mathematical Resolution:</h3>
        <p>
          Consider Achilles running at speed v₁ and the tortoise at speed v₂,
          with an initial head start of d₀. The time taken for Achilles to catch
          up can be expressed as a geometric series:
        </p>
        <pre style={{ fontFamily: 'monospace', margin: '10px 0' }}>
          T = d₀/v₁ + (d₀·v₂/v₁)/v₁ + (d₀·v₂²/v₁²)/v₁ + ...
        </pre>
        <p>
          This is a geometric series with first term a = d₀/v₁ and ratio r =
          v₂/v₁. Since v₂ {'<'} v₁, we have |r| {'<'} 1, meaning the series
          converges to:
        </p>
        <pre style={{ fontFamily: 'monospace', margin: '10px 0' }}>
          T = (d₀/v₁)/(1 - v₂/v₁) = d₀/(v₁ - v₂)
        </pre>
        <p>
          This finite result proves that Achilles does catch the tortoise in a
          finite time, resolving the apparent paradox through calculus concepts
          unknown in Zeno's time.
        </p>
      </div>
    </div>
  )
}
