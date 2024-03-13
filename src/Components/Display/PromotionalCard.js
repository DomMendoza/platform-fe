import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PushableButton from "../Inputs/PushableButton";

export default function PromotionalCard({ title, details, img }) {
  return (
    <Card className="rounded-2xl">
      <CardMedia component="img" alt="green iguana" height="140" image={img} />
      <CardContent>
        <p className="font-[Poppins] text-base lg:text-lg font-bold">
          {" "}
          {title}
        </p>
        <p className="font-[Poppins] text-xs lg:text-sm text-gray-600">
          {" "}
          {details}
        </p>
      </CardContent>
      <CardActions>
        <PushableButton
          text={"Learn More"}
          eventHandler={() => console.log(`Learn More about ${title}`)}
        />
      </CardActions>
    </Card>
  );
}
