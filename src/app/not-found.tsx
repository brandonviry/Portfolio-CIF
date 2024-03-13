import React from 'react';
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
export default function NotFound() {
    
  return (
 <div  className="flex flex-row justify-center items-center"style={{height:"100vh", width:"100vw"}}>
       <Card style={{height:"25vh", width:"25vw"}} className="flex flex-col justify-center">
    <CardHeader>
      <CardTitle>Not Found</CardTitle>
      <CardDescription>Could not find requested resource</CardDescription>
    </CardHeader>
    <CardContent>
      <p></p>
    </CardContent>
    <CardFooter>
    <Link href="/">Return Home</Link>
    </CardFooter>
  </Card>
  
 </div>
  );
}
