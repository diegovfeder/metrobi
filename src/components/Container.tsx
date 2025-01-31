interface ContainerProps {
  bgColor: string
  title: string
  height?: string
  width?: string
  flex?: number
}

export const Container: React.FC<ContainerProps> = ({
  bgColor,
  title,
  height,
  width,
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
        height,
        width,
        flex,
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.2rem',
        boxSizing: 'border-box',
      }}
    >
      {title}
    </div>
  )
}
