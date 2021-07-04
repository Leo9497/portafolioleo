import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./Portafolios.css"

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 280,
    maxWidth: '100%',
  },
});

export default function Pagina() {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <CardActionArea>
      <div className="contenedor">
                <figure>
                <img className="columna" src="/images/tacos.png" alt="imagen" />
               <div className="capa">
             
                    <p>Página para una Taquería </p>
                    <a href="https://elfogon.herokuapp.com/" target="blank">Visitar</a> 
                </div>
                </figure>
      
                    
        
        
         </div>
        <CardContent>
          <Typography  className="color" gutterBottom variant="h5" component="h2">
            Taquería 
          </Typography>
          
        </CardContent>
      </CardActionArea>
     
    
   

    </Card>
  );
}
