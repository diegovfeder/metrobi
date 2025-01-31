import React from 'react'
import { Container } from './components/Container'

const SPACING = {
  SMALL: '0.5rem',
  MEDIUM: '1rem',
  LARGE: '1.5rem',
} as const

const FlexboxLayout: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: SPACING.SMALL,
        boxSizing: 'border-box',
      }}
    >
      {/* Header - Fixed height */}
      <Container
        bgColor="#87CEEB"
        title="Header"
        minHeight="80px"
        width="100%"
      />

      <div
        style={{
          display: 'flex',
          flex: 1,
          gap: SPACING.SMALL,
          minHeight: 'calc(100vh - 80px - 120px - 3rem)', // Account for header/footer and spacing
        }}
      >
        {/* Left Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '0 1 40%', // Flex basis 40% but allowed to shrink
            gap: SPACING.SMALL,
            minWidth: '300px', // Prevent becoming too narrow
          }}
        >
          <Container
            bgColor="#DDA0DD"
            title="Hero"
            flex="0 0 auto" // Prevent shrinking/growing
            minHeight="320px"
          />
          <Container
            bgColor="#90EE90"
            title="Sidebar"
            flex={1} // Take remaining space
            minHeight="200px"
          />
        </div>

        {/* Right Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: SPACING.SMALL,
          }}
        >
          <Container
            bgColor="#FFD700"
            title="Main Content"
            flex={1}
            minHeight="400px"
          />
          <Container
            bgColor="#A9A9A9"
            title="Extra Content"
            flex="0 0 auto"
            minHeight="320px"
          />
        </div>
      </div>

      {/* Related Section */}
      <div
        style={{
          display: 'flex',
          gap: SPACING.SMALL,
          minHeight: '120px',
        }}
      >
        <Container
          bgColor="#3CB371"
          title="Related Images"
          flex={2} // 2:1 ratio
          minHeight="120px"
        />
        <Container
          bgColor="#FFB6C1"
          title="Related Posts"
          flex={1}
          minHeight="120px"
        />
      </div>

      {/* Footer - Fixed height */}
      <Container
        bgColor="#FFA500"
        title="Footer"
        minHeight="80px"
        width="100%"
      />
    </div>
  )
}

export default FlexboxLayout
