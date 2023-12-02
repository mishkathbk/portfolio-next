import Image from "next/image"
import Link from "next/link"
import reactlang from './../../../public/images/react.svg'
import html from './../../../public/images/code-solid.svg'
import css from './../../../public/images/python.svg'
import node from './../../../public/images/node-js.svg'
import express from './../../../public/images/node-js.svg'
import python from './../../../public/images/python.svg'
import address from './../../../public/images/address.png'
type cardtype = {
    lang: String;
    icon: object;
    perc: String;
}


const Cards = ({ lang, icon, perc }: cardtype) => {
    return (
        <div className=" w-64 md:w-72 h-72  border-2 rounded-2xl shadow-lg shadow-blue-500/50 ">
            <div className="py-6">
                <div className="flex flex-col md:flex-raw md:flex-wrap justify-center items-center gap-14">
                    <div className="flex text-center font-sans text-2xl md:text-3xl font-bold">{lang}</div>
                    <div className="">{icon}</div>
                    <div className="flex text-center text-3xl md:text-4xl text-blue-950 font-bold">{perc}</div>
                </div>
            </div>
        </div>
    )
}

const Skills = () => {
    return (
        <div className="flex flex-col mt-14 justify-center w-full sm:mt-[27rem] md:mt 2xl:mt-0" id='skill'>

            <div className='mt-16 md:mt-[6rem]  flex justify-center sticky bg-white sm:static  sm:bg-transparent bg-transparent top-0'>
                <h1 className='text-4xl sm:text-5xl md:text-5xl font-bold  text-blue-800  xs:text-center sm:text-left font-sans' id='skill'><Link href=''>Technical Skills</Link></h1>
            </div>

            <div className="flex  flex-row flex-wrap justify-center mt-32 gap-9">
                <div>
                    <Cards
                        lang="REACT JS"
                        icon={(<Image className="w-10 h-10" src={reactlang} alt='' />)}
                        perc="70%"
                    />
                </div>
                <div>
                    <Cards
                        lang="HTML"
                        icon={(<Image className="w-10 h-10" src={html} alt='' />)}
                        perc="80%"
                    />
                </div>
                <div>
                    <Cards
                        lang="CSS"
                        icon={(<Image className="w-10 h-10" src={css} alt='' />)}
                        perc="70%"
                    />
                </div>
                <div>
                    <Cards
                        lang="NODE JS"
                        icon={(<Image className="w-10 h-10" src={node} alt='' />)}
                        perc="50%"
                    />
                </div>
                <div>
                    <Cards
                        lang="EXPRESS"
                        icon={(<Image className="w-10 h-10" src={express} alt='' />)}
                        perc="50%"
                    />
                </div>
                <div>
                    <Cards
                        lang="PYTHON"
                        icon={(<Image className="w-10 h-10" src={python} alt='' />)}
                        perc="60%"
                    />
                </div>
            </div>


        </div>
    )
}

export default Skills
