import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, User, ChevronRight } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi, I'm the Reset Pods assistant. I can help you understand the intervention protocols or help you schedule a 10-minute reset. How are you feeling today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      console.log(`[Chat] Transmitting message: "${input}"`);
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      console.log(`[Chat] Intelligence received:`, data);

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response || "I encounter an operational error. Please verify system connection.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (err) {
      console.error("Chat Error:", err);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "System link failure. Unable to reach recovery intelligence.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorResponse]);
    }
  };

  return (
    <>
      {/* Floating Toggle */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-outline-variant/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-primary text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-black">CP</div>
                <div>
                  <h4 className="font-bold leading-none mb-1">Reset Assistant</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest opacity-60">System Operational</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow p-6 overflow-y-auto space-y-6 bg-surface-container-low/30">
              {messages.map((m) => (
                <div key={m.id} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white border border-outline-variant/10 text-on-surface rounded-tl-none shadow-sm'
                  }`}>
                    {m.content}
                  </div>
                  <span className="text-[10px] font-black uppercase text-on-surface-variant/40 mt-2 tracking-tighter">
                    {m.timestamp}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-outline-variant/10">
              <div className="relative flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Reset Pods..."
                  className="flex-grow px-4 py-3 bg-surface rounded-xl border border-outline-variant/10 focus:outline-none focus:border-primary text-sm"
                />
                <button 
                  onClick={handleSend}
                  className="p-3 bg-primary text-white rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-md"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Book Session", "Pricing", "About Tatiana"].map(tag => (
                  <button key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-surface border border-outline-variant/10 px-3 py-1 rounded-full text-on-surface-variant hover:border-primary transition-colors flex items-center">
                    {tag} <ChevronRight size={10} className="ml-1" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
