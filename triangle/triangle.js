export class Triangle {
  constructor(a, b, c) {
    this.t = [a, b, c];
    this.t.sort();
  }

  isTriangle() {
    return this.t[0] !== 0 && this.t[0] + this.t[1] > this.t[2];
  }

  isEquilateral() {
    return (
      this.isTriangle() && this.t[0] == this.t[1] && this.t[0] == this.t[2]
    );
  }

  isIsosceles() {
    return (
      this.isTriangle() &&
      (this.t[0] == this.t[1] ||
        this.t[0] == this.t[2] ||
        this.t[1] == this.t[2])
    );
  }

  isScalene() {
    return this.isTriangle() && !this.isEquilateral() && !this.isIsosceles();
  }
}
