import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import BottomNav from '../components/BottomNav';
import { ArrowLeft, Calendar as CalendarIcon, Clock, User, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Book() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      day: d.getDate(),
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      full: d
    };
  });

  const times = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];
  
  const professionals = [
    { id: 'prof1', name: t('professional1'), role: t('leadEsthetician'), image: null },
    { id: 'prof2', name: t('professional2'), role: t('laserSpecialist'), image: null },
    { id: 'any', name: t('noPreference'), role: t('firstAvailable'), image: null }
  ];

  return (
    <div className="bg-[#f9f6f2] text-slate-800 font-sans antialiased min-h-screen flex flex-col relative overflow-x-hidden max-w-md mx-auto shadow-2xl">
      <header className="sticky top-0 z-20 bg-[#f9f6f2]/95 backdrop-blur-md border-b border-[#50192e]/10 px-4 py-4 flex items-center justify-between">
        <button onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)} className="flex w-10 h-10 items-center justify-center rounded-full text-[#50192e] hover:bg-[#50192e]/5 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-serif font-semibold text-[#50192e]">{t('bookAppointment')}</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto pb-32">
        {step === 1 && (
          <div className="p-6 space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Professional Selection */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#50192e] mb-4 flex items-center gap-2">
                <User size={18} /> {t('selectProfessional', 'Select Professional')}
              </h2>
              <div className="space-y-3">
                {professionals.map(prof => (
                  <button 
                    key={prof.id}
                    onClick={() => setSelectedProfessional(prof.id)}
                    className={`w-full flex items-center gap-4 p-3 rounded-xl border transition-all ${selectedProfessional === prof.id ? 'border-[#cfaa68] bg-[#cfaa68]/10 shadow-sm' : 'border-stone-200 bg-white hover:border-[#cfaa68]/50'}`}
                  >
                    {prof.image ? (
                      <img src={prof.image} alt={prof.name} className="w-12 h-12 rounded-full object-cover border border-stone-200" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center border border-stone-200 text-stone-400">
                        <User size={24} />
                      </div>
                    )}
                    <div className="flex-1 text-left">
                      <p className={`font-bold ${selectedProfessional === prof.id ? 'text-[#50192e]' : 'text-stone-800'}`}>{prof.name}</p>
                      <p className="text-xs text-stone-500">{prof.role}</p>
                    </div>
                    {selectedProfessional === prof.id && <CheckCircle2 className="text-[#cfaa68]" size={20} />}
                  </button>
                ))}
              </div>
            </section>

            {/* Date Selection */}
            <section className={!selectedProfessional ? 'opacity-50 pointer-events-none transition-opacity' : 'transition-opacity'}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#50192e] mb-4 flex items-center gap-2">
                <CalendarIcon size={18} /> {t('selectDate', 'Select Date')}
              </h2>
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6">
                {dates.map((date, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(i)}
                    className={`flex flex-col items-center justify-center min-w-[70px] h-[90px] rounded-2xl border transition-all ${selectedDate === i ? 'bg-[#50192e] border-[#50192e] text-white shadow-md scale-105' : 'bg-white border-stone-200 text-stone-600 hover:border-[#cfaa68]'}`}
                  >
                    <span className={`text-xs font-medium uppercase tracking-wider mb-1 ${selectedDate === i ? 'text-[#cfaa68]' : 'text-stone-400'}`}>{date.dayName}</span>
                    <span className="text-2xl font-serif font-bold">{date.day}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Time Selection */}
            <section className={!selectedDate ? 'opacity-50 pointer-events-none transition-opacity' : 'transition-opacity'}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#50192e] mb-4 flex items-center gap-2">
                <Clock size={18} /> {t('selectTime', 'Select Time')}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {times.map((time, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 rounded-xl border font-medium text-sm transition-all ${selectedTime === time ? 'bg-[#cfaa68] border-[#cfaa68] text-white shadow-md' : 'bg-white border-stone-200 text-stone-700 hover:border-[#cfaa68]'}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {step === 2 && (
          <div className="p-6 flex flex-col items-center justify-center h-full text-center animate-in zoom-in-95 duration-500 mt-12">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="text-emerald-500" size={48} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#50192e] mb-2">{t('bookingConfirmed', 'Booking Confirmed!')}</h2>
            <p className="text-stone-500 mb-8">{t('bookingSuccessMsg', 'Your appointment has been successfully scheduled. We look forward to seeing you.')}</p>
            
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm w-full text-left space-y-4 mb-8">
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wider font-bold mb-1">{t('dateAndTime', 'Date & Time')}</p>
                <p className="font-medium text-stone-800">{selectedTime} on {selectedDate !== null ? dates[selectedDate].full.toLocaleDateString() : ''}</p>
              </div>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wider font-bold mb-1">{t('professional', 'Professional')}</p>
                <p className="font-medium text-stone-800">{professionals.find(p => p.id === selectedProfessional)?.name}</p>
              </div>
            </div>

            <button 
              onClick={() => navigate('/home')}
              className="w-full bg-[#50192e] text-white py-4 rounded-full font-bold uppercase tracking-wider shadow-lg shadow-[#50192e]/20 hover:bg-[#3a1020] transition-colors"
            >
              {t('backToHome', 'Back to Home')}
            </button>
          </div>
        )}
      </main>

      {step === 1 && (
        <div className="absolute bottom-[84px] left-0 right-0 p-4 bg-gradient-to-t from-[#f9f6f2] via-[#f9f6f2] to-transparent z-10">
          <button 
            disabled={!selectedProfessional || selectedDate === null || !selectedTime}
            onClick={() => setStep(2)}
            className="w-full bg-[#50192e] text-white py-4 rounded-full font-bold uppercase tracking-wider shadow-lg shadow-[#50192e]/20 hover:bg-[#3a1020] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {t('confirmBooking', 'Confirm Booking')} <ChevronRight size={20} />
          </button>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
