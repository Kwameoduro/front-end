socks = [1, 2, 2, 1, 1, 3, 5, 1, 4, 4]
print(socks)

socks_drawer = dict()

for s in socks:
    if s in socks_drawer:
        socks_drawer[s] += 1
    else:
        socks_drawer[s] = 1
    
for key, value in socks_drawer.items():
    if value % 2 == 1:
        print(key, value)
        