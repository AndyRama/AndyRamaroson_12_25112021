export async function formaDataPerformance(data) {

  if(!data.data) {
    return false
  }

// console.log(data)

const perfs = data.data
const kind = ["Intensité","Vitesse", "Force","Endurance", "Energie", "Cardio"];
const perFormated = []

// eslint-disable-next-line array-callback-return
perfs.map((perf, index) => {
    const item = {
      label: kind[perf.kind -1],
      value: perf.value
    }
    // console.log(item)
    perFormated.push(item)
  })
  return perFormated 
}