export async function formaDataPerformance(data) {
  if (!data.data) {
    return false
  }

  const perfs = data.data
  const kind = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
  ]
  const perFormated = []

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
