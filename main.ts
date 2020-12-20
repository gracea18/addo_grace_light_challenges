while (true) {
    console.log("Light Level" + input.lightLevel())
    if (input.lightLevel() > 10) {
        light.setAll(light.rgb(0, 0, 0))
    } else if (input.lightLevel() < 10) {
        light.setAll(light.rgb(255, 128, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
