import React from "react";
import BreadCrumb from "../components/breadCrumbs/BreadCrumb";
import about1 from "@/app/assets/images/about1.png";
import about2 from "@/app/assets/images/about2.png";
import about3 from "@/app/assets/images/about3.png";
import about2_bg from "@/app/assets/images/about2_BG.png";
import team from "@/app/assets/images/team2.png";
import Image from "next/image";
import { BiLeaf } from "react-icons/bi";
import { FaHeadphonesAlt, FaShippingFast } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaCube } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { TiSocialPinterest } from "react-icons/ti";

import ShopBtn from "../components/button/ShopBtn";
import Link from "next/link";

const AboutUs = () => {
  const aboutUs = [
    "Sed in metus pellentesque.",
    " Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.",
    "Maecenas ut nunc fringilla erat varius.",
  ];
  const services = [
    {
      text: "  100% Organic food",
      subText: " 100% healthy & Fresh food.",
      icon: <BiLeaf size={35} />,
    },
    {
      text: " Great Support 24/7 ",
      subText: " Instant access to Contact",
      icon: <FaHeadphonesAlt size={35} />,
    },
    {
      text: "  Customer Feedback",
      subText: " Our happy customer",
      icon: <GiStarsStack size={35} />,
    },
    {
      text: " 100% Sucure Payment ",
      subText: " We ensure your money is save",
      icon: <HiOutlineShoppingBag size={35} />,
    },
    {
      text: " Free Shipping ",
      subText: "Free shipping with discount ",
      icon: <FaShippingFast size={35} />,
    },
    {
      text: "100% Organic Food  ",
      subText: " Instant access to Contact ",
      icon: <FaCube size={35} />,
    },
  ];

  const teams = [
    {
      img: team,
      name: "John Doe",
      position: "CEO",
      socials: [
        {
          link: "#",
          icon: <FaFacebookF size={25} />,
        },
        {
          link: "#",
          icon: <FaXTwitter size={25} />,
        },
        {
          link: "#",
          icon: <TiSocialPinterest size={25} />,
        },
        {
          link: "#",
          icon: <FaInstagram size={25} />,
        },
      ],
    },
    {
      img: team,
      name: "John Doe",
      position: "Farmer",
      socials: [
        {
          link: "#",
          icon: <FaFacebookF size={25} />,
        },
        {
          link: "#",
          icon: <FaXTwitter size={25} />,
        },
        {
          link: "#",
          icon: <TiSocialPinterest size={25} />,
        },
        {
          link: "#",
          icon: <FaInstagram size={25} />,
        },
      ],
    },
    {
      img: team,
      name: "John Doe",
      position: "Secutity Guard",
      socials: [
        {
          link: "#",
          icon: <FaFacebookF size={25} />,
        },
        {
          link: "#",
          icon: <FaXTwitter size={25} />,
        },
        {
          link: "#",
          icon: <TiSocialPinterest size={25} />,
        },
        {
          link: "#",
          icon: <FaInstagram size={25} />,
        },
      ],
    },
    {
      img: team,
      name: "John Doe",
      position: "Senior Farmer Manager",
      socials: [
        {
          link: "#",
          icon: <FaFacebookF size={25} />,
        },
        {
          link: "#",
          icon: <FaXTwitter size={25} />,
        },
        {
          link: "#",
          icon: <TiSocialPinterest size={25} />,
        },
        {
          link: "#",
          icon: <FaInstagram size={25} />,
        },
      ],
    },
  ];

  return (
    <div className="">
      <BreadCrumb />
      <div className="space-y-12 py-5 p-5 md:p-10 md:px-24 ">
        <section className="grid md:grid-cols-2 gap-5 ">
          <div>
            <p className=" text-3xl md:text-5xl font-semibold text-deepGray">
              100% Trusted Organic Food Store
            </p>
            <p className="text-gray-600 text-base py-2">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <div className="">
            <Image src={about1} alt="farmer Image" className="rounded-2xl" />
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-5">
          <div
            className="bg-center bg-cover  rounded-2xl "
            style={{ backgroundImage: `url(${about2_bg.src})` }}
          >
            <Image src={about2} alt="farmer Image" />
          </div>

          <div>
            <p className=" text-3xl md:text-5xl font-semibold text-deepGray">
              100% Trusted Organic Food Store
            </p>
            <p className="text-gray-600 text-base py-2">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>
            <div className="grid md:grid-cols-2 gap-7 py-4">
              {services.map((item, i) => (
                <div className="flex items-center space-x-3" key={i}>
                  <div className="text-success bg-gray-200 w-fit p-3 rounded-full font-thin">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-deepGray text-lg font-medium">
                      {item.text}
                    </p>
                    <p className=" text-gray-400 text-sm ">{item.subText}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-5 ">
          <div>
            <p className=" text-3xl md:text-5xl font-semibold text-deepGray">
              100% Trusted Organic Food Store
            </p>
            <p className="text-gray-600 text-base py-2">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>

            {aboutUs.map((item, i: number) => (
              <div className="flex items-center space-x-4 py-4" key={i}>
                <p className=" text-success p-1 bg-gray-200 rounded-full w-fit">
                  <IoMdCheckmark size={18} />
                </p>
                <p className="text-sm text-gray-600">{item}</p>
              </div>
            ))}

            <ShopBtn />
          </div>

          <div className="">
            <Image src={about3} alt="farmer Image" className="rounded-2xl" />
          </div>
        </section>

        <section>
          <p className="header ">Our Awesome Team</p>
          <p className="text-center text-gray-500">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </p>

          <div className="grid md:grid-cols-4 gap-5 py-5 ">
            {teams.map((Item, i: number) => (
              <div className="hover:shadow-xl border rounded-xl " key={i}>
                <div
                  className="h-[280px] rounded-md bg-cover bg-center   flex justify-center items-center space-x-5 group "
                  style={{ backgroundImage: `url(${Item.img.src})` }}
                >
                  {Item.socials.map((item, i: number) => (
                    <Link
                      key={i}
                      href={item.link}
                      className="hover:bg-success  text-white hover:p-1 rounded-full hidden group-hover:flex"
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
                <div className="px-5 py-2">
                  <p className="text-deepGray font-semibold text-lg">
                    {Item.name}
                  </p>
                  <p className="text-gray-500 text-base">{Item.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
