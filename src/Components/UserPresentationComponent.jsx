import { Button, Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    margin: "20px",
    display: 'flex',
    backgroundColor: "#424242",
    minWidth: "20rem",
    width: "20rem",
    height: "10rem"
  },
  content: {
    flexWrap: 'wrap',
    flex: '1 0 auto',
    maxWidth: '60%',
    color: "#dcdde1"
  },
  img: {
    width: "10rem",
  },
  div: {
    display: "flex",
    flexWrap:  "wrap" 
  },
  icon: {
    color: "#2c3e50"
  },
  button: {
    margin: "20px",
    backgroundColor: "#bdc3c7",
    color: "black",
    "&:hover": {
      backgroundColor: "#bdc3c7",
    }
  }
}));

const UserPresentationComponent = (props) => {
  const classes = useStyles();  
  return (
    <>
      <div className={classes.div}>
        {props.persons.map(p => {
            return (
              <Card className={classes.root}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {p.name.first}                        
                    </Typography>
                    <Typography variant="subtitle1">
                        {p.location.country} - {p.location.city}
                    </Typography>
                      <img alt="flag" src={`https://www.countryflags.io/${p.alpha2Code}/flat/32.png`}/>
                    <Typography variant="subtitle1" >
                        {p.gender}
                    </Typography>
                </CardContent>
                <CardMedia
                  className={classes.img}
                  image={p.picture.large}
                />
              </Card>
            )}
        )}
      </div>
      <Button className={classes.button} onClick={props.newPerson}>
            NOVO USUÁRIO
      </Button>
    </>
  );
}
export default UserPresentationComponent;