---
title: Blog post 1
layout: blogPost.njk
tags: blogs
---
<h2>{{ title }}</h2>
<p> 
{% renderTemplate 'liquid,md' %}
```diff-js
+function myFunction() {
   // …
-  return true;
 }
```
{% endrenderTemplate %}
</p>
