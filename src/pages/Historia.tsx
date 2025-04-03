const Historia = () => {
  return (
    <div
      id="historia"
      className="min-h-screen flex align-items-center justify-content-center text-800 w-full px-4 md:px-6"
    >
      <div className="grid w-full" style={{ maxWidth: '1200px' }}>
        <div className="col-12 text-left text-xl md:text-2xl text-700 line-height-3">
          <h2 className="text-4xl font-bold mb-3">Mi Historia</h2>
          <p>
            Soy Exe, un amante de las computadoras desde muy chico. A los 40
            años, decidí darle un giro a mi vida. Superé una enfermedad y, al
            salir del hospital, decidí abandonar la búsqueda insistente del
            dinero, que siempre ha escaseado desde mi infancia. Pensé en hacer
            cosas que me gusten y dejar que lo demás sea consecuencia de mi
            pasión por vivir y aprender.
          </p>
          <p className="mt-3">
            Renuncié a mi trabajo y me puse a trabajar con la computadora, una
            decisión difícil, dado que no vivo solo, sino en pareja, y ya tenía
            a mi primer hijo (ahora son dos). Siempre soñé con trabajar en algo
            relacionado con la tecnología, y ahora estoy convirtiendo ese sueño
            en realidad. Este sitio es parte de mi viaje, un espacio donde voy a
            estar compartiendo lo que aprendo, experimentando con nuevas ideas y
            creciendo.
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
