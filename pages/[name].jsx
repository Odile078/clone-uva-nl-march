import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const route = useRouter();
  const name = route.query.name;

  return (
    <div className="grid h-screen">
      <div className="m-auto">
        <h4 className="max-w-md mb-6 text-3xl font-bold">
          <span className="capitalize font-bold text-[#333333]">
            {name} page
          </span>{" "}
        </h4>
        <Link href="/" className="text-xl text-blue-500 underline">
          Go Back to the Home
        </Link>
      </div>
    </div>
  );
}
