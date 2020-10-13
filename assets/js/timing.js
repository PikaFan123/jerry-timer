function getNextJRYTime()
{
    const baseTime = new Date(1602646440* 1000)

    let nextJRY = baseTime

    let now = Date.now()

    while (nextJRY < now)
    {
        nextJRY.setSeconds(nextJRY.getSeconds() + 446400)
    }

    return nextJRY
}