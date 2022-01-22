# Popover

### Simple javascript popover

![image](https://user-images.githubusercontent.com/45208166/150647201-b961f594-f2ee-4770-8699-c23579b96531.png)

## How to use

#### Include this css files in your index.html
```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/gh/Just1bridou/popover/popover.css" rel="stylesheet">
```

#### Include this javascript file in your index.html
```html
<script src="https://cdn.jsdelivr.net/gh/Just1bridou/popover/popover.js">
```

#### Exemple of popover code
Create `<div>` element with `popover=` who's refer to the popover's div id. Add `title` attribute to the popover's div to set title inside.
```html

<button popover="1">Voir la popup</button>

<div id="1" class="popover" title="Popover title">
  <h2>Popover</h2>
</div>
```
