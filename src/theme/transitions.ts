export default {
    default: (toAnimate: Array<string>, duration: string = '.2s'): string => toAnimate.map(item => `${item} ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`).join(',')
}