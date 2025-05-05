import { themeStyles } from '../themes'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'
import { Card } from 'primereact/card'
import useLenguajeFormalTranslations from '../hooks/useLenguajeFormalTranslations'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Toast } from 'primereact/toast'

const Contacto = () => {
  const { theme } = useTheme()
  const estilos = themeStyles[theme]
  const { t } = useLenguajeFormalTranslations('common')
  const [mensaje, setMensaje] = useState('')
  const [tipoMensaje, setTipoMensaje] = useState<'success' | 'error' | ''>('')

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })

  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return re.test(email)
  }

  const isFormValid = () => {
    return (
      formData.nombre.trim() !== '' &&
      formData.email.trim() !== '' &&
      validateEmail(formData.email) &&
      formData.mensaje.trim() !== '' &&
      formData.mensaje.length <= 1000 &&
      formData.nombre.length <= 100
    )
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const mostrarMensaje = (
      tipo: 'success' | 'error',
      mensajeTraducido: string
    ) => {
      setTipoMensaje(tipo)
      setMensaje(mensajeTraducido)

      setTimeout(() => {
        setMensaje('')
        setTipoMensaje('')
      }, 7000)
    }

    try {
      const response = await fetch('https://sabatie.com.ar/contacto.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.message === '200') {
        mostrarMensaje('success', t('contacto.success_contact_form'))
        setFormData({ nombre: '', email: '', mensaje: '' })
      } else if (data.message === '400') {
        mostrarMensaje('error', t('contacto.error_contact_form'))
      } else if (data.message === 'Email inválido') {
        mostrarMensaje('error', t('contacto.invalid_email'))
      } else if (data.message === 'Todos los campos son obligatorios') {
        mostrarMensaje('error', t('contacto.missing_fields'))
      } else if (data.message.includes('espere')) {
        mostrarMensaje('error', t('contacto.rate_limit_exceeded'))
      }
    } catch (error) {
      mostrarMensaje(
        'error',
        error instanceof Error
          ? error.message
          : t('contacto.error_contact_form')
      )
    }
  }

  return (
    <>
      <Toast ref={toast} />
      <div
        id="contacto"
        className="min-h-screen flex align-items-center justify-content-center mt-5"
      >
        <div className="grid w-full" style={{ maxWidth: '1200px' }}>
          <div className="col-12 text-left">
            <h2 className="text-4xl font-bold mb-3">{t('contacto.titulo')}</h2>

            <Card className="p-3 bg-white" unstyled={estilos.sinEstilo}>
              <h3 className="mb-2">{t('contacto.subTitulo')}</h3>
              <form onSubmit={handleSubmit}>
                <div className="p-field p-mb-3">
                  <label htmlFor="nombre">{t('contacto.nombre')}</label>
                  <InputText
                    id="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full"
                    unstyled={estilos.sinEstilo}
                  />
                </div>

                <div className="p-field p-mb-3 mt-2">
                  <label htmlFor="email">{t('contacto.correo')}</label>
                  <InputText
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    unstyled={estilos.sinEstilo}
                  />
                </div>

                <div className="p-field p-mb-3 mt-2">
                  <label htmlFor="mensaje">{t('contacto.mensaje')}</label>
                  <InputTextarea
                    id="mensaje"
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full"
                    unstyled={estilos.sinEstilo}
                  />
                </div>

                <div className="p-field p-mb-3 flex justify-content-end mt-2">
                  <Button
                    type="submit"
                    className={`p-3 mt-3 ${
                      isFormValid() ? 'cursor-pointer' : ''
                    }`}
                    disabled={!isFormValid()}
                    label={t('contacto.botonEnviar')}
                    unstyled={estilos.sinEstilo}
                  />
                </div>
              </form>
              {mensaje && (
                <div
                  className={`mt-3 p-2 flex justify-content-end ${
                    tipoMensaje === 'success' ? 'bg-green-600' : 'bg-red-600'
                  } text-white`}
                >
                  {mensaje}
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacto
