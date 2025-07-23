import React from "react";
import Button from "@/components/common/Button";
import { ButtonProps, sizeProps, ShoeProp } from "@/interfaces";
import Header from "@/components/layout/Header";

const buttons: ButtonProps[] = [
  { size: sizeProps.small, shape: ShoeProp.sm },
  { size: sizeProps.medium, shape: ShoeProp.md },
  { size: sizeProps.large, shape: ShoeProp.lg },
];

const About: React.FC = () => (
  <div>
    <Header />
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-6">
    <h1 className="text-3xl font-bold mb-6">About Page</h1>
    <div className="flex space-x-4">
      <Button {...buttons[0]}>Small Rounded-sm</Button>
      <Button {...buttons[1]}>Medium Rounded-md</Button>
      <Button {...buttons[2]}>Large Rounded-full</Button>
    </div>
  </div>
  </div>
);

export default About;