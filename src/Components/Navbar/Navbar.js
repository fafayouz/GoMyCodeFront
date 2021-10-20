import React from "react";
import "./Navbar.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import API from './../../Api/API';





const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [messageerr , setMessageerr]=React.useState()
  const [messagevalid, setMessagevalid]=React.useState();
  const [height, setHeight] = React.useState('');
  const [race, setRace] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [birth, setBirth] = React.useState('');
  const [spouse, setSpouse] = React.useState('');
  const [death, setDeath] = React.useState('');
  const [relam, setRealm] = React.useState('');
  const [hair, setHair] = React.useState('');
  const [name, setName] = React.useState('');
  const [wikiUrl, setWikiUrl] = React.useState('');
 
  const HandleSubmit = () => {
    const Alldata = {height , race , gender , birth , spouse , death , relam , hair , name , wikiUrl}
    API.post('api/CreatePost', Alldata).then((res) => {
      if(res.data.err === false) {
        setMessagevalid(res.data.message)
        setOpen(false)
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
      
    })
  }
     console.log(messagevalid)
       
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="Navbar-Container">
        <div className="Title">
          <h2>Lord Of The Rings Characters</h2>
        </div>
        
        <div className="Button-Add">
        <Button variant="contained" onClick={handleClickOpen}>
          Add
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a Characters</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Height"
            type="text"
            fullWidth
            variant="standard"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
          <TextField
            autoFocus
            label="Race"
            type="text"
            fullWidth
            variant="standard"
            value={race}
            onChange={(event) => setRace(event.target.value)}
          />
          <TextField
            autoFocus
            label="Gender"
            type="text"
            fullWidth
            variant="standard"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          />
          <TextField
            autoFocus
            label="Birth"
            type="text"
            fullWidth
            variant="standard"
            value={birth}
            onChange={(event) => setBirth(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Spouse"
            type="text"
            fullWidth
            variant="standard"
            value={spouse}
            onChange={(event) => setSpouse(event.target.value)}
          />
          <TextField
            autoFocus
            label="Death"
            type="text"
            fullWidth
            variant="standard"
            value={death}
            onChange={(event) => setDeath(event.target.value)}
          />
          <TextField
            autoFocus
            label="hair"
            type="text"
            fullWidth
            variant="standard"
            value={hair}
            onChange={(event) => setHair(event.target.value)}
          />
          <TextField
            autoFocus
            label="name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            autoFocus
            label="relam"
            type="text"
            fullWidth
            variant="standard"
            value={relam}
            onChange={(event) => setRealm(event.target.value)}
          />
          <TextField
            autoFocus
            label="wikiUrl"
            type="text"
            fullWidth
            variant="standard"
            value={wikiUrl}
            onChange={(event) => setWikiUrl(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={HandleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
        </div>
      </div>
      {messagevalid ? (<div className="MessageValid">
            <span> {messagevalid} </span>
      </div>) : (
        <>
        </>
      )}
    </>
  );
};

export default Navbar;
