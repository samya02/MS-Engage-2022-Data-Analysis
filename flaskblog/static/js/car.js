const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: 200 },
        { x: 280, y: 800 },
        { x: 300, y: 1000 },
        { x: 280, y: 1200 },
        { x: -100, y: 1400 },
        { x: -600, y: 1600 },
        { x: -900, y: 1700 },
        { x: -1000, y: 1850 },
        { x: -1100, y: 1900 },
        { x: -1000, y: 2000 },
        { x: -990, y: 2200 },
        { x: -800, y: 2500 },
        { x: -400, y: 3100 },
        { x: -100, y: 3450 },
        { x: 350, y: 3480 },
        { x: 300, y: 3650 },
        { x: 10, y: 3700 },
        { x: -50, y: 3880 },
        { x: -900, y: 3950 },
        { x: -1100, y: 4000 },
        { x: -1100, y: 4200 },
        { x: -1100, y: 4400 },
        { x: -1100, y: 4600 },

    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".car", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".trigger",
    duration: 5000,
    triggerHook: 0.8
})
    .setTween(tween)
    .addTo(controller);
    // { x: 100, y: 200 },
    // { x: 280, y: 800 },
    // { x: 300, y: 1000 },
    // { x: 280, y: 1200 },
    // { x: -100, y: 1400 },
    // { x: -600, y: 1600 },
    // { x: -900, y: 1700 },
    // { x: -950, y: 1850 },
    // { x: -950, y: 2100 },
    // { x: -900, y: 2600 },
    // { x: -400, y: 2620 },
    // { x: -100, y: 2650 },
    // { x: 350, y: 2700 },
    // { x: 300, y: 3100 },
    // { x: 10, y: 3450 },
    // { x: -50, y: 3480 },
    // { x: -900, y: 3650 },
    // { x: -900, y: 4000 },
    // { x: -900, y: 4200 },
    // { x: -900, y: 4400 },
    // { x: -900, y: 4600 },