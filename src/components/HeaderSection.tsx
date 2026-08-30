import React from 'react';
import { RESEARCH_HEADER } from '../data';

export const HeaderSection: React.FC = () => {
  return (
    <header className="" id="header-section">
      {/* Top Line: Title (Full complete single line) + Student Badge on top right */}
      <div className="flex flex-row items-center justify-between gap-2">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1A1A1A] font-serif-sc whitespace-nowrap">
          一字定乾坤：汉语言“炼字”艺术的视觉密码
        </h1>
        <div
          id="student-badge"
          className="text-xs sm:text-sm font-bold font-serif-sc text-[#1A1A1A] bg-stone-100 border border-stone-300 px-2.5 py-0.5 rounded shadow-2xs shrink-0 whitespace-nowrap"
        >
          三年3班 任程锦
        </div>
      </div>

      {/* Sub Row: Subtitle + Hypothesis Box */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mt-2 pt-1.5 border-t border-stone-200">
        <p className="text-xs sm:text-sm text-stone-600 font-serif-sc">
          保持语句不变 · 替换 1 个核心动词 · 解锁汉字里的“视觉密码与生命光谱”
        </p>
        <div className="text-[11px] sm:text-[12px] leading-relaxed bg-white px-2.5 py-1.5 border border-dashed border-stone-400 shadow-2xs md:max-w-[420px] shrink-0">
          <span className="text-[#D94124] font-bold mr-1">
            【研究假设与方法】
          </span>
          <span className="text-stone-700 leading-snug">
            {RESEARCH_HEADER.hypothesis.content}
          </span>
        </div>
      </div>
    </header>
  );
};

