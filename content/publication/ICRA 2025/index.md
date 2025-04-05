---
title: "Force-Conditioned Diffusion Policies for Compliant Sheet Separation Tasks in Bimanual Robotic Cells"
authors:
- Rishabh Shukla
- Samrudh Mude
- Raj Talan
- Neel Dhanaraj
- admin
- Satyandra K. Gupta
author_notes:

date: "2025-01-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-01-21T00:00:00Z"
# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "International Conference"
publication_short: "ICRA 2025"

abstract: Disassembly is a critical challenge in maintenance and service tasks, particularly in high-precision operations such as electric vehicle (EV) battery recycling.Tasks like prying-open sealed battery covers require precise manipulation and controlled force application. In our approach we collect human demonstrations using a motion capture system, enabling the robot to learn from human-expert disassembly strategies.These demonstrations train a bimanual robotic system in which one arm exerts force with a specialized tool while the other manipulates and removes sealed components.Our method builds on a diffusion-based policy and integrates real-time force sensing to adapt its actions as contact conditions change. We decompose the demonstrations into distinct sub-tasks and apply data augmentation, thereby reducing the number of demonstrations needed and mitigating potential task failures. Our results show that the proposed method, even with a small dataset, achieves a high task success rate and efficiency compared to a standard diffusion technique. We demonstrate in a real-world application that the bimanual system effectively executes chiseling and peeling actions to separate bonded sheet from a substrate.

# Summary. An optional shortened abstract.
summary: 

tags:
- Diffusion Policy
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: 
url_code: 
url_dataset: 
url_poster: ''
url_project:
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=rRBom3rPj3I'

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
