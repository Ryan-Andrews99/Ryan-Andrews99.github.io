---
title: Blog
layout:  mylayout.njk
eleventyExcludeFromCollections: true
---
<h2>Blog posts</h2>
{% assign blogs = collections.blogs | reverse %}
{% for blog in blogs limit:5  %}
    <p>
    <a href="{{ blog.url }}">{{ blog.data.title }}</a> <i>(written {{ blog.date | date: "%b %d, %Y"}})</i>
    </p>
{% endfor %}
