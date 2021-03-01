import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { updateUserStatus } from "./handler";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import moment from 'moment';

const updateUser = (action, id) => {
  const data = { action: action, id: id }
  console.log('Call updateUser with ',data)
  updateUserStatus(data)
}

const createdDate = (created_at) => {
  let retval = moment(created_at).format('MMMM D @ h:mm a')
  return retval;
} 

const InvitedCard = ({ contact_name, created_at, suburb, postcode, category, id, description, price }) => (
  <Grid item xs={12}>
  <Paper>
  <Card>
    <CardContent>
      <Typography style={{ fontWeight: 'bold'}}>
        {contact_name}
        </Typography>
      <Typography color="textSecondary">
        {createdDate(created_at)}
      </Typography>
      <Typography color="textSecondary">
        <span style={{paddingLeft:'10px', paddingRight: '10px'}}><LocationOnIcon />{suburb}  {postcode}</span>
        <span style={{paddingLeft:'10px', paddingRight: '10px'}}><BusinessCenterIcon /> {category}</span>
        <span style={{paddingLeft:'3px', paddingRight: '3px'}}>Job ID: {id}</span>          
      </Typography>
      <Typography color="textSecondary">
        {description}
        </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" size="small" color="primary" onClick={()=>updateUser('accepted', id)}>
        Accept
        </Button>
      <Button variant="contained" size="small" onClick={()=>updateUser('declined', id)}>
        Decline
        </Button>
      <Typography variant="body2" component="p">
        ${price} Lead Invitation
      </Typography>
    </CardActions>
  </Card>
  </Paper>
  </Grid>
)

export const GroupedInvitedCards = ({ invitedCards }) => (
  <Grid container spacing={3}>
    {invitedCards && invitedCards.map(invitedCard => (
      <InvitedCard {...invitedCard} />
    ))}
  </Grid>
);