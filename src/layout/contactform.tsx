import { Card } from '@/components/ui/card'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


export default function contactform() {
  const flag = false
  return (
     (flag)? 
     
     <Card style={{padding:"3%" , margin:"3%"}} className='flex flex-col'>
      <h1 className='w-scree text-center text-2xl'>Contact</h1>
     <Input type="email" placeholder="Email"  style={{margin:"1%"}}/>
     <Input type="Text" placeholder="Object" style={{margin:"1%"}}/>

     <Textarea placeholder="Contenue..." style={{margin:"1%"}}/>
     <Button style={{margin:"1%"}} className='  bg-sky-900'>envoyer</Button>

 </Card>: ""
  )
}
