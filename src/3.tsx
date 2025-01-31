import React from 'react'
import { Container } from './components/Container'

const FlexboxLayout: React.FC = () => {
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Container bgColor="#87CEEB" title="Header" width="100%" height="80px" />

      <div
        style={{
          display: 'flex',
          flex: 1,
          gap: '0.5rem',
          paddingTop: '0.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '40%',
            gap: '0.5rem',
          }}
        >
          <Container bgColor="#DDA0DD" title="Hero" height="220px" />
          <Container bgColor="#90EE90" title="Sidebar" flex={1} />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: '0.5rem',
          }}
        >
          <Container bgColor="#FFD700" title="Main Content" flex={1} />
          <Container bgColor="#A9A9A9" title="Extra Content" height="160px" />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.5rem' }}>
        <Container
          bgColor="#3CB371"
          title="Related Images"
          flex={2}
          height="120px"
        />
        <Container
          bgColor="#FFB6C1"
          title="Related Posts"
          flex={1}
          height="120px"
        />
      </div>

      <div style={{ paddingTop: '0.5rem' }}>
        <Container
          bgColor="#FFA500"
          title="Footer"
          width="100%"
          height="80px"
        />
      </div>
    </div>
  )
}

export default FlexboxLayout
