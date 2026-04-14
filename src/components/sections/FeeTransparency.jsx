import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const feeData = [
  {
    uni: "Dai Nam University",
    eligibility: "60%",
    usd: "24,650",
    inr: "22,18,500",
    departure: "6,94,500"
  },
  {
    uni: "Buon Ma Thuot Medical University",
    eligibility: "65%",
    usd: "30,000",
    inr: "27,00,000",
    departure: "8,45,000"
  },
  {
    uni: "Dong A University",
    eligibility: "60%",
    usd: "27,00,000", /* Error in image? 27,000 USD */
    inr: "24,30,000",
    usdCorrected: "27,000",
    departure: "8,22,500"
  }
]

export default function FeeTransparency() {
  return (
    <section id="fees" className="py-20 lg:py-32 bg-primary relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Vietnam Universities Fee Transparency (2026)" 
          subtitle="Clear breakdown of typical 6-year package costs versus initial departure expenses to build trust."
          light={true}
        />

        <div className="mt-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feeData.map((data, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-dark rounded-3xl overflow-hidden flex flex-col hover:border-secondary transition-colors duration-500 group"
              >
                <div className="bg-white/10 p-6 text-center border-b border-white/10 relative">
                  <span className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                    {data.eligibility} Eligibility
                  </span>
                  <h3 className="text-xl font-bold mt-4 group-hover:text-secondary-light transition-colors">{data.uni}</h3>
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                  <div className="mb-8">
                    <p className="text-xs text-slate-400 font-bold mb-2 uppercase tracking-widest opacity-60">Total 6-Year Package</p>
                    <p className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-none">₹{data.inr}</p>
                    <div className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-secondary-light">
                      Approx. USD {data.usdCorrected || data.usd}
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-white/20 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-3 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                      Initial Costs
                    </div>
                    <p className="text-xs text-slate-400 font-bold mb-2 uppercase tracking-widest opacity-60 text-center">Payable before departure</p>
                    <p className="text-2xl md:text-3xl font-bold text-emerald-400 text-center leading-none">₹{data.departure}</p>
                    <div className="mt-6 space-y-2">
                       <p className="text-[10px] text-slate-500 flex items-center gap-2">
                         <span className="w-1 h-1 rounded-full bg-secondary"></span> Admission & University Fees
                       </p>
                       <p className="text-[10px] text-slate-500 flex items-center gap-2">
                         <span className="w-1 h-1 rounded-full bg-secondary"></span> One-time Processing Fee
                       </p>
                       <p className="text-[10px] text-slate-500 flex items-center gap-2">
                         <span className="w-1 h-1 rounded-full bg-secondary"></span> 1st Semester & Hostel
                       </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          *Conversion applied at ₹90 = 1 USD. Subject to dynamic exchange rates.
        </p>

      </div>
    </section>
  )
}
