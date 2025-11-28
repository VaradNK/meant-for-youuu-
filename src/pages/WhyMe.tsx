import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Coffee, Book, Music, Camera, Check } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: "What I Truly Feel For You💫",
    points: [
      "I choose you with my full heart!",
      "I’m always here even when you had good or bad day!",
      "Your innocence matters more than my anger!",
      "I’m not here for time — I’m here for forever!"
    ]
  },
  {
    icon: Star,
    title: "What I Bring Into Your Life✨",
    points: [
      "A shoulder to lean on!",
      "Love that doesn’t demand!",
      "A safe place where you can be yourself!",
      "Loyalty you never have to question!"
    ]
  },
  {
    icon: Coffee,
    title: "The Way I Love You💝",
    points: [
      "I love you quietly, deeply & honestly!",
      "I stay even when you think you’ll hurt me!",
      "I understand your fears without complaining!",
      "I'll be your painkiller whenever those cramps appear!",
    ]
  },
  {
    icon: Book,
    title: "What You Mean To Me🌻",
    points: [
      "You’re the one I think of first and last!",
      "You matter more than you know!",
      "Your innocence is the most beautiful thing about you!",
      "You don’t have to be perfect for me — just be you!"
    ]
  },
  {
    icon: Music,
    title: "Why Me🧜🏻‍♂️& You🧜🏻‍♀️ Makes Sense",
    points: [
      "We connect in ways words can’t explain!",
      "Even one meeting created something real for me!",
      "Our conversations mean the world to me!",
      "Me & you feels natural, not forced!"
    ]
  },
  {
    icon: Camera,
    title: "At last...My Love, My Promise🧿",
    points: [
      "I’m not leaving, even if you get scared!",
      "I’ll always stay gentle with your heart!",
      "I’ll love you without conditions!",
      "Me & you — I’ll choose it every time!"
    ]
  }
];

export default function WhyMe() {
  return (
    <div className="min-h-screen pt-20 pb-24 px-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 text-center mb-4">
          Why Me?
        </h1>
        <p className="text-center text-black mb-12">
          Someone who understands you, protects your heart, and chooses you every day!!!🫶🏻
        </p>
        
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="w-10 h-10 text-red-500" />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {section.title}
                </h2>
              </div>
              
              <ul className="space-y-3">
                {section.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.2) + (pointIndex * 0.1) }}
                    className="flex items-start gap-2"
                  >
                    <Check className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
