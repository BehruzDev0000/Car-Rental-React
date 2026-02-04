import { createContext, useState } from "react";
import { CarOne ,CarTwo,CarThree, FordFlesta, NissanVersa, ToyotaCorolla, NissanRogue, ChevyTraverse, NissanAltima, MercedesSClass, LamborghiniUrus, MercedesG63, FordTransit, ChryslerPacifica, ChevySilverado, FordTransitTwo, FordTransitThree, MercedesBenz,RollsRoyce, RentalBoy} from "../assets/images";
import { RonaldIcon, SavannahIcon,KristinIcon, NissanIcon, DodgeIcon, HyundaiIcon,JeepIcon, ToyotaIcon, FordIcon, PcIcon, SecurityIcon, UserTypeIcon, WalletIcon, FlaskIcon, HeartIcon, FolderSecureIcon,InstagramIcon, TwitterIcon, FacebookIcon, WhatsAppIcon } from "../assets/icons";
export const Context = createContext();
const navList=[
    {id:1,name:'Categories',childrens:[]},
    {id:2,name:'About Us',childrens:[
        {id:3,name:'News'},
        {id:4,name:'Careers'},
        {id:5,name:'Locations'}
    ]},
    {id:6,name:'Help Center',childrens:[
        {id:7,name:'FAQ'},
        {id:8,name:'Contact Us'}
    ]}
]
const cards=[
    {id:1,title:'Compact cars' ,text:'Rent cars as you are comfortable and where you are comfortable.',image:CarOne},
    {id:2,title:'Sports cars' ,text:'Rent cars as you are comfortable and where you are comfortable.',image:CarTwo},
    {id:3,title:'Vans' ,text:'Rent cars as you are comfortable and where you are comfortable.',image:CarThree}
]

 const carsCategories = [
  { id: 1, key: "compact", label: "Compact" },
  { id: 2, key: "sports", label: "Sports cars" },
  { id: 3, key: "vans", label: "Vans" },
];

 const allCars = [
  {
    id: 1,
    categoryId: 1,
    title: "Ford Fiesta",
    type: "Economy Car",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: FordFlesta,
  },
  {
    id: 2,
    categoryId: 1,
    title: "Nissan Versa",
    type: "Compact Car",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image:NissanVersa,
  },
  {
    id: 3,
    categoryId: 1,
    title: "Toyota Corolla",
    type: "Mid-size Car",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: ToyotaCorolla,
  },
  {
    id: 4,
    categoryId: 1,
    title: "Nissan Rogue",
    type: "Mid-size SUV",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: NissanRogue,
  },
  {
    id: 5,
    categoryId: 1,
    title: "Chevy Traverse",
    type: "Full-size SUV",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image:ChevyTraverse,
  },
  {
    id: 6,
    categoryId: 1,
    title: "Nissan Altima",
    type: "Full-size Car",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: NissanAltima,
  },

  {
    id: 7,
    categoryId: 2,
    title: "Royce rolls ghost",
    type: "Full-size Car",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: RollsRoyce,
  },
  {
    id: 8,
    categoryId: 2,
    title: "Mercedes s class",
    type: "Full-size Car",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image:MercedesSClass,
  },
  {
    id: 9,
    categoryId: 2,
    title: "Lamborghini urus",
    type: "Mid-size Car",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: LamborghiniUrus,
  },
  {
    id: 10,
    categoryId: 2,
    title: "Mercedes g63 amg",
    type: "Mid-size SUV",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: MercedesG63,
  },

  {
    id: 11,
    categoryId: 3,
    title: "15-Passenger Ford Transit",
    type: "Full-size Car",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: FordTransit,
  },
  {
    id: 12,
    categoryId: 3,
    title: "Chrysler Pacifica",
    type: "Full-size Car",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: ChryslerPacifica,
  },
  {
    id: 13,
    categoryId: 3,
    title: "Chevy Silverado 4500HD",
    type: "Mid-size Car",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: ChevySilverado,
  },
  {
    id: 14,
    categoryId: 3,
    title: "12-Passenger Ford Transit",
    type: "Mid-size SUV",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: FordTransitTwo,
  },
  {
    id: 15,
    categoryId: 3,
    title: "15-Passenger Ford Transit",
    type: "Mid-size SUV",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: FordTransitThree,
  },
  {
    id: 16,
    categoryId: 3,
    title: "Mercedes-Benz Sprinter",
    type: "Mid-size SUV",
    seats: 5,
    transmission: "Automatic",
    age: "21+ Years",
    fuel: "1.1t / 2.5 km",
    image: MercedesBenz,
  },
];
const reviewsList=[
    {
        id:1,
        name:"Savannah Nguyen",
        email:"savannahnguyen@gmail.com",
        desc:"Sagittis sed tortor, elementum vitae varius sodales consectetur. Vitae arcu ut morbi bibendum ullamcorper feugiat. Venenatis hendrerit cursus egestas sit ornare nunc vulputate aliquam sapien. Pulvinar nunc consectetur nibh consectetur mollis mauris est mauris amet. Sed hac vehicula id et dui morbi quam pulvinar condimentum. Senectus sed varius interdum nunc, arcu vulputate massa.",
        image:SavannahIcon,
        rating:5
    },{
        id:2,
        name:"Ronald Richards",
        email:"ronaldrichards@gmail.com",
        desc:"Placerat pulvinar in amet sem id gravida nisi leo. A dignissim est pellentesque mi quisque vel mi ut. Porttitor blandit auctor odio a ornare felis tortor bibendum molestie. ",
        image:RonaldIcon,
        rating:4.5
    },
    {
        id:3,
        name:"Kristin Watson",
        email:"kristinwatson@gmail.com",
        desc:"Id adipiscing vulputate arcu pretium dignissim. Felis vulputate tellus velit consectetur. Congue convallis aliquam eget ullamcorper quam pellentesque cursus. Dictumst mauris ac, quis orci morbi ultrices faucibus volutpat mauris. Bibendum sed ut lectus facilisi amet orci. Interdum massa orci urna id ac cras arcu.",
        rating:5,
        image: KristinIcon

    }
]

const AllBrands=[
  {id:1,name:'Ford',image:<FordIcon/>},
  {id:2,name:'Nissan',image:<NissanIcon/>},
  {id:3,name:'Toyota',image:<ToyotaIcon/>},
  {id:4,name:'Dodge',image:<DodgeIcon/>},
  {id:5,name:'Hyundai',image:<HyundaiIcon/>},
  {id:6,name:'Jeep',image:<JeepIcon/>},
]

const serviceCards=[
  {
    id:1,
    title:"Book online, pay online",
    textLength:211,
    text:"Complete the booking process A-Z, with our easy online system",
    image:<PcIcon/>
  },
  {
    id:2,
    title:"Guaranteed car reservation",
    textLength:260,
    text:"When you book with Car rental, you can be confident your car will be waiting for you",
    image:<SecurityIcon/>
  },
  {
    id:3,
    title:"Unparalleled customer service",
    textLength:278,
    text:"We're here to help. We pride ourselves in our customer service",
    image:<UserTypeIcon/>
  },
  {
    id:4,
    title:"No reservation or booking fees",
    textLength:288,
    text:"No cancellation fees if cancelled 24 hours prior to booking time",
    image:<WalletIcon/>
  },
]
const safetyItems={
    id:1,
    title:"Car rental keeps you safe",
    text:"The safety of our employees and renters is our number one priority. In addition to being confident your vehicle is cleaned and sanitized every time you rent, you can also feel confident that we will take every opportunity to enhance the health and safety measures currently practiced in our operations.",
    image:RentalBoy,
    items:[
      {
        id:2,
        text:"Every car is thoroughly sanitized and cleaned",
        image:FlaskIcon
      },
      {
        id:3,
        text:"All of our employees wear masks",
        image:HeartIcon
      },
      {
        id:4,
        text:"We stay up to date with all protocol from the CDC",
        image:FolderSecureIcon
      }
    ]
  }
const FooterTopList = [
  {
    id: 1,
    name: "Main",
    link: "/",
    hrefs: [
      { id: 11, name: "My Bookings", link: "/my-bookings" },
      { id: 12, name: "Reservation", link: "/reservation" },
    ],
  },

  {
    id: 2,
    name: "Categories",
    link: "/categories",
    hrefs: [
      { id: 21, name: "Compact", link: "/categories/compact" },
      { id: 22, name: "Sports cars", link: "/categories/sports" },
      { id: 23, name: "Vans", link: "/categories/vans" },
    ],
  },

  {
    id: 3,
    name: "Company",
    link: "/company",
    hrefs: [
      { id: 31, name: "About us", link: "/about" },
      { id: 32, name: "Careers", link: "/careers" },
      { id: 33, name: "News", link: "/news" },
      { id: 34, name: "Contact us", link: "/contact" },
    ],
  },

  {
    id: 4,
    name: "Our Locations",
    link: "/locations",
    hrefs: [
      { id: 41, name: "Our locations", link: "/locations" },
      { id: 42, name: "4140 Parker Rd. Allentown", link: "/locations/allentown" },
      { id: 43, name: "4517 Washington Ave.", link: "/locations/washington" },
    ],
  },
];
const FooterBottomList = [
  {
    id: 1,
    name: "Contact",
    hrefs: [
      { id: 11, type: "phone", name: "+1 855 420 0000" },
      { id: 12, type: "email", name: "carrental@gmail.com" },
    ],
  },

  {
    id: 2,
    name: "Hours of operation",
    hrefs: [
      { id: 21, type: "time", name: "8:00 - 21:00 Mon-Sat" },
      { id: 22, type: "time", name: "9:00 - 15:00 Sundays" },
    ],
  },

  {
    id: 3,
    name: "Social network",
    icons: [
      { id: 31, name: "Instagram", icon: InstagramIcon, link: "https://instagram.com" },
      { id: 32, name: "Twitter", icon: TwitterIcon, link: "https://twitter.com" },
      { id: 33, name: "Facebook", icon: FacebookIcon, link: "https://facebook.com" },
      { id: 34, name: "WhatsApp", icon: WhatsAppIcon, link: "https://wa.me/123456789" },
    ],
  },
];

export const CarRental = ({ children }) => {
  const [categories] = useState(carsCategories);
  const [cars, setCars] = useState(allCars);
  const [activeCategoryId, setActiveCategoryId] = useState(1);


 const deleteCar = (id) => {
    setCars((prev) => prev.filter((car) => car.id !== id));
  };
const createCar = (newCar) => {
  setCars((prev) => [newCar, ...prev]);
};

    return (
        <Context.Provider value={{serviceCards,navList,cards,AllBrands,categories,cars,reviewsList,activeCategoryId,setActiveCategoryId,safetyItems,FooterBottomList,FooterTopList,deleteCar,createCar}}>
            {children}
        </Context.Provider>
    )
}
