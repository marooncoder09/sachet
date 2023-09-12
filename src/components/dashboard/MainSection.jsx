import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    marginLeft: '300px', // Add left margin to shift everything to the right
  },
  container: {
    textAlign: 'center',
  },
  logo: {
    maxWidth: '100%',
    height: 'auto',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    },
  },
  description: {
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default function MainSection() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.container}>
              <img src="/poe-logo.png" alt="Poe Logo" className={classes.logo} />
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.container}>
              <Typography variant="h4" className={classes.title}>
                Poe
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <form action="#" className={classes.form}>
              <Typography variant="body2" className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor officia blanditiis repellat
                in, vero, aperiam porro ipsum laboriosam consequuntur exercitationem incidunt tempora nisi?
              </Typography>
              <TextField
                type="email"
                label="Start a new chat"
                variant="outlined"
                fullWidth
                className={classes.input}
                InputProps={{
                  classes: {
                    notchedOutline: classes.input,
                  },
                }}
              />
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
