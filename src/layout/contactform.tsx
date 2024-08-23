import { Card } from "@/components/ui/card";
import React from "react";


export default function contactform() {
  const flag = true;
  return flag ? (
    <Card id="zoneContact"  className="flex flex-col  h-screen border-0 bg-[#191919] justify-center items-center">
      <iframe className="w-5/6 h-full"  src="https://tally.so/r/mD5Yqp">
        Chargement…
      </iframe>
    </Card>
  ) : (
    ""
  );
}
