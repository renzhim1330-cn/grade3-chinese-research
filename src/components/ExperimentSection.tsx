import React, { useState } from 'react';
import { ExperimentGroup, ExperimentItem } from '../data';
import { Sparkles, ZoomIn, Copy, Check, Eye } from 'lucide-react';

interface ExperimentSectionProps {
  group: ExperimentGroup;
  showRedAnnotations: boolean;
  onInspectImage: (item: ExperimentItem, group: ExperimentGroup) => void;
}

export const ExperimentSection: React.FC<ExperimentSectionProps> = ({
  group,
  showRedAnnotations,
  onInspectImage
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeWordId, setActiveWordId] = useState<string>(
    group.items.find(i => i.isMasterpiece)?.id || group.items[0].id
  );

  const handleCopyPrompt = (e: React.MouseEvent, item: ExperimentItem) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.prompt);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentActiveItem = group.items.find(i => i.id === activeWordId) || group.items[0];

  return (
    <section className="bg-white border border-[#1A1A1A] p-4 relative mb-4 shadow-xs" id={`experiment-${group.id}`}>
      {/* Bento Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 border-b border-stone-200 pb-2">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-base sm:text-lg text-[#1A1A1A] font-serif-sc">
            {group.title}
          </h2>
        </div>
        <p className="text-[11px] text-stone-500 italic">
          “{group.controlSentence.fullControlSentence}”
        </p>
      </div>

      {/* Control Sentence Switcher Bento Banner */}
      <div className="bg-stone-50 border border-stone-200 p-2.5 mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#D94124] font-bold">● 控制变量测试：</span>
          <span className="font-serif-sc text-stone-800 text-xs sm:text-sm font-semibold">
            {group.controlSentence.prefix}
            <span className={`inline-block px-2 py-0.5 rounded font-black mx-1 transition-all ${
              currentActiveItem.isMasterpiece
                ? 'bg-[#D94124] text-white ring-2 ring-red-200'
                : 'bg-[#1A1A1A] text-amber-300'
            }`}>
              {currentActiveItem.word}
            </span>
            {group.controlSentence.suffix}
          </span>
        </div>
        <span className="text-[10px] text-stone-400">
          点击下方对比卡片切换字词显像
        </span>
      </div>

      {/* Grid of Bento Cards */}
      <div className={`grid gap-3 mb-3 ${
        group.items.length === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 sm:grid-cols-3'
      }`}>
        {group.items.map((item) => {
          const isMaster = !!item.isMasterpiece;
          const isSelected = activeWordId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setActiveWordId(item.id)}
              className={`flex flex-col justify-between transition-all duration-200 cursor-pointer overflow-hidden relative ${
                isMaster
                  ? 'border-2 border-[#D94124] bg-emerald-50/40 shadow-xs ring-1 ring-[#D94124]/30'
                  : 'border border-stone-300 bg-white hover:border-[#1A1A1A] hover:shadow-xs'
              } ${isSelected ? 'ring-2 ring-stone-900 shadow-md' : ''}`}
            >
              {/* Image Preview Area */}
              <div className="relative aspect-square w-full bg-stone-100 overflow-hidden group">
                <img
                  src={item.image}
                  alt={`AI显像: ${item.word}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Masterpiece Ribbon */}
                {isMaster && (
                  <div className="absolute top-1 right-1 bg-[#D94124] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>核心神笔</span>
                  </div>
                )}

                {/* Red Pen Callout Graphic */}
                {showRedAnnotations && item.redAnnotation && (
                  <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-1.5">
                    {isMaster ? (
                      <div className="bg-[#D94124]/95 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm red-pen-text animate-pulse">
                        ✍️ {item.redAnnotation.note}
                      </div>
                    ) : (
                      <div className="bg-[#1A1A1A]/80 text-amber-200 text-[9px] px-1.5 py-0.5 rounded self-start">
                        {item.redAnnotation.tag}
                      </div>
                    )}
                  </div>
                )}

                {/* Hover Inspect */}
                <div className="absolute inset-0 bg-[#1A1A1A]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onInspectImage(item, group);
                    }}
                    className="bg-white text-[#1A1A1A] hover:bg-stone-100 text-xs font-semibold px-2 py-1 shadow-sm flex items-center gap-1"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    放大探究
                  </button>
                </div>
              </div>

              {/* Bottom Word & Label Bar */}
              <div
                className={`text-center font-bold py-1 text-xs sm:text-sm tracking-wider ${
                  isMaster
                    ? 'bg-[#D94124] text-white font-serif-sc'
                    : 'bg-stone-200 text-[#1A1A1A]'
                }`}
              >
                {isMaster ? `神来之笔：${item.word}` : item.word}
              </div>

              {/* Description Snippet */}
              <div className="p-2 text-[11px] text-stone-700 leading-snug flex-1 bg-white flex flex-col justify-between border-t border-stone-100">
                <p>
                  <strong className="text-[#1A1A1A]">[{item.word}]：</strong>
                  {item.visualDescription}
                </p>

                <div className="mt-2 pt-1 border-t border-stone-100 flex items-center justify-between text-[10px]">
                  <button
                    type="button"
                    onClick={(e) => handleCopyPrompt(e, item)}
                    className="text-stone-500 hover:text-[#D94124] flex items-center gap-1 transition-colors"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">已复制Prompt</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Prompt</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onInspectImage(item, group);
                    }}
                    className="text-stone-600 hover:text-[#1A1A1A] font-medium flex items-center gap-0.5"
                  >
                    <Eye className="w-3 h-3" />
                    <span>显微镜</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Microscope Pull-Line Annotation Bar (Bento style) */}
      <div className="mt-3 flex flex-col sm:flex-row gap-3 items-start bg-stone-50 p-2.5 sm:p-3 border-l-4 border-[#D94124] border border-stone-200">
        <div className="text-[#D94124] font-bold text-xs whitespace-nowrap flex items-center gap-1 shrink-0">
          <span>🔍 显微拉线批注</span>
        </div>
        <div className="text-[11px] sm:text-xs text-stone-800 leading-relaxed space-y-1">
          <p>
            <span className="text-stone-500 font-mono text-[10px]">推敲过程：</span>
            {group.microscopeAnnotation.originStory}
          </p>
          <p>
            AI 显像证明：
            {group.id === 'group-1' ? (
              <>
                “绿”字将形容词活用为动词，不仅赋予了画面极致的
                <span className="bg-yellow-100 px-1 py-0.5 font-bold text-[#1A1A1A] mx-0.5">
                  【色彩扩散感】
                </span>
                ，更注入了草木萌发的【时间与生命力】！
              </>
            ) : (
              <>
                “冒”字让画面瞬间产生
                <span className="bg-yellow-100 px-1 py-0.5 font-bold text-[#1A1A1A] mx-0.5">
                  【向上破局的动能】
                </span>
                。AI 生成图清晰捕捉到了那一瞬间破叶而出的昂扬，而非普通生长的迟钝！
              </>
            )}
          </p>
          {showRedAnnotations && (
            <div className="pt-0.5 text-[#D94124] font-bold red-pen-text text-xs">
              ✍️ 语感心法：{group.microscopeAnnotation.keyInsight}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

