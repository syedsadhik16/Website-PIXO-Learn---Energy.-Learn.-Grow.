import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const m = motion as any;
import { Check, Rocket, Zap, Star, ShieldCheck, CreditCard, Smartphone, Building2, Lock, ArrowLeft, ChevronRight } from 'lucide-react';
import ActionButton from '../components/ActionButton';

const Enrollment: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const plans = [
    {
      id: 1,
      level: "LEVEL 1 - BEGINNER",
      oldPrice: "₹7,999",
      price: "₹5,999",
      monthly: "Or ₹999/mo",
      duration: "6 MONTHS CURRICULUM",
      goal: "Goal: Sounds, phonics, 2-letter & 3-letter words",
      features: ["Master letter sounds", "Read 2 & 3 letter words", "Early pronunciation confidence"],
      color: "blue",
      borderColor: "border-blue-100",
      btnVariant: 'secondary'
    },
    {
      id: 2,
      level: "LEVEL 2 - INTERMEDIATE",
      oldPrice: "₹11,999",
      price: "₹9,999",
      monthly: "Or ₹1,299/mo",
      duration: "12 MONTHS CURRICULUM",
      goal: "Goal: Sentences, stories, daily speaking",
      features: ["Speak full sentences", "Read short stories", "Daily speaking practice"],
      color: "green",
      borderColor: "border-emerald-500",
      popular: true,
      btnVariant: 'primary'
    },
    {
      id: 3,
      level: "LEVEL 3 - ADVANCED",
      oldPrice: "₹19,999",
      price: "₹14,999",
      monthly: "Or ₹1,599/mo",
      duration: "18 MONTHS CURRICULUM",
      goal: "Goal: Fluency, storytelling, confidence",
      features: ["Storytelling fluency", "Independent reading", "Real-life speaking confidence"],
      color: "purple",
      borderColor: "border-purple-100",
      btnVariant: 'secondary'
    }
  ];

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2500);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <m.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={48} strokeWidth={3} />
          </div>
          <h1 className="text-4xl font-black mb-4 font-kids">Welcome to PIXO!</h1>
          <p className="text-slate-500 mb-10 text-lg">Your adventure begins now. Your account credentials have been sent to your email.</p>
          <button 
            onClick={() => window.location.href = '#/'}
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg"
          >
            Go to Dashboard
          </button>
        </m.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefdf8] pb-32">
      <div className="container mx-auto px-6 pt-12">
        <AnimatePresence mode="wait">
          {!selectedPlan ? (
            <m.div 
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Top Hero Section */}
              <div className="grid lg:grid-cols-2 gap-8 mb-24 items-stretch">
                <m.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-[3rem] p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-50 flex flex-col items-center text-center justify-center relative overflow-hidden"
                >
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-8">
                    <Rocket className="text-orange-400" size={32} fill="currentColor" />
                  </div>
                  <h2 className="text-4xl font-black mb-6 font-kids">Start Your Journey</h2>
                  <p className="text-slate-400 text-lg mb-10 max-w-xs leading-relaxed">
                    15 minutes a day is all it takes for your child to find their voice.
                  </p>
                  <m.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#ffbf3f] text-white px-12 py-5 rounded-2xl font-black text-xl shadow-[0_15px_30px_rgba(255,191,63,0.3)] mb-4"
                  >
                    Start 3-Day Free Trial
                  </m.button>
                  <p className="text-[10px] font-black tracking-widest text-slate-300 uppercase">No Credit Card Required</p>
                </m.div>

                <m.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col justify-center lg:pl-12"
                >
                  <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-slate-100 shadow-sm mb-8 w-fit">
                    <Zap size={14} className="text-yellow-500" fill="currentColor" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Campaign Pricing Now Live</span>
                  </div>
                  <h1 className="text-7xl md:text-8xl font-black mb-8 font-kids tracking-tighter text-slate-900 leading-[0.9]">
                    Unlock Your <br />
                    Child's Voice
                  </h1>
                  <p className="text-2xl font-bold text-slate-400 mb-10">
                    <span className="text-slate-900">₹1,999 / month</span> campaign highlight.
                  </p>
                  <ActionButton text="Upgrade & Continue Learning" className="!bg-[#50ac56] !shadow-[0_20px_40px_rgba(80,172,86,0.3)] !min-w-[320px] !py-6" />
                </m.div>
              </div>

              {/* Pricing Table Section */}
              <div className="grid lg:grid-cols-3 gap-8">
                {plans.map((plan, i) => (
                  <m.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative bg-white rounded-[3.5rem] p-10 flex flex-col shadow-[0_30px_70px_-20px_rgba(0,0,0,0.06)] border-2 transition-all hover:translate-y-[-8px] ${plan.borderColor}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#ffbf3f] text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg z-20">
                        Most Popular
                      </div>
                    )}

                    <div className="text-center mb-10">
                      <p className="text-[11px] font-black tracking-[0.15em] text-slate-400 mb-6 uppercase">{plan.level}</p>
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-slate-300 line-through text-2xl font-bold">{plan.oldPrice}</span>
                        <span className="text-slate-900 text-5xl font-black">{plan.price}</span>
                      </div>
                      <p className="text-[11px] font-black text-emerald-500 uppercase tracking-widest mb-6">{plan.monthly}</p>
                      <div className="inline-block px-4 py-1.5 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {plan.duration}
                      </div>
                    </div>

                    <div className="h-px bg-slate-100 mb-8" />

                    <div className="flex-grow">
                      <p className="text-slate-900 font-black text-sm mb-8 leading-relaxed text-center px-4">
                        {plan.goal}
                      </p>
                      <div className="space-y-6 mb-12">
                        {plan.features.map((feat, fi) => (
                          <div key={fi} className="flex items-center gap-4">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${plan.color === 'blue' ? 'bg-blue-50 text-blue-500' : plan.color === 'green' ? 'bg-emerald-50 text-emerald-500' : 'bg-purple-50 text-purple-500'}`}>
                              <Check size={14} strokeWidth={3} />
                            </div>
                            <span className="text-slate-700 font-bold text-sm">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <m.button
                      onClick={() => setSelectedPlan(plan.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-6 rounded-[2.5rem] font-black text-xl transition-all shadow-md ${
                        plan.popular 
                          ? 'bg-[#10b981] text-white shadow-emerald-200' 
                          : 'bg-white text-slate-900 border-2 border-slate-50 hover:border-slate-100'
                      }`}
                    >
                      Choose Path
                    </m.button>
                  </m.div>
                ))}
              </div>
            </m.div>
          ) : (
            <m.div 
              key="checkout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto pt-8"
            >
              <button 
                onClick={() => setSelectedPlan(null)}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold mb-10 transition-colors group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Change Plan
              </button>

              <div className="grid md:grid-cols-5 gap-12">
                {/* Left: Order Summary */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-black mb-8 font-kids">Review Selection</h3>
                  <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-50">
                    <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-4">Selected Path</p>
                    <h4 className="text-xl font-black text-slate-900 mb-2">
                      {plans.find(p => p.id === selectedPlan)?.level}
                    </h4>
                    <p className="text-emerald-500 font-black mb-6">{plans.find(p => p.id === selectedPlan)?.price}</p>
                    
                    <div className="h-px bg-slate-100 mb-6" />
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-slate-400">Subtotal</span>
                        <span className="text-slate-900">{plans.find(p => p.id === selectedPlan)?.price}</span>
                      </div>
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-slate-400">GST (Included)</span>
                        <span className="text-slate-900">₹0</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl">
                      <span className="text-sm font-black uppercase text-slate-400">Total</span>
                      <span className="text-2xl font-black text-slate-900">{plans.find(p => p.id === selectedPlan)?.price}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Payment Methods */}
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-black mb-8 font-kids flex items-center gap-3">
                    Payment Options
                    <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] rounded-full flex items-center gap-1">
                      <Lock size={10} />
                      Secure
                    </div>
                  </h3>

                  <div className="space-y-4">
                    {[
                      { id: 'upi', name: 'UPI (GPay, PhonePe)', icon: <Smartphone />, desc: 'Instant activation' },
                      { id: 'card', name: 'Credit / Debit Card', icon: <CreditCard />, desc: 'Visa, Master, Amex' },
                      { id: 'net', name: 'Net Banking', icon: <Building2 />, desc: 'All Indian banks' }
                    ].map((method) => (
                      <m.button
                        key={method.id}
                        whileHover={{ scale: 1.01 }}
                        className="w-full flex items-center justify-between p-6 bg-white border-2 border-slate-50 rounded-[2rem] hover:border-blue-100 transition-all text-left shadow-sm hover:shadow-md"
                      >
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
                            {method.icon}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">{method.name}</p>
                            <p className="text-xs text-slate-400">{method.desc}</p>
                          </div>
                        </div>
                        <ChevronRight size={20} className="text-slate-300" />
                      </m.button>
                    ))}
                  </div>

                  <m.button
                    disabled={isProcessing}
                    onClick={handlePayment}
                    className="w-full mt-12 bg-slate-900 text-white py-6 rounded-[2.5rem] font-black text-xl shadow-2xl flex items-center justify-center gap-4 group disabled:opacity-70"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Complete Payment
                        <ArrowLeft size={20} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </m.button>
                  
                  <div className="mt-8 flex items-center justify-center gap-8 opacity-40 grayscale">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Visa_Logo.png" alt="Visa" className="h-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" className="h-6" />
                  </div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Enrollment;
