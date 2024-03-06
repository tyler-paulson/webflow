# Webflow Plugins

## Collection Custom Lightbox

### Installation

Add the following code to the </body> custom code box:

```html
<script src="https://cdn.jsdelivr.net/gh/tyler-paulson/webflow/collection-popover.js"></script>
```

### Implementation

**Step 1 -** Give the Collection List or Collection List Wrapper that will be launching the lightboxes the following attribute:

```
clb="list"
```

Wherever you want the clickable area to launch the popover to be, add a link to Current Item.

**Step 2 -** Give the Collection List or Collection List Wrapper that will hold the popovers the following attribute:

```
clb="content"
```

A link to the Current Item must be in the item somewhere, it can be hidden or empty.

**Step 3A -** Give the element that the popovers should be appended to the following attribute:

```
clb="lightbox"
```

**Step 3B -** *Optional* If you don't want a close button, add the following attribute to the lightbox element:

```
clb-button="false"
```

**Step 4 -** Give the element that is wrapped around the lement in step 3 the following attribute:

```
clb="wrap"
```

*Whenver the item in "list" is clicked the corresponding item in "wrap" will be moved to "lightbox".*

**Step 5 -** *Optional* Style the close button.

As an example, adding the following code to the <head> custom code box will invert the button:

```html
<style>
.clb-button {
    background: #292a2f;
    color: #fff;
}
</style>