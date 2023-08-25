---
title: Blog index
layout:  mylayout.njk
---
<h2>Blog posts</h2>
{% for blog in collections.blogs %}
    <p>
    <a href="{{ blog.url }}">{{ blog.data.title }}</a>
    </p>
{% endfor %}
