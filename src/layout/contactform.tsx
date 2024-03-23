import { Card } from "@/components/ui/card";
import React from "react";
import "./css/contacform.css"

export default function contactform() {
  const flag = true;
  return flag ? (
    <Card id="zoneContact"  className="flex flex-col taille-card-form border-0 bg-sky-900">
      <iframe className="taille-iframe"  src="https://docs.google.com/forms/d/e/1FAIpQLScMXYPUGQ7MoT9kRKTy3DvH4-XRM_ULQUmEnkMfYcbNF1JdkA/viewform?embedded=true">
        Chargement…
      </iframe>
    </Card>
  ) : (
    ""
  );
}
