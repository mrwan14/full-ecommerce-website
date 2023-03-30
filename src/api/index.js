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
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/controller.png"),
          Quantity:1
        },
        {
          id: 2,
          Product_Name: "AK-900 Wired Keyboard",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/keyboard.png"),
          Quantity:1

        },
        {
          id: 3,
          Product_Name: "IPS LCD Gaming Monitor",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/screen.png"),
          Quantity:1

        },
        {
          id: 4,
          Product_Name: "S-Series Comfort Chair ",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/chair.png"),
          Quantity:1,

          isTallImage: true,
        },
        {
          id: 4,
          Product_Name: "S-Series Comfort Chair ",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/chair.png"),
          Quantity:1,
          isTallImage: true,
        },
        {
          id: 4,
          Product_Name: "S-Series Comfort Chair ",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/chair.png"),
          Quantity:1,
          isTallImage: true,
        },
        {
          id: 4,
          Product_Name: "S-Series Comfort Chair ",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/chair.png"),
          Quantity:2,
          isTallImage: true,
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
          Product_Name: "The north coat",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/gucci-coat.png"),
          // isTallImage: true,
        },
        {
          id: 2,
          Product_Name: "Gucci duffle bag",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/gucci-bag.png"),
        },
        {
          id: 3,
          Product_Name: "RGB liquid CPU Cooler",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/argb.png"),
        },
        {
          id: 4,
          Product_Name: "Small BookSelf",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/bool-saver.png"),
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
          Product_Name: "Breed Dry Dog Food",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/dryFood.png"),
          isTallImage: true,
        },
        {
          id: 2,
          Product_Name: "CANON EOS DSLR Camera",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/camera.png"),
        },
        {
          id: 3,
          Product_Name: "ASUS FHD Gaming Laptop",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/labtop.png"),
        },
        {
          id: 4,
          Product_Name: "Curology Product Set ",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/shampo.png"),
        },
        {
          id: 5,
          Product_Name: "Kids Electric Car",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/kidsCar.png"),
          isNew: true,
        },
        {
          id: 6,
          Product_Name: "Jr. Zoom Soccer Cleats",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/stars.png"),
        },
        {
          id: 7,
          Product_Name: "GP11 Shooter USB Gamepad",
          Price: Math.floor(Math.random() * 500 + 100),
          ImgSrc: require("../images/controller2.png"),
          isNew: true,
        },
        {
          id: 8,
          Product_Name: "Quilted Satin Jacket",
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
