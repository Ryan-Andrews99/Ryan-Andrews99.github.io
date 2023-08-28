---
title: 'Blog posts:'
layout:  mylayout.njk
eleventyExcludeFromCollections: true
---
{% assign blogs = collections.blogs | reverse %}
{% for blog in blogs limit:10  %}
    <p>
    <a href="{{ blog.url }}">{{ blog.data.title }}</a> <i>(written {{ blog.date | date: "%b %d, %Y"}})</i>
    </p>
    <p>
    {{blog.content 450| excerpt}}
    </p>
{% endfor %}
