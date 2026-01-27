"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  badge?: string
  headline: string
  subtext: string
  ctaText: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  image?: string
  imageAlt?: string
  features?: string[]
  className?: string
}

export function HeroSection({
  badge,
  headline,
  subtext,
  ctaText,
  ctaHref = "#",
  secondaryCtaText,
  secondaryCtaHref = "#",
  image,
  imageAlt = "Hero illustration",
  features,
  className = ""
}: HeroSectionProps) {
  return (
    <section className={`relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden ${className}`}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full text-sm font-medium border border-primary/20 dark:border-primary/30">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                {badge}
              </div>
            )}
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {headline}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                {subtext}
              </p>
            </div>
            
            {features && features.length > 0 && (
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
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
              
              {secondaryCtaText && (
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                  asChild
                >
                  <a href={secondaryCtaHref}>{secondaryCtaText}</a>
                </Button>
              )}
            </div>
          </div>
          
          {/* Right Column - Image/Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/20 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 lg:p-12">
              {image ? (
                <Image
                  src={image}
                  alt={imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              ) : (
                <div className="aspect-video bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded opacity-90"></div>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Hero Illustration</p>
                  </div>
                </div>
              )}
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl shadow-lg opacity-90 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary rounded-xl shadow-lg opacity-80 animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}