import logo from '../assets/react.svg'
// #1 Importar el hook useForm de react-hook-form
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
    // #2 Crear una instancia de useForm
    const { register, handleSubmit, formState: { errors } } = useForm()

    // #3 Definir la función que se ejecutará cuando el usuario haga submit
    const onSubmit = data => console.log(data)

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {/* 4. Registro cada elemento de mi formulario */}
          <label htmlFor='firstName'>Nombre</label>
          <input
            type='text'
            name='firstName'
            placeholder='Tu Nombre'
            id='firstName'
            {...register('firstName', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.firstName && <span>This field is required</span>}

          <label htmlFor='lastName'>Apellido</label>
          <input
            type='text'
            name='lastName'
            placeholder='Tu Apellido'
            id='lastName'
            {...register('lastName')}
          />

          <label htmlFor='age'>Edad</label>
          <input
            type='number'
            name='age'
            placeholder='Tu Edad'
            id='age'
            {...register('age')}
          />

          <label htmlFor='gender'>Genero</label>
          <select name='gender' id='gender' {...register('gender')}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            {...register('email')}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            {...register('password')}
          />

          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReactHookForm