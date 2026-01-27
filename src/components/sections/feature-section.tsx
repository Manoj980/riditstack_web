"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { ReactNode } from "react"

interface FeatureItem {
  icon?: ReactNode
  title: string
  description: string
}

interface FeatureSectionProps {
  badge?: string
  headline: string
  description: string
  image?: string
  imageAlt?: string
  imagePosition?: "left" | "right"
  features?: FeatureItem[]
  ctaText?: string
  ctaHref?: string
  className?: string
}

export function FeatureSection({
  badge,
  headline,
  description,
  image,
  imageAlt = "Feature illustration",
  imagePosition = "right",
  features,
  ctaText,
  ctaHref = "#",
  className = ""
}: FeatureSectionProps) {
  const contentOrder = imagePosition === "left" ? "lg:order-2" : "lg:order-1"
  const imageOrder = imagePosition === "left" ? "lg:order-1" : "lg:order-2"
  
  return (
    <section className={`py-20 lg:py-32 bg-white dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div className={`space-y-8 ${contentOrder}`}>
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full text-sm font-medium border border-primary/20 dark:border-primary/30">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {badge}
              </div>
            )}
            
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {headline}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
            
            {features && features.length > 0 && (
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {feature.icon && (
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
                        {feature.icon}
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {ctaText && (
              <div>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  asChild
                >
                  <a href={ctaHref}>
                    {ctaText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            )}
          </div>
          
          {/* Image Column */}
          <div className={`relative ${imageOrder}`}>
            <div className="relative">
              {image ? (
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 lg:p-12">
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              ) : (
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 lg:p-12">
                  <div className="aspect-video bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                          <div className="w-5 h-5 bg-white rounded opacity-90"></div>
                        </div>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Feature Illustration</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-xl shadow-lg opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary rounded-lg shadow-lg opacity-70 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}