import { motion } from 'framer-motion'
import { Send, User, Phone, Map } from 'lucide-react'

export default function LeadForm() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto glass shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-5/12 bg-primary p-8 lg:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <h3 className="text-3xl font-bold mb-4 relative z-10">Get Free Counseling</h3>
            <p className="text-slate-300 mb-8 relative z-10 leading-relaxed text-sm">
              Take the first step towards your medical career. Fill out the form and our expert counselors will reach out to guide you through the process, absolutely free.
            </p>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3 text-emerald-400">
                <div className="w-10 h-10 rounded-full bg-emerald-400/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-sm font-medium">Quick callback guaranteed</div>
              </div>
            </div>
          </div>

          <div className="md:w-7/12 p-8 lg:p-12 bg-white">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                  <input 
                    type="text" 
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="w-5 h-5 text-slate-400" />
                  </div>
                  <input 
                    type="tel" 
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="+91 Phone Number"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Country</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Map className="w-5 h-5 text-slate-400" />
                  </div>
                  <select 
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select a destination</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="uzbekistan">Uzbekistan</option>
                    <option value="kyrgyzstan">Kyrgyzstan</option>
                    <option value="undecided">Not Sure / Undecided</option>
                  </select>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 mt-4"
              >
                Request Callback <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
