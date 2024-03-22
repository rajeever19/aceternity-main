"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Parry delivers fast! We worked together developing the UI for a new SPA application using Tailwind. Parry consistently delivered compelling designs with little direction on a very tight deadline. His thoughtful user-first approach helped steer the product in the right direction. Plus he is a joy to work with, I looked forward to seeing him on Zoom every day. Highly recommended.",
    name: "Ammon Morris",
    title: "Engineering Manager @Intuition AI",
  },
  {
    quote:
      "He was very supportive throughout the project and he was acting more of a partner to the project and his advice was always helpful. I look forward to working with him on more projects. Please hire him and you would not regret it.",
    name: "Ifechukwu",
    title: "CEO @School Integral",
  },
  {
    quote: "Getting to work with Parry was great. He is one of those rare people who really knows design inside and out. One thing I really appreciate about Parry is how he handles feedback. It is one thing to be good at what you do but being able to take criticism and use it to make your work even better that is something special. Thats Parry. I am happy to recommend him to any team looking for a top-notch product designer.",
    name: "Mudith Awasthi",
    title: "Frontend Engineer @Invendis",
  },
  {
    quote:
      "Pravneet is extremely professional with his work and committed to the success of his clients. He has ensured all relevant information is collected and work is completed to our satisfaction. Pravneet is a very professional person, knows his job very well. Understands the requirements of its clients, provides suggestions and tries to bring the best in the industry. we wish him luck for his future work.",
    name: "Karthiganesh Durai",
    title: "Chief Quantum Architecht @BosonQ PSI",
  },
  {
    quote:
      "I collaborated with Parry on an AI-based project, and I can confidently say that he is an exceptional product designer. Parry possesses a remarkable combination of technical expertise, a deep understanding of user requirements, and a keen sense for research. He consistently delivered top-notch results, and his ability to work collaboratively made the project a seamless experience. On top of his professional talents, Parry is also a genuinely pleasant individual to work with. I highly recommend Parry for any project or team seeking an accomplished and amiable product designer.",
    name: "Sandun Abeysinghe",
    title: "Technical lead @Pearson India",
  },
];
