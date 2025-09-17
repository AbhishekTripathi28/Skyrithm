import { WeatherData } from "@/types/Types";
import { Card, CardContent, CardDescription,  CardHeader } from "./ui/card";
import { weatherConditions } from "@/data/weatherCode";


function DiscriptionCard({ data }: { data: WeatherData }) {
  const {
    weather: [currentWeather],
    // main: { temp, feels_like, temp_min, temp_max, humidity },
  } = data;
  console.log("currentWeather", currentWeather);

  const {description, suggestion, product} =weatherConditions[currentWeather.id];
 
  return (
    <div>
      <Card>
        <CardHeader>
         
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{suggestion}</p>
        </CardContent>
        <CardContent>
          <p>{product}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default DiscriptionCard;
