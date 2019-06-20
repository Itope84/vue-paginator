import Vue from "vue";
import App from "../../src/App";
import { shallowMount } from "@vue/test-utils";

function getIndices(Component, propsData) {
  //   const vm = new Constructor().$mount();
  return cmp.vm.indices;
}

describe("App.vue", () => {
  it("returns the right indices", () => {
    let cmp;

    cmp = shallowMount(App, {
      propsData: {
        pageCount: 10,
        onEachSide: 2,
        value: 6
      }
    });

    // cmp.setProps({ propsData: propsData })
    expect(cmp.vm.indices).toEqual([
      {
        name: 1,
        val: 1
      },
      {
        name: 2,
        val: 2
      },
      {
        name: "...",
        val: null
      },
      {
        name: 4,
        val: 4
      },
      {
        name: 5,
        val: 5
      },
      {
        name: 6,
        val: 6
      },
      {
        name: 7,
        val: 7
      },
      {
        name: 8,
        val: 8
      },
      {
        name: 9,
        val: 9
      },
      {
        name: 10,
        val: 10
      }
    ]);

    // expect(
    //   getIndices(MyComponent, {
    //     msg: "Bye"
    //   })
    // ).toBe("Bye");
  });
});
