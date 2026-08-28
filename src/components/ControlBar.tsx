import React from 'react';
import { Printer, PenTool, Sparkles } from 'lucide-react';

interface ControlBarProps {
  showRedAnnotations: boolean;
  onToggleRedAnnotations: () => void;
  onPrint: () => void;
  onOpenPromptGuide: () => void;
}

export const ControlBar: React.FC<ControlBarProps> = ({
  showRedAnnotations,
  onToggleRedAnnotations,
  onPrint,
  onOpenPromptGuide
}) => {
  return (
    <div className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#1A1A1A] px-4 py-2.5 mb-4 shadow-xs no-print w-full">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: App Title Badge */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D94124]"></span>
          <span className="font-bold font-serif-sc text-[#1A1A1A] text-sm hidden sm:inline">
            A4 竖版研究单 · Bento Grid 展板
          </span>
          <span className="text-xs bg-[#1A1A1A] text-white font-mono px-2 py-0.5 rounded-full uppercase">
            210mm × 297mm
          </span>
        </div>

        {/* Right: Functional Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap text-xs">
          {/* Red Pen Annotation Switch */}
          <button
            type="button"
            onClick={onToggleRedAnnotations}
            className={`px-3 py-1.5 font-medium flex items-center gap-1.5 transition-all border ${
              showRedAnnotations
                ? 'bg-red-50 border-[#D94124] text-[#D94124] shadow-2xs font-bold'
                : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-50'
            }`}
            title="开启/关闭红笔批注圈注效果"
          >
            <PenTool className="w-3.5 h-3.5 text-[#D94124]" />
            <span>{showRedAnnotations ? '红笔批注：开' : '红笔批注：关'}</span>
          </button>

          {/* View Prompt Guide */}
          <button
            type="button"
            onClick={onOpenPromptGuide}
            className="px-3 py-1.5 bg-white border border-stone-300 text-stone-800 hover:border-[#1A1A1A] font-medium flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D94124]" />
            <span>Prompt库</span>
          </button>

          {/* Print Button */}
          <button
            type="button"
            onClick={onPrint}
            className="px-4 py-1.5 bg-[#1A1A1A] text-white hover:bg-stone-800 font-bold flex items-center gap-1.5 shadow-sm transition-transform active:scale-95 border border-[#1A1A1A]"
          >
            <Printer className="w-3.5 h-3.5 text-amber-300" />
            <span>一键打印 / 导出A4</span>
          </button>
        </div>
      </div>
    </div>
  );
};
