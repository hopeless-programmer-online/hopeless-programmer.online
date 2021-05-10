let last = 0

export default function id() {
    ++last

    return `id-${last}`
}
