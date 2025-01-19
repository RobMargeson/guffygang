import happy from "@/images/Wednesday/happy-wednesday-wednesday.gif"
import ahhh from "@/images/Wednesday/ahhhh-its-wednesday-my-dudes.gif"
import testing123 from "@/images/Wednesday/1-2-testfrog.webp"
import bootfrog from "@/images/Wednesday/bootfrogwednesday.jpg"
import panfrog from "@/images/Wednesday/frogpanwebp.webp"
import santafrog from "@/images/Wednesday/Sandafrog.png"
import postedupfrog from "@/images/Wednesday/postedupfrog.jpeg"
import dapperfrog from "@/images/Wednesday/dapperfrog.jpg"
import distinguishedfrog from "@/images/Wednesday/distinguishedfrog.jpg"
import plesantfrog from "@/images/Wednesday/plesantfrog.jpg"
import stickemupfrog from "@/images/Wednesday/stickemupfrog.jpg"

import Image from "next/image";


const dict: {[key: number]: string} = {
    0: happy,
    1: ahhh,
    2: testing123,
    3: bootfrog,
    4: panfrog,
    5: santafrog,
    6: postedupfrog,
    7: dapperfrog,
    8: distinguishedfrog,
    9: plesantfrog,
    10: stickemupfrog,
    }


const randomGen = () => { 
        const value = dict[Math.floor(Math.random() * Object.keys(dict).length)];
        return (
            <div>
              {value ? (
                <Image src={value} alt="Wednesday Meme" className="" />
              ) : (
                <p>No memes available</p>
              )}
            </div>
          );
        };
export default randomGen

