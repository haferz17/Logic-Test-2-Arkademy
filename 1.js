function segitiga(baris){
    let z = ''
    for(let a=0;a<baris;a++){
      for(let b=0;b<baris-a;b++){
        z += ' '
      }
      for(let b=0;b<=a;b++){
        z += '* '
      }
      console.log(z)
      z = ''
    }
}
segitiga(8)