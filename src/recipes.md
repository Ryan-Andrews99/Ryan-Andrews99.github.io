---
title: Recipes
layout:  mylayout.njk
eleventyExcludeFromCollections: true
---
{% assign recipies = collections.recipies | reverse %}
{% for recipie in recipies limit:5  %}
    <p>
    <a href="{{ recipie.url }}">{{ recipie.data.title }}</a> <i>(written {{ recipie.date | date: "%b %d, %Y"}})</i>
    </p>
{% endfor %}
