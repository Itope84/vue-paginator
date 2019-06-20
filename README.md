# @itope84/vue-paginator
![npm](https://img.shields.io/npm/dt/@itope84/vue-paginator.svg) ![npm bundle size](https://img.shields.io/bundlephobia/min/@itope84/vue-paginator.svg) ![NPM](https://img.shields.io/npm/l/@itope84/vue-paginator.svg)

## Install
```bash
npm i @itope84/vue-paginator
```

## Usage
### in your main.js file
```javascript
import VPaginator from '@itope84/vue-paginator'
Vue.component('v-paginator', VPaginator)
```
### or in your any of your Vue templates
```javascript
import VPaginator from '@itope84/vue-paginator'
...
components {
    VPaginator
}
```
### In your views
```html
<vb-paginator :page-count="meta.last_page || 1" v-model="currentPage" :click-handler="fetchItems" :on-each-side="2"></vb-paginator>
```

## Props:

### pageCount:
**type:** Number
**required**
Specifies the total number of pages we have

### onEachSide:
**type:** Number
**optional**
**default:** 2
Specifies the total number of items on each side of the active item before the divider

### v-model
**type:** Number
**required**
We need to model this to the current page in your component. Technically, this is the value prop :-)

### clickHandler
**type:** Function
**required**
Handles what happens when you click on a page. Upon clicking on a link, this function is called and a single argument (page) is passed into it.

## Todo
This package is very limited in its functions for now. Please feel free to submit a PR if you have any modifications or submit an issue if you have any suggestions.

For now *the package assumes you're using bootstrap*, so a nice update would be to add the styles into the package so it doesn't depend on bootstrap