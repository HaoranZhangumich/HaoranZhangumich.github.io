---
layout: about
title: about
permalink: /
subtitle: <a href="https://umich.edu/">University of Michigan</a> · Ann Arbor, MI

profile:
  align: right
  image: profile.png
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Ann Arbor, MI 48105</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a Master’s student in Computer Science at the [University of Michigan](https://umich.edu/), advised by Prof. [Chad Jenkins](https://web.eecs.umich.edu/~ocj/).

Before that, I completed my bachelor’s degrees in Computer Science and Data Science, also at the University of Michigan (Go blue!!). I previously had the opportunity to work as a research intern in the [CLeAR Lab](https://clear-nus.github.io/) at the [National University of Singapore](https://nus.edu.sg/), advised by Prof. [Harold Soh](https://haroldsoh.com/), and I am currently collaborating remotely with [Shanghai AI Lab](https://www.shlab.org.cn/) under the supervision of [Xudong Xu](https://sheldontsui.github.io/).

My research interests lie in robot learning, robot manipulation, and the development of benchmarks and simulation tools for evaluating robotic and intelligent systems.

## Projects

Here are some highlighted projects (see the full list on the [Projects page]({{ "/projects/" | relative_url }})):

{% assign projects_sorted = site.projects | sort: "importance" %}
{% for p in projects_sorted %}
{% if p.published != false %}
- [{{ p.title }}]({{ p.url | relative_url }}) — {{ p.description }}
{% endif %}
{% endfor %}

## Publications

### Selected
{% bibliography --query @*[selected=true] %}

### All
See the full list on the [Publications page]({{ "/publications/" | relative_url }}).
