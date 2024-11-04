#include <stdio.h>
#include <stdlib.h>

#define BUFFER_SIZE 6
#define LIST_SIZE 5000
#define INT_MAX 2147483647

FILE *fptr;
char numberString[BUFFER_SIZE];
int numbers[LIST_SIZE];

void selection_sort(int numbers[], int length);

int main(void) {
	char filename[] ="./files/random5000.txt";
	fptr = fopen(filename, "r");
	
	int i = 0;
	// Reads all the lines in the file and stores in an int array
	while(fgets(numberString, BUFFER_SIZE, fptr))
	{	
   		char *endptr;
		numbers[i] = strtol(numberString, &endptr, 10);

		i++;
	}

	selection_sort(numbers, LIST_SIZE);
	
	// for (int i = 0; i < LIST_SIZE; i++){
	// 	printf("%i\n", numbers[i]);
	// }
	
}

void selection_sort(int numbers[], int length)
{
	int steps = 0;
	
	for (int j = 0; j < length - 1; j++){
		int smallest = INT_MAX;
		int smallestIndex = 0;
		
		for (int i = j; i < length - 1; i++){
			if(numbers[i] < smallest){
				smallest = numbers[i];
				smallestIndex = i;
			}
			
			steps++;
		}

		numbers[smallestIndex] = numbers[j];
		numbers[j] = smallest;
	}

	printf("ORDERED IN %i STEPS", steps);
}