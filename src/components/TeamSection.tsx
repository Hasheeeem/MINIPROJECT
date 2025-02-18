import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Event Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787',
  },
  {
    name: 'Michael Chen',
    role: 'Creative Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787',
  },
  {
    name: 'David Kim',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787',
  },
];

const TeamSection = () => {
  return (
    <section id="our-team" className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our talented professionals bring creativity and expertise to every event
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl aspect-w-3 aspect-h-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex gap-4 justify-center mb-4">
                      <motion.a
                        whileHover={{ y: -2 }}
                        className="text-white hover:text-gray-300"
                        href="#"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -2 }}
                        className="text-white hover:text-gray-300"
                        href="#"
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -2 }}
                        className="text-white hover:text-gray-300"
                        href="#"
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;