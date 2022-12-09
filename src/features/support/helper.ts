export function randomAmount(min: number, max: number) {

    // this can be more intelligent, dumb for now
    return Math.floor(Math.random() * (max - min + 1) + min)
}