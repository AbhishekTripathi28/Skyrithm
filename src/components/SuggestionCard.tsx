import { WeatherData } from "@/types/Types";
import { weatherConditions } from "@/data/weatherCode";
import { Card, CardContent, CardTitle } from "./ui/card";
function DiscriptionCard({ data }: { data: WeatherData }) {
  const {
    weather: [currentWeather],
    // main: { temp, feels_like, temp_min, temp_max, humidity },
  } = data;
  // console.log("currentWeather", currentWeather);

  const { suggestion, product, songs } = weatherConditions[currentWeather.id];

  return (
    <Card
      className="overflow-hidden w-full 
    "
    >
      <CardContent className="">
        <div className="relative flex  justify-center items-start px-2  flex-col gap-4">
          <div className="space-y-2">
            {/* suggestion div */}
            <CardTitle>Activity</CardTitle>
            <div className="grid md:grid-cols-2 justify-between  gap-2 px-2 py-2 ">
              {suggestion.map((item, index) => (
                <p
                  key={index}
                  className="text-base text-muted-foreground  px-2 relative pl-2 before:content-['•'] before:absolute before:left-0"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-2 w-full">
            {/* product div */}
            <CardTitle className="">Recommended Product</CardTitle>
            <div className="overflow-x-auto no-scrollbar flex rounded-lg pr-4">
              <div className=" flex gap-4 px-2 py-4  ">
                {product.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl flex-shrink-0 border-1 p-1
                "
                    onClick={() => window.open(item.productImage, "_blank")}
                  >
                    <img
                      className="h-[100px] w-[170px] object-cover rounded"
                      src={item.productImage}
                      alt={item.productAltText}
                      onError={(e) => {
                        e.currentTarget.onerror = null; // prevents infinite loop
                        e.currentTarget.src =
                          "/fpo-lifestyle-2-1800x900@2x.png";
                      }}
                    />
                    <p className="text-sm mt-1 text-center text-muted-foreground">
                      {item.productName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 w-full">
            {/* product div */}
            <CardTitle className="">Recommended Songs</CardTitle>
            <div className="overflow-x-auto no-scrollbar flex rounded-lg pr-4">
              <div className=" flex gap-4 p-2 ">
                {songs.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0  p-1 rounded-full grid md:grid-cols-2 justify-center items-center  gap-2
                "
                    onClick={() => window.open(item.link)}
                  >
                    <img
                      className="h-[100px] w-[100px] object-fill rounded-full"
                      src="/song-placeholder-2.png"
                    />
                    <div>
                      <p className="text-sm mt-1 text-center">
                        {item.songName}
                      </p>
                      <p className="text-sm mt-1 text-center text-muted-foreground">
                        {item.artist}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DiscriptionCard;
