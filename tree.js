function preOrder(root) {
    if (root === null) {
    return;
    }
    // Visitar el nodo actual
    process.stdout.write(root.data + " ");
    // Recorrer el subarbol izquierdo
    preOrder(root.left);    
    // Recorrer el subarbol derecho
    preOrder(root.right);
        
    }
    preOrder(Node {
        data: 1,
        left: null,
        right: Node {
          data: 2,
          left: null,
          right: Node { data: 5, left: [Node], right: [Node] }
        }
      })