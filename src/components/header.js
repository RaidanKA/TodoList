import { useEffect, useState } from "react"
import { quotesText } from "../lib/quotes"

export default function Header() {
    const [text, setText] = useState(quotesText[0])


    const changeText = () => {
        setInterval(() => {
            setText(quotesText[Math.floor(Math.random() * (quotesText.length - 1 - 0 + 1) + 0)])
        }, 2000)
    }

    useEffect(() => {
        console.log('testing')
        // eslint-disable-next-line
    }, [changeText()])

    return (
        <div className="p-5 flex justify-between ">
            <div>
                <div className="text-[30px] text-white font-bold">
                    Good Afternoon
                </div>
                <div className="text-gray-200 font-light">
                    {text}
                </div>
            </div>
            <div>
                a
            </div>
            <button className='absolute bottom-10 right-10 w-[50px] h-[50px] shadow-md hover:bg-indigo-900 rounded-full text-white font-bold items-center flex justify-center bg-indigo-700 '>
                <div className="-mt-1 text-[20px]">
                    +
                </div>
            </button>
        </div>
    )
}