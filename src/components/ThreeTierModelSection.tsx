import React, { useState } from 'react';
import { THREE_TIER_MODEL, RESEARCH_CONCLUSION } from '../data';
import { Layers, Lightbulb, Sparkles, Feather } from 'lucide-react';

export const ThreeTierModelSection: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number | null>(null);

  return (
    <footer className="border-t-2 border-[#1A1A1A] pt-4" id="three-tier-section">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Bento: 3-Tier Ladder Model (col-span-2) */}
        <div className="lg:col-span-2 bg-white text-[#1A1A1A] p-4 flex flex-col justify-between border border-[#1A1A1A] shadow-xs">
          <div>
            <div className="flex items-center justify-between border-b border-stone-200 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="bg-[#1A1A1A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  MODEL
                </span>
                <h3 className="font-bold text-sm sm:text-base font-serif-sc text-[#1A1A1A]">
                  三年级写作用词“三阶跃迁”模型
                </h3>
              </div>
              <span className="text-[11px] text-stone-500 font-mono">
                动词表现力进化梯次
              </span>
            </div>

            {/* Stepped Horizontal/Stacked Ladder */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-2">
              {/* Level 1 */}
              <div
                onMouseEnter={() => setActiveTier(2)}
                onMouseLeave={() => setActiveTier(null)}
                className={`p-2.5 border transition-all ${
                  activeTier === 2
                    ? 'border-stone-500 bg-stone-100 scale-[1.02] shadow-xs'
                    : 'border-stone-200 bg-stone-50'
                }`}
              >
                <div className="text-[10px] text-stone-500 font-mono mb-1 font-semibold">
                  LEVEL 01
                </div>
                <div className="text-xs font-bold text-stone-800 mb-1">
                  第1阶 物理位移
                </div>
                <div className="bg-stone-200 text-stone-800 font-mono text-xs px-1.5 py-0.5 rounded inline-block mb-1.5 border border-stone-300 font-medium">
                  到 / 过 / 长
                </div>
                <p className="text-[10px] text-stone-600 leading-snug">
                  记录事实与位置移动，画面平淡静态。
                </p>
              </div>

              {/* Level 2 */}
              <div
                onMouseEnter={() => setActiveTier(1)}
                onMouseLeave={() => setActiveTier(null)}
                className={`p-2.5 border transition-all ${
                  activeTier === 1
                    ? 'border-amber-400 bg-amber-100/70 scale-[1.02] shadow-xs'
                    : 'border-amber-200 bg-amber-50/60'
                }`}
              >
                <div className="text-[10px] text-amber-800 font-mono mb-1 font-semibold">
                  LEVEL 02
                </div>
                <div className="text-xs font-bold text-amber-900 mb-1">
                  第2阶 感官赋色
                </div>
                <div className="bg-amber-100 text-amber-900 font-mono text-xs px-1.5 py-0.5 rounded inline-block mb-1.5 border border-amber-300 font-medium">
                  染 / 钻 / 吹
                </div>
                <p className="text-[10px] text-stone-700 leading-snug">
                  赋予色彩与状态变化，开始具备视觉感。
                </p>
              </div>

              {/* Level 3: Masterpiece */}
              <div
                onMouseEnter={() => setActiveTier(0)}
                onMouseLeave={() => setActiveTier(null)}
                className={`p-2.5 border-2 border-[#D94124] transition-all relative ${
                  activeTier === 0
                    ? 'bg-red-100/60 scale-[1.02] shadow-xs'
                    : 'bg-red-50/70'
                }`}
              >
                <div className="absolute top-1 right-1 text-[9px] bg-[#D94124] text-white font-bold px-1.5 py-0.2 rounded">
                  神笔
                </div>
                <div className="text-[10px] text-[#D94124] font-mono mb-1 font-bold">
                  LEVEL 03
                </div>
                <div className="text-xs font-bold text-[#D94124] mb-1">
                  第3阶 生命共情
                </div>
                <div className="bg-[#D94124] text-white font-black text-xs px-1.5 py-0.5 rounded inline-block mb-1.5 shadow-2xs">
                  绿 / 冒
                </div>
                <p className="text-[10px] text-stone-800 leading-snug">
                  注入生命动能与主观共情，字字成画！
                </p>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-stone-200 flex items-center justify-between text-[10px] text-stone-600 font-mono">
            <span>● 跃迁机制：词性活用 + 空间动能 + 情感投射</span>
            <span className="text-[#D94124] font-semibold">AI视觉显像实验验证</span>
          </div>
        </div>

        {/* Right Bento: Light Research Conclusion & Stamped Seal */}
        <div className="bg-white border border-[#1A1A1A] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="text-[10px] text-stone-400 mb-1 tracking-widest uppercase font-mono">
              RESEARCH SUMMARY · 探究结语
            </div>

            <blockquote className="text-xs sm:text-sm font-serif-sc text-stone-800 leading-relaxed italic border-l-2 border-[#D94124] pl-2.5 my-2">
              汉字之美，在于“一字定乾坤”。好文章不是堆砌词藻，而是找到那个能让文字
              <span className="font-bold text-[#1A1A1A] underline decoration-[#D94124] decoration-2">
                “瞬间活成一幅画”
              </span>
              的神来之笔！
            </blockquote>

            <div className="mt-3 space-y-1.5 text-[11px] text-stone-700">
              <div className="flex items-start gap-1.5">
                <Feather className="w-3.5 h-3.5 text-[#D94124] shrink-0 mt-0.5" />
                <span>写作心法：避免平铺直叙的“到”，多用赋能赋色的动词。</span>
              </div>
              <div className="flex items-start gap-1.5">
                <Feather className="w-3.5 h-3.5 text-[#D94124] shrink-0 mt-0.5" />
                <span>AI 语感训练：输入不同动词生成画面，肉眼直观“验词”。</span>
              </div>
            </div>
          </div>

          {/* Stamped Seal Badge */}
          <div className="mt-3 flex items-center justify-end">
            <div className="w-14 h-14 bento-seal flex flex-col items-center justify-center text-[10px] font-bold leading-tight text-center shadow-2xs">
              <span>神来</span>
              <span>之笔</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

