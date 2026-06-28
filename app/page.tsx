import { Navbar }        from '@/components/layout/Navbar'
import { Cursor }        from '@/components/ui/Cursor'
import { HeroSection }   from '@/components/sections/HeroSection'
import { MarqueeBand }   from '@/components/sections/MarqueeBand'
import { AboutSection }  from '@/components/sections/AboutSection'
import { GallerySection }  from '@/components/sections/GallerySection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection }  from '@/components/sections/ProcessSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BookingSection }  from '@/components/sections/BookingSection'
import { FaqSection }    from '@/components/sections/FaqSection'
import { Footer }        from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBand />
        <AboutSection />
        <GallerySection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <BookingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}
