const Footer = () => {
  const imageList = [
    { id: 1, imagen: 'frontpage_logo.gif' },
    { id: 2, imagen: 'mysql.gif' },
    { id: 3, imagen: 'apache_pb.gif' },
    { id: 4, imagen: 'php3.jpg' },
    { id: 5, imagen: 'ygeo2.gif' },
  ]

  return (
    <footer
      className="p-4 flex-column"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'medium',
      }}
    >
      <div className="mt-4">
        {imageList.map((img) => (
          <img
            key={img.id}
            src={`./images/${img.imagen}`}
            className="ml-4"
            // style={{
            //   width: '100%',
            //   maxWidth: '400px',
            //   height: 'auto',
            // }}
          />
        ))}
      </div>
      <div className="mt-4">
        <p>© 2025 Exequiel Sabatie. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
