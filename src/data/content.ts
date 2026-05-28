export const profile = {
  name: 'Sai Sreenivas Chintha',
  affiliations: 'UMass Amherst, Microsoft, Adobe',
  bio: [
    'I am a Computer Science M.S. student at UMass Amherst working on adaptive decoding, non-autoregressive language models, multimodal retrieval, and vision-language models.',
    'My research interests are in NLP, information retrieval, and efficient LLM inference. I enjoy building reliable machine learning systems that are practical for real-world deployment.'
  ]
};

export const research = [
  {
    logo: 'MS',
    org: 'Microsoft',
    role: 'Research Extern',
    date: 'Feb 2026 – Present',
    bullets: [
      'Developing entropy-guided adaptive decoding for speculative decoding approaches such as EAGLE.',
      'Conducted roughly 1B-token pretraining on The Pile and instruction tuning on ShareGPT using LLaMA-3 8B.'
    ]
  },
  {
    logo: 'UM',
    org: 'UMass IESL Lab',
    role: 'Graduate Student Researcher',
    date: 'Oct 2025 – Present',
    bullets: [
      'Contributing to XLM, a Python framework for non-autoregressive language models.',
      'Exploring self-correction for diffusion language models to improve parallel token sampling.'
    ]
  },
  {
    logo: 'KL',
    org: 'KLA',
    role: 'Machine Learning Research Intern',
    date: 'Jun 2025 – Aug 2025',
    bullets: [
      'Researched zero-shot defect retrieval and detection using vision-language models on SEM wafer images.',
      'Enhanced Grounding DINO with phrase-level softmax classification, BERT text-encoder tuning, and domain-specific augmentations.'
    ]
  },
  {
    logo: 'UC',
    org: 'UMass CIIR Lab',
    role: 'Graduate Student Researcher',
    date: 'Feb 2025 – May 2025',
    bullets: [
      'Explored personalized multimodal retrieval using VLMs and multimodal LLM-based reranking.'
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
    title: 'Entropy-Guided Adaptive Decoding for Speculative Inference',
    authors: 'Sai Sreenivas Chintha, Collaborators',
    venue: 'Preprint',
    year: '2026',
    link: '#'
  },
  {
    title: 'Self-Correction in Diffusion Language Models',
    authors: 'Sai Sreenivas Chintha, UMass IESL Lab',
    venue: 'Under Review',
    year: '2026',
    link: '#'
  },
  {
    title: 'Zero-Shot Defect Retrieval with Vision-Language Models',
    authors: 'Sai Sreenivas Chintha, KLA Research Team',
    venue: 'Technical Report',
    year: '2025',
    link: '#'
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
