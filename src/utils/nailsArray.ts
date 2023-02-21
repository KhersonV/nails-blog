import image_1 from "../images/nails/1.jpg";
import image_2 from "../images/nails/2.jpg";
import image_3 from "../images/nails/3.jpg";
import image_4 from "../images/nails/4.jpg";
import image_5 from "../images/nails/5.jpg";
import image_6 from "../images/nails/6.jpg";
import image_7 from "../images/nails/7.jpg";
import image_8 from "../images/nails/8.jpg";
import image_9 from "../images/nails/9.jpg";
import image_10 from "../images/nails/10.jpg";
import image_12 from "../images/nails/12.jpg";
import image_13 from "../images/nails/13.jpg";
import image_14 from "../images/nails/14.jpg";
import image_15 from "../images/nails/15.jpg";
import image_16 from "../images/nails/16.jpg";
import image_17 from "../images/nails/17.jpg";
import image_18 from "../images/nails/18.jpg";
import image_19 from "../images/nails/19.jpg";
import image_20 from "../images/nails/20.jpg";

export type NailsProps = {
    title: string;
    description: string;
    picture: string;
    id: number;
};

const nailsArray: NailsProps[] = [
    {
        title: "Extension",
        description:
            "Basic manicure + Nail extension + Gel polish coating + Art design.",
        picture: image_1,
        id: 1,
    },
    {
        title: "Extension",
        description: "Basic manicure + Nail extension + Gel polish coating.",
        picture: image_2,
        id: 2,
    },
    {
        title: "Extension",
        description:
            "Basic manicure + Nail extension + Gel polish coating + French Art.",
        picture: image_3,
        id: 3,
    },
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + Art design.",
        picture: image_4,
        id: 4,
    },
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + Art design.",
        picture: image_5,
        id: 5,
    },
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + French Art.",
        picture: image_6,
        id: 6,
    },
    {
        title: "Extension",
        description: "Basic manicure + Nail extension + Gel polish coating.",
        picture: image_7,
        id: 7,
    },
    {
        title: "Extension",
        description:
            "Basic manicure + Nail extension + Gel polish coating + Art design.",
        picture: image_8,
        id: 8,
    },
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating.",
        picture: image_9,
        id: 9,
    },
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + French Art.",
        picture: image_10,
        id: 10,
    },
    
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + Art design.",
        picture: image_12,
        id: 12,
    },
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating.",
        picture: image_13,
        id: 13,
    },
    {
        title: "Extension",
        description:
            "Basic manicure + Nail extension + Gel polish coating + Art design.",
        picture: image_14,
        id: 14,
    },
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + French Art.",
        picture: image_15,
        id: 15,
    },
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + Art design.",
        picture: image_16,
        id: 16,
    },
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + Art design.",
        picture: image_17,
        id: 17,
    },
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + Art design.",
        picture: image_18,
        id: 18,
    },
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + French Art.",
        picture: image_19,
        id: 19,
    },
    {
        title: "Gel reinforcements",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + Art design.",
        picture: image_20,
        id: 20,
    },
];

export const getNailsObject = (array: NailsProps[]) =>
    array.reduce(
        (object, product) => ({ ...object, [product.id]: product }),
        {},
    );

export default nailsArray;
