class Graph {
    constructor() {
        this.graph = new Map();
    }
    append(obj) {
        this.graph.set(obj, new Map());
    }
    remove(obj) {
        this.graph = new Map([...this.graph]
            .filter(([key, value]) => key !== obj && value[0] !== obj)
        );
    }
    connect(from, to) {
        if (this.graph.has(from) && this.graph.has(to)) {
            this.graph.get(from).set(to, {});
            return (value) => this.graph.get(from).set(to, value);
        }
        if (this.graph.has(from)) {
            console.error(`Error: Node ${to} does not exist.`);
        } else if (this.graph.has(to)) {
            console.error(`Error: Node ${from} does not exist.`);
        } else {
            console.error('Error: Both Nodes do not exist.');
        }
        return () => {
            console.error('Cannot set value of an edge that deos not exist.');
        }
    }
    disconnect(from, to) {
        if (this.graph.has(from) && this.graph.has(to)) {
            this.graph.get(from).delete(to);
        } else if (this.graph.has(from)) {
            console.error(`Error: Node ${to} does not exist.`);
        } else if (this.graph.has(to)) {
            console.error(`Error: Node ${from} does not exist.`);
        } else {
            console.error('Error: Both Nodes do not exist.');
        }
    }
    size() { return this.graph.size; }
    density() {
        let V = this.graph.size;
        let E = 0;
        for (const [key, value] of this.graph) {
            E += value.size;
        }
        return E / (V * (V - 1));
    }
    adjacent(from) { return this.graph.get(from); }
    dfs(from, callback) {}
    bfs(from, callback) {}
    shortestPath(from, to) {}
    everyPath() {}
}