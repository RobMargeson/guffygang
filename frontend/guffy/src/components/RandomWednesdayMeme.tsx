import happy from "@/images/Wednesday/happy-wednesday-wednesday.gif"
import ahhh from "@/images/Wednesday/ahhhh-its-wednesday-my-dudes.gif"
import Image from "next/image";


const dict: {[key: number]: string} = {
    0: happy,
    1: ahhh
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

