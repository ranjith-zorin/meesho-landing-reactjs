import returns from "../assets/returns.svg";
import cod from "../assets/cod.svg";
import lowPrice from "../assets/low-price.svg";
import img1 from "../assets/img-1.webp";
import img2 from "../assets/img-2.webp";
import img3 from "../assets/img-3.webp";
import img4 from "../assets/img-4.webp";
import img5 from "../assets/img-5.webp";
import img6 from "../assets/img-6.webp";
import img7 from "../assets/img-7.webp";
import img8 from "../assets/img-8.webp";

import brdimg1 from "../assets/brd-img-1.webp";
import brdimg2 from "../assets/brd-img-2.webp";
import brdimg3 from "../assets/brd-img-3.webp";
import brdimg4 from "../assets/brd-img-4.webp";
import brdimg5 from "../assets/brd-img-5.webp";
import brdimg6 from "../assets/brd-img-6.webp";
import brdimg7 from "../assets/brd-img-7.webp";
import brdimg8 from "../assets/brd-img-8.webp";

import popimg1 from "../assets/pop-img-1.webp";
import popimg2 from "../assets/pop-img-2.webp";
import popimg3 from "../assets/pop-img-3.webp";
import popimg4 from "../assets/pop-img-4.webp";
import popimg5 from "../assets/pop-img-5.webp";
import popimg6 from "../assets/pop-img-6.webp";
import popimg7 from "../assets/pop-img-7.webp";
import popimg8 from "../assets/pop-img-8.webp";

import mkgimg1 from "../assets/mkg-img-1.webp";
import mkgimg2 from "../assets/mkg-img-2.webp";
import mkgimg3 from "../assets/mkg-img-3.webp";
import mkgimg4 from "../assets/mkg-img-4.webp";
const navCategories = [
  { name: "Popular" },
  { name: "Kurti,Saree & Lehenga" },
  { name: "Women Western" },
  { name: "Lingerie" },
  { name: "Men" },
  { name: "Kids & Toys" },
  { name: "Home & Kitchen" },
  { name: "Beauty & Health" },
  { name: "Jewellery & Accessories" },
  { name: "Bags & Footwear" },
  { name: "Electronics" },
  { name: "Watches" },
  { name: "Sports & Fitness" },
  { name: "Car & Motorbike" },
  { name: "Office Supplies" },
  { name: "Grocery" },
  { name: "Books" },
  { name: "Pet Supplies" },
  { name: "Musical Instruments" },
];

const features = [
  { icon: returns, text: "7 Days Easy Return" },
  { icon: cod, text: "Cash on Delivery" },
  { icon: lowPrice, text: "Lowest Prices" },
];

const heroCategories = [
  { name: "Ethinic Wear", img: img1 },
  { name: "Western Dresses", img: img2 },
  { name: "Menswear", img: img3 },
  { name: "Footwear", img: img4 },
  { name: "Home Decor", img: img5 },
  { name: "Beauty", img: img6 },
  { name: "Accessories", img: img7 },
  { name: "Grocery", img: img8 },
];

const brands = [
  { name: "Personal Care", img: brdimg1 },
  { name: "Electronics", img: brdimg2 },
  { name: "Makeup", img: brdimg8 },
  { name: "Smart Phones", img: brdimg4 },
  { name: "Men Perfume", img: brdimg5 },
  { name: "Bags", img: brdimg5 },
  { name: "Footwear", img: brdimg6 },
  { name: "Books", img: brdimg7 },
];
const popularBrands = [
  popimg1,
  popimg2,
  popimg3,
  popimg4,
  popimg5,
  popimg6,
  popimg7,
  popimg8,
];
const marketing = [
  { name: "Trending Now", img: mkgimg1 },
  { name: "Budget Buys", img: mkgimg2 },
  { name: "Top Rated Picks", img: mkgimg3 },
  { name: "Daily Essentials", img: mkgimg4 },
];
const meeshowcategories = [
  {
    category: "Category",
    subCategory: [
      "Sarees",
      "Kurtis",
      "Kurta Sets",
      "Dress Materials",
      "Lehengas",
      "Blouses",
      "Gowns",
      "Women Western Wear",
      "Women Innerwear & Nightwear",
      "Men Fashion",
      "Kids",
      "Footwear",
      "Jewellery",
      "Bags & Luggage",
      "Beauty & Personal Care",
      "Home Decor",
      "Kitchen & Appliances",
      "Electronics",
      "Grocery",
      "Health & Fitness",
    ],
    show: true,
  },
  {
    category: "Gender",
    subCategory: ["Boys", "Girls", "Men", "Women"],
    show: false,
    direct: "horizontal",
  },

  {
    category: "Color",
    subCategory: [
      "Navy Blue",
      "Charcoal Gray",
      "Burgundy",
      "Olive Green",
      "Mustard Yellow",
      "Maroon",
      "Teal",
      "Beige",
      "Cream",
      "Khaki",
      "Rust",
      "Mint Green",
      "Lavender",
      "Peach",
      "Coral",
      "Sky Blue",
      "Emerald Green",
      "Dusty Rose",
      "Camel",
      "Off White",
    ],
    show: false,
    direct: "horizontal",
  },
  {
    category: "Pattern",
    subCategory: [
      "3d Printed",
      "Aari Work",
      "Abstract Print",
      "Animal Print",
      "Block Print",
      "Camouflage",
      "Cartoon Print",
      "Checked",
      "Chikankari",
      "Colorblocked",
      "Conversational",
      "Dyed/ Washed",
      "Embellished",
      "Embroidered",
      "Ethnic Motifs",
      "Floral Print",
      "Frills",
      "Geometric",
      "Geometric Design",
      "Graphic",
      "Jaipuri",
      "Lace",
      "Mirror Work",
      "Moti Work",
      "Placement Print",
      "Polka Dots",
      "Printed",
      "Quilted",
      "Quirky",
      "Solid",
      "Stripe",
      "Striped",
      "Textured",
      "Tie And Dye",
      "Woven Design",
      "Zari Embroidered",
      "Zari Work",
    ],
  },
  {
    category: "Sleeve",
    subCategory: [
      "Long Sleeves",
      "Bell Sleeves",
      "Cap Sleeves",
      "Cuffed Sleeves",
      "Cut out Sleeves",
      "Extended Sleeves",
      "Flared Sleeves",
      "Flutter Sleeves",
      "Puff Sleeves",
      "Regular Sleeves",
      "Short Sleeves",
      "Shoulder Strap",
      "Sleeveless",
      "Slit Sleeves",
      "Three-quarter Sleeves",
    ],
    show: false,
    direct: "horizontal",
  },
];

export {
  navCategories,
  features,
  heroCategories,
  brands,
  popularBrands,
  marketing,
  meeshowcategories,
};
