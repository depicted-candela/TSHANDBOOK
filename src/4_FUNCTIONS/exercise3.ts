const triangle = {
    a: {x: 0, y:0},
    b: {x: 0, y:1},
    c:  {x: 1, y:1},
    area: 0,
    getArea: function() {
        const bc_y = this.b.y - this.c.y;
        const ca_y = this.c.y - this.a.y;
        const ba_y = this.b.y - this.a.y;
        return (1/2) * Math.abs(bc_y * this.a.x + ca_y * this.b.x + ba_y * this.c.x);
    },
};

export default triangle;