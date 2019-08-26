export function InsertItemOnStack(item) {
  return { type: "INSERT_ITEM_ON_STACK", data: item };
}

export function removeStackItem(item) {
  return { type: "REMOVE_STACK_ITEM", data: item };
}

export function updatePointers() {
  return { type: "UPDATE_POINTERS", data: null };
}

export function updateDescriptors() {
  return { type: "UPDATE_DESCRIPTORS", data: null };
}
