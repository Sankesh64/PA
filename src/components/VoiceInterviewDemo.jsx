import React, { useState } from 'react';
import { Mic, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function VoiceInterviewDemo() {
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  
  const [passport, setPassport] = useState({
    title: 'Ceramic Mug',
    price: '$24',
    material: null,
    weight: null
  });

  const getMissingFields = () => {
    const missing = [];
    if (!passport.material) missing.push({ key: 'material', priority: 1, question: "What material is your product made of?" });
    if (!passport.weight) missing.push({ key: 'weight', priority: 2, question: "What is the total weight for shipping purposes?" });
    return missing.sort((a, b) => a.priority - b.priority);
  };

  const missingFields = getMissingFields();
  const currentTarget = missingFields[0];

  const handleUpdate = () => {
    if (!inputValue.trim()) return;
    
    if (currentTarget) {
      setPassport(prev => ({
        ...prev,
        [currentTarget.key]: inputValue
      }));
      setInputValue('');
      setStep(prev => prev + 1);
    }
  };

  return (
    <section className="section-padding voice-interview-section" id="voice">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2>Voice Product Interview</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>
          Never ask what you already know. Priority-based missing data collection.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        
        {/* Chat Interface */}
        <div className="card" style={{ background: 'var(--color-white)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', borderBottom: '1px solid #f3f4f6', paddingBottom: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-deep-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mic color="white" />
            </div>
            <div>
              <h3 style={{ fontSize: '18px' }}>Data Collection Assistant</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Assessing Product Passport...</p>
            </div>
          </div>

          <div style={{ minHeight: '200px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
             {step > 0 && (
               <>
                 <div style={{ background: '#f3f4f6', padding: '12px 16px', borderRadius: '16px 16px 16px 0', alignSelf: 'flex-start', maxWidth: '80%' }}>
                   What material is your product made of?
                 </div>
                 <div style={{ background: 'var(--color-orange)', color: 'var(--color-deep-green)', padding: '12px 16px', borderRadius: '16px 16px 0 16px', alignSelf: 'flex-end', maxWidth: '80%' }}>
                   {passport.material}
                 </div>
               </>
             )}
             
             {step > 1 && (
               <>
                 <div style={{ background: '#f3f4f6', padding: '12px 16px', borderRadius: '16px 16px 16px 0', alignSelf: 'flex-start', maxWidth: '80%' }}>
                   What is the total weight for shipping purposes?
                 </div>
                 <div style={{ background: 'var(--color-orange)', color: 'var(--color-deep-green)', padding: '12px 16px', borderRadius: '16px 16px 0 16px', alignSelf: 'flex-end', maxWidth: '80%' }}>
                   {passport.weight}
                 </div>
               </>
             )}

             {currentTarget && (
                <div style={{ background: '#f3f4f6', padding: '12px 16px', borderRadius: '16px 16px 16px 0', alignSelf: 'flex-start', maxWidth: '80%', animation: 'fadeIn 0.5s ease-in' }}>
                  {currentTarget.question}
                </div>
             )}
             
             {!currentTarget && (
               <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#16a34a', fontWeight: '500', justifyContent: 'center', marginTop: '20px' }}>
                 <CheckCircle2 /> Product Passport Complete!
               </div>
             )}
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
             <input 
               type="text" 
               placeholder={currentTarget ? "Type answer..." : "Interview complete."}
               value={inputValue}
               onChange={e => setInputValue(e.target.value)}
               disabled={!currentTarget}
               onKeyDown={e => e.key === 'Enter' && handleUpdate()}
               style={{ flex: 1, padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: '9999px', outline: 'none' }}
             />
             <button 
               className="btn-primary" 
               style={{ padding: '12px', borderRadius: '50%' }}
               onClick={handleUpdate}
               disabled={!currentTarget}
             >
               <Send size={18} />
             </button>
          </div>
        </div>

        {/* Logic Visualization */}
        <div>
          <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Logic Flow</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-deep-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</div>
              <p style={{ fontWeight: '500' }}>Check passport completeness</p>
            </div>
            <div style={{ borderLeft: '2px solid #e5e7eb', marginLeft: '15px', paddingLeft: '32px', paddingBottom: '16px' }}>
              <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                Missing: {missingFields.map(f => f.key).join(', ') || 'None'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', opacity: currentTarget ? 1 : 0.5 }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-deep-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</div>
              <p style={{ fontWeight: '500' }}>Prioritize missing fields</p>
            </div>
             <div style={{ borderLeft: '2px solid #e5e7eb', marginLeft: '15px', paddingLeft: '32px', paddingBottom: '16px' }}>
              {currentTarget ? (
                <span style={{ fontSize: '14px', color: 'var(--color-orange)', fontWeight: 'bold' }}>
                  Target: {currentTarget.key}
                </span>
              ) : (
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>All caught up</span>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', opacity: currentTarget ? 1 : 0.5 }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-deep-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</div>
              <p style={{ fontWeight: '500' }}>Ask most useful question</p>
            </div>

             <div style={{ borderLeft: '2px solid transparent', marginLeft: '15px', paddingLeft: '32px', paddingTop: '16px' }}>
               <div style={{ background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
                 <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>LIVE PASSPORT DATA</div>
                 <pre style={{ margin: 0, fontSize: '12px', color: 'var(--color-deep-green)' }}>
                   {JSON.stringify(passport, null, 2)}
                 </pre>
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
