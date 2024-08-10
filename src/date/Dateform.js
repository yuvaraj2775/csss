import React, { useState } from 'react'
import America from './America'



const Dateform = () => {

    const [canada, setcanada] = useState(false)

    const handlecanada = () => {
        setcanada(true)
    }
    const handleus = () => {
        setcanada(false)
    }



    const people = [
        {
            name: "tim",
            age: 27,
            pp: 0


        },
        {
            name: "tim",
            age: 27,
            pp: 0


        },
        {
            name: "tim",
            age: 27,
            pp: 0


        },
        {
            name: "tim",
            age: 27,
            pp: 0


        }
    ]

    const players = [

        {
            num: 21,
            forward: "w.helo",
            g: 3,
            a: 4,
            p: 1,
            plus: 2,
            pim: 2

        },
        {
            num: 22,
            forward: "hi",
            g: 2,
            a: 2,
            p: 0,
            plus: 1,
            pim: 1,
        },
        {
            num: 23,
            forward: "bot",
            g: 4,
            a: 5,
            p: 6,
            plus: 7,
            pim: 8

        },
        {
            num: 24,
            forward: "hrpo",
            g: 10,
            a: 20,
            p: 21,
            plus: 22,
            pim: 21

        },
        {
            num: 25,
            forward: "wipro",
            g: 15,
            a: 216,
            p: 22,
            plus: 30,
            pim: 47

        },
    ]





    return (
        <div className='w-3/4 h-full  mt-10 rounded bg-slate-100 '>
            <h1 className='text-4xl ml-5 mb-8' >Game summary</h1>
            <div className='inline-flex pl-7 pt-3 h-14 border-b-2  border-slate-400 w-full bg-slate-200'>
                <div onClick={handlecanada} className='inline-flex  hover:border-b-2 border-black'> <img className='h-6 w-6' src={"./img/ca-flag.jpg"} alt="" />
                    <h1 className='ml-1'  >Canada</h1>
                </div>
                <div onClick={handleus} className='inline-flex ml-6 touch-pan-x hover:border-b-2 border-black'>
                    <img className='w-6 h-6' src={"./img/download.jpeg"} alt="" />
                    <h1 className='ml-1' >United states</h1>

                </div>


            </div>
            {canada ? <div className='flex'>            <div><table className='ml-3  mt-7  bg-white rounded-xl '>
                <th className='text-center h-10   bg-slate-200 '>TEAM STATS</th>
                <th className='text-center h-10   bg-slate-200'></th>
                <th className='text-center h-10   bg-slate-200'></th>

                {
                    people.map((e) => (<tr className='  odd:font-bold	'>
                        <td className='  pl-3  w-28'>{e.name}</td>
                        <td className='  pl-3 w-28 '>{e.pp}</td>
                        <td className='  pl-3  w-28'>{e.age}</td>
                    </tr>
                    ))
                }
            </table>

                <div>
                    <h3 className='ml-6 mt-10 text-gray-500'>SCORING</h3>

                    <div className='ml-6 m-3 inline-flex rounded bg-white p-3' >
                        <div><img className='h-10 w-10 rounded-lg	' src={"./img/th (1).jpeg"} alt="" />
                        </div >
                        <div className='ml-6'> <p>Danial</p>

                            <p> Json chapmam jake sulivan</p>
                            <p>11:20/1st</p>
                        </div>

                    </div>

                </div></div>

                <div className=' mt-7'>
                    <table className='ml-6 bg-white rounded-4xl  w-96 rounded-xl  '>
                        <th className=' h-10  bg-slate-200 '>#</th>
                        <th className=' h-10 bg-slate-200 ' >Forwards</th>
                        <th className=' h-10  bg-slate-200 '>G</th>
                        <th className=' h-10 bg-slate-200 '>A</th>
                        <th className=' h-10  bg-slate-200 '>P</th>
                        <th className=' h-10  bg-slate-200 '>+/-</th>
                        <th className=' h-10  bg-slate-200 '>pim</th>

                        {
                            players.map((e) => (<tr className=''>
                                <td className='h-10  pl-3  w-28'>{e.num}</td>
                                <td className=' h-10 pl-3  w-28'>{e.forward}</td>
                                <td className=' h-10  pl-3  w-28'>{e.g}</td>
                                <td className=' h-10  pl-3  w-28'>{e.a}</td>
                                <td className=' h-10 pl-3  w-28'>{e.p}</td>
                                <td className=' h-10 pl-3  w-28'>{e.plus}</td>
                                <td className=' h-10 pl-3  w-28'>{e.pim}</td>
                            </tr>
                            ))
                        }
                    </table>
                </div></div>
                : <div><America/></div>}

        </div>
    )
}

export default Dateform