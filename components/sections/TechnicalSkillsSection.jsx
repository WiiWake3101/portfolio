'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const terminalLines = [
  { prompt: '$ cat skills.txt', delay: 0 },
  { content: 'Operating Systems: Windows, Linux', type: 'output', delay: 0.5 },
  { content: 'Languages: C++, Python, JavaScript, Arduino C', type: 'output', delay: 1 },
  { content: 'Database & Server: MySQL, Supabase', type: 'output', delay: 1.5 },
  { content: 'Tools: VS Code, GitHub, Git, Figma', type: 'output', delay: 2 },
  { content: 'Web: React Native, React JS, Next JS', type: 'output', delay: 2.5 },
  { content: 'Others: Embedded System Programming', type: 'output', delay: 3 },
];

export default function TechnicalSkillsSection({ sectionRef }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [completedLines, setCompletedLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [shouldRestart, setShouldRestart] = useState(false);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    // Reset animation when shouldRestart changes
    if (shouldRestart) {
      setCurrentLine(0);
      setCompletedLines([]);
      setCurrentText('');
      setShouldRestart(false);
    }
  }, [shouldRestart]);

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      // Wait 3 seconds after completion, then restart
      const restartTimeout = setTimeout(() => {
        setShouldRestart(true);
      }, 3000);
      return () => clearTimeout(restartTimeout);
    }

    const line = terminalLines[currentLine];
    const textToType = line.prompt || line.content;
    
    const startDelay = setTimeout(() => {
      setIsTyping(true);
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        if (charIndex <= textToType.length) {
          setCurrentText(textToType.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          
          setTimeout(() => {
            setCompletedLines(prev => [...prev, { ...line, text: textToType }]);
            setCurrentText('');
            setCurrentLine(prev => prev + 1);
          }, 200);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }, line.delay * 1000);

    return () => clearTimeout(startDelay);
  }, [currentLine]);

  return (
    <motion.section
      ref={sectionRef}
      id="Technical"
      className="pt-4 pb-10 px-4 sm:px-6 lg:px-20 text-white lg:scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10 text-center">
        Technical Skills
      </h2>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden"
        >
          {/* Mac-style window bar */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 border-b border-gray-600">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <motion.span 
                whileHover={{ scale: 1.2 }}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 cursor-pointer shadow-lg"
                title="Close"
              />
              <motion.span 
                whileHover={{ scale: 1.2 }}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400 cursor-pointer shadow-lg"
                title="Minimize"
              />
              <motion.span 
                whileHover={{ scale: 1.2 }}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 cursor-pointer shadow-lg"
                title="Zoom"
              />
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-400 text-[10px] sm:text-xs font-mono">
                vivek@portfolio ~ skills
              </span>
            </div>
          </div>

          {/* Terminal content */}
          <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm bg-gray-900/50 min-h-[250px] sm:min-h-[300px] overflow-x-auto">
            <div className="space-y-1.5 sm:space-y-2">
              {/* Completed lines */}
              {completedLines.map((line, index) => (
                <motion.div
                  key={`completed-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="break-words"
                >
                  {line.prompt ? (
                    <div className="flex items-start gap-1 sm:gap-2">
                      <span className="text-green-400 flex-shrink-0">➜</span>
                      <span className="text-cyan-400 flex-shrink-0">~</span>
                      <span className="text-white break-all">{line.text}</span>
                    </div>
                  ) : (
                    <div className="pl-4 sm:pl-8 text-gray-300 break-words">
                      <span className="text-cyan-300">{line.text.split(':')[0]}:</span>
                      <span className="text-gray-100"> {line.text.split(':')[1]}</span>
                    </div>
                  )}
                </motion.div>
              ))}
              
              {/* Currently typing line */}
              {currentLine < terminalLines.length && currentText && (
                <div className="break-words">
                  {terminalLines[currentLine].prompt ? (
                    <div className="flex items-start gap-1 sm:gap-2">
                      <span className="text-green-400 flex-shrink-0">➜</span>
                      <span className="text-cyan-400 flex-shrink-0">~</span>
                      <span className="text-white break-all">{currentText}</span>
                      <span className={`inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 bg-green-400 ml-1 flex-shrink-0 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                  ) : (
                    <div className="pl-4 sm:pl-8 text-gray-300 break-words">
                      <span className="text-cyan-300">{currentText.split(':')[0]}</span>
                      {currentText.includes(':') && (
                        <>
                          <span className="text-cyan-300">:</span>
                          <span className="text-gray-100"> {currentText.split(':')[1]}</span>
                        </>
                      )}
                      <span className={`inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 bg-green-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                  )}
                </div>
              )}
              
              {/* Final cursor when all lines are complete */}
              {currentLine >= terminalLines.length && !isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-1 sm:gap-2 mt-3 sm:mt-4"
                >
                  <span className="text-green-400">➜</span>
                  <span className="text-cyan-400">~</span>
                  <span className={`inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 bg-green-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
