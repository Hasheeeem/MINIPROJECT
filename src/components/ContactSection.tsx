import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BackgroundBeams } from './ui/background-beams';

const ContactSection = () => {
  return (
    <section id="contact-us" className="relative min-h-screen bg-neutral-950">
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 pt-20"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">Get in Touch</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Let's create something extraordinary together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-neutral-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-200">Location</h3>
                <p className="text-neutral-400">123 Event Street, Creative City, ST 12345</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-neutral-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-200">Phone</h3>
                <p className="text-neutral-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-neutral-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-200">Email</h3>
                <p className="text-neutral-400">contact@eswebsite.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-neutral-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-200">Hours</h3>
                <p className="text-neutral-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-neutral-900/50 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none text-neutral-200 placeholder:text-neutral-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-neutral-900/50 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none text-neutral-200 placeholder:text-neutral-500"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-neutral-900/50 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none text-neutral-200 placeholder:text-neutral-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-neutral-900/50 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none text-neutral-200 placeholder:text-neutral-500 resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default ContactSection;