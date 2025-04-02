const Historia = () => {
  return (
    <div
      id="historia"
      className="min-h-screen flex align-items-center justify-content-center text-800 w-full px-4 md:px-6"
    >
      <div className="grid w-full" style={{ maxWidth: '1200px' }}>
        <div className="col-12 text-left">
          <h2 className="text-4xl font-bold mb-3">Mi Historia</h2>
          <p className="text-xl md:text-2xl text-700 line-height-3">
            Soy Exe, un apasionado de los videojuegos y el desarrollo web. A los
            40 años, decidí darle un giro radical a mi vida. Después de superar
            una enfermedad y salir del hospital, tuve un momento de claridad:
            era hora de seguir mi verdadera pasión. Poco tiempo después, dejé mi
            trabajo y me lancé de lleno a aprender y crear. Siempre soñé con
            trabajar en programación o en algo relacionado con la tecnología, y
            ahora estoy convirtiendo ese sueño en realidad. Este sitio es parte
            de mi viaje, un espacio en constante evolución donde comparto lo que
            aprendo, experimento con nuevas ideas y sigo creciendo. Gracias por
            ser parte de esta aventura. ¡Lo mejor aún está por venir!
          </p>
        </div>
        <div className="w-full bg-gray-100 p-4 rounded-md my-4">
          <pre className="text-sm overflow-x-auto">
            <code>
              {`
function KintsugiApp() {  
  const [control, setControl] = useState<boolean>(false);  
  const chaosFactor = useRef(Math.random() * 0.05);  

  useEffect(() => {  
    if (control) {  
      console.log("¡Control activado! Pero...");  
      setControl(false);  
      throw new Error("El control es una ilusión");  
    }  
  });  

  return (  
    <div onClick={() => setChaos(!chaos)}>  
      {chaos ? "🔥" : "💔"}  
    </div>  
  );  
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Historia
