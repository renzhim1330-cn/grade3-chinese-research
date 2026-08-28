import React, { useState } from 'react';
import { ExperimentGroup, ExperimentItem } from '../data';
import { X, Copy, Check, Sparkles, ArrowRight, ArrowLeft, Microscope, Layers } from 'lucide-react';

interface InspectionModalProps {
  item: ExperimentItem | null;
  group: ExperimentGroup | null;
  onClose: () => void;
  onSelectAnotherItem: (item: ExperimentItem) => void;
}

export const InspectionModal: React.FC<InspectionModalProps> = ({
  item,
  group,
  onClose,
  onSelectAnotherItem
}) => {
  const [copied, setCopied] = useState(false);

  if (!item || !group) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(item.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentIndex = group.items.findIndex(i => i.id === item.id);
  const prevItem = currentIndex > 0 ? group.items[currentIndex - 1] : null;
  const nextItem = currentIndex < group.items.length - 1 ? group.items[currentIndex + 1] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs no-print" onClick={onClose}>
      <div
        className="bg-white border border-stone-300 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 border-b border-stone-200 pb-3 mb-4">
          <div className="p-2 rounded-lg bg-amber-100 text-amber-900">
            <Microscope className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-stone-900 font-serif-sc">
                {group.title} · 动词【{item.word}】显微镜深度探究
              </h3>
              {item.isMasterpiece && (
                <span className="bg-rose-600 text-white text-xs font-bold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  神来之笔
                </span>
              )}
            </div>
            <p className="text-xs text-stone-500">
              控制原句：{group.controlSentence.prefix}
              <strong className="text-amber-800 underline font-bold px-0.5">{item.word}</strong>
              {group.controlSentence.suffix}
            </p>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Left: Image */}
          <div className="flex flex-col">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-stone-200 shadow-inner bg-stone-100 group">
              <img
                src={item.image}
                alt={item.word}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-2 gap-2 text-xs">
              <button
                type="button"
                disabled={!prevItem}
                onClick={() => prevItem && onSelectAnotherItem(prevItem)}
                className={`px-2.5 py-1 rounded border flex items-center gap-1 ${
                  prevItem
                    ? 'border-stone-300 hover:bg-stone-100 text-stone-700'
                    : 'border-stone-200 text-stone-300 cursor-not-allowed'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                上一字：{prevItem ? prevItem.word : '无'}
              </button>

              <button
                type="button"
                disabled={!nextItem}
                onClick={() => nextItem && onSelectAnotherItem(nextItem)}
                className={`px-2.5 py-1 rounded border flex items-center gap-1 ${
                  nextItem
                    ? 'border-stone-300 hover:bg-stone-100 text-stone-700'
                    : 'border-stone-200 text-stone-300 cursor-not-allowed'
                }`}
              >
                下一字：{nextItem ? nextItem.word : '无'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Analysis & Details */}
          <div className="space-y-3 text-xs sm:text-sm">
            {/* Visual description */}
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
              <span className="font-bold text-stone-900 block mb-1 text-xs uppercase tracking-wider text-amber-800">
                🖼️ AI显像画面特征
              </span>
              <p className="text-stone-700 leading-relaxed font-medium">
                {item.visualDescription}
              </p>
            </div>

            {/* Tier Breakdown */}
            <div className="bg-amber-50/70 p-3 rounded-lg border border-amber-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-amber-900 text-xs flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" />
                  写作用词层级
                </span>
                <span className="font-bold text-xs text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  {item.tierLabel}
                </span>
              </div>
              <p className="text-stone-600 text-xs">
                {item.tier === 3
                  ? '激活全景生命共鸣，赋予词句跨越感官的时间维度与爆发动能。'
                  : item.tier === 2
                  ? '具备局部细节与感官动作，但画面缺乏整体生命律动的统摄。'
                  : '平铺直叙记录空间或状态，语意呆板，视觉冲击弱。'}
              </p>
            </div>

            {/* Red annotation note */}
            {item.redAnnotation && (
              <div className="bg-rose-50 p-3 rounded-lg border border-rose-200">
                <span className="font-bold text-rose-900 block mb-1 text-xs">
                  ✍️ 探究批注与视觉聚焦点
                </span>
                <p className="red-pen-text text-sm font-bold text-red-700">
                  【{item.redAnnotation.tag}】{item.redAnnotation.note}
                </p>
                <div className="text-[11px] text-stone-500 mt-1">
                  焦点观察：{item.redAnnotation.focusArea}
                </div>
              </div>
            )}

            {/* Prompt with Copy */}
            <div className="bg-stone-900 text-stone-100 p-3 rounded-lg text-xs font-mono relative">
              <div className="flex items-center justify-between mb-1 text-stone-400">
                <span>AI 生图 Prompt 提示词：</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="hover:text-white flex items-center gap-1 text-amber-400 font-sans"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? '已复制' : '复制Prompt'}</span>
                </button>
              </div>
              <p className="text-stone-300 break-words leading-relaxed text-[11px]">
                {item.prompt}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-stone-200 pt-3 flex items-center justify-between text-xs text-stone-500">
          <span>提示：可以在上方左右切换其他同组汉字进行并列对比</span>
          <button
            type="button"
            onClick={onClose}
            className="bg-stone-800 text-white hover:bg-stone-700 px-4 py-1.5 rounded text-xs font-medium"
          >
            完成查看
          </button>
        </div>
      </div>
    </div>
  );
};
