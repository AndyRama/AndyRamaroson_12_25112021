export async function formaDataPerformance(data) {
  const perfs = data.data
  const perFormated = []
  const kind = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
  ]

  if (!data.data) {
    // console.log(data.performance.data)
    return (data.data = data.performance.data)
  } else {
    // eslint-disable-next-line array-callback-return
    perfs.map((perf, index) => {
      const item = {
        label: kind[perf.kind - 1],
        value: perf.value,
      }
      perFormated.push(item)
    })
    return perFormated
  }
}
