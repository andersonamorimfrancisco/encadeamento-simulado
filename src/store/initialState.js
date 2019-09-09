export default {
  start: { pos: 0, value: 0 },
  end: { pos: 0, value: 0 },
  nextFree: 1,
  len: 0,
  alphabetical: false,

  freeStack: [
    { pos: 1, element: null, next: 0 },
    { pos: 2, element: null, next: 0 },
    { pos: 3, element: null, next: 0 },
    { pos: 4, element: null, next: 0 },
    { pos: 5, element: null, next: 0 }
  ],
  stack: [
    { pos: 1, element: null, next: "" },
    { pos: 2, element: null, next: "" },
    { pos: 3, element: null, next: "" },
    { pos: 4, element: null, next: "" },
    { pos: 5, element: null, next: "" }
  ],
  elements: [
    { id: 1, text: "x1", name: "Ana" },
    { id: 2, text: "x2", name: "Bianca" },
    { id: 3, text: "x3", name: "Carla" },
    { id: 4, text: "x4", name: "Diana" },
    { id: 5, text: "x5", name: "Eliana" }
  ],
  removedElements: []
};
