const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 150, y: 200 },
        { x: 280, y: 800 },
        { x: 300, y: 1000 },
        { x: 280, y: 1200 },
        { x: -100, y: 1400 },
        { x: -600, y: 1600 },
        { x: -900, y: 1800 },
        { x: -1000, y: 2000 },
        { x: -1000, y: 2200 },
        { x: -1000, y: 2400 },
        { x: -1000, y: 2600 },
        { x: -1000, y: 2800 },
        { x: -800, y: 3080 },
        { x: -500, y: 3100 },
        { x: -300, y: 3080 },
        { x: 100, y: 3020 },
        { x: 300, y: 3200 },
        { x: 300, y: 3250 },
        { x: 300, y: 3500 },
        { x: 300, y: 3580 },
        { x: 300, y: 3600 },
        { x: 300, y: 3700 },
        { x: 200, y: 3900 },
        { x: -1000, y: 4000 },
        { x: -1000, y: 4200 },
        { x: -1000, y: 4400 },
        { x: -1000, y: 4600 },

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