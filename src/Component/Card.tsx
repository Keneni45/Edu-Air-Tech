import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const MyCardComponent = () => {
  return (
    <Card
      sx={{ width: "320px", backgroundColor: "blue", alignItems: "center" }}>
      <CardMedia
        component="img"
        height="140"
        image="/my-image.jpg"
        alt="My Image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyCardComponent;
