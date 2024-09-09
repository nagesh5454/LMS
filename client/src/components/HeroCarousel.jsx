import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem, 
} from "@/components/ui/carousel"

const imageArray = [
    "https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://www.worcester.ac.uk/images/courses/course-hero/Business-Management-Hero.x3c3382f5.jpg",
]

const eventHandler = (e) => {
e.preventDefault();
console.log(e.target.value);

}
export function HeroCarousel() {
  return (
    <Carousel className="w-full max-w-7xl mx-auto">
      <CarouselContent>
        {imageArray.map((item, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className='rounded-none'>
                <CardContent className="md:h-96 h-64 p-0">
                  <img src={item} alt="" className="w-full h-full object-cover rounded-none"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
