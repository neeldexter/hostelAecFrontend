import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function TouristPlacesCard({items}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={items.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {items.title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            {items.subTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign: "justify"}}>
            {items.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}