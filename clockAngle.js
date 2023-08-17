function getClockAngle(time) {
    var _a = time.split(":").map(Number), hour = _a[0], minute = _a[1];
    var hourAngle = (360 / 12) * ((hour % 12) + minute / 60);
    var minuteAngle = (360 / 60) * minute;
    var angleDifference = Math.abs(hourAngle - minuteAngle);
    var AngleResult = angleDifference > 180 ? 360 - angleDifference : angleDifference;
    console.log(AngleResult);
}
getClockAngle("09:00");
getClockAngle("17:30");
