/*
Durante o desenvolvimento do código do quick sort, comentamos sobre o pior caso de execução de um algoritmo.

Em algoritmos, os termos melhor caso e pior caso se referem à quantidade de recursos a ser utilizado na execução, que pode ser tempo de execução ou memória.

Uma maneira adotada para mensurar a eficiência dos algoritmos, tendo em vista tempo de execução e espaço de memória, é por meio da notação Big O, que realiza a comparação desses dois parâmetros.

Lembrando que a notação Big O se refere a uma classificação de algoritmos de acordo com o tempo de execução, à medida em que aumenta a quantidade de dados a serem manipulados e a quantidade de memória exigida.

Dessa forma, teremos o melhor caso de algoritmo quando ele apresenta a mesma quantidade de tempo para executar, independente do tamanho da entrada. E um pior caso quando se tem um maior tempo de execução considerando todas as possíveis entradas.

Exemplo de Big O em algoritmos de ordenação:

Algoritmo	    estrutura	 Complex.tempo:melhor caso	Complex.tempo: pior caso	Complex.espaço: pior caso
Quick Sort	     Array	       O(n log(n))	                   O(n²)	                O(n log(n))
Merge Sort	     Array	       O(n log(n))	                   O(n log(n))	            O(n)
Heap Sort	     Array	       O(n log(n))                     O(n log(n))	            O(1)
Smooth Sort	     Array	       O(n)	                           O(n log(n))	            O(1)
Bubble Sort	     Array	       O(n)	                           O(n²)	                O(1)
Insertion Sort	 Array	       O(n)	                           O(n²)	                O(1)
Selection Sort	 Array	       O(n²)	                       O(n²)	                O(1)

Onde:

O(1): notação de Big O que representa um algoritmo que é executado em tempo constante.

O(n): algoritmo que é executado em tempo linear, ou seja, as execuções aumentam de acordo com as entradas - como a busca linear.

O(n log(n)): representa um algoritmo que reduz pela metade uma lista a cada vez que é executado - como o merge sort e o quick sort.

O(n²): algoritmo com o tempo quadrático que por sua vez, significa que assim que o número de elementos na entrada aumenta, as execuções aumentam quadraticamente. Por isso, devemos evitar códigos com essa notação de Big O, pois o número de operações aumenta significativamente a cada entrada - como o selection sort e o insertion sort.
*/
