import { userSchema } from "@/app/ValidationSchema/users";
import prisma from "@/prisma/db";
import bcrypt from "bcryptjs";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (body?.password && body.password != ""){
    const hasPassword = await bcrypt.hash(body.password, 10);
    body.password = hasPassword;
  } else {
    delete body.password;    
  }
  
  console.log(body);

  if (user.username !== body.username) {
    const duplicate = await prisma.user.findUnique({
      where: {
        username: body.username,
      },
    });
    if (duplicate) {
      return NextResponse.json(
        { error: "Username is duplicate" },
        { status: 409 }
      );
    }
  }
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: { ...body },  
  })

  return NextResponse.json(updatedUser, { status: 200 });  
};

  