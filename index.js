let g=prompt('Son kiriting:') 
for(i=1; i<=10;i++){ 
    if(g==i){
        for(j=0; j<=10; j++)
            console.log(`${i} * ${j}= ${i*j}`)  
    }
    else if(g>10){
        console.log('Faqat o`n karragacha bor')
    }
}

