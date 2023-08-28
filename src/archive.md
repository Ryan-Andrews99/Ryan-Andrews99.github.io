---
layout:  mylayout.njk
title: Post Archives
pagination:
    data: collections.blogs
    size: 5
    alias: blogs
    reverse: true
    layout:  mylayout.njk
---
<h2>Post Archives</h2>
<ul>
{% for blog in blogs %}
<li><a href="{{ blog.url }}">{{ blog.data.title }}</a> <i>(written {{ blog.date | date: "%b %d, %Y"}})</i></li>
{% endfor %}
</ul>
<p>
    {% if pagination.href.previous %}
    <a href="{{ pagination.href.previous }}">Previous</a>
    {% else %}
    Previous
    {% endif %} / 
    {% if pagination.href.next %}
    <a href="{{ pagination.href.next }}">Next</a>
    {% else %}
    Next
    {% endif %}
</p>
