#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <time.h>

#define BUFFER_SIZE 6
#define SEARCH_SIZE 5000

FILE *fptr;
char numberString[BUFFER_SIZE];
int numbers[SEARCH_SIZE];

void linear_search(int target, int numbers[]);
void binary_search(int target, int numbers[], int low, int high, int steps);

int main(void)
{
	srand(time(NULL) * SEARCH_SIZE);
	
	int i = 0;
	char filename[] ="./files/sorted5000.txt";
	fptr = fopen(filename, "r");

	// Reads all the lines in the file and stores in an int array
	while(fgets(numberString, BUFFER_SIZE, fptr))
	{	
   		char *endptr;
		numbers[i] = strtol(numberString, &endptr, 10);

		i++;
	}

	int target = (rand() % SEARCH_SIZE) + 1;

	printf("SEARCHING %i\n", target);
	linear_search(target, numbers);

	// int binary_numbers[9] = {1,2,3,4,5,6,7,8,9};
	binary_search(target, numbers,0, SEARCH_SIZE - 1,0);
	
	fclose(fptr);
}

void linear_search(int target, int numbers[])
{
	for(int i = 0; i < SEARCH_SIZE; i++){
		if(numbers[i] == target)
		{
			printf("LINEAR SEARCH: FOUND IN %i STEPS\n", i+1);
			return;
		}
	}
}

void binary_search(int target, int numbers[], int low, int high, int steps)
{
	if(low > high){
		printf("BINARY SEARCH: NOT FOUND");
		return;
	}

	steps++;
	// printf("BINARY SEARCH: SEARCHING FROM %i THROUGH %i\n", numbers[low], numbers[high]);

    int middle = low + (high - low) / 2;
	// printf("MIDDLE INDEX: %i, VALUE: %i\n", middle, numbers[middle]);

	if(target == numbers[middle]){
		printf("BINARY SEARCH: FOUND IN %i steps\n", steps);
		return;
	}else if(target < numbers[middle]){
		binary_search(target, numbers, low, middle - 1, steps);
	}else if(target > numbers[middle]){
		binary_search(target, numbers, middle +1, high, steps);
	}
}
