import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import emailjs from "emailjs-com";
import "./Formulario.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Icon} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';





export default function Contactame() {
  
  function Enviarmensaje(e) {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_39pj6bp',
     e.target, 'user_zoZLqnm8rPZhZyRDaMUbZ')
      .then((result) => {
          alert('Mensaje enviado con exito')
      }, (error) => {
        alert('Error al enviar, intentalo más tardes')
      });
      e.target.reset();

 
    }
 

  return (
    <div className="App" id="contact"> 
      <header className="App-header">

      <Grid container >

        
      <Grid item xs={12}>
      <form onSubmit={Enviarmensaje}>
                    <div className="form-login"  >
                  <h3>Contacto</h3>
                              <label>Nombre</label>
                              <input type="text"   className="controls" size="40" required placeholder="Nombre y apellido " name="name"/>
                         
                          
                              <label>Email</label>
                              <input type="text"   className="controls " size="40" required placeholder="Correo" name="name"/>
                         
                                             
                        <label>Mensaje</label>
                            <textarea className="controls" id="" cols="30" rows="5" required placeholder="Escribe un mensaje" name="message"></textarea>
                    
                     
                            <input type="submit" className="buttons" value="Enviar mensaje"></input>
                            </div>
                       
                    
                </form>
       
        </Grid>
       
       
      </Grid>
      
      </header>
<div>
      <Typography  gutterBottom variant="h5" component="h2">
            <box className="text" >
            Leobardo Antunez Cayetano</box>
          </Typography>
                
           
            <box className="columna" >
            <a href="https://www.linkedin.com/in/leobardo-antunez-cayetano-3746631aa/" target="blank">
            <Icon className="iconos" >
            <LinkedInIcon fontSize="large" />
            </Icon>
              </a>
              
              <a href="mailto:leo_mixe@hotmail.com">
            <Icon className="iconos">
            <EmailIcon fontSize="large"/>
            </Icon>
              </a></box>
         
             </div>
           
    </div>
  );
}