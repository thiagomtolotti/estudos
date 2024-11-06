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
void merge_sort(int numbers[], int length);
void merge(int firstArray[], int secondArray[], int result[],int firstArrayLength, int secondArrayLength);

int merge_sort_steps = 0;

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
	int merge_sort_numbers[LIST_SIZE];
	copy_array(selection_sort_numbers, numbers, LIST_SIZE);
	copy_array(bubble_sort_numbers, numbers, LIST_SIZE);
	copy_array(merge_sort_numbers, numbers, LIST_SIZE);

	selection_sort(selection_sort_numbers, LIST_SIZE);
	bubble_sort(bubble_sort_numbers, LIST_SIZE);
	merge_sort(merge_sort_numbers, LIST_SIZE);
	
	printf("MERGE SORT: 	ORDERED IN %i STEPS\n", merge_sort_steps);

	// for (int i = 0; i < LIST_SIZE; i++){
	// 	printf("%i\n", merge_sort_numbers[i]);
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

void merge_sort(int numbers[], int length)
{
	// for(int i = 0; i < length; i++){
	// 	printf("%i ",numbers[i]);
	// }
	// printf("\n");

	if(length == 1) {
		return;
	}

	int left_half_size = length / 2;
	int right_half_size = length - left_half_size;

	int left_half[left_half_size];
	int right_half[right_half_size];

	for(int i = 0; i < left_half_size; i++){
		left_half[i] = numbers[i];
	}
	merge_sort(left_half, left_half_size);

	for(int i = 0; i < right_half_size; i++){
		right_half[i] = numbers[length - right_half_size + i];
	}
	merge_sort(right_half, right_half_size);

	// printf("MERGING ");
	// for(int i = 0; i < left_half_size; i++){
	// 	printf("%i ", left_half[i]);
	// }
	// printf("- ");
	// for(int i = 0; i < right_half_size; i++){
	// 	printf("%i ", right_half[i]);
	// }
	// printf("\n");

	merge(left_half, right_half, numbers, left_half_size, right_half_size);

	// printf("MERGED ");
	// for(int i = 0; i < length; i++){
	// 	printf("%i ", numbers[i]);
	// }
	// printf("\n");
}

void merge(int firstArray[], int secondArray[], int result[],int firstArrayLength, int secondArrayLength){
	int totalLength = firstArrayLength + secondArrayLength;
	int resultPos = 0;
	int firstArrayPos = 0;
	int secondArrayPos = 0;

	while (firstArrayPos < firstArrayLength && secondArrayPos < secondArrayLength)
	{
		merge_sort_steps++;
		if(firstArray[firstArrayPos] < secondArray[secondArrayPos]){
			result[resultPos] = firstArray[firstArrayPos];
			firstArrayPos++;
		}else{
			result[resultPos] = secondArray[secondArrayPos];
			secondArrayPos++;
		}

		resultPos++;
	}

	while (firstArrayPos < firstArrayLength){
		merge_sort_steps++;
		result[resultPos++] = firstArray[firstArrayPos++];
	}

	while (secondArrayPos < secondArrayLength){
		merge_sort_steps++;
		result[resultPos++] = secondArray[secondArrayPos++];
	}
}

void copy_array(int copy_arr[], int original_arr[], int length){
	for(int i = 0; i < length; i++){
		copy_arr[i] = original_arr[i];
	}
}