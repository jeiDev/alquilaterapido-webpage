export const clickOutSide = (element, cb) => {
    document.body.addEventListener("click", (e: any) => {
        let target = e.target

        do {
            if (element == target) return cb(false);
            target = target.parentNode;
        } while (target)

        return cb(true);
    })
}