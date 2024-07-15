import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = process.env.GITHUB_TOKEN;
  const username = "ThanhDatt25";

  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );

  if (response.ok) {
    const repos = await response.json();
    return NextResponse.json(repos, { status: 200 });
  } else {
    return NextResponse.json(
      { message: response.statusText },
      { status: response.status }
    );
  }
}
