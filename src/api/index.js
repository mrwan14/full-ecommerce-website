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
