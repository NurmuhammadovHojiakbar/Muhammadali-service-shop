import Mundarija from "../../Components/Mundarija/Mundarija";

const Hisobot = () => {

    const RouteList = [
        {
            icon: "",
            text: "",
            path: "/"
        },
    ]

    return (
        <Mundarija title="Hisobot" list={RouteList} />
    );
}
 
export default Hisobot;