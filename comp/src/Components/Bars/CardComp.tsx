import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Button from '@mui/material/Button';
const CardComp= ({ }) => {
  
    return( 
    <div className='flex flex-col'>
<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '2rem' }}>
          <Card style={{ width: '300px', margin: '10px', borderRadius: '12px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <CardContent style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <InsertDriveFileIcon style={{ fontSize: '64px' }} />
              <strong>Want to Register your rescue agency</strong>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant="contained" color="primary" style={{borderRadius: '40px',backgroundColor: '#3BCBBE',color: '#000000'}}>
                Register Now
              </Button>
            </CardActions>
          </Card>
<Card style={{ width: '300px', margin: '10px', borderRadius: '12px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#3BCBBE' }}>
<CardContent style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <FlashOnIcon style={{ fontSize: '64px' }} />
  <strong>Talk to Flash our disaster relief chatbot !</strong>
</CardContent>
<CardActions style={{ justifyContent: 'center' }}>
  <Button variant="contained" color="primary" style={{borderRadius: '40px', backgroundColor: '#ffffff', color: '#000000'}}>
    Chat Now
  </Button>
</CardActions>
</Card>
<Card style={{ width: '300px', margin: '10px', borderRadius: '12px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
<CardContent style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <FlightTakeoffIcon style={{ fontSize: '64px' }} /> {/* Use FlightTakeoff as a rocket icon */}
  <strong>Intereseted to be a rescue volunteer</strong>
</CardContent>
<CardActions style={{ justifyContent: 'center' }}>
  <Button variant="contained" color="primary" style={{borderRadius: '40px',backgroundColor: '#3BCBBE',color: '#000000'}}>
    Count me in
  </Button>
</CardActions>
</Card>
</div>
<Button variant="contained" color="primary" style={{borderRadius: '40px',backgroundColor: '#3BCBBE',color: '#000000'}}>
<div className='flex flex-col'>
<p>Join the exclusive</p> 
<h1 className='text-xl font-bold'>Rescue-Hub discusion forum !</h1>
</div>
  </Button >
  </div>

);
    }

    export default CardComp;
