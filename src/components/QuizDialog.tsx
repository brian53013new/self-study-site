'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, BrainCircuit, CheckCircle2, AlertCircle } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  answerIndex: number;
}

interface QuizDialogProps {
  title: string;
  questions: Question[];
  onClose: () => void;
}

export const QuizDialog = ({ title, questions, onClose }: QuizDialogProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === questions[currentStep].answerIndex) {
      setScore(score + 1);
    }
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[300] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border animate-in zoom-in-95 duration-200">
        <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
          <div className="flex items-center">
            <BrainCircuit className="w-5 h-5 mr-2" />
            <h3 className="font-bold">AI 隨堂練習：{title}</h3>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          {!finished ? (
            <div className="space-y-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">Question {currentStep + 1}/{questions.length}</span>
                <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-300" 
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-slate-800 leading-tight">
                {questions[currentStep].question}
              </h4>

              <div className="space-y-3">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    disabled={selected !== null}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex justify-between items-center ${
                      selected === null 
                        ? 'border-slate-100 hover:border-blue-400 hover:bg-blue-50/50' 
                        : idx === questions[currentStep].answerIndex
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : selected === idx
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-slate-50 opacity-50'
                    }`}
                  >
                    <span className="font-medium text-sm">{option}</span>
                    {selected !== null && idx === questions[currentStep].answerIndex && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                    {selected === idx && idx !== questions[currentStep].answerIndex && <AlertCircle className="w-4 h-4 text-red-500" />}
                  </button>
                ))}
              </div>

              {selected !== null && (
                <Button onClick={nextStep} className="w-full bg-slate-900 hover:bg-black rounded-xl h-12">
                  {currentStep < questions.length - 1 ? '下一題' : '查看結果'}
                </Button>
              )}
            </div>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-4">
                <span className="text-3xl font-black text-blue-600">{Math.round((score / questions.length) * 100)}%</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900">練習完成！</h4>
                <p className="text-slate-500 mt-2">你在 {questions.length} 題中答對了 {score} 題</p>
              </div>
              <Button onClick={onClose} className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl h-12">
                太棒了，繼續學習
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
