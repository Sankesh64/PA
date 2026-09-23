import React, { useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

export default function AdaptiveMarketDemo() {
  const [activeMarket, setActiveMarket] = useState('amazon');

  const baseProduct = {
    name: 'Bamboo Storage Basket',
    material: '100% Natural Bamboo',
    dimensions: '600x400x300mm',
    weight: '1.2kg',
    color: 'Natural Wood',
    origin: 'Vietnam'
  };

  return (
    <section className="section-padding market-pack-section" id="adaptive">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2>Bamboo Storage Basket.<br />Prepared for every market.</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>
          PА keeps the artisan story intact while adapting the product details for each marketplace requirement.
        </p>
      </div>

      <div className="demo-container">
        {/* Source Data Card */}
        <div className="card">
          <div style={{ fontSize: '12px', color: '#16a34a', fontWeight: 'bold', marginBottom: '16px' }}>
            SOURCE: PRODUCT PASSPORT
          </div>
          <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>{baseProduct.name}</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {Object.entries(baseProduct).map(([key, value]) => (
              <div key={key}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{key}</div>
                <div style={{ fontWeight: '500' }}>{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Translation Arrow (desktop only) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
           <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '8px' }}>Adapts to market requirements</p>
           <ArrowRight size={32} color="var(--color-orange)" />
        </div>

        {/* Target Market Card */}
        <div className="card" style={{ border: '2px solid var(--color-deep-green)' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
            <button 
              className={`btn-primary ${activeMarket !== 'amazon' ? 'btn-secondary' : ''}`}
              style={activeMarket !== 'amazon' ? { border: '1px solid #e5e7eb' } : {}}
              onClick={() => setActiveMarket('amazon')}
            >
              Market A (Amazon)
            </button>
            <button 
              className={`btn-primary ${activeMarket !== 'etsy' ? 'btn-secondary' : ''}`}
              style={activeMarket !== 'etsy' ? { border: '1px solid #e5e7eb' } : {}}
              onClick={() => setActiveMarket('etsy')}
            >
              Market B (Etsy)
            </button>
          </div>

          <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e5e7eb' }}>
            {activeMarket === 'amazon' ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#b91c1c' }}>REQUIRED: ASIN</span>
                  <span style={{ fontSize: '12px', background: '#fef2f2', color: '#b91c1c', padding: '2px 8px', borderRadius: '12px' }}>Missing</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Bullet Points Structure</div>
                <ul style={{ margin: '8px 0 16px', paddingLeft: '20px', fontSize: '14px' }}>
                  <li>Made of {baseProduct.material}</li>
                  <li>Dimensions: {baseProduct.dimensions}</li>
                  <li>Weight: {baseProduct.weight}</li>
                </ul>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Search Terms</div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                  {['bamboo', 'storage', 'basket', 'natural'].map(tag => (
                    <span key={tag} style={{ background: '#f3f4f6', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#047857' }}>ALL REQUIRED FIELDS MET</span>
                  <Check size={16} color="#047857" />
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Craft Story (Description)</div>
                <p style={{ fontSize: '14px', margin: '8px 0 16px', lineHeight: '1.5' }}>
                  Handcrafted from {baseProduct.material}, this beautiful {baseProduct.color} basket brings a touch of nature into your home. Originating from {baseProduct.origin}, it's perfect for organizing your space.
                </p>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Materials Tag</div>
                <span style={{ display: 'inline-block', background: '#ecfdf5', color: '#047857', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', marginTop: '8px' }}>
                  Bamboo
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
