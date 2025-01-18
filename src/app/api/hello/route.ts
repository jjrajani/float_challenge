import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

// type ResponseData = {
// message: string;
// };

export async function GET(request: NextApiRequest) {
  console.log("%c request", "color: orange", request);
  return NextResponse.json({ message: "Bananas" });
}
