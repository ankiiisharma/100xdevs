import { NextRequest } from "next/server";

// interface Users {
//   email: string;
//   name: string;
// }

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  return Response.json({
    message: "You are logged in",
  });
}

// export function GET() {
//   return Response.json({
//     email: "",
//     name: "Ankit Sharma",
//   });
// }
