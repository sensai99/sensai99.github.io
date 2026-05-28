export const profile = {
  name: 'Sai Sreenivas Chintha',
  affiliations: 'UMass Amherst, Microsoft, Adobe',
  bio: [
    'Hello, I\'m Sai Sreenivas, a final-year M.S. CS student at the <a href="https://www.cics.umass.edu/" target="_blank" rel="noopener noreferrer">University of Massachusetts Amherst</a>.',
    'My current research focuses on building diffusion models for text generation and adaptive speculative decoding techniques for LLMs.',
    'Previously, I worked at the <a href="https://ciir.cs.umass.edu/" target="_blank" rel="noopener noreferrer">UMass CIIR Lab</a> focusing on personalized multimodal dense retrieval, especially with re-ranking using in-context learning.',
    'As a research intern at <a href="https://www.kla.com/" target="_blank" rel="noopener noreferrer">KLA</a>, I worked on defect detection and retrieval pipelines end-to-end, including data curation, domain-adaptive pretraining, fine-tuning, and evaluation on noisy real-world datasets.',
    'Before that, I worked at <a href="https://www.adobe.com/" target="_blank" rel="noopener noreferrer">Adobe</a> for 3 years, focusing on a couple of prototype projects involving caption generation systems using VLMs and diffusion models for layout generation.'
  ]
};

export const research = [
  {
    logo: 'microsoft',
    org: 'Microsoft',
    role: 'Research Extern',
    date: 'Feb 2026 – Present',
    bullets: [
      'Developed entropy-guided adaptive decoding beyond fixed-step EAGLE generation, achieving up to ∼1.5x speedup.',
      'Pretrained on ∼1B tokens from The Pile and instruction-tuned on ShareGPT using LLaMA-3 8B.',
      'Analyzed entropy thresholds across code, math, and free-form prompts to characterize speed-quality tradeoffs.'
    ]
  },
  {
    logo: 'umass',
    org: 'UMass IESL Lab',
    role: 'Graduate Student Researcher',
    date: 'Oct 2025 – Present',
    bullets: [
      'Contributing to XLM, a Python framework for non-autoregressive language models.',
      'Developed self-correction framework for variable-length diffusion LMs using insertion, deletion, and substitution operations.'
    ]
  },
  {
    logo: 'kla',
    org: 'KLA',
    role: 'Machine Learning Research Intern',
    date: 'Jun 2025 – Aug 2025',
    bullets: [
      'Fine-tuned Grounding DINO for domain-adaptive SEM defect detection, outperforming YOLO11 by ∼12% in localization and ∼6% in classification accuracy.',
      'Enhanced Grounding DINO’s architecture with a softmax-based loss and fine-tuned the text encoder (BERT).',
      'Improved visual generalization using Mosaic augmentation, defect-region cropping and prompt variations.'
    ]
  },
  {
    logo: 'umass',
    org: 'UMass CIIR Lab',
    role: 'Graduate Student Researcher',
    date: 'Feb 2025 – May 2025',
    bullets: [
      'Explored scalable personalized multimodal retrieval by integrating VLMs with multimodal language model-based re-ranking, leveraging prompt engineering and Unsloth for efficient fine-tuning on large instruction-tuned models.'
    ]
  }
];

export const projects = [
  {
    name: 'Mitigating PII Leakage in Chain-of-Thought of LRMs',
    desc: 'Reduced personally identifiable information leakage in large reasoning models using prompt engineering and LoRA-SFT on GPT-OSS-20B, LLaMA-3.3-70B, and DeepSeek-R1-Qwen.'
  },
  {
    name: 'Learned Sparse Retrieval using Vector Quantization',
    desc: 'Built a learned sparse retrieval model with vector quantization and top-k sparsification on MS MARCO, achieving MRR@10 of 0.89 on ~7.5k passages.'
  },
  {
    name: 'Fit-Aware Fashion Recommendation Re-ranking',
    desc: 'Fine-tuned CLIP and used Faster R-CNN/K-means features for fit-aware reranking, achieving Recall@1 of 0.42 and Recall@20 of 0.95.'
  },
  {
    name: 'Layout Generation using Diffusion Models',
    desc: 'Developed a diffusion model for aesthetic layout generation with text, images, and shapes, reaching an FID score of 15.2.'
  }
];

export const publications = [
  {
    title: 'Chain-of-Sanitized-Thoughts: Reducing PII Leakage in Chain-of-Thought Reasoning',
    authors: 'Arghyadeep Das, Sai Sreenivas Chintha, Rishiraj Girmal, Kinjal Pandey, Sharvi Endait',
    venue: 'In Proceedings of the ICML 2026 Workshop on Agents in the Wild (AIWILD)',
    year: '2026',
    link: 'https://openreview.net/forum?id=YQS4CjDtHX'
  },
  {
    title: 'XLM: A Python package for non-autoregressive language models',
    authors: 'Dhruvesh Patel, Durga Prasad Maram, Sai Sreenivas Chintha, Benjamin Rozonoyer, Andrew McCallum',
    venue: 'In Proceedings of the EACL 2026 System Demonstrations',
    year: '2026',
    link: 'https://arxiv.org/abs/2512.17065'
  }
];

export const experience = [
  {
    logo: 'AD',
    org: 'Adobe',
    role: 'Member of Technical Staff - 2',
    date: 'Jul 2021 – Jul 2024',
    bullets: [
      'Worked on a caption generation prototype using CLIP, GPT-3, and supervised classification.',
      'Led backend resiliency efforts supporting 99.9% service SLA across three major Adobe Express releases.',
      'Optimized Node.js service memory usage by 60% using low-level string and array buffer optimizations.'
    ]
  }
];
