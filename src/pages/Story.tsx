import React from 'react';
import { Coffee, MapPin, Music, Star, Heart, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'

const timeline = [
  {
    date: "The One Beautiful Meeting✨",
    location: "Brooklyn Food Factory • 16 November 2025",
    description: "You arrived at 10:48 AM and left at 2:25 PM, but somehow those few hours felt so warm and unforgettable...that day still lives so clearly in my mind — your smile, our conversation, and the feeling that time moved a little slower for us!🫶🏻",
    icon: Coffee,
    image: img1
  },
  {
    date: "Late-Night Soft Hours⏳",
    location: "Insta Chats",
    description: "Those late-night chats where time didn’t matter… where we laughed, overshared, talked nonsense, talked deeply, and somehow everything felt PERFECT...those hours were the closest thing to peace!!🌕",
    icon: MapPin,
    image: img2
  },
  {
    date: "Feeling & Hoping🤞🏼",
    location: "Minds",
    description: "You afraid cause you think you might hurt me…but the truth is, I’d still choose me & you every single time dumbo🌻 your fear didn’t push me away — it only showed me how much you mattered to me...rutuuu!!!🤍",
    icon: Music,
    image: img3
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Story() {
  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-3xl mx-auto px-4"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-red-600 mb-4 font-['Montserrat']">
            🎀Bappa's Script🎀
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            From one unexpected moment to every beautiful conversation — this is our little story written by BAPPA!🫰🏻🧿
          </p>
        </motion.div>
        
        <div className="relative">
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-20 last:mb-0 relative"
            >
              <div className="flex flex-col items-center">
                {/* Card Content */}
                <div className="w-full">
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <event.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 font-['Montserrat']">
                          {event.date}
                        </h3>
                        <p className="text-gray-600 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative mb-6 rounded-xl overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.date}
                        className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Heart Icon */}
                <div className="relative mt-8 mb-8">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg z-10 hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-red-200 rounded-full blur-lg opacity-50 -z-10" />
                </div>

                {/* Arrow Connection */}
                {index !== timeline.length - 1 && (
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ArrowDown className="w-8 h-8 text-red-400 animate-bounce" />
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}