"use client";

import React from "react";
import { Button } from "./ui/button";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  return (
    <div>
      <div>
        <Button variant="outline" disabled={currentPage === 1}>
          <ChevronFirst />
        </Button>
        <Button variant="outline" disabled={currentPage === 1}>
          <ChevronLeft />
        </Button>
        <Button variant="outline" disabled={currentPage === pageCount}>
          <ChevronRight />
        </Button>
        <Button variant="outline" disabled={currentPage === pageCount}>
          <ChevronLast />
        </Button>
      </div>
      <div>
        <p>
          Page{currentPage} Of {pageCount}{" "}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
