//Comparação de algoritmos

//É possível combinar algoritmos de diversas complexidades, como fizemos ao combinar menorValor() com selectionSort().

/*A análise assintótica pressupõe uma análise de eficiência de algoritmos independente da quantidade de recursos computacionais disponíveis - por exemplo, processamento e memória disponível do computador). A análise assintótica serve para comparar e decidir se determinado algoritmo é o mais eficiente para resolver um problema; fatores como velocidade de processamento não são considerados nessa análise pois o que conta é o crescimento da complexidade em si (considerando o aumento na quantidade de dados processados) e não a quantidade de recursos disponíveis em si.*/

/*
Ao começarmos o estudo de algoritmos, é comum nos depararmos com a expressão Big O Notation (ou Notação “O Grande”).

Essa notação é utilizada para expressar a complexidade de um algoritmo, com relação ao tempo e volume de recursos computacionais necessários para executar esse algoritmo, de acordo com o volume de dados de entrada. Em geral, utiliza-se o tempo de uso de CPU (unidade central de processamento) do computador.

Ou seja, usamos O para classificar funções (implementações de algoritmos) de acordo com a forma como crescem em complexidade. Algoritmos diferentes podem crescer em complexidade da mesma forma, então podem ter a mesma classificação O, como vimos durante o curso com o Selection Sort e o Insertion Sort.

Como os exemplos que vimos na planilha e nos gráficos da aula, existem outras formas de avaliar o crescimento de um algoritmo, e que também podem ser representada segundo a notação O grande:

notação	nome
O(n)	linear
O(n²)	quadrático
O(1)	constante
O(log(n))	logarítmica
O(nc)	polinomial
O(cn)	exponencial



Para saber mais e ter outros exemplos de notações relacionadas a algoritmos comuns em programação, o site Big O cheatsheet 
https://www.bigocheatsheet.com


Aproveitei a planilha e os gráficos que utilizamos na aula para testar a complexidade (pela notação O grande) de outros algoritmos, como a logarítmica e a linear-logarítmica, além das que vimos na aula:


elementos	n	n^2	1	log	n*log(n)	n^3	2^n
1	1	1	1	0	0	1	                2
2	2	4	1	1	2	8	                4
4	4	16	1	2	8	64	                16
8	8	64	1	3	24	512	                256
16	16	256	1	4	64	4096	            65536
32	32	1024	1	5	160	32768	        4294967296
64	64	4096	1	6	384	262144	        1.84467E+19
128	128	16384	1	7	896	2097152	        3.40282E+38

*/
