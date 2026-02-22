import React from 'react';
import { motion } from 'framer-motion';
// Fix: cast motion to any to resolve property type mismatch errors
const m = motion as any;
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';
import Mascot from '../components/Mascot';
import ActionButton from '../components/ActionButton';
import { useLanguage } from '../translations';

const Support: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl font-black mb-8 leading-tight">
              {t('support.title').split(' ')[0]} <br />
              <span className="text-emerald-500">{t('support.title').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg text-slate-600 mb-12">
              {t('support.subtitle')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">Email us at</p>
                  <p className="text-lg font-bold">hello@pixolearn.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">WhatsApp Support</p>
                  <p className="text-lg font-bold">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center md:justify-start">
               <Mascot size="md" pose="thinking" />
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-900">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              alert("Message received! PIXO is on it.");
            }}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{t('support.form.name')}</label>
                <input type="text" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all font-medium" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{t('support.form.email')}</label>
                <input type="email" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all font-medium" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{t('support.form.msg')}</label>
                <textarea rows={4} required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all font-medium"></textarea>
              </div>
              <div className="flex justify-center">
                <ActionButton text={t('support.form.cta')} type="submit" className="w-full" />
              </div>
            </form>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Support;
