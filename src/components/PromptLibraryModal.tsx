import React, { useState } from 'react';
import { EXPERIMENT_GROUP_1, EXPERIMENT_GROUP_2 } from '../data';
import { X, Copy, Check, Sparkles, BookOpen, AlertCircle, Palette } from 'lucide-react';

interface PromptLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptLibraryModal: React.FC<PromptLibraryModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const allItems = [...EXPERIMENT_GROUP_1.items, ...EXPERIMENT_GROUP_2.items];

  const handleCopyAll = () => {
    const fullText = allItems
      .map(item => `【${item.word}】字AI显像Prompt:\n${item.prompt}`)
      .join('\n\n');
    navigator.clipboard.writeText(fullText);
    setCopiedId('all');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs no-print" onClick={onClose}>
      <div
        className="bg-white border border-stone-300 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-900">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900 font-serif-sc">
                🎨 实验配套：AI 图像生成提示词（Prompt 库）
              </h3>
              <p className="text-xs text-stone-500">
                可适用于 Midjourney、即梦 AI、可灵、DALL-E、Gemini Imagen 等主流模型
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyAll}
            className="text-xs bg-amber-800 text-white hover:bg-amber-700 px-3 py-1.5 rounded flex items-center gap-1 font-medium transition-colors"
          >
            {copiedId === 'all' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedId === 'all' ? '已复制全部' : '一键复制全部 7 组 Prompt'}</span>
          </button>
        </div>

        {/* Exhibition Tips Card */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3 mb-4 text-xs">
          <div className="font-bold text-amber-900 mb-1 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-700" />
            <span>📌 展板制作与实物布展建议</span>
          </div>
          <ul className="space-y-1 text-stone-700 list-disc list-inside">
            <li>
              <strong>红笔标注是点睛之笔：</strong>在打印出的 A4 纸上，用真正的红色圆珠笔/荧光笔在“绿”图和“冒”图的关键细节画上圆圈并拉出指引线，手写 1 句精读批注，突出真实探究质感。
            </li>
            <li>
              <strong>重点突出：</strong>将两张核心图（“绿”和“冒”）的边框加粗或贴上金色边框，让师生在 2 米外一眼看出“一字之差”的视觉冲击。
            </li>
          </ul>
        </div>

        {/* Group 1 Prompts */}
        <div className="mb-5">
          <h4 className="font-bold text-sm text-stone-900 mb-2 border-b border-stone-200 pb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-700"></span>
            1. 《泊船瓜洲》组（中国江南水墨写意风格 · 高画质 · 统一视角）
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {EXPERIMENT_GROUP_1.items.map((item) => (
              <div
                key={item.id}
                className={`p-3 rounded-lg border text-xs ${
                  item.isMasterpiece
                    ? 'bg-amber-50/80 border-amber-400 ring-1 ring-amber-300'
                    : 'bg-stone-50 border-stone-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-stone-900 flex items-center gap-1">
                    【{item.word}】字图
                    {item.isMasterpiece && (
                      <span className="text-[10px] bg-rose-600 text-white px-1.5 py-0.2 rounded">
                        核心图
                      </span>
                    )}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.id, item.prompt)}
                    className="text-stone-500 hover:text-amber-800 flex items-center gap-1 font-mono"
                  >
                    {copiedId === item.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === item.id ? '已复制' : '复制'}</span>
                  </button>
                </div>
                <p className="font-mono text-[11px] text-stone-700 bg-white p-2 rounded border border-stone-200 break-words leading-relaxed">
                  {item.prompt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Group 2 Prompts */}
        <div>
          <h4 className="font-bold text-sm text-stone-900 mb-2 border-b border-stone-200 pb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
            2. 《荷花》组（写实摄影或精细工笔画 · 微距特写 · 统一视角）
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {EXPERIMENT_GROUP_2.items.map((item) => (
              <div
                key={item.id}
                className={`p-3 rounded-lg border text-xs ${
                  item.isMasterpiece
                    ? 'bg-amber-50/80 border-amber-400 ring-1 ring-amber-300'
                    : 'bg-stone-50 border-stone-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-stone-900 flex items-center gap-1">
                    【{item.word}】字图
                    {item.isMasterpiece && (
                      <span className="text-[10px] bg-rose-600 text-white px-1.5 py-0.2 rounded">
                        核心图
                      </span>
                    )}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.id, item.prompt)}
                    className="text-stone-500 hover:text-amber-800 flex items-center gap-1 font-mono"
                  >
                    {copiedId === item.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === item.id ? '已复制' : '复制'}</span>
                  </button>
                </div>
                <p className="font-mono text-[11px] text-stone-700 bg-white p-2 rounded border border-stone-200 break-words leading-relaxed">
                  {item.prompt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
