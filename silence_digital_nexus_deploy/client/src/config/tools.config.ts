import { LucideIcon, Terminal, Image, FileJson, Calculator, Code2, Palette, BarChart3, MessageSquare, Languages, Plane, NotebookPen, Archive } from 'lucide-react';

export type Category = 'all' | 'work' | 'ai' | 'invest' | 'efficiency' | 'study';

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: Category;
  path: string;
  isExperimental?: boolean;
  externalUrl?: string; // Support external links
}

export const categories: { id: Category; label: string; icon?: string }[] = [
  { id: 'all', label: '全部', icon: '🏠' },
  { id: 'work', label: '工作', icon: '💼' },
  { id: 'ai', label: 'AI 工具', icon: '🤖' },
  { id: 'invest', label: '投资', icon: '📈' },
  { id: 'efficiency', label: '效率', icon: '⚡' },
  { id: 'study', label: '学习', icon: '📚' },
];

export const tools: Tool[] = [
  {
    id: 'legacy-site',
    title: '旧版归档',
    description: '访问网站的经典版本（时光机）。',
    icon: Archive,
    category: 'all', // Show in 'all' or create a specific category if needed, but 'all' ensures visibility
    path: '/legacy/index.html',
    externalUrl: '/legacy/index.html',
  },
  {
    id: 'jisilu-data',
    title: '集思录数据',
    description: 'LOF、ETF、可转债等金融数据追踪与套利监控。',
    icon: BarChart3,
    category: 'invest',
    path: '/tools/jisilu-data',
  },
  {
    id: 'nicetalk',
    title: 'NiceTalk',
    description: 'AI 驱动的智能对话助手。',
    icon: MessageSquare,
    category: 'ai',
    path: '/tools/nicetalk',
  },
  {
    id: 'ai-translator',
    title: 'AI 翻译器',
    description: '基于 Gemini 1.5 Flash 的 Speech-to-Meaning 翻译工具，支持中葡互译。',
    icon: Languages,
    category: 'ai',
    path: '/tools/ai-translator',
  },
  {
    id: 'airport-ops',
    title: '机场运维',
    description: '安哥拉机场项目运维管理系统。',
    icon: Plane,
    category: 'work',
    path: '/tools/airport-ops',
  },
  {
    id: 'quick-notes',
    title: '快速笔记',
    description: '随时随地记录灵感与待办事项。',
    icon: NotebookPen,
    category: 'efficiency',
    path: '/tools/quick-notes',
  },
  {
    id: 'json-formatter',
    title: 'JSON 格式化',
    description: '快速美化和验证 JSON 数据。',
    icon: FileJson,
    category: 'efficiency',
    path: '/tools/json-formatter',
  },
  {
    id: 'image-compressor',
    title: '图片压缩',
    description: '无损压缩和调整图片大小。',
    icon: Image,
    category: 'efficiency',
    path: '/tools/image-compressor',
  },
  {
    id: 'particle-collider',
    title: '粒子对撞机',
    description: '交互式 WebGL 粒子物理模拟。',
    icon: Terminal,
    category: 'study',
    path: '/tools/particle-collider',
    isExperimental: true,
  },
];
