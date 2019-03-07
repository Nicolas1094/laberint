function fillLabyrinth([n, m], trees, [userY, userX], [exitY, exitX]){
    
    const labyrinth = new Array(m); // inicia un arreglo con m columnas que representa la posición en x
    const lenTrees = trees.length; // cantidad de arboles

    for(let i = 0; i < m; i++){ // Llena el arreglo con . que indican los espacios vacíos
        labyrinth[i] = new Array(n);
        for(let j = 0; j < n; j++){
            labyrinth[i][j] = ".";
        }
    }
    for (let i = 0; i < lenTrees; i ++){ // Agrega los arboles
        let [x, y] = trees[i]; // Destructura el arreglo para sacar la posicion del obstaculo en variables con nombre mas sencillo
        labyrinth[x][y] = "x"; // se agrega el obstaculo
    }
    labyrinth[userY][userX] = "M";   // indica la posición del usuario
    labyrinth[exitY][exitX] = "*";  // indica la salida
    travelLabyrinth(userY, userX, labyrinth);
    console.table(labyrinth);
}



function travelLabyrinth(y, x, labyrinth){
    
    let isUndefined = labyrinth[y] !== undefined;
    let isUndefinedx = labyrinth[x] !== undefined;
    let mark = "";
    if(isUndefined ){
        if(isUndefinedx){
        mark = labyrinth[y][x];
        if ( mark === '*' ){
            console.log(`exit is will find in ${[y, x]} `)
            return true;
        }
        
         if( mark === 'U' || mark === 'x'){
            return false;
         }
         labyrinth[y][x] = 'U';
            if( y<=labyrinth.length-1 && travelLabyrinth(y+1, x, labyrinth)  ){
                return true;
            }
               if(x<labyrinth.length && travelLabyrinth(y, x+1, labyrinth) ){
                   return true;
               }
                    if( travelLabyrinth(y-1, x, labyrinth) && y>=0 ){
                        return true;
                    }
                        if( travelLabyrinth(y, x-1, labyrinth) && x>=0 ){
                            return true;
                        } 
                        labyrinth[y][x]='.';
                        return false;
                        }
                    }
                    }                    
                    
               
             
        
    

    
    




// (cuadrado, arboles, pos init usuario, salida ) 
fillLabyrinth([6,6], [[1,0],[1,1], [0,1], [0,2], [3, 0]],  [1,3],  [5,0]);

    