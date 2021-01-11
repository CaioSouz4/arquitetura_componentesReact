import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
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
    maxWidth: '60%'
  },
  img: {
    width: "10rem",
  },
  div: {
    display: "flex",
    flexWrap:  "wrap" 
  }
}));

const UserPresentationComponent = (props) => {
  const classes = useStyles();  
  return (
    <>
      <p>https://randomuser.me/api</p>
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
      <button onClick={props.newPerson} >Novo</button>
    </>
  );
}
export default UserPresentationComponent;