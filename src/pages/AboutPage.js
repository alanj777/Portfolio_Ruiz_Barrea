import React, { useContext } from 'react';
import { ServiceContext } from '../ServiceContext';
import Skeleton from './components/Loaders/Skeleton';
import './AboutPage.css';

const AboutPage = () => {
  const { rootData, imageStyle, isDarkMode } = useContext(ServiceContext);
  console.log(imageStyle);
  return (
    <section
      className={`about_me ${isDarkMode ? 'dark' : 'light'}`}
      id="about_myself"
    >
      <div className="container_01">
        <div className="my_img">
          {imageStyle?.globalImages?.about_me_img ? (
            <img
              id="img"
              src={imageStyle?.globalImages?.about_me_img}
              alt="profile_image"
            />
          ) : (
            <Skeleton props={{ width: '90%', height: '100%' }} />
          )}
        </div>
        <div className="my_info">
          <h2>
            Sobre <span>Mi</span>
          </h2>
          <p>
            Soy un desarrollador y estudiante informático argentino. Me especializo en el diseño de videojuegos de terror habiendo trabajado en tus estudios de videojuegos favoritos
            como por ejemplo: Bandai Namco y capcom 
          </p>
          <div className="personal_info">
            {rootData?.personal_info_data?.map((data, index) => {
              return (
                <>
                  <div className="abc" key={index}>
                    {data.section_one.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                  <div className="xyz">
                    {data.section_two.map((e, index) => {
                      return (
                        <h4>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
