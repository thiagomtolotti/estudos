#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>


#define BUFFER_SIZE 6
#define LIST_SIZE 5000
#define INT_MAX 2147483647

FILE *fptr;
char numberString[BUFFER_SIZE];
int numbers[LIST_SIZE];

void selection_sort(int numbers[], int length);
void copy_array(int copy_arr[], int original_arr[], int length);
void bubble_sort(int numbers[], int length);

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

	int selection_sort_numbers[LIST_SIZE];
	int bubble_sort_numbers[LIST_SIZE];
	copy_array(selection_sort_numbers, numbers, LIST_SIZE);
	copy_array(bubble_sort_numbers, numbers, LIST_SIZE);

	selection_sort(selection_sort_numbers, LIST_SIZE);
	bubble_sort(bubble_sort_numbers, LIST_SIZE);
	
	
	// for (int i = 0; i < LIST_SIZE; i++){
	// 	printf("%i\n", bubble_sort_numbers[i]);
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

	printf("SELECTION SORT: ORDERED IN %i STEPS\n", steps);
}

void bubble_sort(int numbers[], int length){
	int steps = 0;

	for(int i = 0; i < length; i++)
	{
		bool isSorted = true;

		for(int j = 0; j < length - i - 1; j++)
		{
			if(numbers[j] > numbers[j + 1]){
				int temp = numbers[j];
				
				numbers[j] = numbers[j + 1];
				numbers[j + 1] = temp;

				isSorted = false;
			}

			steps++;
		}

		if(isSorted) break;
	}
	
	printf("BUBBLE SORT   : ORDERED IN %i STEPS\n", steps);
}

void copy_array(int copy_arr[], int original_arr[], int length){
	for(int i = 0; i < length; i++){
		copy_arr[i] = original_arr[i];
	}
}