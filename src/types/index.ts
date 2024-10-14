import React from "react";

export interface carInterface {
  id: number;

  car: string;
  car_model: string;
  car_color: string;
  car_model_year: number;
  car_vin: string;
  price: string;
  availability: boolean;
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
