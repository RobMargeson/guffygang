import Sunday from "@/app/dailyPages/Sunday"
import Monday from "@/app/dailyPages/Monday"
import Tuesday from "@/app/dailyPages/Tuesday"
import Wednesday from "@/app/dailyPages/Wednesday"
import Thursday from "@/app/dailyPages/Thursday"
import Friday from "@/app/dailyPages/Friday"
import Saturday from "@/app/dailyPages/Saturday"


const DaySwitch = () => {
    const DayOfWeek = new Date().getDay();
    let day;

    switch (DayOfWeek) {
        case 0:
            day = <Sunday />;
            break;
        case 1:
            day = <Monday />;
            break;
        case 2:
            day = <Tuesday />;
            break;
        case 3:
            day = <Wednesday />;
            break;
        case 4:
            day = <Thursday />;
            break;
        case 5:
            day = <Friday />;
            break;
        case 6:
            day = <Saturday />;
            break;
    } 
    return (
        <>
        {day}
        </>
    )
}
export default DaySwitch;


