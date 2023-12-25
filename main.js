const car= {
    model: prompt( "Masinin modeli"),
    color: prompt( "Masinin rengi"),
    way: prompt("Umumi yol"),
    fuel:prompt("100km'ya serf edilen benzin"),
    road:prompt("Gedilen yol"),
     checkFuel: function (oil) {
        return fuel * road / way
    }
}
let oil = car.checkFuel(8)
console.log(car.model, " ", car.color, " ",  oil )
