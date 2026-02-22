import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const m = motion as any;
import { Check, Rocket, Zap, CreditCard, Smartphone, Building2, Lock, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import ActionButton from '../components/ActionButton';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Enrollment: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [activePaymentMethod, setActivePaymentMethod] = useState<string>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [parentEmail, setParentEmail] = useState('parent@example.com');
  const [isEmailSending, setIsEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const plans = [
    {
      id: 1,
      level: "LEVEL 1 - BEGINNER",
      oldPrice: "₹7,999",
      price: "₹5,999",
      numericPrice: 5999,
      monthly: "Or ₹999/mo",
      duration: "6 MONTHS CURRICULUM",
      goal: "Goal: Sounds, phonics, 2-letter & 3-letter words",
      features: ["Master letter sounds", "Read 2 & 3 letter words", "Early pronunciation confidence"],
      color: "blue",
      borderColor: "border-blue-100",
    },
    {
      id: 2,
      level: "LEVEL 2 - INTERMEDIATE",
      oldPrice: "₹11,999",
      price: "₹9,999",
      numericPrice: 9999,
      monthly: "Or ₹1,299/mo",
      duration: "12 MONTHS CURRICULUM",
      goal: "Goal: Sentences, stories, daily speaking",
      features: ["Speak full sentences", "Read short stories", "Daily speaking practice"],
      color: "green",
      borderColor: "border-emerald-500",
      popular: true,
    },
    {
      id: 3,
      level: "LEVEL 3 - ADVANCED",
      oldPrice: "₹19,999",
      price: "₹14,999",
      numericPrice: 14999,
      monthly: "Or ₹1,599/mo",
      duration: "18 MONTHS CURRICULUM",
      goal: "Goal: Fluency, storytelling, confidence",
      features: ["Storytelling fluency", "Independent reading", "Real-life speaking confidence"],
      color: "purple",
      borderColor: "border-purple-100",
    }
  ];

  const currentPlan = plans.find(p => p.id === selectedPlan);

  const handleCompletePayment = () => {
    if (!currentPlan) return;
    
    setIsProcessing(true);

    const simulateSuccess = () => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      
      // Start email simulation
      setIsEmailSending(true);
      setTimeout(() => {
        setIsEmailSending(false);
        setEmailSent(true);
      }, 2500);
    };

    // Simulate Razorpay Modal opening
    const options = {
      key: "rzp_test_placeholder", // Replace with your actual Razorpay Key ID
      amount: currentPlan.numericPrice * 100, // Amount in paise
      currency: "INR",
      name: "PIXO Learn",
      description: `Payment for ${currentPlan.level}`,
      image: "https://drive.google.com/uc?export=view&id=1...", // Replace with logo URL
      handler: function (response: any) {
        // This function is executed after a successful payment
        simulateSuccess();
        console.log("Payment Successful", response);
      },
      prefill: {
        name: "Parent Name",
        email: parentEmail,
        contact: "9999999999"
      },
      theme: {
        color: "#10b981" // Emerald primary color
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    // If actual script failed to load, simulate successful payment after delay
    if (typeof window.Razorpay !== 'undefined') {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      console.warn("Razorpay script not found. Simulating payment success.");
      setTimeout(() => {
        simulateSuccess();
      }, 2000);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <m.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-2xl w-full"
        >
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check size={48} strokeWidth={3} />
            </div>
            <h1 className="text-4xl font-black mb-4 font-kids">Welcome to PIXO!</h1>
            <p className="text-slate-500 text-lg">Your adventure begins now.</p>
          </div>

          <AnimatePresence mode="wait">
            {isEmailSending ? (
              <m.div 
                key="sending"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-slate-50 rounded-3xl p-8 text-center border-2 border-dashed border-slate-200"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
                  <p className="font-bold text-slate-600">Sending confirmation email to <span className="text-slate-900">{parentEmail}</span>...</p>
                </div>
              </m.div>
            ) : emailSent ? (
              <m.div 
                key="sent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900">Email Sent Successfully!</h3>
                      <p className="text-sm text-slate-500">A summary has been sent to {parentEmail}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                    <div className="flex justify-between items-center pb-4 border-bottom border-slate-50">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Plan Summary</span>
                      <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full uppercase">{currentPlan?.level.split(' - ')[0]}</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-bold text-slate-800 flex justify-between">
                        <span>Course:</span>
                        <span>{currentPlan?.level}</span>
                      </p>
                      <p className="text-sm font-bold text-slate-800 flex justify-between">
                        <span>Duration:</span>
                        <span>{currentPlan?.duration}</span>
                      </p>
                      <p className="text-sm font-bold text-slate-800 flex justify-between">
                        <span>Amount Paid:</span>
                        <span className="text-emerald-600">{currentPlan?.price}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-6 font-kids">Next Steps</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center font-black text-sm">1</div>
                        <p className="text-slate-300 text-sm leading-relaxed">Check your inbox for the <span className="text-white font-bold">Welcome Kit</span> and login credentials.</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center font-black text-sm">2</div>
                        <p className="text-slate-300 text-sm leading-relaxed">Download the <span className="text-white font-bold">PIXO App</span> on your tablet or smartphone.</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center font-black text-sm">3</div>
                        <p className="text-slate-300 text-sm leading-relaxed">Complete the <span className="text-white font-bold">Orientation Session</span> with your child today!</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => window.location.href = '#/'}
                      className="w-full mt-10 bg-white text-slate-900 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-colors shadow-xl"
                    >
                      Go to Dashboard
                    </button>
                  </div>
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                </div>
              </m.div>
            ) : null}
          </AnimatePresence>
        </m.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFB] pb-32">
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

              {/* Pricing Cards */}
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
              className="max-w-5xl mx-auto pt-8"
            >
              {/* Back Button */}
              <button 
                onClick={() => setSelectedPlan(null)}
                className="flex items-center gap-2 text-[#94a3b8] hover:text-slate-900 font-bold mb-10 transition-colors group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm">Change Plan</span>
              </button>

              <div className="grid lg:grid-cols-12 gap-16 items-start">
                {/* Left Section: Review Selection */}
                <div className="lg:col-span-5">
                  <h2 className="text-3xl font-black mb-10 font-kids text-slate-900">Review Selection</h2>
                  
                  <div className="bg-white rounded-[3rem] p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.05)] border border-slate-50 relative overflow-hidden">
                    <p className="text-[10px] font-black tracking-[0.2em] text-[#94a3b8] uppercase mb-5">SELECTED PATH</p>
                    
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{currentPlan?.level}</h3>
                    <p className="text-2xl font-black text-emerald-500 mb-10">{currentPlan?.price}</p>
                    
                    <div className="space-y-5 mb-10">
                      <div className="flex justify-between items-center text-slate-500 font-bold text-sm">
                        <span>Subtotal</span>
                        <span className="text-slate-900">{currentPlan?.price}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-500 font-bold text-sm">
                        <span>GST (Included)</span>
                        <span className="text-slate-900">₹0</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#f8fafc] rounded-3xl p-6 flex justify-between items-center">
                      <span className="text-xs font-black uppercase tracking-widest text-[#94a3b8]">TOTAL</span>
                      <span className="text-3xl font-black text-slate-900">{currentPlan?.price}</span>
                    </div>

                    {/* Subtle aesthetic element */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-50" />
                  </div>
                </div>

                {/* Right Section: Payment Options */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-3xl font-black font-kids text-slate-900">Payment Options</h2>
                    <div className="flex items-center gap-1.5 bg-[#ecfdf5] text-[#10b981] px-3 py-1.5 rounded-full">
                      <Lock size={12} fill="currentColor" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Secure</span>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="mb-8">
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#94a3b8] mb-3">Confirmation Email</label>
                    <input 
                      type="email" 
                      value={parentEmail}
                      onChange={(e) => setParentEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-white border-2 border-[#f1f5f9] rounded-[2rem] p-6 font-bold text-slate-900 focus:border-[#10b981] outline-none transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-4 mb-12">
                    {[
                      { id: 'upi', name: 'UPI (GPay, PhonePe)', desc: 'Instant activation', icon: <Smartphone size={24} /> },
                      { id: 'card', name: 'Credit / Debit Card', desc: 'Visa, Master, Amex', icon: <CreditCard size={24} /> },
                      { id: 'net', name: 'Net Banking', desc: 'All Indian banks', icon: <Building2 size={24} /> }
                    ].map((method) => (
                      <m.button
                        key={method.id}
                        onClick={() => setActivePaymentMethod(method.id)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`w-full group flex items-center justify-between p-7 rounded-[2.5rem] border-2 transition-all text-left shadow-sm ${
                          activePaymentMethod === method.id 
                            ? 'bg-white border-[#10b981] shadow-emerald-100/50' 
                            : 'bg-white border-[#f1f5f9] hover:border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-6">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                            activePaymentMethod === method.id ? 'bg-[#f0fdf4] text-[#10b981]' : 'bg-[#f8fafc] text-slate-400'
                          }`}>
                            {method.icon}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-lg">{method.name}</p>
                            <p className="text-xs text-[#94a3b8] font-medium">{method.desc}</p>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          activePaymentMethod === method.id ? 'border-[#10b981] bg-[#10b981]' : 'border-slate-200'
                        }`}>
                          {activePaymentMethod === method.id && <Check size={14} className="text-white" strokeWidth={4} />}
                        </div>
                      </m.button>
                    ))}
                  </div>

                  <m.button
                    onClick={handleCompletePayment}
                    disabled={isProcessing}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#0F172A] text-white py-6 rounded-[2.5rem] font-black text-xl shadow-[0_20px_40px_rgba(15,23,42,0.2)] flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Processing Payment...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span>Complete Payment</span>
                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </m.button>
                  
                  {/* Footer Icons */}
                  <div className="mt-12 flex items-center justify-center gap-10 grayscale opacity-30">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Visa_Logo.png" alt="Visa" className="h-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" className="h-6" />
                    <div className="flex items-center gap-1 font-black text-xs text-slate-600">
                      <ShieldCheck size={16} />
                      PCI DSS COMPLIANT
                    </div>
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