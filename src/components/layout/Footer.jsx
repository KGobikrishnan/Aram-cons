import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300 py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold mb-4">Aram Consultancy</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Your trusted partner for officially representing top overseas medical universities. Let us guide your global medical career.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 group">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 group">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.012 3.855.06 1.061.048 1.791.222 2.427.471.67.245 1.243.593 1.77 1.12.527.527.875 1.1 1.12 1.77.249.636.423 1.366.471 2.427.048 1.071.06 1.425.06 3.855s-.012 2.784-.06 3.855c-.048 1.061-.222 1.791-.471 2.427-.245.67-.593 1.243-1.12 1.77-.527.527-1.1.875-1.77 1.12-.636.249-1.366.423-2.427.471-1.071.048-1.425.06-3.855.06s-2.784-.012-3.855-.06c-1.061-.048-1.791-.222-2.427-.471-.67-.245-1.243-.593-1.77-1.12-.527-.527-.875-1.1-1.12-1.77-.249-.636-.423-1.366-.471-2.427c-.048-1.071-.06-1.425-.06-3.855s.012-2.784.06-3.855c.048-1.061.222-1.791.471-2.427.245-.67.593-1.243 1.12-1.77.527-.527 1.1-.875 1.77-1.12.636-.249 1.366-.423 2.427-.471 1.071-.048 1.425-.06 3.855-.06zm-1.1 1.292c-2.165 0-2.482.012-3.345.054-.823.04-1.274.163-1.573.279-.393.151-.674.333-.97.629-.296.296-.478.577-.629.97-.116.299-.239.75-.279 1.573-.042.863-.054 1.18-.054 3.345s.012 2.482.054 3.345c.04.823.163 1.274.279 1.573.151.393.333.674.629.97.296.296.577.478.97.629.299.116.75.239 1.573.279.863.042 1.18.054 3.345.054s2.482-.012 3.345-.054c.823-.04 1.274-.163 1.573-.279.393-.151.674-.333.97-.629.296-.296.478-.577.629-.97.116-.299.239-.75.279-1.573.042-.863.054-1.18.054-3.345s-.012-2.482-.054-3.345c-.04-.823-.163-1.274-.279-1.573-.151-.393-.333-.674-.629-.97-.296-.296-.577-.478-.97-.629-.299-.116-.75-.239-1.573-.279-.863-.042-1.18-.054-3.345-.054zM12 7.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm0 7.854a3.104 3.104 0 110-6.208 3.104 3.104 0 010 6.208zm6.545-8.046a1.14 1.14 0 11-2.28 0 1.14 1.14 0 012.28 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 group">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#destinations" className="hover:text-secondary transition-colors text-sm">MBBS Destinations</a></li>
              <li><a href="#fees" className="hover:text-secondary transition-colors text-sm">Fee Transparency</a></li>
              <li><a href="#why-us" className="hover:text-secondary transition-colors text-sm">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors text-sm">Free Counseling</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-lg text-secondary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Office Address</h5>
                  <p className="text-sm">NO, 19, AGRAHARAM, CHINNAMANUR.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-lg text-secondary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Phone Number</h5>
                  <p className="text-sm">C. Selvam: <a href="tel:+917708148680" className="hover:text-white">+91 7708148680</a></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-lg text-secondary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Email Address</h5>
                  <p className="text-sm"><a href="mailto:cselva.mu@gmail.com" className="hover:text-white">cselva.mu@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Aram Consultancy. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed by 
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-emerald-400">
              Navi Promotions
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
