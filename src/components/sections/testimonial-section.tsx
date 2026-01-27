"use client"

import { Card } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
  rating?: number
  metrics?: {
    label: string
    value: string
  }[]
}

interface TestimonialSectionProps {
  badge?: string
  headline: string
  description?: string
  testimonials: Testimonial[]
  className?: string
}

export function TestimonialSection({
  badge,
  headline,
  description,
  testimonials,
  className = ""
}: TestimonialSectionProps) {
  return (
    <section className={`py-20 lg:py-32 bg-gray-50 dark:bg-gray-800 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full text-sm font-medium border border-primary/20 dark:border-primary/30 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {badge}
            </div>
          )}
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {headline}
          </h2>
          
          {description && (
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="space-y-6">
                {/* Quote */}
                <div className="relative">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                
                {/* Rating */}
                {testimonial.rating && (
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating!
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      {testimonial.rating}/5
                    </span>
                  </div>
                )}
                
                {/* Metrics */}
                {testimonial.metrics && testimonial.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-200 dark:border-gray-700">
                    {testimonial.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary dark:text-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex-shrink-0">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary dark:text-primary font-semibold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary dark:text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}