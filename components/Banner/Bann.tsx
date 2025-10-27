interface beansText {
    headingh2: string;
    span: string;
    uppertext? : string;
    description? : string;
}


import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function BannerBeams({uppertext, headingh2, span ,description}: beansText) {
    return (
        <BackgroundBeamsWithCollision  className ="bg-black" >
                <div className="flex flex-col gap-7" >

            <p className=" max-w-3xl mx-auto leading-relaxed text-cyan-400 text-lg font-medium " > {uppertext} </p>
            <h2 className="!text-4xl  md:!text-5xl lg:!text-7xl relative z-20 font-bold text-center text-white dark:text-white font-sans tracking-tight">
                {headingh2}
                <br />
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 [text-shadow:0_0_rgba(0,0,0,0.1)] max-sm:justify-center max-sm:flex max-sm:text-center flex-wrap w-auto max-w-full">
                        <span>{span}</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 py-4 max-sm:justify-center max-sm:flex max-sm:text-center flex-wrap w-auto max-w-full">
                        <span>{span}</span>
                    </div>
                    </div>

            </h2>
                <p className="max-w-3xl text-white text-center leading-loose"> {description} </p>

                </div>
        </BackgroundBeamsWithCollision>
    );
}





