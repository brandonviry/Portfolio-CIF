import { Card } from "@/components/ui/card";
import React from "react";


export default function contactform() {
  const flag = true;
  return flag ? (
    <Card style={{ padding: "3%", margin: "3%",  height:"80vh"}} className="flex flex-col">
      <iframe style={{height:"100%" , width:"100%"}} src="https://docs.google.com/forms/d/e/1FAIpQLScMXYPUGQ7MoT9kRKTy3DvH4-XRM_ULQUmEnkMfYcbNF1JdkA/viewform?embedded=true">
        Chargement…
      </iframe>
    </Card>
  ) : (
    ""
  );
}
