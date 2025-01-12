import React from "react"
import profileImage from "@/assets/profile.jpg"
import { Link } from "react-router-dom"

function Hero() {
    return (
        <div className="w-screen flex justify-center my-11">
            <main className="w-11/12 h-full xl:w-8/12 md:flex justify-between">
                <section className="md:w-5/6 mr-5">
                    <h1 className="text-2xl font-bold dark:text-slate-100 lg:text-7xl">HI, I'M JUJUN!</h1>
                    <p className="my-10 dark:text-slate-400">I am a passionate tech enthusiast and a
                        proud alum of a vocational high school specializing in computer network
                        technology. My journey into the intricate world of programming began here, where
                        I discovered my love for unraveling complexities and weaving them into seamless
                        connections.</p>
                    <div className="w-full">
                        <Link to={"/curriculum-vitae"}>
                            <button className="bg-violet-700 p-4 rounded-md text-white-snow">View CV</button>
                        </Link>
                        <Link to={"/messages"}>
                            <button className="border-violet-700 border-2 p-4 mx-2 rounded-md text-violet-700">Contact</button>
                        </Link>
                    </div>
                </section>
                <aside className="hidden md:block">
                    <img src={profileImage} alt="__profile" width="288px" lazy />
                </aside>
            </main>
        </div>
    )
}

export default Hero;