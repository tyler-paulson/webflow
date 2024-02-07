# Webflow Plugins

## Collection Popover

**Step 1 -** Give the Collection List or Collection List Wrapper that will be launching the popovers the following attribute:

```
clb="list"
```

Wherever you want the clickable area to launch the popover to be, add a link to Current Item.

**Step 1 -** Give the Collection List or Collection List Wrapper that will hold the popovers the following attribute:

```
clb="wrap"
```

A link to the Current Item must be in the item somewhere, it can be hidden or empty.

**Step 3 -** Give the element that the popovers should be appended to the following attribute:

```
clb="lightbox"
```

*Whenver the item in "list" is clicked the corresponding item in "wrap" will be moved to "lightbox".*