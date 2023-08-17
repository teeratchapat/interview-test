function getClockAngle(time: string): void {
    const [hour, minute]: number[] = time.split(":").map(Number);

    let hourAngle: number = (360 / 12) * ((hour % 12) + minute / 60);
    let minuteAngle: number = (360 / 60) * minute;
    let angleDifference: number = Math.abs(hourAngle - minuteAngle);
    let AngleResult: number =
        angleDifference > 180 ? 360 - angleDifference : angleDifference;

    console.log(AngleResult);
}

getClockAngle("09:00");
getClockAngle("17:30");