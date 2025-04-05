---
title: "Multi-robot task allocation under uncertainty via hindsight optimization"
authors:
- Neel Dhanaraj
- admin
- Anirban Mukherjee
- Heramb Nemlekar
- Stefanos Nikolaidis
- Satyandra K. Gupta
author_notes:

date: "2024-03-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-03-01T00:00:00Z"
# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "2024 IEEE International Conference on Robotics and Automation (ICRA)"
publication_short: ""

abstract: Multi-robot systems are becoming increasingly prevalent in various real-world applications, such as manufacturing and warehouse logistics. These systems face complex challenges in 1) task allocation due to factors like time-extended tasks, and agent specialization, and 2) uncertainties in task execution. Potential task failures can add further contingency tasks to recover from the failure, thereby causing delays. This paper addresses the problem of Multi-Robot Task Allocation under Uncertainty by proposing a hierarchical approach that decouples the problem into two levels. We use a low-level optimization formulation to find the optimal solution for a deterministic multi-robot task allocation problem with known task outcomes. The higher-level search intelligently generates more likely combinations of failures and calls the inner-level search repeatedly to find the optimal task allocation sequence, given the known outcomes. We validate our results in simulation for a manufacturing domain and demonstrate that our method can reduce the effect of potential delays from contingencies. We show that our algorithm is computationally efficient while improving average makespan compared to other baselines.

# Summary. An optional shortened abstract.
summary: 

tags:
- Task Planning
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: 'https://ieeexplore.ieee.org/abstract/document/10611370'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

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
