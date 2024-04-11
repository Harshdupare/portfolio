"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

import image1 from "../public/img/hd4.jpeg"
import { Objecttivetext } from "./Objectivetext";

const Bg_gradient = () => {
  return (
    <div>
    <BackgroundGradient className="rounded-[22px] max-w-4xl p-4  sm:p-10 h-60  w-96 sm:w-auto sm:h-auto bg-white dark:bg-zinc-900">
        <div className="grid grid-cols-2 gap-4">
            <div>
                <Image
                    src={image1}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-cover object-top rounded-[22px] h-36 sm:h-56  "
                />
            </div>
            <div className="">
                <p className="text-sm sm:text-2xl text-black mt-2 mb-2 dark:text-neutral-200">
                    Harsh Dupare
                </p>

                <p className=" text-sm sm:text-md text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <Objecttivetext/>
                </p>
              
            </div>
        </div> 
    </BackgroundGradient>
  </div>
  )
}

export default Bg_gradient
