
import React, { useEffect, useState } from "react";



const HomeUIPage = () => {


  const backgroundImageUrl = 'url("https://images.shiksha.com/mediadata/images/articles/1663131815phpZ3WZxB.jpeg")'; // Replace with the actual image path

  return (

    <div><h1 style={{
      textAlign: 'center',
      padding: 40,
      fontSize: 50,
      color: 'green',
      marginLeft:0,
    
      fontWeight: 'bold',
     backgroundColor: '#FAFA33',
      


    }}>जी एल ए विश्वविद्यालय,मथुरा   वृक्षारोपण</h1>

      <div >


        <header>
          <section className="img-fluid"
            style={{
              backgroundImage: backgroundImageUrl,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100vw",
marginTop: -19,
              display: "flex",
              flexDirection: 'row',

            }}>



            <div className="row">
              <div className="col-lg-8 header-left-side d-flex  flex-column align-items-start ">
                <img
                  src="https://www.gla.ac.in/info/ug/images/logo.png" style={{
                    position: "absolute",
                    
                    marginTop: 45,
                    top: 0,
                    left: 0,
                    maxHeight: 130,
                    display: "flex",

                  }}

                />
                
                
                <div></div>
                <h1  style={{
                  marginTop: 25,
                  marginLeft: 210,
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                  fontSize: 70,
                  paddingLeft: 25,
                  fontWeight: 'bold',
                  color: 'green'
                }}
                >
             
                 
                </h1>
                
                



              </div>              
            </div>
          </section>
        </header>
      </div>
    </div>


  );
};
export default HomeUIPage;

