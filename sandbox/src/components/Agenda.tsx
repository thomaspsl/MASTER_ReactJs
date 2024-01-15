import { useEffect, useState } from "react";

export default function Wrapper(props: any) {
    const [week, setWeek] = useState<string[]>([]);
    const [date] = useState<Date>(new Date());

    useEffect(() => {
        document.title = props.title;

        const weekArray = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
        setWeek(weekArray);
    }, [props.title]);

    return (
        <>
            <div className="position-fixed w-100 h-100 d-flex">

                <div className="m-auto">

                    <h1 className="text-center pb-3">Agenda</h1>

                    <div className="card">

                        <ul className="pl-0 mb-0 list-group list-group-flush">
                            {week.map((element, index) => (
                                <li key={index} className="text-center list-group-item">
                                    {index === date.getDay() - 1 ? <strong>{element}</strong> : element}
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

            </div>
        </>
    );
}
