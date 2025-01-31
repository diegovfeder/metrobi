interface ContainerProps {
  bgColor: string
  title: string
  minHeight?: string | number
  minWidth?: string | number
  width?: string | number
  flex?: number | string
}

export const Container: React.FC<ContainerProps> = ({
  bgColor,
  title,
  minHeight,
  minWidth,
  width = 'auto',
  flex,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width,
        minWidth,
        minHeight,
        flex,
        flexShrink: typeof flex === 'string' ? undefined : 0, // Prevent shrinking unless specified
        color: '#333',
        fontFamily: 'system-ui, sans-serif',
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        boxSizing: 'border-box',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {title}
    </div>
  )
}
