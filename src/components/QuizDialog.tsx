'use client'

import React, { useState, useEffect, useRef } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateQuiz, QuizQuestion } from "@/lib/ai-service";
import { Loader2, CheckCircle2, XCircle, Timer, Infinity, Trophy, Flame } from "lucide-react";

interface QuizDialogProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLevel?: 'Elementary' | 'Junior' | 'Senior' | 'All';
}

type QuizMode = 'Standard' | 'Sprint' | 'Marathon';

export const QuizDialog = ({ isOpen, onClose, defaultLevel = 'All' }: QuizDialogProps) => {
  const [gameState, setGameState] = useState<'Setup' | 'Loading' | 'Playing' | 'Finished'>('Setup');
  const [mode, setMode] = useState<QuizMode>('Standard');
  const [level, setLevel] = useState(defaultLevel);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isTimedOut, setIsTimedOut] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isOpen) {
      resetGame();
    }
  }, [isOpen]);

  const resetGame = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState('Setup');
    setQuestions([]);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setLives(3);
    setIsTimedOut(false);
  };

  const startQuiz = async () => {
    setGameState('Loading');
    try {
      const data = await generateQuiz(`單字測驗：${level}`, `Mode: ${mode}`);
      setQuestions(data);
      setGameState('Playing');
      if (mode === 'Sprint') startTimer();
    } catch (error) {
      alert('無法生成測驗，請重試。');
      setGameState('Setup');
    }
  };

  const startTimer = () => {
    setTimeLeft(5);
    setIsTimedOut(false);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeout();
          return 0; // 歸零後停止，不再回傳 5
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleTimeout = () => {
    setIsTimedOut(true);
    setIsAnswered(true);
    handleWrongAnswer();
  };

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isAnswered) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setIsAnswered(true);

    if (selectedOption === questions[currentIndex].answerIndex) {
      setScore(prev => prev + 1);
    } else {
      handleWrongAnswer();
    }
  };

  const handleWrongAnswer = () => {
    if (mode === 'Marathon') {
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          // 延遲結束，讓玩家看清楚答案
          setTimeout(() => setGameState('Finished'), 1500);
        }
        return newLives;
      });
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    
    // 檢查是否結束
    const isLastQuestion = mode !== 'Marathon' && nextIndex >= questions.length;
    const isOutOfLives = mode === 'Marathon' && lives <= 0;

    if (isLastQuestion || isOutOfLives) {
      setGameState('Finished');
      return;
    }

    // 繼續下一題
    setCurrentIndex(nextIndex);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsTimedOut(false);
    
    if (mode === 'Sprint') {
      startTimer();
    }
  };

  if (gameState === 'Setup') {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md bg-background border-border rounded-3xl p-8 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black text-center mb-2">挑戰模式選擇</DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              選擇您的單字挑戰難度與比賽模式。
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 py-6">
            <div className="space-y-4">
              <label className="text-sm font-black uppercase tracking-widest text-muted-foreground">難度選擇</label>
              <div className="grid grid-cols-2 gap-3">
                {['Elementary', 'Junior', 'Senior', 'All'].map((lvl) => (
                  <Button 
                    key={lvl} 
                    variant={level === lvl ? 'default' : 'outline'}
                    onClick={() => setLevel(lvl as any)}
                    className="h-12 rounded-xl font-bold"
                  >
                    {lvl === 'All' ? '混合挑戰' : lvl === 'Elementary' ? '小學' : lvl === 'Junior' ? '國中' : '高中'}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-black uppercase tracking-widest text-muted-foreground">模式選擇</label>
              <div className="grid grid-cols-1 gap-3">
                <Button 
                  variant={mode === 'Standard' ? 'default' : 'outline'}
                  onClick={() => setMode('Standard')}
                  className="h-16 justify-between px-6 rounded-2xl border-2"
                >
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <div className="text-left">
                      <div className="font-black text-base">標準模式</div>
                      <div className="text-xs font-medium opacity-70">固定 10 題，適合穩定學習</div>
                    </div>
                  </div>
                </Button>
                <Button 
                  variant={mode === 'Sprint' ? 'default' : 'outline'}
                  onClick={() => setMode('Sprint')}
                  className="h-16 justify-between px-6 rounded-2xl border-2"
                >
                  <div className="flex items-center gap-3">
                    <Flame className="w-5 h-5 text-red-500" />
                    <div className="text-left">
                      <div className="font-black text-base">極速提速</div>
                      <div className="text-xs font-medium opacity-70">每題 5 秒，考驗直覺反應</div>
                    </div>
                  </div>
                  {mode === 'Sprint' && <Timer className="w-5 h-5 animate-pulse" />}
                </Button>
                <Button 
                  variant={mode === 'Marathon' ? 'default' : 'outline'}
                  onClick={() => setMode('Marathon')}
                  className="h-16 justify-between px-6 rounded-2xl border-2"
                >
                  <div className="flex items-center gap-3">
                    <Infinity className="w-5 h-5 text-blue-500" />
                    <div className="text-left">
                      <div className="font-black text-base">無限馬拉松</div>
                      <div className="text-xs font-medium opacity-70">無限挑戰，錯 3 題即結束</div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-lg font-black text-white" onClick={startQuiz}>
            開始挑戰
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

  const currentQ = questions[currentIndex % (questions.length || 1)];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl bg-background border-border rounded-3xl p-8 shadow-2xl overflow-hidden">
        {gameState === 'Loading' ? (
          <div className="h-[400px] flex flex-col items-center justify-center gap-4">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
            <p className="font-bold text-lg animate-pulse">正在準備題目庫...</p>
          </div>
        ) : gameState === 'Playing' ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="px-3 py-1 font-bold rounded-lg bg-blue-100 text-blue-700 border-blue-200">
                  {mode === 'Marathon' ? <Infinity className="w-4 h-4 mr-1" /> : `題 ${currentIndex + 1} / ${questions.length}`}
                  {mode === 'Marathon' && score}
                </Badge>
                <div className="flex gap-1">
                  {mode === 'Marathon' && Array.from({length: 3}).map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i < lives ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'bg-slate-200'}`} />
                  ))}
                </div>
              </div>
              {mode === 'Sprint' && !isAnswered && (
                <div className={`flex items-center gap-2 font-black text-xl ${timeLeft <= 2 ? 'text-red-500 animate-bounce' : 'text-slate-700'}`}>
                  <Timer className="w-5 h-5" /> {timeLeft}s
                </div>
              )}
              <div className="font-bold text-slate-500 text-sm">當前得分: {score}</div>
            </div>

            <div className="py-4">
              <h3 className="text-2xl font-black text-foreground leading-tight text-center">
                {currentQ?.question}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {currentQ?.options.map((opt, idx) => {
                const isCorrect = idx === currentQ.answerIndex;
                const isSelected = idx === selectedOption;
                let variant = "outline";
                if (isAnswered) {
                  if (isCorrect) variant = "default";
                  else if (isSelected) variant = "destructive";
                } else if (isSelected) {
                  variant = "secondary";
                }

                return (
                  <Button
                    key={idx}
                    variant={variant as any}
                    className={`h-16 justify-start px-6 text-lg font-bold rounded-2xl border-2 transition-all duration-200 ${
                      isAnswered && isCorrect ? 'bg-green-600 border-green-600 text-white hover:bg-green-600' : 
                      isAnswered && isSelected && !isCorrect ? 'bg-red-600 border-red-600 text-white' : ''
                    }`}
                    onClick={() => handleOptionSelect(idx)}
                  >
                    <span className="mr-4 opacity-40">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </Button>
                );
              })}
            </div>

            <div className="min-h-[80px]">
              {isAnswered && (
                <div className={`p-4 rounded-2xl animate-in slide-in-from-bottom-2 duration-300 border ${
                  isTimedOut ? 'bg-amber-50 border-amber-200 text-amber-800' :
                  selectedOption === currentQ.answerIndex ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  <p className="text-sm font-bold leading-relaxed">
                    {isTimedOut && <span className="text-red-600 block mb-1">⏰ 時間到！</span>}
                    {currentQ.explanation}
                  </p>
                </div>
              )}
            </div>

            <DialogFooter>
              {!isAnswered ? (
                <Button className="w-full h-14 rounded-2xl bg-slate-900 text-white font-black text-lg" onClick={handleSubmit} disabled={selectedOption === null}>
                  確認答案
                </Button>
              ) : (
                <Button className="w-full h-14 rounded-2xl bg-blue-600 text-white font-black text-lg" onClick={handleNext}>
                  {currentIndex === questions.length - 1 && mode !== 'Marathon' ? '查看結果' : '下一題'}
                </Button>
              )}
            </DialogFooter>
          </div>
        ) : (
          <div className="text-center py-10 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="inline-flex p-6 bg-amber-100 rounded-full mb-4">
              <Trophy className="w-16 h-12 text-amber-600" />
            </div>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">挑戰結束!</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-6 rounded-3xl border border-border">
                <div className="text-sm font-bold text-muted-foreground uppercase">總得分</div>
                <div className="text-4xl font-black text-blue-600">{score}</div>
              </div>
              <div className="bg-muted p-6 rounded-3xl border border-border">
                <div className="text-sm font-bold text-muted-foreground uppercase">模式</div>
                <div className="text-xl font-black text-slate-700">{mode}</div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 h-14 rounded-2xl font-bold border-2" onClick={resetGame}>再試一次</Button>
              <Button className="flex-1 h-14 rounded-2xl bg-slate-900 font-bold text-white" onClick={onClose}>離開</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
