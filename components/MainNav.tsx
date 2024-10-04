import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";
import MainNextLink from "./MainNextLink";

const MainNav = () => {
  return (
    <div className="flex justify-between">
      <MainNextLink />
      <div className="flex items-center gap-2">
        <Link href="/">Logout</Link>
        <ToggleMode />
      </div>
    </div>
  );
};

export default MainNav;
