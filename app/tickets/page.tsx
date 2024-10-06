import React from "react";
import prisma from "@/prisma/db";
import DataTable from "./DataTable";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/Pagination";
import { Status, Ticket } from "@prisma/client";
import StatusFilter from "@/components/StatusFilter";

export interface SearchParams {
  status: Status;
  page: string;
  orderBy : keyof Ticket;
}

const Tickets = async ({ searchParams }: { searchParams: SearchParams }) => {

  const pageSize = 4;
  const page = parseInt(searchParams.page) || 1;
  
  const orderBy = searchParams.orderBy ? searchParams.orderBy : "createdAt";



  const statuses = Object.values(Status);

  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  let where = {};

  console.log("status", status);

  if (status) {
    where = { status }
  } else {
    where = {
      NOT: [{ status: "CLOSED" as Status }]
    }
  }

  const ticketCount = await prisma.ticket.count({ where });
  const tickets = await prisma.ticket.findMany({
    where,
    orderBy: {
      [orderBy]: "desc",
    },  // orderBy: { createdAt: "asc" },
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

  // console.log("hello world");

  return (
    <div>
      <div className="flex gap-2">
        <Link
          href="/tickets/new"
          className={buttonVariants({ variant: "default" })}
        >
          New Ticket (Add)
        </Link>

        <StatusFilter />
      </div>
      <DataTable tickets={tickets} searchParams={searchParams} />
      <Pagination itemCount={ticketCount} pageSize={pageSize} currentPage={page} />
    </div>
  );
};

export default Tickets;
