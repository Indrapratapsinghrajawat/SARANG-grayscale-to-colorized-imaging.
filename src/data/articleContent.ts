export interface ArticleAuthor {
  name: string;
  affiliation: string;
}

export interface ArticleSection {
  heading: string;
  content: string;
}

export interface ArticleData {
  slug: string;
  title: string;
  type: string;
  authors: ArticleAuthor[];
  journal: string;
  year: number;
  date: string;
  doi?: string;
  pdfUrl?: string;
  externalUrl?: string;
  abstract: string;
  keywords: string[];
  sections: ArticleSection[];
  citations?: number;
  readTime: string;
}

export const articles: ArticleData[] = [
  {
    slug: "literature-review-sar-colorization",
    title: "Literature Review: SAR Image Colorization Methods",
    type: "Review Paper",
    authors: [
      { name: "Author Name", affiliation: "University/Institution" },
      { name: "Co-Author Name", affiliation: "Research Lab" },
    ],
    journal: "IEEE Transactions on Geoscience and Remote Sensing",
    year: 2024,
    date: "March 15, 2024",
    doi: "10.1109/TGRS.2024.XXXXXX",
    pdfUrl: "#",
    abstract: "A comprehensive survey of existing SAR colorization techniques, from traditional IHS fusion methods to modern deep learning approaches, analyzing their strengths and limitations.",
    keywords: ["SAR", "Colorization", "Deep Learning", "Literature Survey", "Remote Sensing", "Image Processing"],
    sections: [
      {
        heading: "Introduction",
        content: "Synthetic Aperture Radar (SAR) imagery provides invaluable data for Earth observation, offering all-weather, day-and-night imaging capabilities. However, the grayscale nature of SAR images presents interpretation challenges for human analysts. This review systematically examines the evolution of SAR colorization methods, from early intensity-hue-saturation (IHS) fusion techniques to contemporary deep learning approaches.\n\nThe motivation for SAR colorization stems from the human visual system's superior ability to distinguish color variations compared to grayscale intensity differences. By introducing meaningful color information while preserving the original SAR data integrity, colorization enhances visual interpretability without sacrificing the unique advantages of radar-based sensing."
      },
      {
        heading: "Traditional Approaches",
        content: "Early SAR colorization methods primarily relied on multi-temporal or multi-polarimetric data fusion. The IHS (Intensity-Hue-Saturation) transformation emerged as a foundational technique, allowing researchers to map different SAR parameters to color channels. Principal Component Analysis (PCA) based methods offered another avenue for dimensionality reduction and color assignment.\n\nThese traditional approaches, while computationally efficient, often suffered from limited color diversity and required multiple SAR acquisitions or polarimetric capabilities not always available in operational scenarios."
      },
      {
        heading: "Deep Learning Methods",
        content: "The advent of deep learning revolutionized SAR colorization. Generative Adversarial Networks (GANs), particularly pix2pix and CycleGAN variants, demonstrated unprecedented ability to learn complex mappings between SAR and optical domains. Conditional GANs enabled more controlled generation, while attention mechanisms improved spatial consistency.\n\nRecent architectures incorporate perceptual losses, multi-scale discriminators, and domain-specific adaptations to handle the unique characteristics of SAR data, including speckle noise and geometric distortions."
      },
      {
        heading: "Evaluation Metrics",
        content: "Standardized evaluation remains a challenge in SAR colorization research. Common metrics include Peak Signal-to-Noise Ratio (PSNR), Structural Similarity Index (SSIM), and Fréchet Inception Distance (FID). However, these metrics may not fully capture the preservation of SAR-specific information.\n\nWe propose additional evaluation criteria focusing on intensity preservation, geometric accuracy, and semantic consistency with ground truth optical imagery when available."
      },
      {
        heading: "Conclusions and Future Directions",
        content: "This review identifies key trends and gaps in SAR colorization research. Future work should address the lack of standardized datasets, develop SAR-specific evaluation metrics, and explore lightweight architectures suitable for real-time applications. The integration of physical SAR models into learning frameworks presents a promising direction for more robust and interpretable colorization systems."
      }
    ],
    citations: 45,
    readTime: "15 min read"
  },
  {
    slug: "research-gaps-sar-colorization",
    title: "Research Gaps in SAR Colorization Systems",
    type: "Analysis",
    authors: [
      { name: "Author Name", affiliation: "University/Institution" },
    ],
    journal: "Remote Sensing Journal",
    year: 2024,
    date: "January 22, 2024",
    externalUrl: "#",
    abstract: "Identifying critical gaps in current research including lack of standardized datasets, inconsistent evaluation protocols, and the need for domain-specific loss functions.",
    keywords: ["Research Gap", "Evaluation Metrics", "Dataset Standards", "SAR Processing", "Machine Learning"],
    sections: [
      {
        heading: "Introduction",
        content: "Despite significant advances in SAR colorization, several critical research gaps persist that hinder progress and limit practical applicability. This analysis identifies and examines these gaps, providing a roadmap for future research directions.\n\nOur investigation encompasses dataset availability, evaluation standardization, algorithmic limitations, and deployment challenges across various application domains."
      },
      {
        heading: "Dataset Limitations",
        content: "The most significant gap in SAR colorization research is the lack of standardized, publicly available datasets. Existing datasets vary in:\n\n• Spatial resolution and coverage area\n• Temporal alignment between SAR and optical pairs\n• Atmospheric and seasonal conditions\n• Sensor characteristics and acquisition parameters\n\nThis heterogeneity makes cross-study comparisons difficult and limits reproducibility of published results."
      },
      {
        heading: "Evaluation Protocol Inconsistencies",
        content: "Current evaluation practices lack standardization across several dimensions. Different studies employ varying train/test splits, preprocessing pipelines, and metric selections. The absence of benchmark leaderboards further compounds comparison difficulties.\n\nMoreover, perceptual quality assessment often relies solely on quantitative metrics without incorporating expert human evaluation, which is crucial for understanding practical utility."
      },
      {
        heading: "Domain-Specific Challenges",
        content: "Generic image-to-image translation losses may not adequately capture SAR-specific requirements. Speckle noise handling, geometric distortion correction, and radiometric calibration present unique challenges requiring specialized loss functions and architectural designs.\n\nThe physical interpretation of SAR backscatter must be preserved during colorization to maintain the data's scientific value."
      },
      {
        heading: "Recommendations",
        content: "We recommend the establishment of a community-driven benchmark dataset with standardized evaluation protocols. Additionally, research should focus on developing SAR-aware loss functions that incorporate physical models of radar imaging.\n\nCollaboration between remote sensing scientists and machine learning researchers is essential to bridge the gap between algorithmic innovation and domain expertise."
      }
    ],
    citations: 28,
    readTime: "12 min read"
  },
  {
    slug: "standardized-evaluation-protocols",
    title: "Importance of Standardized Evaluation Protocols",
    type: "Position Paper",
    authors: [
      { name: "Author Name", affiliation: "University/Institution" },
      { name: "Co-Author Name", affiliation: "Research Institute" },
    ],
    journal: "IEEE Geoscience and Remote Sensing Letters",
    year: 2024,
    date: "February 8, 2024",
    doi: "10.1109/LGRS.2024.XXXXXX",
    pdfUrl: "#",
    abstract: "Advocating for unified evaluation frameworks in SAR colorization research, proposing metrics that capture both visual quality and preservation of radar-specific information.",
    keywords: ["Q4 Metric", "NRMSE", "SAM", "Benchmarking", "Evaluation Standards", "Quality Assessment"],
    sections: [
      {
        heading: "The Need for Standardization",
        content: "The proliferation of SAR colorization methods without standardized evaluation protocols has created a fragmented research landscape. This position paper argues for the adoption of unified evaluation frameworks to enable meaningful comparisons and accelerate progress in the field.\n\nCurrent practices often cherry-pick favorable metrics or test conditions, making it difficult to assess true algorithmic advances versus experimental artifacts."
      },
      {
        heading: "Proposed Evaluation Framework",
        content: "We propose a multi-dimensional evaluation framework encompassing:\n\n1. **Intensity Preservation Metrics**: Measuring fidelity to original SAR data\n2. **Spectral Accuracy Metrics**: Assessing color correctness when ground truth is available\n3. **Perceptual Quality Metrics**: Capturing human-perceived visual quality\n4. **Semantic Consistency Metrics**: Evaluating preservation of interpretable features\n\nEach dimension addresses distinct aspects of colorization quality critical for different applications."
      },
      {
        heading: "Benchmark Dataset Requirements",
        content: "A standardized benchmark dataset should include:\n\n• Multiple geographic regions with diverse land cover types\n• Various SAR sensors (Sentinel-1, TerraSAR-X, ALOS-2)\n• Temporally aligned optical imagery from multiple sources\n• Comprehensive metadata and quality annotations\n• Defined train/validation/test splits\n\nWe outline specific requirements for data curation, preprocessing, and distribution."
      },
      {
        heading: "Implementation Roadmap",
        content: "Achieving community-wide adoption requires coordinated effort. We propose a phased implementation:\n\n**Phase 1**: Establish working group and define initial metric set\n**Phase 2**: Curate and release benchmark dataset v1.0\n**Phase 3**: Deploy evaluation server with automated scoring\n**Phase 4**: Organize challenge events to drive adoption\n\nThis roadmap balances immediate practical needs with long-term sustainability."
      }
    ],
    citations: 32,
    readTime: "10 min read"
  },
  {
    slug: "article-placeholder-1",
    title: "Article Title Placeholder",
    type: "Research Paper",
    authors: [
      { name: "Author Name", affiliation: "University/Institution" },
    ],
    journal: "Journal Name",
    year: 2024,
    date: "Month Day, 2024",
    pdfUrl: "#",
    abstract: "This is a placeholder abstract. Replace this text with the actual abstract content describing the research methodology, findings, and conclusions.",
    keywords: ["Keyword 1", "Keyword 2", "Keyword 3"],
    sections: [
      {
        heading: "Introduction",
        content: "This is placeholder content for the introduction section. Replace with actual research introduction covering background, motivation, and objectives of the study."
      },
      {
        heading: "Methodology",
        content: "This is placeholder content for the methodology section. Replace with detailed description of research methods, experimental setup, and data collection procedures."
      },
      {
        heading: "Results",
        content: "This is placeholder content for the results section. Replace with findings, data analysis, and experimental outcomes of the research."
      },
      {
        heading: "Discussion",
        content: "This is placeholder content for the discussion section. Replace with interpretation of results, comparison with existing work, and implications of findings."
      },
      {
        heading: "Conclusion",
        content: "This is placeholder content for the conclusion section. Replace with summary of contributions, limitations, and future research directions."
      }
    ],
    readTime: "8 min read"
  },
  {
    slug: "article-placeholder-2",
    title: "Article Title Placeholder",
    type: "Technical Report",
    authors: [
      { name: "Author Name", affiliation: "University/Institution" },
      { name: "Co-Author Name", affiliation: "Research Lab" },
    ],
    journal: "Technical Report Series",
    year: 2024,
    date: "Month Day, 2024",
    externalUrl: "#",
    abstract: "This is a placeholder abstract. Replace this text with the actual abstract content describing the research methodology, findings, and conclusions.",
    keywords: ["Keyword 1", "Keyword 2", "Keyword 3"],
    sections: [
      {
        heading: "Executive Summary",
        content: "This is placeholder content for the executive summary. Replace with a brief overview of the technical report's key findings and recommendations."
      },
      {
        heading: "Technical Background",
        content: "This is placeholder content for the technical background section. Replace with relevant technical context and prerequisites for understanding the report."
      },
      {
        heading: "Implementation Details",
        content: "This is placeholder content for implementation details. Replace with specific technical specifications, algorithms, and system architectures."
      },
      {
        heading: "Performance Analysis",
        content: "This is placeholder content for performance analysis. Replace with benchmarks, metrics, and comparative evaluations."
      },
      {
        heading: "Recommendations",
        content: "This is placeholder content for recommendations. Replace with actionable suggestions based on the technical findings."
      }
    ],
    readTime: "10 min read"
  },
  {
    slug: "article-placeholder-3",
    title: "Article Title Placeholder",
    type: "Conference Paper",
    authors: [
      { name: "Author Name", affiliation: "University/Institution" },
    ],
    journal: "Conference Proceedings",
    year: 2024,
    date: "Month Day, 2024",
    doi: "10.XXXX/CONF.2024.XXXXXX",
    pdfUrl: "#",
    abstract: "This is a placeholder abstract. Replace this text with the actual abstract content describing the research methodology, findings, and conclusions.",
    keywords: ["Keyword 1", "Keyword 2", "Keyword 3"],
    sections: [
      {
        heading: "Introduction",
        content: "This is placeholder content for the introduction section. Replace with actual research introduction covering background, motivation, and objectives."
      },
      {
        heading: "Related Work",
        content: "This is placeholder content for the related work section. Replace with review of existing literature and positioning of current contribution."
      },
      {
        heading: "Proposed Approach",
        content: "This is placeholder content for the proposed approach. Replace with detailed description of the novel methodology or system."
      },
      {
        heading: "Experiments",
        content: "This is placeholder content for experiments. Replace with experimental setup, datasets, baselines, and evaluation metrics."
      },
      {
        heading: "Conclusion",
        content: "This is placeholder content for the conclusion. Replace with summary of contributions and future work directions."
      }
    ],
    readTime: "7 min read"
  },
  {
    slug: "article-placeholder-4",
    title: "Article Title Placeholder",
    type: "Review Paper",
    authors: [
      { name: "Author Name", affiliation: "University/Institution" },
      { name: "Co-Author Name", affiliation: "Research Institute" },
    ],
    journal: "Journal of Remote Sensing",
    year: 2024,
    date: "Month Day, 2024",
    pdfUrl: "#",
    abstract: "This is a placeholder abstract. Replace this text with the actual abstract content describing the research methodology, findings, and conclusions.",
    keywords: ["Keyword 1", "Keyword 2", "Keyword 3"],
    sections: [
      {
        heading: "Introduction",
        content: "This is placeholder content for the introduction. Replace with motivation for the review and scope of covered topics."
      },
      {
        heading: "Classification of Methods",
        content: "This is placeholder content for method classification. Replace with taxonomy and categorization of reviewed approaches."
      },
      {
        heading: "Comparative Analysis",
        content: "This is placeholder content for comparative analysis. Replace with detailed comparison of methods across various criteria."
      },
      {
        heading: "Open Challenges",
        content: "This is placeholder content for open challenges. Replace with identified gaps and unsolved problems in the field."
      },
      {
        heading: "Future Directions",
        content: "This is placeholder content for future directions. Replace with promising research avenues and emerging trends."
      }
    ],
    readTime: "12 min read"
  },
  {
    slug: "article-placeholder-5",
    title: "Article Title Placeholder",
    type: "Analysis",
    authors: [
      { name: "Author Name", affiliation: "University/Institution" },
    ],
    journal: "Analysis Report",
    year: 2024,
    date: "Month Day, 2024",
    externalUrl: "#",
    abstract: "This is a placeholder abstract. Replace this text with the actual abstract content describing the research methodology, findings, and conclusions.",
    keywords: ["Keyword 1", "Keyword 2", "Keyword 3"],
    sections: [
      {
        heading: "Overview",
        content: "This is placeholder content for the overview section. Replace with high-level summary of the analysis objectives and scope."
      },
      {
        heading: "Data Sources",
        content: "This is placeholder content for data sources. Replace with description of datasets, collection methods, and data quality considerations."
      },
      {
        heading: "Analysis Methods",
        content: "This is placeholder content for analysis methods. Replace with statistical techniques, models, and analytical frameworks used."
      },
      {
        heading: "Key Findings",
        content: "This is placeholder content for key findings. Replace with main insights and discoveries from the analysis."
      },
      {
        heading: "Implications",
        content: "This is placeholder content for implications. Replace with practical implications and actionable insights from findings."
      }
    ],
    readTime: "9 min read"
  }
];

export const getArticleBySlug = (slug: string): ArticleData | undefined => {
  return articles.find((article) => article.slug === slug);
};

export const getFeaturedArticles = (): ArticleData[] => {
  return articles.filter((article) => article.citations && article.citations > 30);
};
