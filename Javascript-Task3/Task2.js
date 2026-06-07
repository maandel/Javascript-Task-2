class KCStore {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if (!product.id || !product.name) {
            throw new Error("Product must have an 'id' and a 'name'.");
        }
        const exists = this.products.find(p => p.id === product.id);
        if (exists) {
            throw new Error(`Product with id "${product.id}" already exists.`);
        }
        this.products.push(product);
        console.log(`Product "${product.name}" added.`);
    }

    updateProduct(id, updates) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            throw new Error(`Product with id "${id}" not found.`);
        }
        this.products[index] = { ...this.products[index], ...updates };
        console.log(`Product "${id}" updated.`);
    }

    viewProduct(id = null) {
        if (id) {
            const product = this.products.find(p => p.id === id);
            if (!product) throw new Error(`Product with id "${id}" not found.`);
            return product;
        }
        return this.products;
    }

    deleteProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            throw new Error(`Product with id "${id}" not found.`);
        }
        const removed = this.products.splice(index, 1);
        console.log(`Product "${removed[0].name}" deleted.`);
    }
}

const store = new KCStore();

store.addProduct({ id: 1, name: "Laptop", price: 999 });
store.addProduct({ id: 2, name: "Phone", price: 499 });

store.updateProduct(1, { price: 850 });

console.log(store.viewProduct(1));
console.log(store.viewProduct());

store.deleteProduct(2);