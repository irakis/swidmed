import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard(data: {url: string, alt: string, title: string, text: string}) {
  return (
    <Card sx={{ maxWidth: 345, height: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.url}
          alt={data.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}