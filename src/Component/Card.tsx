import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";

const MyCardComponent = () => {
  return (
    <Card
      sx={{
        width: "320px",
        backgroundColor: "red",
        alignItems: "center",
        margin: "50px",
      }}>
      <CardMedia
        component="img"
        height="140"
        image="/my-image.jpg"
        alt="My Image"
        sx={{ marginLeft: "120px", alignItems: "center", marginTop: "150px" }}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <h2>History</h2>
        </Typography>
        <Button variant="contained">Exercise</Button>
      </CardContent>
    </Card>
  );
};

export default MyCardComponent;
