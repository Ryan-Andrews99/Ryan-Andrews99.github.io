---
title: Reviews
layout:  mylayout.njk
eleventyExcludeFromCollections: true
---

{% assign reviews = collections.reviews | reverse %}
{% for review in reviews limit:10  %}
    <p>
    <a href="{{ review.url }}">{{ review.data.title }}</a> <i>(written {{ review.date | date: "%b %d, %Y"}})</i>
    </p>
    <p>
    {{review.content 450| excerpt}}
    </p>
{% endfor %}
