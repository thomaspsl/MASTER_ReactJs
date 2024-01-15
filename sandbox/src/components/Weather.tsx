import { useEffect, useState } from "react";

const API_URL =
  "http://api.weatherapi.com/v1/current.json?key=72361dc0de984631970174354230208&q=Annecy";

export default function Wrapper(props: any) {
    const [temperature, setTemperature] = useState<any>(null);

    useEffect(() => {
        document.title = props.title;
        fetchWeather();
    }, [props.title]);

    async function fetchWeather() {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTemperature(data);
    }

    return (
        <>
            <div className="position-fixed w-100 h-100 d-flex">

                <div className="m-auto">

                    <h1 className="text-center pb-3">Agenda</h1>

                        {temperature ? (
                            <div>Il fait {temperature.current.temp_c}°C à Annecy</div>
                        ) : (
                            <div>Chargement...</div>
                        )}

                </div>

            </div>
        </>
      );
      
}