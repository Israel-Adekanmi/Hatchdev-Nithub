type DisplayType = "amoled" | "lcd" | "oled"

class Display {
    size: number
    type: DisplayType

    set displaySize(val: number) {
        this.size = val;
    }

    set displayType(type: DisplayType) {
        this.type = type;
    }
}

type OsKind = "Linux" | "Mac" | "Windows"
type BitKind = "x64" | "x32" | "x86"

class OperatingSystem {
    kind: OsKind
    version: number
}

type HardDiskType =  "ssd" | "hdd"

class HardDisk {
    type: HardDiskType
    size: number

    set diskType(type: HardDiskType) {
        this.type = type
    }

    set hardDiskSize(sizeValue: number) {
        this.size = sizeValue
    }
}

class NetworkInterfaceCard {
    constructor( public readonly name: string) {}
}

class KeyBoard {
    kind: KeyBoardKind
    layout: KeyBoardLayout

    constructor(kind: KeyBoardKind, layout: KeyBoardLayout) {
        this.kind = kind
        this.layout = layout
    }
}

type KeyBoardKind = "inbuilt" | "external"
type KeyBoardLayout = "QWERTY" | "QUERTZ" | "AZERTY"

class Laptop {
    keyboard: KeyBoard[] = []
    nic: NetworkInterfaceCard
    screen: Display
    hardDisk: HardDisk
    powerState: boolean = false
    bitKind: BitKind

    constructor(
        bit: BitKind, 
        screenDisplay: Display,
        nic: NetworkInterfaceCard,
        hd: HardDisk,
        keyBoards: KeyBoard[]
     ) {
        this.bitKind = bit
        this.screen = screenDisplay
        this.nic = nic
        this.keyboard = keyBoards
        this.hardDisk = hd
        this.powerState = false; // the laptop is turned off
    }

    switchOn() {
        this.powerState = true
    }

    update(version: number) {
        // this.
    }
}

const displayScreen = new Display()

displayScreen.displaySize = 16
displayScreen.displayType = "amoled"

const interfaceCard = new NetworkInterfaceCard("Ethernet")
console.log(interfaceCard)

const typeOfHardDisk = new HardDisk()

typeOfHardDisk.diskType = "ssd"
typeOfHardDisk.hardDiskSize = 512

const keyboardAllSpec: KeyBoard[] = []

const keyboardSpec = new KeyBoard("inbuilt", "QWERTY")
keyboardAllSpec.push(keyboardSpec)

const aboutMyLaptop = new Laptop("x64", displayScreen, interfaceCard, typeOfHardDisk, keyboardAllSpec);

console.log(aboutMyLaptop)
