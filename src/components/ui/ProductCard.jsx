import {useNavigate } from "react-router";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";


export default function ProductCard({product}) {
    const {_id, imageURL, name, price } = product;
    const navigate = useNavigate();
    console.log("Product Com", product)
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex justify-center ">
        <img className="w-full h-60 border" src={imageURL} />
      </CardHeader>

      <CardContent className="text-center">
        <CardTitle className="text-lg font-medium">{name}</CardTitle>
        <p className="font-semibold text-gray-800 pt-4">৳ {price} </p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          onClick={() => navigate(`/products/${_id}`)}
          variant="outline"
          className="w-full"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
