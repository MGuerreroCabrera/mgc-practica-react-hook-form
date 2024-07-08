import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './RegisterForm.css';

const RegisterForm = () => {
  // Utilizar register, handleSubmit y formStar: errors de useForm para manejar el formulario
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // Crear estado para controlar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Crear función para manejar el envío del formulario
  const onSubmit = data => {
    console.log(data);
    console.log(data.mail);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registro-form">
        <h2 style={{marginBottom: "25px"}}>Formulario de registro</h2>
        {/* Campo para el nombre completo */}
        <div className="form-group">
            <input
            type="text"
            placeholder="Nombre completo"
            {...register('userName', { required: true })}
            className={errors.userName ? 'input-error' : ''}
            />
            {errors.userName && <span className="error-message">El nombre completo es requerido</span>}
        </div>

        {/* Campo para el correo electrónico */}
        <div className="form-group">
            <div className="input-wrapper">
            <input
                type="email"
                placeholder="Correo electrónico"
                {...register('mail', { required: true, pattern: /^\S+@\S+$/i })}
                className={errors.mail ? 'input-error' : ''}
            />
            <img src="assets/icons/mail.png" alt="email icon" className="icon" />
            </div>
            {errors.mail && <span className="error-message">El correo electrónico es requerido o no es válido</span>}
        </div>

        {/* Campo para la contraseña */}
        <div className="form-group">
            <div className="input-wrapper">
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Contraseña"
                {...register('password', { required: true })}
                className={errors.password ? 'input-error' : ''}
            />
            <img 
                style={ {width: "20px"} }
                src={showPassword ? "assets/icons/eye-open.png" : "assets/icons/eye-close.png"}
                alt="toggle password visibility"
                className="icon"
                onClick={() => setShowPassword(!showPassword)}
            />
            </div>
            {errors.password && <span className="error-message">La contraseña es requerida</span>}
        </div>

        {/* Botón de registro */}
        <button>Registrarse</button>
    </form>
  );
};

export default RegisterForm;
