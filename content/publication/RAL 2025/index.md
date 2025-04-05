---
title: "Robotic Compliant Object Prying Using Diffusion Policy Guided by Vision and Force Observations"
authors:
- admin
- Sagar Joshi
- Ruopeng Huang
- Satyandra K. Gupta
author_notes:

date: "2025-03-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"
# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Robotics and Automation Letters, 2025"
publication_short: ""

abstract: The growing adoption of batteries in the electric vehicle industry and various consumer products has created an urgent need for effective recycling solutions. These products often contain a mix of compliant and rigid components, making robotic disassembly a critical step toward achieving scalable recycling processes. Diffusion policy has emerged as a promising approach for learning low-level skills in robotics. To effectively apply diffusion policy to contact-rich tasks, incorporating force as feedback is essential. In this paper, we apply diffusion policy with vision and force in a compliant object prying task. However, when combining low-dimensional contact force with high-dimensional image, the force information may be diluted. To address this issue, we propose a method that effectively integrates force with image data for diffusion policy observations. We validate our approach on a battery prying task that demands high precision and multi-step execution. Our model achieves a 96% success rate in diverse scenarios, marking a 57% improvement over the vision-only baseline. Our method also demonstrates zero-shot transfer capability to handle unseen objects and battery types. Supplementary videos and implementation codes are available on our project website -  **[Project Website](https://rros-lab.github.io/diffusion-with-force.github.io/)**

# Summary. An optional shortened abstract.
summary: 

tags:
- Diffusion Models
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: "https://arxiv.org/abs/2503.03998"
url_code: 'https://github.com/JeonHoKang/Diffusion_Policy_with_Visual_Force_CrossAttn'
url_dataset: 'https://huggingface.co/datasets/Jeon-hk/Battery_Prying_Dataset/blob/main/README.md'
url_poster: ''
url_project: 'https://rros-lab.github.io/diffusion-with-force.github.io/'
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=SyKixlaEUZY'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**IEEE**](https://ieeexplore.ieee.org/Xplore/home.jsp)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

<!-- {{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}} -->

<!-- Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
