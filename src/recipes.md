---
title: Recipes
layout:  mylayout.njk
eleventyExcludeFromCollections: true
---
{% assign recipes = collections.recipes | reverse %}
{% for recipe in recipes limit:5  %}
    <p>
    <a href="{{ recipe.url }}">{{ recipe.data.title }}</a> <i>(written {{ recipe.date | date: "%b %d, %Y"}})</i>
    </p>
{% endfor %}
