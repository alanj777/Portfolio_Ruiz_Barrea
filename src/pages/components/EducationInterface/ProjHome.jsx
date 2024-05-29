import React, { useContext } from 'react';
import Githubcomp from '../FooterInterface/Githubcomp';
import { ServiceContext } from '../../../ServiceContext';
import './ProjHome.css';
import Skeleton from '../Loaders/Skeleton';

const ProjHome = () => {
  const { imageStyle, isDarkMode } = useContext(ServiceContext);
  return (
    <>
      <div className="proj_containar_section">
        <div className="proj_left">
          <h3>
            Proyectos <span> y </span> Experiencias
          </h3>
          <p>
            Todos mis projectos los puedes encontrar en mi Github. Tambien puedes
            ver mis actvidades y mis contribuciones a estos projectos.
            Algunos de estos estan completos pero otros aun estan en proceso. 
            Tambien pueden dejar comentarios en mi perfil y asi empezar una discucion 
            Yo siempre estoy viendo y buscando nuevos projectos e ideas
            Tambien puedes investigar sobre mi en mis redes sociales que menciono aca abajo
          </p>
          <Githubcomp
            backgroundColor="#512da8"
            shadow={`${isDarkMode ? '#482e87' : '#edededa8'} 0px 0px 9px`}
            href="https://github.com/vicenteruba"
          />
        </div>
        <div className="proj_right">
          {imageStyle?.globalImages?.proj_img ? (
            <img src={require(imageStyle?.globalImages?.proj_img)} alt="Project Img" />
          ) : (
            <Skeleton props={{ width: '80%', height: '90%' }} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProjHome;
