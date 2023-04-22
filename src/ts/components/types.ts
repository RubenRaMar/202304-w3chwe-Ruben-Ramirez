export interface ComponentStructure {
  element: Element;
  renderHtml: () => void;
  addListeners?: () => void;
}
