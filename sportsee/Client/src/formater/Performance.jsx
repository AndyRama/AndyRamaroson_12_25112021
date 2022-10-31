export async function formaDataPerformance(data) {

// console.log(data)

const perfs = data.data
const kind = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
const perFormated = []

perfs.map((perf, index) => {
    const item = {
      label:kind[perf.kind -1],
      value:perf.value
    }
    // console.log(day[index])
    perFormated.push(item)
  })
  return perFormated 
}