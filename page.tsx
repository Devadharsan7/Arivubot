'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, FileText, MessageSquare, Brain, Search, Send, Sparkles, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const TypewriterInput = () => {
  const placeholders = [
    "Ask about our features...",
    "How to train your chatbot...",
    "Integration questions...",
    "Need help getting started?",
  ];
  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = placeholders[currentIndex];

    if (isTyping) {
      if (currentPlaceholder.length < currentText.length) {
        timeout = setTimeout(() => {
          setCurrentPlaceholder(currentText.slice(0, currentPlaceholder.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (currentPlaceholder.length > 0) {
        timeout = setTimeout(() => {
          setCurrentPlaceholder(currentPlaceholder.slice(0, -1));
        }, 50);
      } else {
        setCurrentIndex((prev) => (prev + 1) % placeholders.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentPlaceholder, isTyping, currentIndex]);

  return (
    <Input 
      placeholder={currentPlaceholder}
      className="flex-1 bg-white/90 border-gray-200/50 focus:bg-white focus:border-blue-500 transition-all duration-200 h-14 text-lg px-6"
    />
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 rounded-full mb-8 border border-blue-200/50 animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-blue-700 font-medium">AI-powered chat experience</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Build AI Chatbots with
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mt-2">
                Your Own Data
              </span>
            </h1>
            
            <p className="mt-8 text-xl text-gray-700 leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              Train custom AI chatbots on your documents, websites, and business data.
              Deploy in minutes with no coding required.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <Link href="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg h-14 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Zap className="mr-2 h-5 w-5" />
                  Try for Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
                <Globe className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Enhanced Chat Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.8 }}
            className="mt-20 max-w-5xl mx-auto"
          >
            <motion.div
              className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden group"
              whileHover={{ scale: 1.015, boxShadow: '0 8px 40px 0 rgba(56, 189, 248, 0.15)' }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            >
              {/* Floating Glow */}
              <motion.div
                className="absolute -inset-1 rounded-3xl pointer-events-none z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                style={{ background: 'radial-gradient(ellipse at 60% 40%, #60a5fa33 0%, transparent 70%)' }}
                transition={{ duration: 1.2, delay: 1.2 }}
              />
              <div className="relative z-10 p-6 border-b border-gray-100/50 flex items-center justify-between bg-gradient-to-r from-gray-50/50 to-white/50">
                <div className="flex items-center gap-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="font-semibold text-gray-900">Arivubot Assistant</span>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    Online
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Search className="h-4 w-4" />
                  <span className="text-sm">Search conversation</span>
                </div>
              </div>
              
              <motion.div
                className="p-8 space-y-6 min-h-[450px] bg-gradient-to-b from-white/50 to-gray-50/30"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.22, delayChildren: 1.1 } }
                }}
              >
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 max-w-[85%] shadow-md border border-gray-100/50"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 1.2 }}
                  >
                    <p className="text-gray-800 leading-relaxed">Hi! I'm your AI assistant. I can help answer questions about our products, provide customer support, and assist with various tasks. What can I help you with today?</p>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="flex gap-4 justify-end"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 1.4 }}
                >
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-5 max-w-[85%] shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 1.5 }}
                  >
                    <p className="text-white">How can I train a chatbot with my company's data?</p>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 1.7 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 max-w-[85%] shadow-md border border-gray-100/50"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 1.8 }}
                  >
                    <p className="text-gray-800 leading-relaxed">Training a chatbot is simple! Just upload your documents (PDFs, Word files, or websites), and our AI will automatically learn from your content. You can also fine-tune the bot's responses and personality to match your brand voice.</p>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <div className="relative z-10 p-6 border-t border-gray-100/50 bg-gradient-to-r from-gray-50/50 to-white/50">
                <div className="flex gap-4">
                  <TypewriterInput />
                  <motion.div whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}>
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform flex items-center justify-center">
                      <Send className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Build 
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Powerful AI Chatbots
              </span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Create, train, and deploy AI chatbots that understand your business and deliver exceptional customer experiences.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FileText className="h-8 w-8 text-blue-600" />,
                title: "Document Training",
                description: "Upload your documents and train AI that understands your business content perfectly.",
                gradient: "from-blue-50 to-blue-100/50"
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-blue-700" />,
                title: "Smart Conversations",
                description: "Natural language processing for human-like chat experiences across all channels.",
                gradient: "from-blue-100 to-blue-200/50"
              },
              {
                icon: <Brain className="h-8 w-8 text-blue-800" />,
                title: "AI Agents",
                description: "Specialized AI agents for different tasks like sales, support, and scheduling.",
                gradient: "from-blue-200 to-blue-300/50"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover-lift animate-fade-in-up`}
                style={{ animationDelay: `${200 + index * 200}ms` }}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Loved by Businesses Worldwide</h2>
            <p className="text-xl text-gray-700">Join thousands of companies using Arivubot to transform their customer support</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                quote: "Arivubot has completely transformed how we handle customer support. Response times are down 80% and satisfaction is up.",
                author: "Sarah Chen",
                role: "Head of Support, TechCorp",
                avatar: "SC"
              },
              {
                quote: "Setting up our knowledge base was incredibly easy. The AI understands our documentation perfectly.",
                author: "Michael Rodriguez",
                role: "CTO, InnovateLabs",
                avatar: "MR"
              },
              {
                quote: "The best investment we've made in our customer service stack. The ROI was clear within the first month.",
                author: "Emily Watson",
                role: "Product Manager, DataFlow",
                avatar: "EW"
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-8 shadow-xl border-0 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-700">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Start building your AI chatbot today. No credit card required.
            </p>
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 h-14 px-10 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <Shield className="mr-2 h-5 w-5" />
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}