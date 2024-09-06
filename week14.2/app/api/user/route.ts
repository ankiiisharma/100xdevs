import axios from "axios";

export async function GET() {
  return Response.json({ username: "harkirat", email: "harkirat@gmail.com" });
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  return NextResponse.json({
    username: body.username,
    password: body.password,
  });
}

async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
