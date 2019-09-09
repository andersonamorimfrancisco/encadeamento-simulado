function removeElementById(elements, elementToRemove) {
  return elements.filter(element => {
    return element.id !== elementToRemove.id;
  });
}

function removeElementByPos(elements, elementToRemove) {
  return elements.filter(element => {
    return element.pos !== elementToRemove.pos;
  });
}

function inserElementOnArrayAfter(elements, elementToInsert) {
  return [elementToInsert, ...elements];
}

function insertElementInPos(elements, elementToInsert, pos) {
  return elements.map(element => {
    if (element.pos === pos) {
      element.element = elementToInsert;
      element.next = 0;
    }
    return element;
  });
}

function removePositionElement(elements, position) {
  return elements.map(element => {
    //element.next = 0;
    element.nextValue = null;
    if (element.pos === position) {
      element.element = null;
      element.next = 0;
      element.nextValue = null;
    }
    return element;
  });
}

function getStart(elements) {
  let start = { pos: 6, value: 6 };
  for (let i = 0; i < elements.length; i++) {
    const item = elements[i];

    if (item.element) {
      if (item.element.id < start.value) {
        start = { pos: item.pos, value: item.element.id };
      }
    }
  }
  if (start.pos === 6) {
    start = { pos: 0, value: 0 };
  }
  return start;
}

function getEnd(elements) {
  let End = { pos: 0, value: 0 };
  for (let i = 0; i < elements.length; i++) {
    const item = elements[i];

    if (item.element) {
      if (item.element.id > End.value) {
        End = { pos: item.pos, value: item.element.id };
      }
    }
  }

  return End;
}

// REDUCER

export default function reducer(state, action) {
  const { type, data } = action;
  if (type === "TOGGLENAME") {
    return { ...state, alphabetical: !state.alphabetical };
  }
  if (type === "INSERT_ITEM_ON_STACK") {
    const newRemovedElements = state.removedElements.filter(element => {
      return element.pos !== state.freeStack[0].pos;
    });
    const newStack = insertElementInPos(
      state.stack,
      data,
      state.freeStack[0].pos
    );
    const newFreeStack = removeElementByPos(
      state.freeStack,
      state.freeStack[0]
    );
    const newElements = removeElementById(state.elements, data);

    return {
      ...state,
      removedElements: newRemovedElements,
      elements: newElements,
      freeStack: newFreeStack,
      stack: newStack,
      len: (state.len = state.len + 1)
    };
  }

  if (type === "REMOVE_STACK_ITEM") {
    const newPos = { ...data, element: null };
    const newElements = inserElementOnArrayAfter(state.elements, data.element);
    const newFreeStack = inserElementOnArrayAfter(state.freeStack, newPos);
    const newStack = removePositionElement(state.stack, data.pos);
    const newRemovedElements = [data, ...state.removedElements];

    return {
      ...state,
      removedElements: newRemovedElements,
      elements: newElements,
      freeStack: newFreeStack,
      stack: newStack,
      len: (state.len = state.len - 1)
    };
  }
  if (type === "UPDATE_POINTERS") {
    const newStack = state.stack;

    for (let i = 0; i < newStack.length; i++) {
      const fixedItem = newStack[i];
      const fixedItemHasElement = fixedItem.element ? true : false;

      if (fixedItemHasElement) {
        for (let j = 0; j < newStack.length; j++) {
          const tempItem = newStack[j];
          const tempItemHasElement = tempItem.element ? true : false;

          if (tempItemHasElement) {
            if (tempItem.element.id < fixedItem.element.id) {
              if (
                !tempItem.nextValue ||
                tempItem.nextValue > fixedItem.element.id
              ) {
                newStack[j].next = fixedItem.pos;
                newStack[j].nextValue = fixedItem.element.id;
              }
            }
          }
        }
      }
    }
    if (state.removedElements.length > 0) {
      for (let i = 0; i < state.removedElements.length - 1; i++) {
        newStack[state.removedElements[i].pos - 1].next =
          state.removedElements[i + 1].pos;
      }
    }

    return { ...state };
  }
  if (type === "UPDATE_DESCRIPTORS") {
    const newNextFree = state.freeStack[0] ? state.freeStack[0].pos : 0;
    const newStart = getStart(state.stack);
    const newEnd = getEnd(state.stack);
    state.stack[newEnd.pos - 1].next = 0;
    return { ...state, nextFree: newNextFree, start: newStart, end: newEnd };
  }
  return state;
}
