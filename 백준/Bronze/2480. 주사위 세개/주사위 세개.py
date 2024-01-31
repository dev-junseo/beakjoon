A, B, C = input().split(" ")
a = int(A)
b = int(B)
c = int(C)
count = 0
if a == b:
    count += 1
    num = 1
if a == c:
    count += 1
    num = 2
if b == c:
    count += 1
    num = 3

if count == 3:
    reward = 10000 + a * 1000
    print(reward)
if count == 1:
    if num == 1 or num == 2:
        reward = 1000 + a * 100
    if num == 3:
        reward = 1000 + b * 100
    print(reward)
if count == 0:
    if a > b:
        high = a
    else:
        high = b
    if c > high:
        high = c
    reward = high * 100
    print(reward)