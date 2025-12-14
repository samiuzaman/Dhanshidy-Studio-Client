import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

export default function ServiceCard({image, title, detail}) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="">
        <img className="w-full h-56 border" src={image} />
      </CardHeader>

      <CardContent className="text-center">
        <CardTitle className="text-xl font-semibold text-green-600 mb-3">{title}</CardTitle>
        <CardDescription>
          {detail}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
