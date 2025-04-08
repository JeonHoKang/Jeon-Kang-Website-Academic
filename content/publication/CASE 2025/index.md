---
title: "Task-Context-Aware Diffusion Policy with Language Guidance for Multi-task Disassembly"
authors:
- admin
- Sagar Joshi
- Neel Dhanaraj
- Satyandra K. Gupta
author_notes:

date: "2025-04-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-04-01T00:00:00Z"
# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "2025 IEEE 20th International Conference on Automation Science and Engineering (CASE)"
publication_short: ""

abstract: |

  Diffusion-based policy learning frameworks excel in learning diverse tasks and achieving high success rates. However, in manufacturing settings, success rate alone is insufficient for real-world deployment. Tasks must be executed efficiently, minimizing idle time while maintaining precision. Additionally, in assembly and disassembly settings, a single scene often contains multiple task goals that need to be completed—such as picking up an engine while simultaneously securing a suspension—requiring the robot to reason over multiple objectives within the same observation space. In human-robot collaboration, enabling humans to specify task preferences is crucial for flexible and intuitive interaction. In this paper, we address two key challenges : (1) improving task execution efficiency by structuring tasks into distinct sub-task modes via language, and (2) enabling human operators to select tasks using natural language commands. Additionally, we introduce adaptive parameter selection framework and reliance on different sensory modalities depending on these sub-task modes. We evaluate our approach on the NIST Task Board, a representative benchmark of real-world tasks where multiple task goals exist within the same scene. Our method improves execution speed by 57\% and show 19\% improvement in task success rates. Demonstration videos are available at [Project Website](https://rros-lab.github.io/task-aware-diffusion/)

# Summary. An optional shortened abstract.
summary: 

tags:
- Language-guided Diffusion Policy
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: 
url_code: 'https://github.com/JeonHoKang/CASE2025-Task-Context-Aware-Diffusion-Policy'
url_dataset: 
url_poster: ''
url_project: 'https://rros-lab.github.io/task-aware-diffusion/'
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=HKWfDn48jw4'

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
