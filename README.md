# Webflow Plugins

## Collection Popover

### Installation

Add the following code to the </body> custom code box:

```
<script src="https://cdn.jsdelivr.net/gh/tyler-paulson/webflow/collection-popover.js"></script>
```

### Implementation

**Step 1 -** Give the Collection List or Collection List Wrapper that will be launching the popovers the following attribute:

```
clb="list"
```

Wherever you want the clickable area to launch the popover to be, add a link to Current Item.

**Step 1 -** Give the Collection List or Collection List Wrapper that will hold the popovers the following attribute:

```
clb="content"
```

A link to the Current Item must be in the item somewhere, it can be hidden or empty.

**Step 3 -** Give the element that the popovers should be appended to the following attribute:

```
clb="lightbox"
```

**Step 4 -** Give the element that is wrapped around the lement in step 3 the following attribute:

```
clb="wrap"
```

*Whenver the item in "list" is clicked the corresponding item in "wrap" will be moved to "lightbox".*