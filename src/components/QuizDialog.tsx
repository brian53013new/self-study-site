'use client'

import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { generateQuiz, QuizQuestion } from "@/lib/ai-service";
import { Loader2, CheckCircle2, XCircle, HelpCircle } from "lucide-react";

interface QuizDialogProps {
  isOpen: boolean;
  onClose: () => void;
  resourceTitle: string;
  resourceDescription: string;
}

export const QuizDialog = ({ isOpen, onClose, resourceTitle, resourceDescription }: QuizDialogProps) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isOpen) {
      handleGenerate();
    } else {
      // Reset state on close
      setQuestions([]);
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsAnswered(false);
      setScore(0);
    }
  }, [isOpen]);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const data = await generateQuiz(resourceTitle, resourceDescription);
      setQuestions(data);
    } catch (error) {
      alert('生成失敗，請檢查網路或 API 金鑰。');
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === questions[currentIndex].answerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // End of quiz
    }
  };

  const currentQ = questions[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            AI 智慧測驗：{resourceTitle}
          </DialogTitle>
          <DialogDescription>
            AI 正在根據這份資源為您量身打造隨機測驗。
          </DialogDescription>
        </DialogHeader>

        <div className="py-6 min-h-[300px] flex flex-col justify-center">
          {loading ? (
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
              <p className="text-slate-600 font-medium">AI 正在思考題目中...</p>
            </div>
          ) : questions.length > 0 ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center text-sm text-slate-500 font-medium">
                <span>問題 {currentIndex + 1} / {questions.length}</span>
                <span>正確率: {Math.round((score / (currentIndex + (isAnswered ? 1 : 0))) * 100 || 0)}%</span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 leading-relaxed">
                {currentQ.question}
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {currentQ.options.map((opt, idx) => {
                  const isCorrect = idx === currentQ.answerIndex;
                  const isSelected = idx === selectedOption;
                  
                  let variant = "outline";
                  if (isAnswered) {
                    if (isCorrect) variant = "default"; // Correct answer shows green/blue
                    else if (isSelected) variant = "destructive"; // Wrong selection shows red
                  } else if (isSelected) {
                    variant = "secondary";
                  }

                  return (
                    <Button
                      key={idx}
                      variant={variant as any}
                      className={`justify-start h-auto py-3 px-4 text-left whitespace-normal ${
                        isAnswered && isCorrect ? 'bg-green-600 hover:bg-green-600 border-green-600' : ''
                      }`}
                      onClick={() => handleOptionSelect(idx)}
                    >
                      <span className="mr-3 font-bold opacity-50">{String.fromCharCode(65 + idx)}.</span>
                      {opt}
                    </Button>
                  );
                })}
              </div>

              {isAnswered && (
                <div className={`p-4 rounded-lg border flex gap-3 ${
                  selectedOption === currentQ.answerIndex 
                    ? 'bg-green-50 border-green-200 text-green-800' 
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  {selectedOption === currentQ.answerIndex 
                    ? <CheckCircle2 className="w-5 h-5 shrink-0" />
                    : <XCircle className="w-5 h-5 shrink-0" />
                  }
                  <p className="text-sm font-medium leading-relaxed">
                    <strong>{selectedOption === currentQ.answerIndex ? '太棒了！' : '可惜答錯了。'}</strong>
                    <br />
                    {currentQ.explanation}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <p className="text-center text-slate-500">無法生成測驗，請稍後再試。</p>
          )}
        </div>

        <DialogFooter className="sm:justify-between gap-2">
          <Button variant="ghost" onClick={onClose}>
            結束測驗
          </Button>
          {!isAnswered ? (
            <Button 
              onClick={handleSubmit} 
              disabled={selectedOption === null || loading}
              className="bg-blue-600 hover:bg-blue-700"
            >
              送出答案
            </Button>
          ) : (
            <Button onClick={currentIndex === questions.length - 1 ? onClose : handleNext} className="bg-slate-900">
              {currentIndex === questions.length - 1 ? '完成' : '下一題'}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
