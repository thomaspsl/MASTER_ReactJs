import { useEffect, useState } from "react";

import Button from "./Button";

export default function Wrapper(props: any) {
    const [inputValue, setInputValue] = useState<string>("");
    const [word, setWord] = useState<number>(0);
    const [timer, setTimer] = useState<number>(0);
    const [started, setStarted] = useState<boolean>(false);
    const [intervalId, setIntervalId] = useState<any>();
    const [phrase] = useState<string>("Pour apprendre rapidement à taper à toute vitesse, entrainez-vous fréquemment en adoptant la bonne technique. Vous pourrez ainsi bâtir une mémoire musculaire qui guidera vos gestes sans le faire consciemment. En quelques semaines, vous observerez déjà des progrès.");
    
    useEffect(() => {
        document.title = props.title;
        setWord(countWords(phrase));
    }, [props.title, phrase]);

    function countWords(inputString: string) {
        const trimmedString = inputString.trim();
        const wordsArray = trimmedString.split(/\s+/);
        return wordsArray.length;
    }

    function start() {
        if (!started) {
            setIntervalId(setInterval(incrementer, 1000));
            setStarted(true);
        }
    }

    function incrementer() {
        setTimer((prevTimer) => prevTimer + 1);
    }

    function restart() {
        clearInterval(intervalId)
        setStarted(false);
        setTimer(0);
        setInputValue("");
        document.querySelector(".result")?.classList.remove('user-select-none', 'bg-secondary', 'text-white');
        document.querySelector(".log")?.classList.add('d-none');
        var textarea = document.querySelector(".result") as HTMLTextAreaElement;
        if (textarea) textarea.readOnly = false;
    }

    function checkWin(event: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (event.key === "Enter" && inputValue === phrase) {
            event.preventDefault();
            clearInterval(intervalId);
            document.querySelector(".result")?.classList.add('user-select-none', 'bg-secondary', 'text-white');
            document.querySelector(".log")?.classList.remove('d-none');
            var textarea = document.querySelector(".result") as HTMLTextAreaElement;
            if (textarea) { 
                textarea.blur(); 
                textarea.readOnly = true;
            }
        }
    }

    return (
    <>
        <div className="position-fixed w-100 h-100 d-flex">

            <div className="m-auto w-50">

                <h1 className="text-center pb-3">Typer</h1>

                <div className="d-flex justify-content-around">

                    <h3 className="text-center pb-3 time">Time : {timer}</h3>

                    <h3 className="text-center pb-3 word">Words : {word}</h3>

                </div>

                <div className="card p-3 w-100 mb-3 user-select-none bg-secondary text-white">
                    {phrase}
                </div>

                <textarea
                    className="card p-3 w-100 result"
                    placeholder="Start typing..."
                    value={inputValue}                    
                    rows={3}
                    onChange={(e) => {
                        start(); 
                        setInputValue(e.target.value);
                    }}
                    onKeyDown={checkWin}
                />

                <div className="text-center pt-3 d-none log">

                    <strong>It's win!</strong>

                </div>
                
                <div className="text-center">

                    <Button text="Restart" color="btn-danger" onClick={restart} />

                </div>

            </div>

        </div>
    </>
  );
}
