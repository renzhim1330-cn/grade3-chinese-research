import poemChuiImg from './assets/images/poem_chui_1787930667953.jpg';
import poemGuoImg from './assets/images/poem_guo_1787930683909.jpg';
import poemRanImg from './assets/images/poem_ran_1787930698132.jpg';
import poemLvImg from './assets/images/poem_lv_1787930714261.jpg';

import lotusZhangImg from './assets/images/lotus_zhang_1787930735012.jpg';
import lotusZuanImg from './assets/images/lotus_zuan_1787930750972.jpg';
import lotusMaoImg from './assets/images/lotus_mao_1787930766465.jpg';

export interface ExperimentItem {
  id: string;
  word: string;
  isMasterpiece?: boolean;
  image: string;
  imageLabel: string;
  visualDescription: string;
  prompt: string;
  tier: 1 | 2 | 3;
  tierLabel: string;
  redAnnotation?: {
    tag: string;
    note: string;
    focusArea: string;
  };
}

export interface ExperimentGroup {
  id: string;
  groupNumber: string;
  title: string;
  author: string;
  sourceText: string;
  controlSentence: {
    prefix: string;
    targetSlot: string;
    suffix: string;
    fullControlSentence: string;
  };
  items: ExperimentItem[];
  microscopeAnnotation: {
    title: string;
    originStory: string;
    aiEvidence: string;
    keyInsight: string;
  };
}

export const RESEARCH_HEADER = {
  title: "一字定乾坤：汉字“炼字”的AI视觉呈现",
  subtitle: "基于文生图显像实验的小学语文“动词张力与色彩跃迁”研究单",
  defaultGrade: "三年级（2）班",
  defaultStudent: "林语墨、张文翰",
  defaultAdvisor: "王清荷 老师",
  hypothesis: {
    title: "【研究假设与方法】",
    content: "古人作诗讲究“推敲”，名家写景注重“炼字”。如果把 AI 当作“语感显像仪”，保持其他词句完全不变，仅替换 1 个核心动词，画面会发生什么质变？汉字里到底藏着怎样的“视觉密码”？"
  }
};

export const EXPERIMENT_GROUP_1: ExperimentGroup = {
  id: "group-1",
  groupNumber: "一",
  title: "古典名篇《泊船瓜洲》的“动词色谱”实验",
  author: "王安石 [宋]",
  sourceText: "京口瓜洲一水间，钟山只隔数重山。春风又绿江南岸，明月何时照我还。",
  controlSentence: {
    prefix: "京口瓜洲一水间，钟山只隔数重山。春风又【 ",
    targetSlot: "？",
    suffix: " 】江南岸",
    fullControlSentence: "京口瓜洲一水间，钟山只隔数重山。春风又【 ？ 】江南岸"
  },
  items: [
    {
      id: "chui",
      word: "吹",
      image: poemChuiImg,
      imageLabel: "AI生成图1",
      visualDescription: "只有水面波纹，树木枯淡，缺乏色彩与生机。",
      prompt: "中国传统水墨画，江南水乡，春天早晨，只有微微的春风吹过江面泛起水波，树木与山峦颜色暗淡，缺少绿色与生机，国画写意风格，留白 --ar 1:1",
      tier: 2,
      tierLabel: "第2阶·局部动作",
      redAnnotation: {
        tag: "仅有气流",
        note: "有风声无春色，画面清冷",
        focusArea: "江面波纹微荡"
      }
    },
    {
      id: "guo",
      word: "过",
      image: poemGuoImg,
      imageLabel: "AI生成图2",
      visualDescription: "江南岸边机械位移，画面平静，无草木萌发生机。",
      prompt: "中国传统水墨画，江南江岸，一缕春风吹过山峦与水岸，画面平静，只有空间移动的痕迹，没有草木萌发的生命力，国画淡彩风格 --ar 1:1",
      tier: 1,
      tierLabel: "第1阶·物理位移",
      redAnnotation: {
        tag: "空间位移",
        note: "如同走马观花，缺乏情感温度",
        focusArea: "风痕平直掠过"
      }
    },
    {
      id: "ran",
      word: "染",
      image: poemRanImg,
      imageLabel: "AI生成图3",
      visualDescription: "像油漆刷色，局部生硬变色，分布不自然。",
      prompt: "中国传统水墨画，江南山水，岸边的树木有一块块局部的绿色，像毛笔刚点上去的颜料色块，局部上色，色彩分布不自然，工笔淡彩 --ar 1:1",
      tier: 2,
      tierLabel: "第2阶·感官赋色",
      redAnnotation: {
        tag: "人工笔触",
        note: "着色虽有，但呆板如膏药点染",
        focusArea: "块状生硬色斑"
      }
    },
    {
      id: "lv",
      word: "绿",
      isMasterpiece: true,
      image: poemLvImg,
      imageLabel: "AI生成图4 · 重点核心",
      visualDescription: "满山遍野草木返青、生机盎然、春光漫延至天际！",
      prompt: "中国唯美水墨写意大片，江南春晓，满山遍野、江岸两旁瞬间返青，生机盎然，嫩绿与翠绿交织蔓延至天际，春光烂漫，充满蓬勃的生命力与诗意，大师级杰作 --ar 1:1",
      tier: 3,
      tierLabel: "第3阶·生命共情 (神来之笔)",
      redAnnotation: {
        tag: "神来之笔！",
        note: "形容词作动词，生机瞬间铺满江岸！",
        focusArea: "漫野翠色连天"
      }
    }
  ],
  microscopeAnnotation: {
    title: "🔍【显微镜拉线批注·诗境探微】",
    originStory: "王安石初改“到、过、入、满、染”等十余字，最终定为“绿”。",
    aiEvidence: "AI 显像证明：“绿”字将形容词活用为动词，不仅赋予了画面极致的【色彩扩散感】，更注入了草木萌发的【时间与生命力】！",
    keyInsight: "一字唤醒整个江南的春天：从静态物理描述跨越到扑面而来的生命律动。"
  }
};

export const EXPERIMENT_GROUP_2: ExperimentGroup = {
  id: "group-2",
  groupNumber: "二",
  title: "统编教材《荷花》（叶圣陶）的“动态张力”实验",
  author: "叶圣陶",
  sourceText: "荷叶挨挨挤挤的，像一个个碧绿的大圆盘。白荷花在这些大圆盘之间冒出来。",
  controlSentence: {
    prefix: "白荷花在这些大圆盘之间【 ",
    targetSlot: "？",
    suffix: " 】出来。",
    fullControlSentence: "白荷花在这些大圆盘之间【 ？ 】出来。"
  },
  items: [
    {
      id: "zhang",
      word: "长",
      image: lotusZhangImg,
      imageLabel: "AI生成图5",
      visualDescription: "荷花静止平淡地立在叶间，缺乏生命冲劲与动态。",
      prompt: "微距摄影，大片碧绿的荷叶丛中，静静伫立着一朵白荷花，荷花静止平淡，没有水珠，没有动态，普通自然光 --ar 1:1",
      tier: 1,
      tierLabel: "第1阶·物理陈述",
      redAnnotation: {
        tag: "静止平淡",
        note: "慢条斯理，看不出生命蓬勃之势",
        focusArea: "挺立但无动感"
      }
    },
    {
      id: "zuan",
      word: "钻",
      image: lotusZuanImg,
      imageLabel: "AI生成图6",
      visualDescription: "荷花从缝隙探头，小心翼翼，略显局促试探。",
      prompt: "微距摄影，大片茂密的巨大荷叶之间，一朵白荷花花苞小心翼翼地从荷叶缝隙中斜着伸出来，动作显得局促、试探 --ar 1:1",
      tier: 2,
      tierLabel: "第2阶·细节动作",
      redAnnotation: {
        tag: "小心局促",
        note: "有动作但显费力犹豫，气势不足",
        focusArea: "斜出窄缝探头"
      }
    },
    {
      id: "mao",
      word: "冒",
      isMasterpiece: true,
      image: lotusMaoImg,
      imageLabel: "AI生成图7 · 重点核心",
      visualDescription: "破叶而出、带出水花与露珠、向上昂扬迸发的爆发力！",
      prompt: "高速微距动态摄影，巨大圆润的墨绿荷叶丛中，一朵盛开的雪白荷花以极具爆发力的姿态向上破水而出，带起飞溅的晶莹水珠与晨露，昂扬挺拔，生机蓬勃，晨光穿透花瓣，极具生命力 --ar 1:1",
      tier: 3,
      tierLabel: "第3阶·生命共情 (神来之笔)",
      redAnnotation: {
        tag: "迸发昂扬！",
        note: "破叶而出的爆发力，水珠飞溅的瞬间动能！",
        focusArea: "破水昂扬水珠飞溅"
      }
    }
  ],
  microscopeAnnotation: {
    title: "🔍【显微镜拉线批注·语感解码】",
    originStory: "课后探究题：“体会‘冒’字好在哪里？想一想荷花是怎样冒出来的？”",
    aiEvidence: "AI 显像证明：“长”字呆板无奇，“钻”字小心试探，唯有“冒”字让画面瞬间产生【向上破局的动能】与【昂扬生命力】！",
    keyInsight: "不仅写出了长势之快，更写出了荷花争相展示生机、充满灵性的勃勃生机。"
  }
};

export const THREE_TIER_MODEL = {
  title: "🚀 三年级写作用词“三阶跃迁”模型",
  subtitle: "从“看见客观事物”到“唤醒生命共鸣”的阶梯式进阶法则",
  tiers: [
    {
      level: "第 3 阶",
      name: "生命共情",
      color: "from-amber-600 to-rose-600",
      badgeColor: "bg-rose-500 text-white",
      borderColor: "border-rose-400",
      bgLight: "bg-rose-50/70",
      words: "【绿 / 冒】",
      tag: "神来之笔：生机 / 爆发",
      description: "跨越感官表象，注入蓬勃生命力与情感张力。形容词活用或高张力动词，瞬间激活整个动态画面！"
    },
    {
      level: "第 2 阶",
      name: "感官赋色",
      color: "from-amber-500 to-orange-500",
      badgeColor: "bg-amber-600 text-white",
      borderColor: "border-amber-300",
      bgLight: "bg-amber-50/70",
      words: "【染 / 钻 / 吹】",
      tag: "局部细节 / 具体动作",
      description: "捕捉具体视觉色彩或局部精细动作，有具体的画面细节，但缺乏宏大统摄的生命张力。"
    },
    {
      level: "第 1 阶",
      name: "物理位移",
      color: "from-stone-400 to-stone-600",
      badgeColor: "bg-stone-500 text-white",
      borderColor: "border-stone-300",
      bgLight: "bg-stone-100/70",
      words: "【过 / 到 / 长】",
      tag: "事实陈述 / 呆板记录",
      description: "单纯记录空间移动或物理生长事实，语言平铺直叙，画面缺乏情绪与视觉冲击。"
    }
  ]
};

export const RESEARCH_CONCLUSION = {
  title: "💡【研究结语】",
  quote: "汉字之美，在于“一字定乾坤”。好文章从来不是堆砌华丽词藻，而是学会像大师一样推敲——找到那个能让静态文字“瞬间活成一幅画”的神来之笔！",
  tips: [
    "写作小锦囊1：写景物时，试着把颜色词（如红、绿、黄）当动词用（如“枫叶红了秋山”）。",
    "写作小锦囊2：写动作时，少用“走、来、看”，多用自带动能的动词（如“冒、跃、倾、扑”）。"
  ]
};
