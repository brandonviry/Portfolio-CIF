'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import React from "react"

import { AlertCircle } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
 
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
     
      
      <Alert style={{width:"90vw",marginLeft:"5vw",marginRight:"5vw" ,marginTop:"5vw"}} variant="destructive" className="bg-neutral-100  ">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
      {error.message+" "} 
        <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      </AlertDescription>
    </Alert>
    </div>
  )
}