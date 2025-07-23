import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
    <h2 className="text-xl font-semibold text-blue-800 mb-2">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default Card;