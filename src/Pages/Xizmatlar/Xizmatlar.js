import Mundarija from "../../Components/Mundarija/Mundarija"

const Xizmatlar = () => {

    const RouteList = [
        {
            icon: "",
            text: "Yuk beruvchi",
            path: "/xizmatlar/yuk-beruvchi"
        },
        {
            icon: "",
            text: "Viloyat",
            path: "/xizmatlar/viloyat"
        },
        {
            icon: "",
            text: "Xodimlar",
            path: "/xizmatlar/xodimlar"
        },
        {
            icon: "",
            text: "Brendlar",
            path: "/xizmatlar/brendlar"
        },
        {
            icon: "",
            text: "Shahar /xizmatlar/ Tuman",
            path: "/xizmatlar/shahar"
        },
        {
            icon: "",
            text: "Mahsulot qoldig'i",
            path: "/xizmatlar/mahsulot-qoldigi"
        },
        {
            icon: "",
            text: "O'lchov birligi",
            path: "/xizmatlar/olchov birligi"
        },
        {
            icon: "",
            text: "region",
            path: "/xizmatlar/region"
        },
        {
            icon: "",
            text: "Yuk beruvchi",
            path: "/yuk-beruvchi"
        },
    ]

    return (
        <Mundarija title="Xizmatlar" list={RouteList} />
    );
}
 
export default Xizmatlar;