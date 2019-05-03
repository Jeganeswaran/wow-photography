import React from 'react'
import EnterBtn from './EnterBtn';
import WorldofSmiles from "../../assets/img/categories/WorldofSmiles.jpg";
import BirdsEyeView from "../../assets/img/categories/BirdsEyeView.jpg";
import creativeImg from "../../assets/img/categories/CreativeinFocus.jpg";
import actionImg from "../../assets/img/categories/Actionnmotion.jpg";
import JoyofCelebration from "../../assets/img/categories/JoyofCelebration.jpg";
import NaturesMiracle from "../../assets/img/categories/NaturesMiracle.jpg";
import Wanderlust from "../../assets/img/categories/Wanderlust.jpg";
import Tastebuds from "../../assets/img/categories/Tastebuds.jpg";
import Architecture from "../../assets/img/categories/Architecture.jpg";
import AnimalKingdom from "../../assets/img/categories/AnimalKingdom.jpg";
import LifeStyle from "../../assets/img/categories/LifeStyle.jpg";
import HappyStreet from "../../assets/img/categories/HappyStreet.jpg";


const cats = [
    {
        title: "World of smiles",
        image: WorldofSmiles,
        tags: ["Kids smile", "local beauty", "portraits", "smiling faces", "joy & gratitude", "ecstasy", "big smile", "happy faces."]
    },
    {
        title: "Bird’s eye view",
        image: BirdsEyeView,
        tags: ["Aerial photography", "perspective view", "panorama", "high angle", "top angle", "drone shots", "wide angle", "fish-eye."]
    },
    {
        title: "Creative in focus",
        image: creativeImg,
        tags: ["Long exposure", "reflections", "light painting", "star bust", "and low light", "multiple exposures", "motion blur", "light trails."]
    },
    {
        title: "Action n Motion",
        image: actionImg,
        tags: ["Moving shots", "high speed", "action photography", "sports & adventure", "jumping", "dance movements", "skating and wheeling."]
    },
    {
        title: "Joy of celebration",
        image: JoyofCelebration,
        tags: ["Festivals", "joy of colours", "cultural events", "local events", "holidays", "weddings."]
    },
    {
        title: "Nature’s miracle",
        image: NaturesMiracle,
        tags: ["Sunrise & sunset", "Mountains", "rain", "waterfalls", "seasons", "rainbows", "trees", "oceans", "green meadows."]
    },
    {
        title: "Wanderlust",
        image: Wanderlust,
        tags:  ["Road", "rail", "water", "air", "travel & travellers related."]
    },
    {
        title: "Taste buds",
        image: Tastebuds,
        tags:  ["Food styles", "art of food preparation", "street foods", "taste of culture."]
    },
    {
        title: "Architecture",
        image: Architecture,
        tags: ["Indoor & outdoor", "building designs", "infrastructure."]
    },
    {
        title: "Animal kingdom",
        image: AnimalKingdom,
        tags: ["Forest", "Flora & Fauna", "marine species", "wildlife."]
    },
    {
        title: "Lifestyle",
        image: LifeStyle,
        tags: ["Real-life events", "portraits", "Culture", "shopping", "stories about people’s life."]
    },
    {
        title: "Happy Street",
        image: HappyStreet,
        tags: ["Streets & roads", "graffiti", "silhouettes", "market", "transport", "subway", "bridges."]
    },
];

const Categories = () => cats.map((cat,index) => (
    <div 
        style={{ backgroundImage: `url(${cat.image})` }}
        className="category-img" 
        key={"cats" + index}
    >
        <div className="category-title">
            <h2 className="category-head text-center">{cat.title.toUpperCase()}</h2>
            <div className="category-content sourcesans text-center">
                {
                    cat.tags.map((x, index) => (
                        <span key={index}> {x} {cat.tags.length !== index + 1 && " | "}</span>
                    ))  
                }
            </div>
            <EnterBtn 
                className="btn category-btn f-14 mt-4 f-600 montserrat pl-4 pr-4"
            />
        </div>
    </div>
))

export default Categories
