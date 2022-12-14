var contain = document.querySelector(".calculate__right")

if (contain != null){
    let name = contain.querySelector(".item__calculator-name")?.innerText
    let items = contain.querySelectorAll(".cost-list__item")
    let item_dict = {}
    for (item of items){
        let some_mass = item.innerText.split('\n')
        let [name, num] = some_mass
        num = Number(num)
        if (name in item_dict) {
            item_dict[name] += num
        }else {
            item_dict[name] = num
        }
    }
    let result = `——${name}——\n`
    for (const [key, val] of Object.entries(item_dict)) {
        result += `${val} ${key}\n`
    }
    navigator.clipboard.writeText(result)
}else {
    console.log('error: Ti pidor?')
}
