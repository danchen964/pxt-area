/**
 * 使用這個文件來定義自訂的函式和積木。
 * 進一步了解：https://makecode.microbit.org/blocks/custom
 */

enum numOption {
    //% block="round"
    Round,
    //% block="float"
    Float
}

/**
 * 自訂的積木
 */
//% weight=100 color=#a83289 icon="\uf170" block="Area"
namespace areaCalculator {
    /**
     * TODO: 在此描述函式
     * @param n 在此描述參數, eg: 5
     * @param s 在此描述參數, eg: "Hello"
     * @param e 在此描述參數
     */
    //% blockId="showAreaOfTriangle"
    //% block="Show the area of triangle on LED  base: %base | height: %height | option: %myOpt"
    //% weight=100
    //% base.min=1 base.max=100 base.defl=50 height.min=1 height.max=100 height.defl=20
    export function showAreaOfTriangle(base: number, height: number, myOpt: numOption): void {
        let area = base * height / 2
        if (myOpt == numOption.Round) {
            area = Math.round(area)
        }
        basic.showNumber(area)
    }

    //% blockId="areaOfTriangle"
    //% block="Get the area of triangle  base: %base | height: %height | option: %myOpt"
    //% weight=100
    //% base.min=1 base.max=100 base.defl=50 height.min=1 height.max=100 height.defl=20
    export function areaOfTriangle(base: number, height: number, myOpt: numOption): number {
        let area = base * height / 2
        if (myOpt == numOption.Round) {
            area = Math.round(area)
        }
        return area
    }

}
