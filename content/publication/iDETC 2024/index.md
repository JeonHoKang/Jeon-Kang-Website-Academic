---
title: 'A Learning Framework for Enabling Robots to Autonomously Dispense Granular Material On-Demand '

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Rishabh Shkla
  - Moksh Mehta
  - Satyandra K. Gupta
# Author notes (optional)
author_notes:


date: '2024-03-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2024-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: ASME 2024 International Design Engineering Technical Conferences and Computers and Information in Engineering Conference
publication_short: DETC 2024 August 25–28, 2024 Washington, DC, USA

abstract: This paper presents a learning framework for enabling robots to autonomously dispense granular materials on demand. This framework enables robots to scoop and transfer the requested material amount with milligram scale accuracy. Our approach is capable of handling challenging cases where the amount left in the source container is significantly less than the container volume. In such cases, robots must build piles before scooping the material to capture enough material within the scooper. We use Gaussian Process Regression (GPR) to predict granular material behavior during scooping and pouring tasks. GPR is effective in learning the behavior of granular material with task parameters, such as robot joint angles, joint accelerations, and end-effector geometry. During task execution, we use GPR to solve the inverse problem and determine the task parameters based on the desired scooping and pouring amounts. The system performance is evaluated by showing GPR’s ability to predict scooped and poured amounts with reasonable uncertainty. We benchmark our method against the traditional approach of fine-tuning the amount via closed-loop control from the scale sensor feedback. Our method shows 55.2% improvement in time taken to dispense the granular material over the benchmark approach. The proposed framework shows promising results in terms of reducing dispensing times.

# Summary. An optional shortened abstract.
summary: 

tags:
  - Granular Material Manipulation

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 
url_code: 
url_dataset: 
url_poster: ''
url_project: ''
url_slides: ''
url_source: 
url_video: 

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**ASME**](https://asmedigitalcollection.asme.org/IDETC-CIE/proceedings/IDETC-CIE2024/88353/V02BT02A048/1208808)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

