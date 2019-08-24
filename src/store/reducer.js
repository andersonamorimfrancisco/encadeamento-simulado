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
    }
    return element;
  });
}

function removePositionElement(elements, position) {
  return elements.map(element => {
    if (element.pos === position) {
      element.element = null;
    }
    return element;
  });
}

export default function reducer(state, action) {
  const { type, data } = action;

  if (type === "INSERT_ITEM_ON_STACK") {
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
      elements: newElements,
      freeStack: newFreeStack,
      stack: newStack
    };
  }

  if (type === "REMOVE_STACK_ITEM") {
    const newPos = { ...data, element: null };
    const newElements = inserElementOnArrayAfter(state.elements, data.element);
    const newFreeStack = inserElementOnArrayAfter(state.freeStack, newPos);
    const newStack = removePositionElement(state.stack, data.pos);
    return {
      ...state,
      elements: newElements,
      freeStack: newFreeStack,
      stack: newStack
    };
  }
  return state;
}
