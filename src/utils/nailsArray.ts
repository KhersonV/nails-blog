// import image_1 from "../images/nails/1.jpg";
// import image_2 from "../images/nails/2.jpg";
// import image_3 from "../images/nails/3.jpg";
// import image_4 from "../images/nails/4.jpg";
// import image_5 from "../images/nails/5.jpg";
// import image_6 from "../images/nails/6.jpg";

type NailsProps = {
    title: string;
    description: string;
    picture: string;
    id: number;
};
 


const nailsArray: NailsProps[] = [
    {
        title: "iPhone 13 Pro",
        description: "This is ",
        picture: "../images/nails/1.jpg",
        id: 1,
    },
    {
        title: "iPhone 14 Pro",
        description: "This is iPhone 14 Pro",
        picture: "../images/nails/2.jpg",
        id: 2,
    },
    {
        title: "iPhone 14 Pro",
        description: "This is iPhone 14 Pro",
        picture: "../images/nails/3.jpg",
        id: 3,
    },
    {
        title: "iPhone 14 Pro",
        description: "This is iPhone 14 Pro",
        picture: "../images/nails/4.jpg",
        id: 4,
    },
    {
        title: "iPhone 14 Pro",
        description: "This is iPhone 14 Pro",
        picture: "../images/nails/5.jpg",
        id: 5,
    },
    {
        title: "iPhone 14 Pro",
        description: "This is iPhone 14 Pro",
        picture: "../images/nails/6.jpg",
        id: 6,
    },
];

export default nailsArray;
