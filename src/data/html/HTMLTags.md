---
path: "/HTML-Tags"
date: "2021-01-23"
title: "Some HTML Tags"
author: "Souari Karim"
theme: "html"
---

## In here you can find some HTML tags that maybe will remind you of the syntax :

### Never forget quotes in the attributes of html tags

#### Link

```html
<a href="/images/myw3schoolsimage.jpg" target="_blank" download>
  <a href="mailto:someone@example.com">Send email</a>
  <a href="tel:+4733378901">+47 333 78 901</a>
  <a href="#section2">Go to Section 2</a>
</a>
```

#### Images

```html
<img
  src="workplace.jpg"
  alt="Workplace"
  usemap="#workmap"
  width="400"
  height="379"
/>

<map name="workmap">
  <area
    shape="rect"
    coords="34,44,270,350"
    alt="Computer"
    href="computer.htm"
  />
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" />
  <area
    shape="circle"
    coords="337,300,44"
    alt="Cup of coffee"
    href="coffee.htm"
  />
</map>
```

#### Title attribute

```html
<p title="i am a tooltip">Title attribute</p>
```

#### Preformatted Text :

Text in a **pre** element is displayed in a fixed-width font, and the text preserves both spaces and line breaks.
The text will be displayed exactly as written in the HTML source code.

```html
<pre>
Text in a pre element
is displayed in a fixed-width
font, and it preserves
both      spaces and
line breaks
</pre>
```

#### Abbreviations

```html
<p>the <abbr title=" world "> w </abbr> is fine</p>
```

#### Address

<br>
The <address> tag defines the contact information for the author/owner of a document or an article.

```html
<address>
  Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br />
  Visit us at:<br />
  Example.com<br />
  Box 564, Disneyland<br />
  USA
</address>
```

#### Tables

```html
<table>
  <caption>
    Monthly savings
  </caption>
  <tr>
    <th>Month</th>
    <th colspan="2">Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
    <td>$10</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
    <td>$10</td>
  </tr>
</table>
```

#### Description list

```html
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```

####

```html

```

####

```html

```

####

```html

```

####

```html

```
