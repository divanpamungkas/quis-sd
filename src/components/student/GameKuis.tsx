import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Gamepad2,
  Sparkles,
  Trophy,
  CheckCircle2,
  XCircle,
  X,
  ExternalLink,
  RotateCcw,
} from 'lucide-react';
import { GameKuisItem, QuizQuestion } from '../../types';

export const GameKuis: React.FC = () => {
  const { gameList, showToast } = useApp();
  const [activeGame, setActiveGame] = useState<GameKuisItem | null>(null);

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const startQuiz = (game: GameKuisItem) => {
    setActiveGame(game);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = (questions: QuizQuestion[]) => {
    if (selectedOption === null) return;
    setIsAnswered(true);

    const currentQ = questions[currentQuestionIndex];
    if (selectedOption === currentQ.jawabanBenarIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = (questions: QuizQuestion[]) => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      showToast('🎉 Kuis selesai! Nilai kamu tersimpan.');
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-indigo-600" />
            <span>Game & Kuis Edukasi Interaktif</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Belajar jadi lebih seru melalui permainan tebak kata, kuis koin, dan tantangan Wordwall!
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-indigo-50 text-indigo-700 font-bold text-xs border border-indigo-100">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>Poin Game Kamu: 450 PTS</span>
        </div>
      </div>

      {/* Game Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {gameList.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={game.thumbnailUrl}
                  alt={game.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                />
                <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg">
                  {game.tipe === 'wordwall' ? 'Wordwall Game' : 'Kuis Interaktif SD'}
                </div>

                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {game.level}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-extrabold text-xs text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {game.judul}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {game.deskripsi}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => startQuiz(game)}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Mulai Game</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Game Modal Runner */}
      {activeGame && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="bg-indigo-600 text-white p-4 px-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-amber-300" />
                <h3 className="font-extrabold text-sm">{activeGame.judul}</h3>
              </div>

              <button
                onClick={() => setActiveGame(null)}
                className="p-1.5 rounded-xl hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content: Wordwall vs Interactive Quiz */}
            {activeGame.tipe === 'wordwall' ? (
              <div className="p-6 space-y-4 text-center">
                <div className="p-8 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col items-center justify-center space-y-3">
                  <Gamepad2 className="w-16 h-16 text-indigo-600 animate-bounce" />
                  <h4 className="font-extrabold text-sm text-slate-800">
                    Game Wordwall Interaktif
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md">
                    Permainan tebak kata dan jodohkan jawaban dari Wordwall.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href="https://wordwall.net"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Buka Game di Halaman Baru</span>
                  </a>

                  <button
                    onClick={() => setActiveGame(null)}
                    className="w-full sm:w-auto px-4 py-3 border border-slate-200 text-xs font-bold text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Tutup Game
                  </button>
                </div>
              </div>
            ) : (
              /* Interactive Built-in Quiz Engine */
              <div className="p-6 space-y-6 overflow-y-auto">
                {activeGame.quizQuestions && !quizFinished ? (
                  (() => {
                    const questions = activeGame.quizQuestions;
                    const q = questions[currentQuestionIndex];

                    return (
                      <div className="space-y-5">
                        {/* Progress Header */}
                        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                          <span>
                            Soal {currentQuestionIndex + 1} dari {questions.length}
                          </span>
                          <span className="text-indigo-600">Skor: {score} / {questions.length}</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-indigo-600 h-full transition-all duration-300"
                            style={{
                              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                            }}
                          />
                        </div>

                        {/* Question Text */}
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                          <h4 className="font-extrabold text-sm text-slate-800 leading-snug">
                            {q.pertanyaan}
                          </h4>
                        </div>

                        {/* Option List */}
                        <div className="space-y-2">
                          {q.pilihan.map((opt, idx) => {
                            let btnStyle =
                              'bg-white border-slate-200 text-slate-700 hover:bg-slate-50';

                            if (selectedOption === idx) {
                              btnStyle = 'bg-indigo-50 border-indigo-500 text-indigo-900 font-bold';
                            }

                            if (isAnswered) {
                              if (idx === q.jawabanBenarIndex) {
                                btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                              } else if (selectedOption === idx) {
                                btnStyle = 'bg-red-100 border-red-500 text-red-900 font-bold';
                              }
                            }

                            return (
                              <button
                                key={idx}
                                onClick={() => handleSelectOption(idx)}
                                className={`w-full p-3.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {isAnswered && idx === q.jawabanBenarIndex && (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                )}
                                {isAnswered && selectedOption === idx && idx !== q.jawabanBenarIndex && (
                                  <XCircle className="w-4 h-4 text-red-600" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation & Action Button */}
                        {isAnswered && (
                          <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                            <p className="font-bold">💡 Pembahasan:</p>
                            <p className="text-[11px]">{q.pembahasan}</p>
                          </div>
                        )}

                        {!isAnswered ? (
                          <button
                            onClick={() => handleSubmitAnswer(questions)}
                            disabled={selectedOption === null}
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
                          >
                            Jawab Soal
                          </button>
                        ) : (
                          <button
                            onClick={() => handleNextQuestion(questions)}
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
                          >
                            {currentQuestionIndex < questions.length - 1
                              ? 'Soal Berikutnya →'
                              : 'Lihat Hasil Kuis ✨'}
                          </button>
                        )}
                      </div>
                    );
                  })()
                ) : (
                  /* Quiz Result Card */
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-md">
                      <Trophy className="w-10 h-10" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-black text-xl text-slate-800">
                        Selamat! Kuis Selesai 🎉
                      </h3>
                      <p className="text-xs text-slate-500">
                        Kamu berhasil menjawab {score} dari {activeGame.quizQuestions?.length} soal dengan benar!
                      </p>
                    </div>

                    <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 max-w-sm mx-auto">
                      <p className="text-xs font-bold text-indigo-700">
                        Nilai Kamu: {Math.round((score / (activeGame.quizQuestions?.length || 1)) * 100)} / 100
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-2">
                      <button
                        onClick={() => startQuiz(activeGame)}
                        className="px-4 py-2.5 border border-slate-200 text-xs font-bold text-slate-700 rounded-xl hover:bg-slate-50 flex items-center gap-2"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Coba Lagi</span>
                      </button>

                      <button
                        onClick={() => setActiveGame(null)}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm"
                      >
                        Selesai
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
