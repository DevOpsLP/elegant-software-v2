import React, { useState } from "react";
import { motion } from "framer-motion";
import { Stain } from "./Stain";
interface TabItem {
  id: number;
  tab: string;
  number: string;
  caption: string;
}

interface Thumbnail{
  name: string;
  url: string;
}

interface Products{
  thumbnail: Thumbnail;
  title: string;
  description: string;
  slug: string;
}


interface TabsProps {
  tabItems: TabItem[];
  products: Products[];
}

const Products: React.FC<TabsProps> = ({ tabItems, products }) => {
  const [activeTab, setActiveTab] = useState<string>(
    tabItems[0]?.tab || "" // Default to the first tab
  );

  // Get unique tab names
  const tabs = [...new Set(tabItems.map((item) => item.tab))];

  return (
    <div className="max-w-7xl mx-auto py-16 relative">

      {/* Tabs for Numbers Section */}
      <div className="flex justify-center mb-12">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "Industries" | "Use Cases")}
            className={`px-8 py-4 text-lg md:text-xl font-medium transition-colors duration-300 ${activeTab === tab
                ? "bg-accent-500 text-black"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              } ${index === 0
                ? "rounded-l-lg" // Round the left border of the first button
                : index === tabs.length - 1
                  ? "rounded-r-lg" // Round the right border of the last button
                  : "" // Middle buttons have no rounded edges
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Numbers Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-24">
        {tabItems
          .filter((item) => item.tab === activeTab)
          .map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2 className="text-6xl font-bold text-accent-500">
                {item.number}
              </h2>
              <p className="text-xl text-gray-100 mt-4">{item.caption}</p>
            </motion.div>
          ))}
      </div>

      {/* Heading Section */}
      <div
        className="flex justify-between items-end mb-12 transition-all duration-700 transform"
      >
        <h1 className="text-5xl font-bold tracking-wide">Know about our products</h1>
        <h2 className="text-xl tracking-wider font-light text-white">
          Learn about the best products for your business
        </h2>
      </div>

      {/* Divider */}
      <motion.div
        className="border mb-24 border-b-2 border-primary-700 w-full mx-auto"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      ></motion.div>

      {/* Product Cards Section */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {products.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-center group transition-all duration-700 transform"
          >
            <div
              className="w-full h-[400px] rounded-3xl bg-cover bg-center relative"
              style={{
                backgroundImage: `url('${import.meta.env.STRAPI_URL}${card.thumbnail.url}')`,
              }}
            >
              <div className="p-2 group-hover:bg-black transition-colors bg-accent-500 absolute top-10 right-10 rounded-full">
                <img src="assets/arrow.svg" alt="Arrow" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex justify-between items-center my-4">
              <h2 className="text-2xl font-medium">{card.title}</h2>
              <button className="p-3 bg-accent-500 text-white rounded-3xl transform transition hover:scale-105">
                LEARN MORE
              </button>
            </div>
              <div className="border border-b-2 border-gray-300 w-full mx-auto"></div>
              <p className="text-white mt-6">{card.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;
