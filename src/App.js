import React from "react"
import logo from './logo.svg';
import './App.css';
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import SaveIcon from "@mui/icons-material/Save"
import DeleteIcon from "@mui/icons-material/Delete"
import Checkbox from "@mui/material/Checkbox"
import TextFiled from "@mui/material/TextField"
import 'fontsource-roboto';
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
/*import AppBar  from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import  IconButton  from "@mui/material/IconButton";
import  MenuIcon  from "@mui/material/Menu";
import {makeStyles} from "@mui/material"

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999',
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: '0 30px',    
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Style Button</Button>
}*/

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <div>
      <Checkbox 
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon />}
        inputsProps={{ 'arial-label' : 'secundary checkbox'}}
        
      />
    </div>
  )
}

function App() {
  return (
    <Container 
    maxWidth="md">
      <div className="App">
        <header className="App-header">
          <Typography
          variant="h2">
            Wellcome to MUI
          </Typography>
          <Typography
          variant="subtitle">
            Learn how to use material UI
          </Typography>
          <TextFiled
          variant="filled"
          color="secondary" 
          type="email"
          label="Email"
          placeholder="@gmail.com"
          value=""/>

          <Grid container spacing={4}>
            <Grid item>
              <Paper style={{ width: 50, heigth: 75}}></Paper>
            </Grid>
            <Grid item>
              <Paper style={{ width: 50, heigth: 75}}></Paper>
            </Grid>
            <Grid item>
              <Paper style={{ width: 50, heigth: 75}}></Paper>
            </Grid>
          </Grid>
          <CheckboxExample />
          <ButtonGroup >
            <Button
              startIcon={<SaveIcon />}
              //onClick={() => alert('Hello')}
              variant="contained"
              color="primary"
              size="large"
              >
                Save
            </Button>
              <Button
                startIcon={<DeleteIcon />}
                //onClick={() => alert('Hello')}
                variant="contained"
                color="error"
                size="large"
              >
                Delete 
              </Button>
          </ButtonGroup>
            <Button
              startIcon={<SaveIcon />}
              //onClick={() => alert('Hello')}
              variant="contained"
              color="primary"
              size="large"
              >
                Hello Word
            </Button>
          
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Container>
  );
}

export default App;
