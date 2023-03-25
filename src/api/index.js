import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CgAppleWatch } from "react-icons/cg";
import { HiOutlineCamera } from "react-icons/hi";
import { CiHeadphones } from "react-icons/ci";
import { TbDeviceMobileRotated } from "react-icons/tb";

export const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          Product_Name: "HAVIT HV-G92 Gamepad",
          Product_Model: "Serise 5 SA",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/controller.png"),
        },
        {
          id: 2,
          Product_Name: "Sony ZX330BT",
          Product_Model: "Light Grey",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/keyboard.png"),
        },
        {
          id: 3,
          Product_Name: "Iphone 11",
          Product_Model: "Serious Black ",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/screen.png"),
        },
        {
          id: 4,
          Product_Name: "Iphone 11",
          Product_Model: "Subway Blue",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/chair.png"),
          isTallImage: true,
        },
        {
          id: 5,
          Product_Name: "Macbook Pro 16”",
          Product_Model: "Silver - M1 Pro",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/chair.png"),
          isTallImage: true,
        },
        {
          id: 6,
          Product_Name: "Iphone 11",
          Product_Model: "Product RED",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/chair.png"),
          isTallImage: true,
        },
        {
          id: 7,
          Product_Name: "Iphone 11",
          Product_Model: "Milky White",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/controller.png"),
        },
        {
          id: 8,
          Product_Name: "Iphone 12",
          Product_Model: "Rose Pink",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/controller.png"),
        },
        {
          id: 9,
          Product_Name: "Iphone 12",
          Product_Model: "Navy Blue",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/controller.png"),
        },
      ]);
    }, 0);
  });
};
export const getBestSellingData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          Product_Name: "HAVIT HV-G92 Gamepad",
          Product_Model: "Serise 5 SA",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/controller.png"),
        },
        {
          id: 2,
          Product_Name: "Sony ZX330BT",
          Product_Model: "Light Grey",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/keyboard.png"),
        },
        {
          id: 3,
          Product_Name: "Iphone 11",
          Product_Model: "Serious Black ",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/screen.png"),
        },
        {
          id: 4,
          Product_Name: "Iphone 11",
          Product_Model: "Subway Blue",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/chair.png"),
          isTallImage: true,
        },
        
      ]);
    }, 0);
  });
};
export const getOurProducts = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          Product_Name: "HAVIT HV-G92 Gamepad",
          Product_Model: "Serise 5 SA",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/dryFood.png"),
          isTallImage: true,
          


        },
        {
          id: 2,
          Product_Name: "Sony ZX330BT",
          Product_Model: "Light Grey",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/camera.png"),
          isTallImage: true,

        },
        {
          id: 3,
          Product_Name: "Iphone 11",
          Product_Model: "Serious Black ",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/labtop.png"),
        },
        {
          id: 4,
          Product_Name: "Iphone 11",
          Product_Model: "Subway Blue",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/shampo.png"),
        },
        {
          id: 5,
          Product_Name: "Iphone 11",
          Product_Model: "Subway Blue",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/kidsCar.png"),
          isNew:true,
        },
        {
          id: 6,
          Product_Name: "Iphone 11",
          Product_Model: "Subway Blue",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/stars.png"),
        },
        {
          id: 7,
          Product_Name: "Iphone 11",
          Product_Model: "Subway Blue",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/controller2.png"),
          isNew:true,
        },
        {
          id: 8,
          Product_Name: "Iphone 11",
          Product_Model: "Subway Blue",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/jacket.png"),
        },
        
      ]);
    }, 0);
  });
};
export const getCatogries = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          catogriesName: "Phones",
          catogriesIcon: <CiMobile4 />,
        },
        {
          catogriesName: "Computers",
          catogriesIcon: <HiOutlineComputerDesktop />,
        },
        { catogriesName: "SmartWatch", catogriesIcon: <CgAppleWatch /> },

        { catogriesName: "Camera", catogriesIcon: <HiOutlineCamera /> },
        { catogriesName: "HeadPhones", catogriesIcon: <CiHeadphones /> },
        { catogriesName: "Gaming", catogriesIcon: <TbDeviceMobileRotated /> },
      ]);
    }, 0);
  });
};
