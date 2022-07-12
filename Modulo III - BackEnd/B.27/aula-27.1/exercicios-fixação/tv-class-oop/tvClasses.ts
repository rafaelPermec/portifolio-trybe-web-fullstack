class TV {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: boolean[];

  constructor(b: string, s: number, r: string, c: string[], ct: boolean[]) {
    console.log(`Creating TV ${b}`);
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
    this.connectedTo = ct;
  }

  turnOn(): string {
    return `
    TV ${this.brand} have been turn On.
    Your size is: ${this.size}",
    TV resolution: ${this.resolution}",
    TV abbled connections: ${this.connections.map((e) => ` ${e}`)}",
    The TV is connected to this devices: ${this.connectedTo.map((e) => ` ${e}`)}"
    `;
  }
}

const tv1 = new TV('Sony', 70, 'FullHD 4k', ['HDMI', 'USB', 'XBOX'], [true, false, true]);

console.log(tv1.turnOn());
