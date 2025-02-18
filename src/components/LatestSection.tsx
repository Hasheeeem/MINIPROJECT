import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroParallax } from "./ui/hero-parallax";

const events = [
  {
    title: "Corporate Gala",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    category: "Corporate",
  },
  {
    title: "Wedding Celebration",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
    category: "Wedding",
  },
  {
    title: "Tech Conference",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
    category: "Conference",
  },
  {
    title: "Fashion Show",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2076",
    category: "Fashion",
  },
  {
    title: "Music Festival",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070",
    category: "Festival",
  },
  {
    title: "Product Launch",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012",
    category: "Launch",
  },
  {
    title: "Charity Gala",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070",
    category: "Charity",
  },
  {
    title: "Art Exhibition",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070",
    category: "Art",
  },
  {
    title: "Food Festival",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070",
    category: "Food",
  },
  {
    title: "Sports Event",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070",
    category: "Sports",
  },
  {
    title: "Business Summit",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070",
    category: "Business",
  },
  {
    title: "Cultural Festival",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070",
    category: "Cultural",
  },
  {
    title: "Educational Conference",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070",
    category: "Education",
  },
  {
    title: "Wellness Retreat",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070",
    category: "Wellness",
  },
  {
    title: "Gaming Convention",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071",
    category: "Gaming",
  },
];

const LatestSection = () => {
  const { scrollYProgress } = useScroll({
    target: document.getElementById("latest-works"),
    offset: ["start start", "end start"],
  });

  // Fades the header out as the user scrolls
  const opacity = useTransform(scrollYProgress, [7, 15], [1, 1]);
  // Moves the header up slightly as the user scrolls
  const translateY = useTransform(scrollYProgress, [10, 20], [0, -200]);

  return (
    <section id="latest-works" className="relative w-full bg-black overflow-hidden">
      {/* Left-aligned Overlay Text (Header) */}
      <motion.div
        style={{ opacity, y: translateY }} // Apply fade-out + scroll effect
        className="absolute top-80 left-10 z-[40] text-left text-white w-full max-w-lg px-6"
      >
        <h2 className="text-6xl font-bold mb-6">Our Work</h2>
        <p className="text-2xl text-gray-300">
          Explore our portfolio of successful events that showcase our creativity and expertise.
        </p>
      </motion.div>

      {/* HeroParallax (Stays Behind) */}
      <div className="relative z-10">
        <HeroParallax products={events} />
      </div>
    </section>
  );
};

export default LatestSection;