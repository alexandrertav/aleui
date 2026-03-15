'use client';

import { useState } from 'react';
import { Button, Card, Input, Modal, Accordion } from '@/components';
import { AeroButton, ShinyButton, AeroCard, AeroInput, AeroBubble } from '@/components';

type TabType = 'overview' | 'glass' | 'aero';

const tabs = [
  { id: 'overview' as const, label: 'Overview' },
  { id: 'glass' as const, label: 'Glassmorphism' },
  { id: 'aero' as const, label: 'Frutiger Aero' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const bgClass = activeTab === 'aero' 
    ? 'bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500'
    : 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950';

  return (
    <main className={`min-h-screen pb-12 md:pb-20 transition-all duration-700 ${bgClass}`}>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-lg md:text-xl font-bold text-white bg">AleUI</h1>
            </div>
            <nav className="flex items-center gap-2 md:gap-4">
              <a href="#" className="text-xs md:text-sm text-white/70 hover:text-white transition-colors">Docs</a>
              <a href="https://github.com/alexandrertav/aleui" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-white/70 hover:text-white transition-colors">GitHub</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto pt-12 md:pt-24 pb-10 md:pb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
            Beautiful Components for Modern Apps
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 md:mb-8 leading-relaxed px-4">
            Copy. Paste. Customize. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <a href="https://github.com/alexandrertav/aleui" target="_blank" rel="noopener noreferrer">
            <ShinyButton size="sm" className="sm:text-base">
              View on GitHub
            </ShinyButton>
          </a>
        </div>

        <div className="mb-8 md:mb-16">
          <div className="flex gap-4 md:gap-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id ? 'text-white' : 'text-white/60 hover:text-white/90'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* OVERVIEW TAB - Com Blocks */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <Card variant="light" padding="lg">
              <h3 className="text-2xl font-bold text-white mb-4">Installation</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/70 mb-2">Add all components:</p>
                  <code className="block bg-black/40 text-white px-4 py-3 rounded-lg text-sm font-mono">
                    npx @alexandretav/aleui
                  </code>
                </div>
                <div>
                  <p className="text-white/70 mb-2">Add a specific component:</p>
                  <code className="block bg-black/40 text-white px-4 py-3 rounded-lg text-sm font-mono">
                    npx @alexandretav/aleui add button
                  </code>
                </div>
              </div>
            </Card>

            {/* Example Blocks */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Example Blocks</h2>
              
              {/* Login Form Block */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <Card variant="light" padding="lg">
                  <h3 className="text-2xl font-bold text-white mb-6">Login Form</h3>
                  <div className="space-y-4">
                    <Input
                      variant="light"
                      label="Email"
                      type="email"
                      placeholder="your@email.com"
                      fullWidth
                    />
                    <Input
                      variant="light"
                      label="Password"
                      type="password"
                      placeholder="••••••••"
                      fullWidth
                    />
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 text-white/70">
                        <input type="checkbox" className="rounded" />
                        Remember me
                      </label>
                      <a href="#" className="text-white/70 hover:text-white">Forgot password?</a>
                    </div>
                    <Button variant="colored" fullWidth>
                      Sign In
                    </Button>
                  </div>
                </Card>

                <Card variant="medium" padding="lg">
                  <h3 className="text-2xl font-bold text-white mb-6">Payment Method</h3>
                  <div className="space-y-4">
                    <Input
                      variant="medium"
                      label="Card Number"
                      placeholder="1234 5678 9012 3456"
                      fullWidth
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        variant="medium"
                        label="Expiry Date"
                        placeholder="MM/YY"
                        fullWidth
                      />
                      <Input
                        variant="medium"
                        label="CVV"
                        placeholder="123"
                        fullWidth
                      />
                    </div>
                    <Input
                      variant="medium"
                      label="Cardholder Name"
                      placeholder="John Doe"
                      fullWidth
                    />
                    <Button variant="colored" fullWidth>
                      Pay Now
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Settings Block */}
              <Card variant="dark" padding="lg">
                <h3 className="text-2xl font-bold text-white mb-6">Account Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Input
                      variant="dark"
                      label="Display Name"
                      placeholder="John Doe"
                      fullWidth
                    />
                    <Input
                      variant="dark"
                      label="Email"
                      type="email"
                      placeholder="john@example.com"
                      fullWidth
                    />
                  </div>
                  <div className="space-y-4">
                    <Input
                      variant="dark"
                      label="Phone"
                      placeholder="+1 (555) 000-0000"
                      fullWidth
                    />
                    <Input
                      variant="dark"
                      label="Location"
                      placeholder="San Francisco, CA"
                      fullWidth
                    />
                  </div>
                </div>
                <div className="flex gap-3 justify-end mt-6">
                  <Button variant="light">Cancel</Button>
                  <Button variant="colored">Save Changes</Button>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'glass' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Buttons</h3>
              <Card variant="light" padding="lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="light" size="sm">Light</Button>
                  <Button variant="medium" size="md">Medium</Button>
                  <Button variant="dark" size="lg">Dark</Button>
                  <Button variant="colored">Colored</Button>
                </div>
                <div className="mt-4">
                  <Button variant="light" fullWidth>Full Width Button</Button>
                </div>
              </Card>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card variant="light" padding="lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Light</h4>
                  <p className="text-white/70 text-sm">Subtle glass effect with minimal opacity</p>
                </Card>
                <Card variant="medium" padding="lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Medium</h4>
                  <p className="text-white/70 text-sm">Balanced opacity and backdrop blur</p>
                </Card>
                <Card variant="dark" padding="lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Dark</h4>
                  <p className="text-white/70 text-sm">Darker background with strong blur</p>
                </Card>
                <Card variant="colored" padding="lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Colored</h4>
                  <p className="text-white/70 text-sm">Gradient background with glass</p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Input Fields</h3>
              <Card variant="light" padding="lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input variant="light" label="Email" placeholder="your@email.com" fullWidth />
                  <Input variant="medium" label="Password" type="password" placeholder="••••••••" fullWidth />
                  <Input variant="dark" label="Username" placeholder="johndoe" fullWidth value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                  <Input variant="colored" label="Phone" placeholder="+1 (555) 000-0000" fullWidth />
                </div>
              </Card>
            </div>

            {/* Modal & Accordion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="light" padding="lg">
                <h3 className="text-xl font-bold text-white mb-4">Modal</h3>
                <Button variant="light" onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </Button>
              </Card>

              <Card variant="light" padding="lg">
                <h3 className="text-xl font-bold text-white mb-4">Accordion</h3>
                <Accordion
                  variant="light"
                  items={[
                    { id: '1', title: 'What is Glassmorphism?', content: 'A design style using translucent glass effects.' },
                    { id: '2', title: 'How to customize?', content: 'Use the variant prop to change styles.' },
                  ]}
                />
                <h3 className="text-xl font-bold text-white mb-4 mt-4">Accordion multiple open</h3>
                <Accordion
                variant="light"
                items={[
                  { id: '1', title: 'Accordion 1', content: 'Content 1' },
                  { id: '2', title: 'Accordion 2', content: 'Content 2' },
                ]}
                allowMultiple
                defaultOpen={['1', '2']}
              />
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'aero' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Aero Buttons</h3>
              <AeroCard variant="light" padding="lg">
                <div className="space-y-4">
                  <div>
                    <p className="text-white/70 text-sm mb-3">Standard Aero Buttons:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <AeroButton variant="light">Light</AeroButton>
                      <AeroButton variant="medium">Medium</AeroButton>
                      <AeroButton variant="colored">Colored</AeroButton>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-white/70 text-sm mb-3">Shiny Button (Glossy Effect):</p>
                    <ShinyButton size="md">Shiny Button</ShinyButton>
                  </div>
                  
                  <div>
                    <p className="text-white/70 text-sm mb-3">Full Width:</p>
                    <AeroButton variant="light" fullWidth>Full Width Button</AeroButton>
                  </div>
                </div>
              </AeroCard>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Aero Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AeroCard variant="light" padding="lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Aquatic</h4>
                  <p className="text-white/80 text-sm">Light aero design with aquatic vibes</p>
                </AeroCard>
                <AeroCard variant="medium" padding="lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Glossy</h4>
                  <p className="text-white/80 text-sm">Medium aero with glossy effects</p>
                </AeroCard>
                <AeroCard variant="colored" padding="lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Vibrant</h4>
                  <p className="text-white/80 text-sm">Colored gradients and bubbles</p>
                </AeroCard>
              </div>
            </div>

            {/* Aero Inputs */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Aero Inputs</h3>
              <AeroCard variant="light" padding="lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AeroInput variant="light" label="Username" placeholder="johndoe" fullWidth />
                  <AeroInput variant="medium" label="Email" type="email" placeholder="your@email.com" fullWidth />
                  <AeroInput variant="colored" label="Password" type="password" placeholder="••••••••" fullWidth />
                  <AeroInput variant="light" label="Phone" placeholder="+1 (555) 000-0000" fullWidth />
                </div>
              </AeroCard>
            </div>

            {/* Aero Bubbles */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Aero Bubbles</h3>
              <AeroCard variant="colored" padding="lg" className="relative overflow-hidden">
                <h4 className="text-xl font-semibold text-white mb-4">Decorative Elements</h4>
                <p className="text-white/90 mb-6">
                  Add floating bubbles for that authentic Frutiger Aero aesthetic
                </p>
                <div className="flex gap-4">
                  <AeroBubble size="sm" />
                  <AeroBubble size="md" />
                  <AeroBubble size="lg" />
                </div>
              </AeroCard>
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Example Modal"
        variant="medium"
      >
        <div className="space-y-4">
          <p className="text-white/90">
            This is a glassmorphism modal with backdrop blur.
          </p>
          <Input
            variant="light"
            label="Your name"
            placeholder="Enter your name"
            fullWidth
          />
          <div className="flex gap-3 justify-end pt-4">
            <Button variant="dark" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="colored" onClick={() => setIsModalOpen(false)}>Confirm</Button>
          </div>
        </div>
      </Modal>
    </main>
  );
}
