import React from "react";

export interface carInterface {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: string;
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
}

export interface infoCardProps {
  text: string;
  header: string;
  Icon: React.ReactNode;
}

export interface paginauopnProps {
  totalPages: number;
  currentPage: number;
  onChange: (val: number) => void;
}
