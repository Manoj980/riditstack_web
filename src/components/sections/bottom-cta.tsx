"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

interface BottomCTAProps {
  headline: string
  description: string
  primaryCtaText: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  features?: string[]
  backgroundVariant?: "gradient" | "solid" | "pattern"
  className?: string
}

export function BottomCTA({
  headline,
  description,
  primaryCtaText,
  primaryCtaHref = "#",
  secondaryCtaText,
  secondaryCtaHref = "#",
  features,
  backgroundVariant = "gradient",
  className = ""
}: BottomCTAProps) {
  const backgroundClasses = {
    gradient: "bg-gradient-to-r from-primary to-secondary",
    solid: "bg-primary",
    pattern: "bg-primary bg-pattern"
  }
  
  return (
    <section className={`py-20 lg:py-32 relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${backgroundClasses[backgroundVariant]}`}></div>
      
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-8 mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              {headline}
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>
          
          {/* Features List */}
          {features && features.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          )}
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              asChild
            >
              <a href={primaryCtaHref}>
                {primaryCtaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            {secondaryCtaText && (
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                asChild
              >
                <a href={secondaryCtaHref}>{secondaryCtaText}</a>
              </Button>
            )}
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}