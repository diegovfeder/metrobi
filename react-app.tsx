import React from 'react'
import ReactDOM from 'react-dom/client'
import FlexboxLayout from './src/3'
import ZenosParadox from './src/6'

const App = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState<'3' | '6'>('3')

  const renderQuestion = () => {
    switch (currentQuestion) {
      case '3':
        return <FlexboxLayout />
      case '6':
        return <ZenosParadox />
    }
  }

  return (
    <div>
      {renderQuestion()}
      <button
        onClick={() =>
          setCurrentQuestion((current) => (current === '3' ? '6' : '3'))
        }
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          fontSize: '1.2rem',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Q. {currentQuestion === '3' ? '6' : '3'}
      </button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
