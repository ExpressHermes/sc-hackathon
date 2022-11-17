import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';


export default function Category({fileName, name}) {
  return (
    <Card sx={{ width: 345, "text-align": "center" }}>
      <CardMedia
        component="img"
        height="194"
        image={fileName}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
            {name}
        </Typography>
      </CardContent>
    </Card>
  );
}