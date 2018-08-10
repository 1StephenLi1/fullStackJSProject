testList = [1, 2, 4, 2, 0, 5, 10]
length = len(testList)

for i in range(length):
	for j in range(length-i-1):
		if testList[j-1] < testList[j]:
			temp = testList[j-1]
			testList[j-1] = testList[j]
			testList[j] = temp

print(testList)
