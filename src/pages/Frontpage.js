import React, { useContext } from 'react';
import SocialMediaLinks from './components/SocialMediaLinks';
import SvgBackground from '../pages/components/Loaders/SvgBackground.jsx';
import TypeWriterEffect from 'react-typewriter-effect';
import { ServiceContext } from '../ServiceContext';
import Skeleton from './components/Loaders/Skeleton';
import { HashLink } from 'react-router-hash-link';
import './Frontpage.css';

const Frontpage = () => {
  const { imageStyle, isDarkMode } = useContext(ServiceContext);
  document.body.style = `background: ${isDarkMode ? '#1c2541' : '#f7d488'};`;
  return (
    <>
      <div
        className={`profile-container ${isDarkMode ? 'dark' : 'light'}`}
        id="home_page"
      >
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <p className="primary-text">
                Hola, yo soy
                <span className="highlighted-text">Vichy</span>
              </p>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1
                  style={{
                    display: 'flex',
                    gap: '6px',
                    color: `#fff`,
                  }}
                >
                  Hago
                  <span
                    style={{ color: `${isDarkMode ? '#5198ff' : '#d6abff'}` }}
                    className="type_effect"
                  >
                    <TypeWriterEffect
                      multiTextLoop
                      cursorColor="#f3f4f6"
                      multiText={[
                        'Desarrollo front end',
                        'Historias de terror',
                        'Videojuegos',
                        'Tu vida más difícil',
                      ]}
                      multiTextDelay={1000}
                      typeSpeed={100}
                    />
                  </span>
                </h1>
                <span className="profile-role-tagline">
                  
                  Hago Videojuegos divertidos de terror y diversos géneros que se caracterizan por
                  tener finales abiertos que completan el fandom.
                </span>
              </span>
              <div className="colz">
                <SocialMediaLinks />
              </div>
            </div>

            <div className="profile-options">
              <HashLink to="/contact-me">
                <button className="btn primary-btn">Contratenme</button>
              </HashLink>
              <a href="./Vicente_Ruiz_Barrea.pdf" download>
                <button className="btn highlighted-btn">Ten un resumen</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            {imageStyle?.globalImages?.profile_img ? (
              <img
                className="profile-picture-background polygoncls"
                src={imageStyle?.globalImages?.profile_img.JPG}
                alt="profile-img"
              />
            ) : (
              <Skeleton
                className="polygoncls"
                props={{ width: '90%', height: '90%' }}
              />
            )}
          </div>
        </div>
        <SvgBackground />
      </div>
    </>
  );
};

export default Frontpage;
