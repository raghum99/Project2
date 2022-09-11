const arr: Record<string, number > [] = [{ id: 1 }, { id: 2 }, { test:99 }, { id: 4 }];


const res : Record<string, number> | undefined= arr.find((item: Record<string, number>) => {
  return item.id === 3;
});


console.log (res)

