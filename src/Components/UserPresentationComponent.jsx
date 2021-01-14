import { Button, Card, CardContent, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

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
    color: "#dcdde1",
    overflow: "auto"
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
  IconButton: {
    color: "#dcdde1",
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
        {props.persons.map((p, index) => {
            return (
              <Card className={classes.root}>
                <CardContent className={classes.content}>
                    <div>
                      <Typography component="h5" variant="h5">
                          {p.name.first} 
                          <IconButton className={classes.IconButton} onClick={() => props.removePerson(index)}>
                            <DeleteIcon fontSize="small" />
                          </IconButton>  
                      </Typography>
                    </div>
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