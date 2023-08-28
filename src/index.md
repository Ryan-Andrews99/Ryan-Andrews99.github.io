---
layout: mylayout.njk
title: Ryan Andrews
eleventyExcludeFromCollections: true
---
<b>23 | Junior Software Developer | :cityscape: London | :beach_umbrella: Margate</b>
{% assign posts = collections.all | reverse %}
{% for post in posts limit:5  %}
    <p>
    <a href="{{ post.url }}"> <h2>{{ post.data.title }}</h2></a> <i style="font-size:16px;">(written {{ post.date | date: "%b %d, %Y"}})</i>
    </p>
    <p>
    {{post.content 300 | excerpt}}
    </p>
{% endfor %}
