---
layout:  mylayout.njk
title: Post Archives
eleventyExcludeFromCollections: true
pagination:
    data: collections.all
    size: 5
    alias: posts
    reverse: true
    layout:  mylayout.njk
---
<ul>
{% for post in posts %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a> <i>(written {{ post.date | date: "%b %d, %Y"}})</i></li>
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
