function render(container, vnode) {
  // Resolve child component
  if (typeof vnode === 'function') {
    const component = new vnode();
    render(container, component.render());
    component.update(() => {
      container.innerHTML = '';
      render(container, component.render());
    });
  }

  // Resolve child text
  if (typeof vnode === 'string') {
    container.innerHTML = vnode;
  }

  // Resolve array of children
  if (typeof vnode === 'object' && vnode.length) {
    for (let i = 0; i < vnode.length; i++) {
      render(container, vnode[i]);
    }
  }

  // Skip if there is no type
  if (!vnode.type) return;

  // Create a dom element
  const element = document.createElement(vnode.type);

  // Resolving props
  if (vnode.props) {
    const keys = Object.keys(vnode.props) || [];
    for (let i = 0; i < keys.length; i++) {
      element[keys[i]] = vnode.props[keys[i]];
    }
  }

  container.append(element);

  // Render the rest of the VDOM recursively
  if (vnode.children) render(element, vnode.children);
}

export default render;
