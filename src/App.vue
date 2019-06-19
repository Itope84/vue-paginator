<template>
  <nav>
    <ul
      role="menubar"
      aria-disabled="false"
      aria-label="Pagination"
      class="pagination b-pagination pagination-sm"
    >
      <!---->
      <li role="none presentation" aria-hidden="true" class="page-item" :class="{'disabled': value === 1}">
        <span
          role="menuitem"
          aria-label="Go to previous page"
          v-if="value === 1"
          :aria-disabled="true"
          class="page-link"
        >Prev</span>

        <a
        v-else
          role="menuitem"
          tabindex="-1"
          aria-label="Go to next page"
          target="_self"
          href="#"
          class="page-link"
          @click.prevent="goTo(value - 1)"
        >Prev</a>
      </li>
      <!---->
      <li
        role="none presentation"
        v-for="(page, index) in indices"
        :key="index"
        class="page-item"
        :class="{'active': value === page.val, 'disabled': !page.val, 'bv-d-xs-down-none': !page.val}"
      >
        <a
          role="menuitemradio"
          aria-label="Go to page 1"
          aria-checked="true"
          aria-posinset="1"
          aria-setsize="6"
          tabindex="0"
          target="_self"
          href="#"
          @click.prevent="goTo(page.val)"
          class="page-link"
          v-if="page.val"
        >{{page.name}}</a>

        <span class="page-link" v-else>…</span>
      </li>

      <!-- <li role="separator" class="page-item disabled bv-d-xs-down-none">
        <span class="page-link">…</span>
      </li> -->
      <li role="none presentation" class="page-item"  :class="{'disabled': value === pageCount}">
        <span
          role="menuitem"
          aria-label="Go to previous page"
          v-if="value === pageCount"
          :aria-disabled="true"
          class="page-link"
        >Next</span>
        <a
        v-else
          role="menuitem"
          tabindex="-1"
          aria-label="Go to next page"
          target="_self"
          href="#"
          class="page-link"
          @click.prevent="goTo(value + 1)"
        >Next</a>
      </li>
      <!---->
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pageCount: {
      type: Number,
      required: true
    },
    onEachSide: {
      type: Number,
      default: 2,
      description: "Amount on Each side"
    },
    value: {
      type: Number,
      description: "Input value",
      default: 1
    },
    clickHandler: {
        type: Function,
        description: "Handles click on a page"
    }
  },
  model: {
      prop: 'value',
      event: 'input'
    },
  computed: {
    indices() {
      const arr = [];
      for(let i = 1; i <= this.pageCount; i++) {
          arr.push({
              name: i,
              val: i
          })
      }
      const links = []
      if(this.value - (this.onEachSide + 2) > 1) {
          links.push(...[...arr].splice(0, 2))
          links.push({name: "...", val: null})
          links.push(...arr.filter(item => item.val >= (this.value - this.onEachSide) && item.val < this.value))
      } else {
          links.push(...arr.filter(item => item.val >= 1 && item.val < this.value))
      }

      links.push({name: this.value, val: this.value})

      if (this.value + (this.onEachSide + 2) < this.pageCount) {
          links.push(...arr.filter(item => item.val <= (this.value + this.onEachSide) && item.val > this.value))
          links.push({name: "...", val: null})
          links.push(...[...arr].splice(-1, 2))
      } else {
          links.push(...arr.filter(item => item.val <= (this.pageCount) && item.val > this.value))
      }

      return links
    }
  },

  methods: {
      goTo(page) {
          this.$emit('input', page)
          this.clickHandler(page)
      }
  }
};
</script>
