/*
 * http://en.wikipedia.org/wiki/B%C3%A9zier_curve
 * http://www.malczak.linuxpl.com/blog/quadratic-bezier-curve-length/g
 */

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function quadraticBezierLength(p0, p1, p2) {
    var a = new Point(
        p0.x - 2 * p1.x + p2.x,
        p0.y - 2 * p1.y + p2.y
    );
    var b = new Point(
        2 * p1.x - 2 * p0.x,
        2 * p1.y - 2 * p0.y
    );
    var A = 4 * (a.x * a.x + a.y * a.y);
    var B = 4 * (a.x * b.x + a.y * b.y);
    var C = b.x * b.x + b.y * b.y;

    var Sabc = 2 * Math.sqrt(A+B+C);
    var A_2 = Math.sqrt(A);
    var A_32 = 2 * A * A_2;
    var C_2 = 2 * Math.sqrt(C);
    var BA = B / A_2;

    return (A_32 * Sabc + A_2 * B * (Sabc - C_2) + (4 * C * A - B * B) * Math.log((2 * A_2 + BA + Sabc) / (BA + C_2))) / (4 * A_32);
}
