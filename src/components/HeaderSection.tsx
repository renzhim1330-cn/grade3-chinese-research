import React from 'react';
import { RESEARCH_HEADER } from '../data';

export const HeaderSection: React.FC = () => {
  return (
    <header className="border-b-2 border-[#1A1A1A] pb-3 mb-3" id="header-section">
      {/* Main Bento Split Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-3">
        {/* Left: Big Title */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1A1A] font-serif-sc">
            一字定乾坤：汉字“炼字”的AI视觉呈现
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 font-serif-sc mt-1">
            保持语句不变 · 替换 1 个核心动词 · 解锁汉字里的“视觉密码与生命光谱”
          </p>
        </div>

        {/* Right: Bento Box for Hypothesis with Student info at top right */}
        <div className="w-full md:max-w-[380px] lg:max-w-[400px] text-[12px] leading-relaxed bg-white p-2.5 border border-dashed border-stone-400 shadow-2xs">
          <div className="flex items-center justify-between gap-2 mb-1">
            <strong className="text-[#D94124] font-bold">
              【研究假设与方法】
            </strong>
            <span className="text-[11px] font-bold font-serif-sc text-[#1A1A1A] bg-stone-100 border border-stone-300 px-2 py-0.5 rounded shadow-2xs flex items-center gap-1 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D94124]"></span>
              三年3班 任程锦
            </span>
          </div>
          <p className="text-stone-700 leading-snug">
            {RESEARCH_HEADER.hypothesis.content}
          </p>
        </div>
      </div>
    </header>
  );
};

