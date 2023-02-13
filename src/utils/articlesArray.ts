import nailTips from "../images/gel-nail-tips.png";
import moon from "../images/moon.jpg";

type ArticlesProps = {
    title: string;
    description: string;
    picture: string;
    id: number;
};

const articlesArray: ArticlesProps[] = [
    {
        title: "Gel nail tips: what is it and how to use it",
        description:
            "The nail industry does not stand still. We all know about the 'ordinary' forms for nail extensions and have long been accustomed to them. But more recently, a novelty has conquered the Internet - gel tips ! Masters and clients are delighted with them. Today we tell you what these products are and how to use them correctly. Plastic tips have been known for a long time, but the craftsmen had complaints about them. For example, when they were glued, the natural nail plate was damaged, while the plastic did not fasten well and was worn for a short time. They were later replaced by reusable top molds that were easier to work with. But there is no limit to perfection - and technologists of manicure brands have developed gel tips that allow you to get perfect nails in a shorter time. They are made from a soft and flexible gel that has the best performance in the nail extension process.",
        picture: nailTips,

        id: 1,
    },
    {
        title: "Lunar manicure calendar for January 2023",
        description:
            "It is known that the phases of the moon affect our body - this fact is recognized by scientists. Scientific research on this topic can be read in world-famous magazines - The Economist, Greenpeace Magazin, New Scientist, Science News, Le Journal du CNRS and more. Many girls use the lunar calendar to calculate the auspicious time for a haircut or coloring. This method works for nails too! We have created a Lunar manicure calendar so that you can plan your procedures in advance. Each month consists of four lunar phases: Growing Moon (January 1-6, January 22-31). At this time, the nails are actively growing, so there are no restrictions on the procedures: you can cut, paint, build up. Waning Moon (January 8-20). taking the length of the nails is not recommended, because shortening will slow down growth. But during this period, you can safely build up nails. Gel polish is also recommended. As for the pedicure, this is the optimal time to remove corns. Full Moon (January 7) and New Moon (January 21). Unfavorable days for manicure and pedicure - it is better not to do anything with nails. If there is a need for a procedure, we recommend that you do it at home and do not go to the salon.",
        picture: moon,
        id: 2,
    },
    {
        title: "Correction",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + Art design.",
        picture: "asd",
        id: 3,
    },
    {
        title: "How to properly care",
        description:
            "Basic manicure + Gel reinforcements + Gel polish coating + Art design.",
        picture: "asd",
        id: 4,
    },
];

export default articlesArray;
