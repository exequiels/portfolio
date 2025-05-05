import { useContext } from 'react'
import { LenguajeFormalContext } from '../context/LenguajeFormalContext'
import useLenguajeFormalTranslations from '../hooks/useLenguajeFormalTranslations'

const Historia = () => {
  const { t } = useLenguajeFormalTranslations('common')
  const { isLenguajeFormal } = useContext(LenguajeFormalContext)

  return (
    <div
      id="historia"
      className="min-h-screen flex align-items-center justify-content-center text-800 w-full px-4 md:px-6"
    >
      <div className="grid w-full mt-5" style={{ maxWidth: '1200px' }}>
        <div className="col-12 text-left text-xl md:text-2xl text-700 line-height-3">
          <h2 className="text-4xl font-bold mb-3">{t('historia.titulo')}</h2>
          <p>{t('historia.parrafo1')}</p>
          <p className="mt-3">{t('historia.parrafo2')}</p>
        </div>
        <div
          className={`w-full bg-gray-100 p-4 rounded-md my-4 ${
            isLenguajeFormal ? 'hidden' : ''
          }`}
        >
          <pre className="text-sm overflow-x-auto">
            <code>
              {`
function KintsugiApp() {  
  const [control, setControl] = useState<boolean>(false);  
  const chaosFactor = useRef(Math.random() * 0.05);  

  useEffect(() => {  
    if (control) {  
      console.log("¡Control! ...");  
      setControl(false);  
      throw new Error("Not found");  
    }  
  });  

  return (  
    <div onClick={() => setChaos(!chaos)}>  
      {chaos ? "Burn" : " "}  
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
