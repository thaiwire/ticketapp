"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const DeleteButton = ({ ticketId }: { ticketId: number }) => {
  console.log(ticketId);

  const router = useRouter();
  const [error, setError] = useState("");
  const [isDeleteing, setIsDeleteing] = useState(false);

  const deleteTicket = async () => {
    try {
      setIsDeleteing(true);

      await axios.delete("/api/tickets/" + ticketId);
      router.push("/tickets");
      router.refresh();
    } catch (error) {
      setIsDeleteing(false);
      setError("Something went wrong");
    }
  };
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger
          className={buttonVariants({ variant: "destructive" })}
        >
          Delete Ticket
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className={buttonVariants({ variant: "destructive" })}
              disabled={isDeleteing}
              onClick={deleteTicket}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <p className="text-destructive">{error}</p>
    </div>
  );
};

export default DeleteButton;
