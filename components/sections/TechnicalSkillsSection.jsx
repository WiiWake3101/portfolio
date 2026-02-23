'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const terminalLines = [
  { prompt: '$ cat skills.txt', delay: 0 },
  { content: 'OS: Windows, Linux', type: 'output', delay: 0.5 },
  { content: 'Languages: C++, Python, JavaScript, Arduino C', type: 'output', delay: 1 },
  { content: 'Database & Server: MySQL, Supabase', type: 'output', delay: 1.5 },
  { content: 'Tools: VS Code, GitHub, Git, Figma', type: 'output', delay: 2 },
  { content: 'Web: React Native, React JS, Next JS', type: 'output', delay: 2.5 },
  { content: 'Others: Embedded System Programming', type: 'output', delay: 3 },
];

export default function TechnicalSkillsSection({ sectionRef }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [completedLines, setCompletedLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [shouldRestart, setShouldRestart] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => setShowCursor(p => !p), 530);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    if (shouldRestart) {
      setCurrentLine(0); setCompletedLines([]); setCurrentText(''); setShouldRestart(false);
    }
  }, [shouldRestart]);

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      const t = setTimeout(() => setShouldRestart(true), 3500);
      return () => clearTimeout(t);
    }
    const line = terminalLines[currentLine];
    const text = line.prompt || line.content;
    const startDelay = setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        if (i <= text.length) { setCurrentText(text.slice(0, i)); i++; }
        else {
          clearInterval(iv);
          setTimeout(() => {
            setCompletedLines(p => [...p, { ...line, text }]);
            setCurrentText('');
            setCurrentLine(p => p + 1);
          }, 180);
        }
      }, 45);
      return () => clearInterval(iv);
    }, line.delay * 1000);
    return () => clearTimeout(startDelay);
  }, [currentLine]);

  return (
    <motion.section
      ref={sectionRef}
      id="Technical"
      className="py-12 px-4 sm:px-6 lg:px-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] mb-2 opacity-50" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#00fff0' }}>
          // SYSTEM_SCAN.SH
        </p>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em' }}>
          Technical Skills
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(0,255,240,0.15)', boxShadow: '0 0 30px rgba(0,255,240,0.05)' }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5"
            style={{ background: 'rgba(2,6,12,0.98)', borderBottom: '1px solid rgba(0,255,240,0.1)' }}>
            <div className="flex gap-1.5 mr-2">
              {['#ff5f57','#ffbd2e','#28c840'].map((c,i)=>(
                <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <span className="text-[10px] tracking-widest opacity-50" style={{ fontFamily:'Share Tech Mono, monospace', color:'#00fff0' }}>
              vivek@portfolio ~ skills
            </span>
            <span className="ml-auto text-[10px] opacity-30" style={{ fontFamily:'Share Tech Mono, monospace', color:'#00fff0' }}>
              bash — 80×24
            </span>
          </div>

          {/* Terminal body */}
          <div className="relative p-5 min-h-[280px] overflow-x-auto"
            style={{ background: 'rgba(2,6,12,0.95)', backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,240,0.012) 3px,rgba(0,255,240,0.012) 4px)' }}>

            <div className="space-y-1.5" style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '13px' }}>
              {completedLines.map((line, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {line.prompt ? (
                    <div className="flex items-start gap-2">
                      <span style={{ color: '#00ff88' }}>➜</span>
                      <span style={{ color: '#00fff0' }}>~</span>
                      <span style={{ color: '#e0f4ff' }}>{line.text}</span>
                    </div>
                  ) : (
                    <div className="pl-8">
                      <span style={{ color: '#00fff0' }}>{line.text.split(':')[0]}:</span>
                      <span style={{ color: 'rgba(160,196,212,0.85)' }}>{line.text.slice(line.text.indexOf(':') + 1)}</span>
                    </div>
                  )}
                </motion.div>
              ))}

              {currentLine < terminalLines.length && currentText && (
                <div>
                  {terminalLines[currentLine].prompt ? (
                    <div className="flex items-start gap-2">
                      <span style={{ color: '#00ff88' }}>➜</span>
                      <span style={{ color: '#00fff0' }}>~</span>
                      <span style={{ color: '#e0f4ff' }}>{currentText}</span>
                      <span style={{ display: 'inline-block', width: '8px', height: '14px', background: '#00fff0', opacity: showCursor ? 1 : 0, boxShadow: '0 0 6px #00fff0' }} />
                    </div>
                  ) : (
                    <div className="pl-8">
                      <span style={{ color: '#00fff0' }}>{currentText.split(':')[0]}</span>
                      {currentText.includes(':') && (
                        <span style={{ color: 'rgba(160,196,212,0.85)' }}>{currentText.slice(currentText.indexOf(':'))}</span>
                      )}
                      <span style={{ display: 'inline-block', width: '8px', height: '14px', background: '#00fff0', opacity: showCursor ? 1 : 0, boxShadow: '0 0 6px #00fff0', marginLeft: '2px' }} />
                    </div>
                  )}
                </div>
              )}

              {currentLine >= terminalLines.length && (
                <div className="flex items-center gap-2 mt-2">
                  <span style={{ color: '#00ff88' }}>➜</span>
                  <span style={{ color: '#00fff0' }}>~</span>
                  <span style={{ display: 'inline-block', width: '8px', height: '14px', background: '#00fff0', opacity: showCursor ? 1 : 0, boxShadow: '0 0 6px #00fff0' }} />
                </div>
              )}
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5"
            style={{ background:'rgba(0,255,240,0.06)', borderTop:'1px solid rgba(0,255,240,0.08)' }}>
            <span className="text-[9px] tracking-widest opacity-50" style={{ fontFamily:'Share Tech Mono, monospace', color:'#00fff0' }}>BASH_5.2</span>
            <span className="text-[9px] tracking-widest opacity-35" style={{ fontFamily:'Share Tech Mono, monospace', color:'#00ff88' }}>● CONNECTED</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}